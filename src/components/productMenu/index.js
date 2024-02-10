// ProductMenu.js
import React from 'react';
import DeliveryIcon from '../../icons/Delivery.svg';
const ProductMenu = () => {
    return (React.createElement("div", { className: "product-menu" },
        React.createElement("div", { className: "menu-list" },
            React.createElement("div", null, "Home"),
            React.createElement("div", null, "Products"),
            React.createElement("div", null, "Rooms"),
            React.createElement("div", null, "MS WoodWork"),
            React.createElement("div", null, "Business"),
            React.createElement("div", null, "Offers")),
        React.createElement("div", { className: "address" },
            React.createElement("div", { className: "icon" },
                React.createElement("img", { src: DeliveryIcon, alt: "" }),
                React.createElement("div", null, "Enter poster code")),
            React.createElement("div", { className: "icon" },
                React.createElement("img", { src: DeliveryIcon, alt: "" }),
                React.createElement("div", null, "Select store")))));
};
export default ProductMenu;
