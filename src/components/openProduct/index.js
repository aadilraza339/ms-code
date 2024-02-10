// OpenProduct.js
import './index.css';
import React, { useState } from 'react';
import RatingStar from '../ratingStar';
import ProductImage1 from '../../icons/product-1.avif';
import ProductImage2 from '../../icons/product-2.avif';
import ProductImage3 from '../../icons/product-3.avif';
import ProductImage4 from '../../icons/product-4.avif';
import ProductImage5 from '../../icons/product-5.avif';
import ProductImage6 from '../../icons/product-6.avif';
const ProductImages = [ProductImage1, ProductImage2, ProductImage3, ProductImage4, ProductImage5, ProductImage6];
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
    return (React.createElement("div", { className: "" },
        React.createElement("div", { className: "product flex" },
            React.createElement("div", { className: "product-images" }, ProductImages.map((item, index) => {
                return (React.createElement("div", { className: 'image' },
                    React.createElement("img", { key: index, src: item, alt: item })));
            })),
            React.createElement("div", { className: "product-details" },
                React.createElement("div", { className: "product-name" }, "LINAN\u00C4S"),
                React.createElement("div", { className: "product-description" }, "3-seat sofa, with chaise longue/Vissle dark grey"),
                React.createElement("div", { className: "product-price flex" },
                    React.createElement("div", { className: "currency" }, "Rs"),
                    React.createElement("p", { className: "number" }, "34,445")),
                React.createElement("div", { className: 'price-description' }, "Price incl. of all taxes"),
                React.createElement("div", { className: "rating" },
                    React.createElement(RatingStar, { rating: 5 }),
                    React.createElement("div", { className: "total-rating" }, "(70)")),
                React.createElement("div", null, "5 year warranty"),
                React.createElement("h6", null, "How to get it"),
                React.createElement("div", { className: "delivery-box" },
                    React.createElement("div", { className: "box flex" },
                        React.createElement("div", { className: "left flex" },
                            React.createElement("div", null, "icon"),
                            React.createElement("div", { className: "flex mid" },
                                React.createElement("div", null, "Delivery"),
                                React.createElement("div", null, "Check avalibilty"))),
                        React.createElement("div", null, "icon")),
                    React.createElement("hr", null),
                    React.createElement("div", { className: "box flex" },
                        React.createElement("div", { className: "left flex" },
                            React.createElement("div", null, "icon"),
                            React.createElement("div", { className: "flex mid" },
                                React.createElement("div", null, "In Store"),
                                React.createElement("div", null, "Check avalibilty"))),
                        React.createElement("div", null, "icon"))),
                React.createElement("div", { className: 'add-to-card flex' },
                    React.createElement("div", { className: 'item-count flex' },
                        React.createElement("div", { className: 'd-count', onClick: handleDecrement }, "--"),
                        React.createElement("div", { className: 'count' }, count),
                        React.createElement("div", { className: 'plus-count', onClick: handleIncrement }, "+")),
                    React.createElement("div", { className: 'add-to-bag' }, "Add to bag"))))));
};
export default OpenProduct;
