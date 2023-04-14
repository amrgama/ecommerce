import React, { useState } from "react";
import { BsDot } from "react-icons/bs";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import { NavLink, useNavigate } from "react-router-dom";
import api from "../../utils/api";

const Cart = () => {
  const [status, setStatus] = useState("cash");
  const { cart } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const products = cart?.products?.map((prod) => {
    if (!prod?.product) {
      return;
    }
    return <CartItem key={prod.product._id + prod?.color} prod={prod} />;
  });

  const onSubmit = async () => {
    if (status === "visa") {
      const response = await api.post("user/create-checkout-session");
      window.open(response.data.url, "_blank");
      return;
    }
    navigate("/cart/confirm-order", { state: cart });
  };
  return (
    <div className="cart">
      <header className="bg-white d-flex justify-content-center py-4">
        <span className="fs-6  text-secondary">
          <span className="">الرئيسيه</span>
          <BsDot className="fs-5" />
          <span>عربة التسوق</span>
        </span>
      </header>
      <div className="container">
        {cart?.products?.length === 0 ? (
          <div className="w-100 h-100 d-flex justify-content-center align-items-center">
            <h2 className="py-5">عربة التسوق فارغه</h2>
          </div>
        ) : (
          <>
            <div className="table border-bottom mt-3">
              <div className="header py-2  border-bottom row">
                <div className="col-9 col-md-10">
                  <h6>المنتج</h6>
                </div>
                <div className="col-3 col-md-2">
                  <h6>المجموع</h6>
                </div>
              </div>
              {products}
            </div>

            <div className="text-start">
              <NavLink
                to="/ourstore"
                className=" btn btn-primary rounded-pill px-3"
              >
                تابع التسوق
              </NavLink>
            </div>

            <div className="d-flex flex-end">
              <div>
                <p className="fw-semibold">المجموع : {cart?.cartTotal} جنيه</p>

                <div className="my-2">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="exampleRadios"
                      id="exampleRadios1"
                      value="cash"
                      checked={status === "cash"}
                      onChange={(e) => setStatus(e.currentTarget.value)}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="exampleRadios1"
                    >
                      الدفع عند الاستلام
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="exampleRadios"
                      id="exampleRadios2"
                      value="visa"
                      onChange={(e) => setStatus(e.currentTarget.value)}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="exampleRadios2"
                    >
                      ادفع الان
                    </label>
                  </div>
                </div>
                <button
                  onClick={() => onSubmit()}
                  className="btn btn-primary rounded-pill px-3"
                >
                  تاكيد الطلب
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
