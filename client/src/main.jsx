import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ToastContainer } from "react-toastify";
import "bootstrap/dist/js/bootstrap.bundle";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <ToastContainer
      position="top-left"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
    />
    <App />
  </>
);
