import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getStatus } from "../features/auth/authSlice";
import { getCart } from "../features/user/userSlice";
const LayOut = () => {
  const { token, isFirstLogin } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchUserData = async () => {
      await dispatch(getStatus());
      dispatch(getCart());
    };

    if (token) {
      fetchUserData();
    }
  }, [isFirstLogin]);

  return (
    <div className="app">
      <Outlet />
    </div>
  );
};

export default LayOut;
