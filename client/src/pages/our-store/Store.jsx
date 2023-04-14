import React, { useEffect, useState } from "react";
import { BsDot } from "react-icons/bs";
import Filters from "./Filters";
import { useDispatch } from "react-redux";
import { getProducts } from "../../features/product/productSlice";
import ProductList from "./ProductList";

const Store = () => {
  const dispatch = useDispatch();
  const [sortBy, setSortBy] = useState({});
  let sorts = [];
  Object.entries(sortBy).map(([key, value]) => {
    if (!value) {
      return;
    }
    sorts.push(value);
  });

  const query = sorts?.join("&");
  useEffect(() => {
    dispatch(getProducts({ query }));
    // if (sortBy) {
    // dispatch(getProducts({ query: filter }));
    // if (sortBy === "featured") {
    //   dispatch(getProducts({ query: "tag=featured" }));
    // }
    // if (sortBy === "sold") {
    //   dispatch(getProducts({ query: "sort=-sold" }));
    // }
    // if (sortBy === "all") {
    //   dispatch(getProducts({ query: "page=1" }));
    // }
    // }
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
          <div className="col-3">
            <Filters sortBy={sortBy} setSortBy={setSortBy} />
          </div>
          <div className="col-9">
            <div className="bg-white py-2 px-3 rounded-3">
              <div className="d-flex align-items-center flex-nowrap">
                <span className="mx-2 d-inline-block">الترتيب حسب : </span>
                <select
                  onChange={(e) =>
                    setSortBy((prev) => {
                      return { ...prev, sort: e.target.value };
                    })
                  }
                  className="form-select w-auto"
                >
                  <option value="">الكل</option>
                  <option value="tag=featured">مميز</option>
                  <option value="sort=-sold">الاعلي مبيعا</option>
                </select>
              </div>
            </div>

            <ProductList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Store;
