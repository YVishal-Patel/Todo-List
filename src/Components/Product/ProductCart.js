import React from 'react'
import './ProductCart.css'

function ProductCart({imgUrl, Text}) {
  return (
      <>
     <div className="card">
            <div className="card-component">
      <img className='Product_img' src={imgUrl} alt="" />
      <h2 className='text'>{Text}</h2>
      </div>
      </div>
      </>
  )
}

export default ProductCart