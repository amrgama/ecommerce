import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getStatus } from "../features/auth/authSlice";
import Loading from "../pages/loading/LoadingPage";
import { getCart } from "../features/user/userSlice";
const LayOut = () => {
  const { token, isFirstLogin, statusLoading } = useSelector(
    (state) => state.auth
  );
  const dispatch = useDispatch();
  useEffect(() => {
    if (token) {
      dispatch(getStatus());
      dispatch(getCart());
    }
  }, [isFirstLogin]);

  return (
    <div className="app">
      <Outlet />
    </div>
  );
};

export default LayOut;
