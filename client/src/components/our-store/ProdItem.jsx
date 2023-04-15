import React, { useState } from "react";
import Star from "./Star";
import { AiOutlineEye, AiOutlineHeart } from "react-icons/ai";
import { FaOpencart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../features/user/userSlice";
import { useNavigate } from "react-router-dom";
import { notifyError } from "../../utils/helpers";
import { Link } from "react-router-dom";
const ProdItem = ({ prod }) => {
  const dispatch = useDispatch();
  const [cartLoading, setCartLoading] = useState(false);
  const [prodColor, setProdColor] = useState("");
  const [size, setSize] = useState("");
  const { token } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const onAdd = async () => {
    if (!token) {
      navigate("/auth/signin");
      return;
    }
    try {
      if (prod?.size?.length > 0 && !size) {
        return notifyError("Size is required");
      }
      if (prod?.colors?.length > 0 && !prodColor) {
        return notifyError("Color is required");
      }
      setCartLoading(true);

      await dispatch(addToCart({ prodId: prod?._id, color: prodColor, size }));
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
          <h5 className="card-title">
            <Link to={`/product/${prod?._id}`} className="nav-link">{prod?.title}</Link>
          </h5>
          <p className="card-text mb-1">{prod?.description}</p>
          <Star stars={prod?.totalrating} reviews={prod?.ratings} />
          <span className="lh-sm">{prod?.price}جنيه </span>
          <div
            style={{ maxHeight: "20px" }}
            className="d-flex align-items-center justify-content-between"
          >
            {prod?.colors ? (
              <ul className="p-0 d-flex gap-1 mb-0 colors">
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

            {prod?.size.length > 0 ? (
              <div className="form-group ">
                <select
                  onChange={(e) => setSize(e.target.value)}
                  value={size}
                  className="form-select py-0"
                >
                  <option value="none">none</option>
                  {prod?.size.map((size, index) => (
                    <option key={index} value={size}>
                      {size}
                    </option>
                  ))}
                </select>
              </div>
            ) : null}
          </div>
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
