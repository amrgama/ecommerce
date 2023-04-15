import React, { Children, useEffect, useState, useRef } from 'react'
import {TbMathGreater} from "react-icons/all"
import ProductList from "../our-store/ProductList";

const handleSliderBtn = (targetEle ,scrollAmount)=> {
  // const targetEle = document.querySelector(`div[data-target=[${scrollElement}]`);
  // targetEle.scrollBy(scrollAmount);
  // console.log(targetEle);
  targetEle.scrollLeft += scrollAmount;
}

const Slider = (props) => {
  const sliderBody = useRef();

  return (
    <div className='slider d-flex flex-column gap-1 overflow-hidden'>
        <div className="arrows d-none d-md-block">
            <button className='fs-5 fw-bold text-primary' onClick={ ()=> handleSliderBtn(sliderBody.current, -150)}>{"<"}</button>
            <button className='fs-5 fw-bold text-primary' onClick={ ()=> handleSliderBtn(sliderBody.current, 150)}>{">"}</button>
        </div>
        {/* <div ref= {sliderBody} className={"slider-body col-12 d-flex align-items-center justify-content-between flex-1"}>
            {props.Children}
        </div> */}
        <div ref = {sliderBody} className="slider-body flex-1 d-flex">
          <ProductList className="flex-nowrap" />
        </div>
    </div>
  )
}

export default Slider
