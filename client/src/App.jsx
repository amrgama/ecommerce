import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./scss/app.css";
import "react-toastify/dist/ReactToastify.css";
import SignUp from "./pages/Auth/SignUp";
import LayOut from "./layouts/LayOut";
import Header from "./components/header/Header";
import AuthLayout from "./layouts/AuthLayout";
import ConfirmEmail from "./pages/Auth/ConfirmEmail";
import SignIn from "./pages/Auth/SignIn";
import ForgotPassword from "./pages/Auth/ForgotPassword";
import ResetPassword from "./pages/Auth/ResetPassword";
import Home from "./pages/home/Home";
import Store from "./pages/our-store/Store";
import Cart from "./pages/cart/Cart";
import LoadingCont from "./components/loading/LoadingCont";
import OrderConfirm from "./pages/cart/OrderConfirm";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getBrands } from "./features/brands/brandSlice";
import { getProdCategories } from "./features/pcategory/pcategorySlice";

function App() {
  const { isLogin } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const ProtectedRoute = ({ login, children }) => {
    if (!login) {
      return <Navigate to="/auth/signin" replace />;
    }

    return children;
  };

  useEffect(() => {
    dispatch(getBrands());
    dispatch(getProdCategories());
  }, []);

  return (
    <BrowserRouter>
      <Header />
      <LoadingCont />
      <Routes>
        <Route path="/auth" element={<AuthLayout />}>
          <Route path="/auth/signup" element={<SignUp />} />
          <Route path="/auth/signin" element={<SignIn />} />
          <Route path="/auth/forgot-password" element={<ForgotPassword />} />
          <Route
            path="/auth/reset-password/:token"
            element={<ResetPassword />}
          />
        </Route>
        <Route path="/" element={<LayOut />}>
          <Route path="/" element={<Home />} />
          <Route path="/ourstore" element={<Store />} />
          <Route
            path="/cart"
            element={
              <ProtectedRoute login={isLogin}>
                <Cart />
              </ProtectedRoute>
            }
          />
          <Route path="/cart/confirm-order" element={<OrderConfirm />} />
        </Route>
        <Route path="/confirm-email/:token/" element={<ConfirmEmail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
