import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "./authService";
import { notifyError, notifySuccess } from "../../utils/helpers";

const token = JSON.parse(window.localStorage.getItem("token"));

const initialState = {
  user: null,
  token: token || null,
  isLoading: false,
  statusLoading: false,
  isSuccess: false,
  isError: false,
  isFirstLogin: false,
  isLogin: token ? true : false,
  message: "",
};

export const login = createAsyncThunk(
  "/auth/sigin",
  async ({ data, navigate }, thunkAPI) => {
    try {
      const res = await authService.login(data);
      window.localStorage.setItem("token", JSON.stringify(res.token));
      navigate("/");
      return res?.token;
    } catch (error) {
      notifyError(error?.response?.data?.message);
      return thunkAPI.rejectWithValue(error?.response?.data?.message);
    }
  }
);

export const logout = createAsyncThunk("/auth/logout", async (thunkAPI) => {
  try {
    const res = await authService.logout();
    window.localStorage.removeItem("token");
    return res;
  } catch (error) {
    notifyError(error?.response?.data?.message);
    return thunkAPI.rejectWithValue(error?.response?.data?.message);
  }
});

export const getStatus = createAsyncThunk("/auth/status", async (thunkAPI) => {
  try {
    const res = await authService.getStatus();
    notifySuccess(`Welcome back ${res.firstname}`);
    return res;
  } catch (error) {
    notifyError(error?.response?.data?.message);
    return thunkAPI.rejectWithValue(error?.response?.data?.message);
  }
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.isSuccess = false;
        state.message = "";
        state.token = null;
        state.isFirstLogin = false;
        state.user = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.message = "Login Success";
        state.token = action.payload;
        state.isFirstLogin = true;
        state.isLogin = true;
        state.user = null;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.payload;
        state.isFirstLogin = false;
        state.token = null;
        state.user = null;
      })
      .addCase(getStatus.pending, (state) => {
        state.statusLoading = true;
        state.isError = false;
        state.isSuccess = false;
        state.message = "";
      })
      .addCase(getStatus.fulfilled, (state, action) => {
        state.statusLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.message = "Login Success";
        state.user = action.payload;
      })
      .addCase(getStatus.rejected, (state, action) => {
        state.statusLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.payload;
      })
      .addCase(logout.pending, (state) => {
        state.isError = false;
        state.isSuccess = false;
        state.message = "";
      })
      .addCase(logout.fulfilled, (state, action) => {
        state.isError = false;
        state.isSuccess = true;
        state.message = "Logout Success";
        state.user = null;
        state.isLogin = false;
        state.token = null;
      })
      .addCase(logout.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.payload;
        state.user = null;
        state.token = null;
      });
  },
});

export default authSlice.reducer;
