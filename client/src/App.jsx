import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./scss/app.css";
import SignUp from "./pages/SignUp";
import LayOut from "./components/LayOut";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayOut />}>
          <Route path="/auth/signup" element={<SignUp />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
