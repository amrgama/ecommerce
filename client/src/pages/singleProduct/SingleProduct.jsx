import React, { useEffect, useState } from 'react'
import {BsDot} from "react-icons/all"
import Section from '../../components/Section'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import api from '../../utils/api'
import MainSection from '../../components/singleProduct/MainSection'
import PrevCustomerReview from '../../components/singleProduct/PrevCustomerReview'
import CustomerReview from '../../components/singleProduct/CustomerReview'

const getProduct = async(prodId)=> {
    const product = await api.get(`/product/${prodId}`);
    console.log("product",product.data);
    return product.data;
}
const SingleProduct = () => {
    // const params = useParams();
    // const prodId = params.id;

    // const [product, setProduct] = useState(null);
    // useEffect(()=> {
    //     const res = getProduct(prodId);
    //     setProduct(res);
    // },[product]);

    return (
        <div>
        <header className="bg-white d-flex justify-content-center py-4">
            <span className="fs-6  text-secondary">
            <span className="">الرئيسيه</span>
            <BsDot className="fs-5" />
            <span>المنتج</span>
            </span>
        </header>
        <MainSection />
        <Section className="single-product-wrapper-2">
            <div className="row flex-column gap-3">
                <h2 className="fw-bolder-fs-3">Description</h2>
                <p className="p-3 bg-white shadow-sm">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit dolor qui, reprehenderit non nostrum, consectetur corrupti nihil perferendis quas magni nemo assumenda! Illo necessitatibus at perferendis nam odio, itaque tempore?
                    Nemo maxime repellendus mollitia adipisci rem harum officia, impedit dolor, sit nulla consequuntur consequatur velit necessitatibus cum, praesentium natus sapiente repellat voluptatibus accusantium vero accusamus earum veniam quod eum? Ratione.
                    Sint illo quam aliquid aut facilis error ipsam quia doloremque autem placeat molestiae, ab nihil deleniti incidunt quod magnam adipisci ut, a natus maxime laboriosam necessitatibus officiis dolores asperiores. Exercitationem!
                    Suscipit voluptatibus ipsum minus corrupti officiis autem delectus omnis impedit velit distinctio, id sit? Assumenda quisquam temporibus, non accusantium adipisci doloremque commodi. Commodi voluptatibus
                </p>
            </div>
        </Section>
        <Section className="single-product-wrapper-3">
            <div className="row flex-column gap-3">
                <h2 className="fw-bolder-fs-3">Review</h2>
                <div className="review-box bg-white shadow-sm p-3 d-flex flex-column gap-2">
                    <CustomerReview />
                    <PrevCustomerReview />
                </div>
            </div>
        </Section>
        </div>
    )
}

export default SingleProduct
