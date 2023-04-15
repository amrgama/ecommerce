import React, { useRef, useState } from 'react'
import ReactImageMagnify from 'react-image-magnify';

const PreviewImg = () => {
    const [previewImgSrc,setPreviewImgSrc] = useState("/images/headphone.jpg");
    const changePreviewImg = (e)=>{
        setPreviewImgSrc(e.currentTarget.src);
    }
    
  return (
    <div className="col-12 col-md-6 col-xl-5 px-0 ps-1 py-2 d-flex gap-5 flex-column">
        <div className="preview-img col-12">
            {/* <img ref={img} src={"/images/headphone.jpg"} alt="..." className='h-100 w-100 shadow-sm'/> */}
            <ReactImageMagnify {...{
                smallImage: {
                    alt: 'Wristwatch by Ted Baker London',
                    isFluidWidth: true,
                    src: previewImgSrc
                },
                largeImage: {
                    src: previewImgSrc,
                    width: 1200,
                    height: 1800
                },
            }} />
        </div>
        <div className="images d-flex flex-wrap align-items-center justify-content-between gap-1">
            <img role='button' onClick={changePreviewImg} src="/images/headphone.jpg" alt="..." className='col-5 shadow-sm' />
            <img role='button' onClick={changePreviewImg} src="/images/laptop.jpg" alt="..." className='col-5 shadow-sm' />
            <img role='button' onClick={changePreviewImg} src="/images/speaker.jpg" alt="..." className='col-5 shadow-sm' />
            <img role='button' onClick={changePreviewImg} src="/images/headphone.jpg" alt="..." className='col-5 shadow-sm' />
        </div>
    </div>
  )
}

export default PreviewImg
