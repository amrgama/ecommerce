import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IoPersonOutline } from "react-icons/io5";
import { FaOpencart } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";
import { NavLink, Link } from "react-router-dom";
import { logout } from "../../features/auth/authSlice";
const UserFeatures = () => {
  const { user } = useSelector((state) => state.auth);
  const [isLoading, setisLoading] = useState(false);
  const dispatch = useDispatch();
  const onLogout = async () => {
    try {
      setisLoading(true);
      await dispatch(logout());
      setisLoading(false);
    } catch (error) {
      setisLoading(false);
    }
  };
  return (
    <div className="d-flex order-1 order-md-2 order-xl-3">
      {user ? (
        <div className="dropdown">
          <div
            className=" dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <IoPersonOutline className="fs-5 mx-1" />
            <span className="mb-0 d-none d-md-inline-block">حسابي</span>
          </div>
          <ul className="dropdown-menu text-center px-2 slideIn animate dropdown-menu-end">
            <li>
              <NavLink to="/my-account" className="dropdown-item" href="#">
                حسابي
              </NavLink>
            </li>
            <li>
              <NavLink to="/setting" className="dropdown-item" href="#">
                الاعدادات
              </NavLink>
            </li>
            <li>
              <button
                disabled={isLoading}
                onClick={() => {
                  onLogout();
                }}
                className="dropdown-item bg-danger text-white"
              >
                تسجيل الخروج
              </button>
            </li>
          </ul>
        </div>
      ) : (
        <Link
          to="/auth/signin"
          className="d-flex align-items-center mx-2 nav-link"
        >
          <IoPersonOutline className="fs-5 mx-1" />
          <span className="d-none d-md-inline mb-0 ">تسجيل الدخول</span>
        </Link>
      )}

      <NavLink className="d-flex align-items-center mx-2 nav-link">
        <AiOutlineHeart className="fs-5 mx-1" />
        <span className="d-none d-md-inline mb-0 "> قائمة الرغبات</span>
      </NavLink>

      <NavLink to="/cart" className="d-flex align-items-center mx-2 nav-link">
        <FaOpencart className="fs-5 mx-1" />
        <span className="d-none d-md-inline mb-0 "> عربة التسوق</span>
      </NavLink>
    </div>
  );
};

export default UserFeatures;
