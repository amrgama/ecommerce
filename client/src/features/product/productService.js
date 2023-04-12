import api from "../../utils/api";

const getProducts = async (query) => {
  const response = await api.get(`/product/?${query ? query : ""}`);

  return response.data;
};

const productService = { getProducts };
export default productService;
