// RatingStar.js

import './index.css' // Import your CSS file

import React from 'react'
interface RatingStarProps {
  rating: number;
}

const RatingStar: React.FC<RatingStarProps> = ({ rating }) => {
  const renderStars = () => {
    const stars = []
    for (let i = 1; i <= 5; i++) {
      const className = i <= rating ? 'star-filled' : 'star-empty'
      stars.push(
        <span key={i} className={`star ${className}`}>
          &#9733;
        </span>,
      )
    }
    return stars
  }

  return <div className="rating-stars">{renderStars()}</div>
}

export default RatingStar
