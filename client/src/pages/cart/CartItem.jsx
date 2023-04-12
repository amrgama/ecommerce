import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { updateCartQuantity } from "../../features/user/userSlice";

const CartItem = ({ prod }) => {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const handleChange = async (quantity) => {
    setIsLoading(true);
    await dispatch(
      updateCartQuantity({
        prodId: prod?.product?._id,
        color: prod?.color,
        size: prod?.size,
        quantity: quantity,
      })
    );
    setIsLoading(false);
  };
  return (
    <div className="cart-data mb-1 row">
      <div className=" col-9 col-md-10 d-flex">
        <div className="image mx-2">
          <img
            className="img-thumbnail"
            src={prod?.product?.images[0]?.secure_url}
            alt=""
          />
        </div>

        <div className="info">
          <p className="mb-1">{prod.product.title}</p>
          <div className="d-flex align-items-center">
            اللون:
            <div
              style={{
                width: "20px",
                height: "20px",
                backgroundColor: prod.color.toLowerCase(),
              }}
            ></div>
          </div>
          {prod.size ? <p className="mb-0">{prod.size}</p> : null}
          <div className="d-flex align-items-center">
            الكميه:
            <input
              min={0}
              disabled={isLoading}
              onChange={(e) => handleChange(e.target.value)}
              defaultValue={prod?.quantity}
              type="number"
              className="w-25 form-control"
            />
          </div>
          <p className="mb-0">السعر: {prod.product.price} جنيه</p>
        </div>
      </div>
      <div className="col-3 col-md-2 d-flex align-items-center">
        {prod?.quantity * prod.price} جنيه{" "}
      </div>
    </div>
  );
};

export default CartItem;
