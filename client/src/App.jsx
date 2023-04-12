import { BrowserRouter, Routes, Route } from "react-router-dom";
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

function App() {
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
          <Route path="/cart" element={<Cart />} />
          <Route path="/cart/confirm-order" element={<OrderConfirm />} />
        </Route>
        <Route path="/confirm-email/:token/" element={<ConfirmEmail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
