import React from "react";
import { useSelector } from "react-redux";

const Filters = ({ setSortBy, sortBy }) => {
  const { brand, category } = useSelector((state) => state);
  const { brands, isLoading } = brand;
  const { categories } = category;

  const cat_list = categories?.map((cat) => {
    return (
      <div key={cat._id} className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="exampleRadios"
          id={cat._id}
          value={cat.title}
          onChange={(e) =>
            setSortBy((prev) => {
              return { ...prev, cat: `category=${cat.title}` };
            })
          }
        />
        <label className="form-check-label" htmlFor={cat._id}>
          {cat.title}
        </label>
      </div>
    );
  });
  return (
    <div className="bg-white rounded-3 px-3 py-2">
      <h6>الاصناف</h6>
      <div className="cat-list">
        <div key="all" className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="exampleRadios"
            id="all"
            value=""
            onChange={(e) =>
              setSortBy((prev) => {
                return { ...prev, cat: "" };
              })
            }
          />
          <label className="form-check-label" htmlFor="all">
            all
          </label>
        </div>
        {cat_list}
      </div>
    </div>
  );
};

export default Filters;
