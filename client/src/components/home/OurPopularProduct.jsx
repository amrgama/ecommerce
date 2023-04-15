import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getProducts } from "../../features/product/productSlice";
import Section from '../Section'
import ProductList from '../our-store/ProductList'
import Slider from "../slider/Slider";

const OurPopularProduct = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts({ query: null }));
  },[]);

  return (
    <Section className="home-wrapper-6">
        <div className="row flex-column gap-3">
          <h5 className='fs-5 fw-bold text-capitalize'>our popular product</h5>
          <div className="row mx-auto justify-content-between gap-2">
                <div className="col-12 col-md-8 col-lg-6 col-xl-2 p-0 py-2">
                    <ul className="brand-filter w-100 h-fit-content d-flex flex-xl-column bg-white h-100 p-0 m-0 rounded-3 shadow-sm">
                        <li className="w-100 p-3 d-flex gap-1 align-items-center justify-content-between shadow-sm" role="button">
                            <img src="images/watch.jpg" alt="..." className="col-3 img-fluid"/>
                            <span className="text-muted fw-bold fs-7">smart watch</span>
                        </li>
                        <li className="w-100 p-3 d-flex gap-1 align-items-center justify-content-between shadow-sm" role="button">
                            <img src="images/speaker.jpg" alt="..." className="col-3 img-fluid"/>
                            <span className="text-muted fw-bold fs-7">speaker</span>
                        </li>
                        <li className="w-100 p-3 d-flex gap-1 align-items-center justify-content-between shadow-sm" role="button">
                            <img src="images/laptop.jpg" alt="..." className="col-3 img-fluid"/>
                            <span className="text-muted fw-bold fs-7">laptop</span>
                        </li>
                    </ul>
                </div>
                <div className="flex-1 p-0 py-2">
                    <Slider />
                    {/* <ProductList /> */}
                </div>
          </div> 
        </div>
    </Section>
  )
}

export default OurPopularProduct
