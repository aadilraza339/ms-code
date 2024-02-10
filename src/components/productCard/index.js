// CategoryCard.js
import './index.css';
import './category.png';
const imgUrl = new URL('./category.png', import.meta.url).href;
import React from 'react';
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
];
const CategoryCard = () => {
    return (React.createElement("div", { className: "category-card" },
        React.createElement("div", { className: "card-container" }, dummyData.map((item) => (React.createElement("div", { className: "card", key: item.id },
            React.createElement("img", { src: imgUrl, alt: `Category: ${item.category}`, className: "card-image" }),
            React.createElement("div", { className: "card-content" },
                React.createElement("h2", { className: "category-name" }, item.category))))))));
};
export default CategoryCard;
