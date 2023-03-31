import React from "react";
import { BsTelephone } from "react-icons/bs";
import { IoPersonOutline } from "react-icons/io5";
import { FaOpencart } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <header>
      <div className="py-1 bg-primary ">
        <div className="container text-white fs-7 d-flex justify-content-between align-items-center">
          <a
            href="tel:+201210192476"
            className="phone text-white nav-link d-flex align-items-center"
          >
            <BsTelephone className="mx-2" />
            +201210192476
          </a>

          <span className="mb-0">Shop</span>

          <span className="mb-0">AR</span>
        </div>
      </div>

      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container">
          <a className="navbar-brand" href="#">
            E-Commerce
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  الفئات
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  الرئيسيه
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link">متجرنا</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  المدونات
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  اتصل بنا
                </a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2 bg-light rounded-pill"
                type="search"
                placeholder="بحث"
                aria-label="Search"
              />
            </form>

            <NavLink className="d-flex align-items-center mx-2 nav-link">
              <IoPersonOutline className="fs-5 mx-1" />
              حسابي
            </NavLink>

            <NavLink className="d-flex align-items-center mx-2 nav-link">
              <AiOutlineHeart className="fs-5 mx-1" />
              قائمة الرغبات
            </NavLink>

            <NavLink className="d-flex align-items-center mx-2 nav-link">
              <FaOpencart className="fs-5 mx-1" />
              عربة التسوق
            </NavLink>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
