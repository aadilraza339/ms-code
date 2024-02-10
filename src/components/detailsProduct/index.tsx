// detailsCard.js
import './index.css'

import LikeIcon from '../../icons/like.svg'

const imgUrl = new URL('../productCard/category.png', import.meta.url).href
import React from 'react'
import { useNavigate } from 'react-router-dom'

import RatingStar from '../ratingStar'
const dummyData = [
  { id: 1, image: './category.png', category: 'Product 1' },
  { id: 2, image: 'path/to/image2.jpg', category: 'Product 2' },
  { id: 3, image: 'path/to/image3.jpg', category: 'Product 3' },
  { id: 4, image: 'path/to/image3.jpg', category: 'Product 3' },

  // Add more dummy data as needed
]
const DetailsCard = () => {
  const navigate = useNavigate()

  // Function to handle the click event and navigate to the product route
  const handleNavigateToProduct = () => {
    // Use the navigate function to go to the new route
    navigate('/product')
  }

  return (
    <div className="details-card">
      <h2 className="h2-heading">Small Space Store Product</h2>
      <div className="card-container">
        {dummyData.map((item) => (
          <div
            onClick={() => {
              handleNavigateToProduct()
            }}
            className="card"
            key={item.id}>
            <img
              src={imgUrl}
              alt={`Category: ${item.category}`}
              className="card-image"
            />
            <div className="card-content">
              <h2 className="category-name">{item.category}</h2>
              <p className="card-description">3 seate sofa</p>
              <div className="product-price flex">
                <div className="currency">Rs</div>
                <p className="number">34,445</p>
              </div>
              <div className="rating">
                <RatingStar rating={5} />
                <div className="total-rating">(70)</div>
              </div>
              <div className="like icon flex">
                <div>Like</div>
                <img src={LikeIcon} alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default DetailsCard
