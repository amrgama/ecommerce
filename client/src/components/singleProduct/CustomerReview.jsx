import React from 'react'
import Star from '../our-store/Star'
const CustomerReview = () => {
  return (
    <div className='p-3 bg-white shadow-sm d-flex flex-column gap-1 shadow-sm'>
        <h3 className='fs-6 fw-bold m-0'>Customer Review <span className='text-muted'>(you)</span></h3>
        <Star stars={2.5} reviews={3} />
        <textarea name="review" className='review-comment w-100 bg-white text-dark border-0 shadow-sm p-2' placeholder='write a review'></textarea>
    </div>
  )
}

export default CustomerReview
