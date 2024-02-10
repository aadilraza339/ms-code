// OpenProduct.js
import './index.css'
import React, { useState } from 'react';



import RatingStar from '../ratingStar'
import ProductImage1 from '../../icons/product-1.avif'
import ProductImage2 from '../../icons/product-2.avif'
import ProductImage3 from '../../icons/product-3.avif'
import ProductImage4 from '../../icons/product-4.avif'
import ProductImage5 from '../../icons/product-5.avif'
import ProductImage6 from '../../icons/product-6.avif'

const ProductImages = [ProductImage1,ProductImage2,ProductImage3,ProductImage4, ProductImage5, ProductImage6]
const OpenProduct = () => {
  const [count, setCount] = useState(1);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };
  return (
    <div className="">
      <div className="product flex">
        <div className="product-images">
            {ProductImages.map((item,index)=>{
             return (
              <div className='image'>
                <img key={index} src={item} alt={item} />

              </div>
             )
            })}
        </div>
        <div className="product-details">
          <div className="product-name">LINANÄS</div>
          <div className="product-description">
            3-seat sofa, with chaise longue/Vissle dark grey
          </div>
          <div className="product-price flex">
            <div className="currency">Rs</div>
            <p className="number">34,445</p>
          </div>
          <div className='price-description'>Price incl. of all taxes</div>
          <div className="rating">
            <RatingStar rating={5} />
            <div className="total-rating">(70)</div>
          </div>
          <div>5 year warranty</div>
          <h6>How to get it</h6>

          <div className="delivery-box">
            <div className="box flex">
              <div className="left flex">
                <div>icon</div>
                <div className="flex mid">
                  <div>Delivery</div>
                  <div>Check avalibilty</div>
                </div>
              </div>
              <div>icon</div>
            </div>
            <hr />
            <div className="box flex">
              <div className="left flex">
                <div>icon</div>
                <div className="flex mid">
                  <div>In Store</div>
                  <div>Check avalibilty</div>
                </div>
              </div>
              <div>icon</div>
            </div>
          </div>
            <div className='add-to-card flex'>

          <div className='item-count flex'>
          <div className='d-count' onClick={handleDecrement}>--</div>
            <div className='count'>{count}</div>
          <div className='plus-count' onClick={handleIncrement}>+</div>
          </div>
          <div className='add-to-bag'>
            Add to bag
          </div>
            </div>
        </div>
        
      </div>
    </div>
  )
}

export default OpenProduct
