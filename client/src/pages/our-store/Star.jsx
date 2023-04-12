import React from "react";
import { FaStar, FaStarHalf, FaRegStar } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";
const Star = ({ stars, reviews }) => {
  const ratings = Array.from({ length: 5 }, (elem, index) => {
    let number = index + 0.5;
    return (
      <span key={index}>
        {stars >= index + 1 ? (
          <FaStar className="text-warning" />
        ) : stars >= number ? (
          <FaStarHalf className="text-warning" />
        ) : (
          <FaRegStar className="text-warning" />
        )}
      </span>
    );
  });
  return (
    <div className="">
      {ratings}
      <span className="">({reviews.length})</span>
      {stars}
    </div>
  );
};

export default Star;
