import React, { useRef } from "react";
import { useSelector } from "react-redux";

const Filters = ({ setSortBy, sortBy }) => {
  const { brand, category } = useSelector((state) => state);
  const { brands, isLoading } = brand;
  const { categories } = category;
  const lowPriceRef = useRef();
  const highPriceRef = useRef();
  const cat_list = categories?.map((cat) => {
    return (
      <div key={cat._id} className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="categories"
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

  const brand_list = brands?.map((brand) => {
    return (
      <div key={brand._id} className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="brands"
          id={brand._id}
          value={brand.title}
          onChange={(e) =>
            setSortBy((prev) => {
              return { ...prev, brand: `brand=${brand.title}` };
            })
          }
        />
        <label className="form-check-label" htmlFor={brand._id}>
          {brand.title}
        </label>
      </div>
    );
  });

  const onPriceSubmit = (e) => {
    e.preventDefault();

    setSortBy((prev) => {
      return {
        ...prev,
        lowPrice: lowPriceRef.current.value
          ? `price[gte]=${lowPriceRef?.current?.value}`
          : null,
        higPrice: highPriceRef.current.value
          ? `price[lte]=${highPriceRef?.current?.value}`
          : null,
      };
    });
  };
  return (
    <div className="bg-white rounded-3 px-3 py-2">
      <div className="cat mb-3">
        <h6>الاصناف</h6>
        <div className="cat-list">
          <div key="all" className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="categories"
              id="all"
              value=""
              checked={sortBy.cat === ""}
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

      <div className="brands mb-3">
        <h6>العلامات التجاريه</h6>
        <div className="brand-list">
          <div key="all" className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="brands"
              id="all"
              value=""
              checked={sortBy.brand === ""}
              onChange={(e) =>
                setSortBy((prev) => {
                  return { ...prev, brand: "" };
                })
              }
            />
            <label className="form-check-label" htmlFor="all">
              all
            </label>
          </div>
          {brand_list}
        </div>
      </div>

      <form onSubmit={(e) => onPriceSubmit(e)} className="price">
        <h6>تصفيه حسب السعر</h6>
        <div className="row mb-2">
          <div className="col px-1">
            <input
              ref={lowPriceRef}
              min={0}
              type="number"
              className="form-control"
              placeholder="الحد الادني"
            />
          </div>
          <div className="col px-1">
            <input
              ref={highPriceRef}
              min={0}
              type="number"
              className="form-control"
              placeholder="الحد الاقصي"
            />
          </div>
        </div>
        <button type="submit" className="btn btn-primary ">
          بدأ
        </button>
      </form>
    </div>
  );
};

export default Filters;
