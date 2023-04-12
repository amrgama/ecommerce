import React, { useEffect, useState } from "react";
import { BsDot } from "react-icons/bs";
import Filters from "./Filters";
import { useDispatch } from "react-redux";
import { getProducts } from "../../features/product/productSlice";
import ProductList from "./ProductList";

const Store = () => {
  const dispatch = useDispatch();
  const [sortBy, setSortBy] = useState("all");

  useEffect(() => {
    if (sortBy) {
      if (sortBy === "featured") {
        dispatch(getProducts({ query: "tag=featured" }));
      }
      if (sortBy === "sold") {
        dispatch(getProducts({ query: "sort=-sold" }));
      }
      if (sortBy === "all") {
        dispatch(getProducts({ query: null }));
      }
    }
  }, [sortBy]);
  return (
    <div className="store">
      <header className="bg-white d-flex justify-content-center py-4">
        <span className="fs-6  text-secondary">
          <span className="">الرئيسيه</span>
          <BsDot className="fs-5" />
          <span>متجرنا</span>
        </span>
      </header>

      <div className="container">
        <div className="row my-3">
          <div className="col-9">
            <div className="bg-white py-2 px-3 rounded-3">
              <div className="d-flex align-items-center flex-nowrap">
                <span className="mx-2 d-inline-block">الترتيب حسب : </span>
                <select
                  onChange={(e) => setSortBy(e.target.value)}
                  className="form-select w-auto"
                >
                  <option value="all">الكل</option>
                  <option value="featured">مميز</option>
                  <option value="sold">الاعلي مبيعا</option>
                </select>
              </div>
            </div>

            <ProductList />
          </div>
          <div className="col-3">
            <Filters />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Store;
