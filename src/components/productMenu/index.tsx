// ProductMenu.js

import React from 'react'

import DeliveryIcon from '../../icons/Delivery.svg'
const ProductMenu = () => {
  
  return (
    <div className="product-menu">
      <div className="menu-list">
      <div>Home</div>
        <div>Products</div>
        <div>Rooms</div>
        <div>MS WoodWork</div>
        <div>Business</div>
        <div>Offers</div>
      </div>
      <div className="address">
        <div className="icon">
          <img src={DeliveryIcon} alt="" />

          <div>Enter poster code</div>
        </div>
        <div className="icon">
          <img src={DeliveryIcon} alt="" />

          <div>Select store</div>
        </div>
      </div>
    </div>
  )
}

export default ProductMenu
