import api from "../../utils/api";

const getCart = async () => {
  const response = await api.get("/user/cart");

  return response.data;
};

const addToCart = async (prodId, color, size) => {
  const response = await api.put("/user/add-cart", { prodId, color, size });
  return response.data;
};

const updateCartQuantity = async (prodId, color, size, quantity) => {
  const response = await api.patch("/user/cart/prod-quantity", {
    prodId,
    color,
    size,
    quantity,
  });
  return response.data;
};

const createOrder = async (shipingaddress) => {
  const response = await api.put("user/create-order", { shipingaddress });
  return response.data;
};

const userService = { getCart, addToCart, updateCartQuantity, createOrder };

export default userService;
