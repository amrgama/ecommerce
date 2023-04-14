import api from "../../utils/api";

const getProducts = async (query) => {
  const response = await api.get(`/product/?limit=10&${query ? query : ""}`);
  return response.data;
};

const productService = { getProducts };
export default productService;
