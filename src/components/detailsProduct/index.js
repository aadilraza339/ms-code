// detailsCard.js
import './index.css';
import LikeIcon from '../../icons/like.svg';
const imgUrl = new URL('../productCard/category.png', import.meta.url).href;
import React from 'react';
import { useNavigate } from 'react-router-dom';
import RatingStar from '../ratingStar';
const dummyData = [
    { id: 1, image: './category.png', category: 'Product 1' },
    { id: 2, image: 'path/to/image2.jpg', category: 'Product 2' },
    { id: 3, image: 'path/to/image3.jpg', category: 'Product 3' },
    { id: 4, image: 'path/to/image3.jpg', category: 'Product 3' },
    // Add more dummy data as needed
];
const DetailsCard = () => {
    const navigate = useNavigate();
    // Function to handle the click event and navigate to the product route
    const handleNavigateToProduct = () => {
        // Use the navigate function to go to the new route
        navigate('/product');
    };
    return (React.createElement("div", { className: "details-card" },
        React.createElement("h2", { className: "h2-heading" }, "Small Space Store Product"),
        React.createElement("div", { className: "card-container" }, dummyData.map((item) => (React.createElement("div", { onClick: () => {
                handleNavigateToProduct();
            }, className: "card", key: item.id },
            React.createElement("img", { src: imgUrl, alt: `Category: ${item.category}`, className: "card-image" }),
            React.createElement("div", { className: "card-content" },
                React.createElement("h2", { className: "category-name" }, item.category),
                React.createElement("p", { className: "card-description" }, "3 seate sofa"),
                React.createElement("div", { className: "product-price flex" },
                    React.createElement("div", { className: "currency" }, "Rs"),
                    React.createElement("p", { className: "number" }, "34,445")),
                React.createElement("div", { className: "rating" },
                    React.createElement(RatingStar, { rating: 5 }),
                    React.createElement("div", { className: "total-rating" }, "(70)")),
                React.createElement("div", { className: "like icon flex" },
                    React.createElement("div", null, "Like"),
                    React.createElement("img", { src: LikeIcon, alt: "" })))))))));
};
export default DetailsCard;
