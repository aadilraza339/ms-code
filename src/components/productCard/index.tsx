// CategoryCard.js
import './index.css'
import './category.png'
const imgUrl = new URL('./category.png', import.meta.url).href

import React from 'react'
const dummyData = [
  { id: 1, image: './category.png', category: 'Category 1' },
  { id: 2, image: 'path/to/image2.jpg', category: 'Category 2' },
  { id: 3, image: 'path/to/image3.jpg', category: 'Category 3' },
  { id: 3, image: 'path/to/image3.jpg', category: 'Category 3' },
  { id: 3, image: 'path/to/image3.jpg', category: 'Category 3' },
  { id: 3, image: 'path/to/image3.jpg', category: 'Category 3' },
  { id: 3, image: 'path/to/image3.jpg', category: 'Category 3' },
  { id: 3, image: 'path/to/image3.jpg', category: 'Category 3' },
  { id: 3, image: 'path/to/image3.jpg', category: 'Category 3' },
  { id: 3, image: 'path/to/image3.jpg', category: 'Category 3' },

  // Add more dummy data as needed
]
const CategoryCard = () => {
  return (
    <div className="category-card">
      <div className="card-container">
        {dummyData.map((item) => (
          <div className="card" key={item.id}>
            <img
              src={imgUrl}
              alt={`Category: ${item.category}`}
              className="card-image"
            />
            <div className="card-content">
              <h2 className="category-name">{item.category}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CategoryCard
