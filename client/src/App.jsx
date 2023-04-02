import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./scss/app.css";
import "react-toastify/dist/ReactToastify.css";
import SignUp from "./pages/Auth/SignUp";
import LayOut from "./layouts/LayOut";
import AuthLayout from "./layouts/AuthLayout";
import ConfirmEmail from "./pages/Auth/ConfirmEmail";
import SignIn from "./pages/Auth/Signin";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayOut />}>
          <Route path="/auth" element={<AuthLayout />}>
            <Route path="/auth/signup" element={<SignUp />} />
            <Route path="/auth/signin" element={<SignIn />} />
          </Route>
          <Route path="/confirm-email/:token/" element={<ConfirmEmail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
