import axios from "axios";
const baseUrl = "http://localhost:8080/api/";

const api = axios.create({ baseURL: baseUrl, withCredentials: true });
api.interceptors.request.use(
  (req) => {
    req.headers["Authorization"] =
      "Bearer " + JSON.parse(window.localStorage.getItem("user"))?.token;
    return req;
  },
  (err) => {
    return Promise.reject(err);
  }
);

api.interceptors.response.use(
  (res) => {
    return res;
  },
  async (err) => {
    const originalReq = err.config;
    const status = err.response ? err.response.status : null;
    if (status === 401) {
      try {
        const response = await axios.get(baseUrl + "register/refresh-user", {
          withCredentials: true,
        });
        const oldUser = JSON.parse(window.localStorage.getItem("user"));
        if (!oldUser) {
          throw new Error("logout");
        }
        const newUser = { ...oldUser, token: response.data.accessToken };
        window.localStorage.setItem("user", JSON.stringify(newUser));
        const data = await api(originalReq);
        return data;
      } catch (error) {
        window.localStorage.removeItem("user");
        api.get("register/logout");
        window.location.replace("/");
        return;
      }
    }
    if (status === 417) {
      window.localStorage.removeItem("user");
      window.location.replace("/");
      return;
    }
    throw err;
  }
);
export default api;
