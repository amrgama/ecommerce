import { configureStore } from "@reduxjs/toolkit";

import authRed from "../features/auth/authSlice";
import productRed from "../features/product/productSlice";
import userRed from "../features/user/userSlice";
export const store = configureStore({
  reducer: {
    auth: authRed,
    product: productRed,
    user: userRed,
  },
});
