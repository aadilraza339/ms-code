// RatingStar.js
import './index.css'; // Import your CSS file
import React from 'react';
const RatingStar = ({ rating }) => {
    const renderStars = () => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            const className = i <= rating ? 'star-filled' : 'star-empty';
            stars.push(React.createElement("span", { key: i, className: `star ${className}` }, "\u2605"));
        }
        return stars;
    };
    return React.createElement("div", { className: "rating-stars" }, renderStars());
};
export default RatingStar;
