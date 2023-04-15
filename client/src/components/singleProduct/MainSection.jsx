import React, { useRef, useState } from 'react'
import Section from '../Section'
import Star from '../our-store/Star'
import {AiOutlineHeart, BiGitCompare, BiLink, CiDeliveryTruck} from "react-icons/all"
import PreviewImg from './PreviewImg'


const MainSection = () => {

  return (
    <Section className="single-product-wrapper-1 bg-light">
        <div className="row bg-white shadow-sm p-3">
            <PreviewImg />
            <div className="col-12 col-md-6 px-0 pe-1 py-2 d-flex flex-column gap-3">
                <h1 className='fs-6 fw-bolder text-dark'>Kids Headphones Bulk 10 Pack Multi Colored For Students</h1>
                <span className='fs-6 fw-bolder'>500 Egb</span>
                <Star stars={2.5} reviews={3} />
                <span className='type'>
                    <span className='fw-bold me-2'>Type : </span>
                    <span className='text-muted'>headset</span>
                </span>
                <span className="brand">
                    <span className='fw-bold me-2'>Brand : </span>
                    <span className='text-muted'>headset</span>
                </span>
                <span className="categories">
                    <span className='fw-bold me-2'>Categories : </span>
                    <span className='text-muted'>watch</span>
                </span>
                <span className="tags">
                    <span className='fw-bold me-2'>Tags : </span>
                    <span className='text-muted'>watch headphone handfree</span>
                </span>
                <span className="availability">
                    <span className='fw-bold me-2'>Availability : </span>
                    <span className='text-muted'>500 in a stock</span>
                </span>
                <div className="size d-flex flex-column gap-2">
                    <span className='fw-bold'>Size</span>
                    <div className="d-flex align-item-center gap-3">
                        <button className="fw-bold px-3 py-1">S</button>
                        <button className="fw-bold px-3 py-1">M</button>
                        <button className="fw-bold px-3 py-1">L</button>
                        <button className="fw-bold px-3 py-1">XL</button>
                        <button className="fw-bold px-3 py-1">XXL</button>
                    </div>
                </div>
                <div className="color d-flex flex-column gap-2">
                    <span className='fw-bold'>Color</span>
                    <div className="d-flex align-item-center gap-3">
                        <button className="fw-bold p-3 bg-primary"></button>
                        <button className="fw-bold p-3"></button>
                    </div>
                </div>
                <div className="d-flex align-items-center gap-2">
                    <span className='fw-bold'>الكميه:</span>
                    <input
                    min={0}
                    defaultValue={2}
                    type="number"
                    className="w-25 form-control"
                    />
                </div>
                <div className="d-flex align-items-center gap-3">
                    <button className='bg-white fs-7'>
                        <AiOutlineHeart className="ms-2 fs-5" />
                        Add to wishlist
                    </button>
                    <button className='bg-white fs-7'>
                        <BiGitCompare className='ms-2 fs-5'/>
                        add to compare
                    </button>
                </div>
                <div className="d-flex align-items-center gap-3">
                    <button className="py-2 px-4 rounded-pill text-capitalize text-dark btn btn-primary text-white shadow-sm">add to cart</button>
                    <button className="py-2 px-4 rounded-pill text-capitalize text-dark btn btn-light shadow-sm">buy it now</button>
                </div>
                <div className="d-flex flex-column gap-2">
                    <div className="d-flex align-items-center gap-3">
                        <CiDeliveryTruck className='fs-5'/>
                        <span className='fw-bold'>Shipping & Return</span>
                    </div>
                    <p className="description text-muted fs-7">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda dolores animi consequuntur natus.
                    </p>
                </div>
                <div className="share-product d-flex align-items-center gap-3 shadow-sm p-2">
                    <button className='bg-white'><BiLink className='fs-5'/></button>
                    <span className='fw-bold text-muted'>share</span>
                </div>
                <div className="d-flex gap-3 flex-column align-items-center bg-light p-2">
                    <span className='fw-bold'>Payment Methods</span>
                    <img src="/images/payments-methods.png" alt="..." className='w-100' />
                </div>
            </div>
        </div>
    </Section>
  )
}

export default MainSection
