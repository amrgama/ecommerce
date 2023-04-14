import React, { useState } from "react";
import Star from "./Star";
import { AiOutlineEye, AiOutlineHeart } from "react-icons/ai";
import { FaOpencart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../features/user/userSlice";
import { useNavigate } from "react-router-dom";
const ProdItem = ({ prod }) => {
  const dispatch = useDispatch();
  const [cartLoading, setCartLoading] = useState(false);
  const [prodColor, setProdColor] = useState(null);
  const { token } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const onAdd = async () => {
    if (!token) {
      navigate("/auth/signin");
      return;
    }
    setCartLoading(true);
    try {
      await dispatch(
        addToCart({ prodId: prod?._id, color: prodColor, size: prod?.size })
      );
      setCartLoading(false);
    } catch (error) {
      setCartLoading(false);
    }
  };
  return (
    <div className="col-12 col-sm-6 col-lg-4 col-xl-3  px-1 mb-2 ">
      <div className="card shadow-sm border-0 position-relative">
        <div role="button" className="icon d-flex fs-5 position-absolute ">
          <AiOutlineHeart />
        </div>
        <div className="ratio ratio-4x3 ">
          <img
            src={prod?.images[0].secure_url}
            className="w-100 h-100 "
            alt="..."
            style={{ objectFit: "contain" }}
          />
        </div>

        <div className="card-body">
          <h5 className="card-title">{prod?.title}</h5>
          <p className="card-text mb-1">{prod?.description}</p>
          <Star stars={prod?.totalrating} reviews={prod?.ratings} />
          <span className="lh-sm">{prod?.price}جنيه </span>
          {prod?.colors ? (
            <ul className="p-0 d-flex gap-1 colors">
              {prod.colors.map((color, index) => {
                return (
                  <li
                    onClick={() => setProdColor(color)}
                    key={index}
                    role="button"
                    className={`rounded-circle nav-link ${
                      color === prodColor ? "active" : ""
                    }`}
                    style={{
                      width: "20px",
                      height: "20px",
                      border: "1px solid black",
                      backgroundColor: color.toLowerCase(),
                    }}
                  ></li>
                );
              })}
            </ul>
          ) : null}
          <div className="buttons gap-2 d-flex mt-3">
            <button
              onClick={() => onAdd()}
              disabled={cartLoading ? true : false}
              className="btn btn-primary text-white w-50"
            >
              <FaOpencart />
            </button>

            <button className="btn btn-secondary text-white w-50">
              <AiOutlineEye />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProdItem;
