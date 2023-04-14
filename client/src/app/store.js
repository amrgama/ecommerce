import { configureStore } from "@reduxjs/toolkit";

import authRed from "../features/auth/authSlice";
import productRed from "../features/product/productSlice";
import userRed from "../features/user/userSlice";
import brandRed from "../features/brands/brandSlice";
import pcategoryRed from "../features/pcategory/pcategorySlice";
export const store = configureStore({
  reducer: {
    auth: authRed,
    product: productRed,
    user: userRed,
    brand: brandRed,
    category: pcategoryRed,
  },
});
