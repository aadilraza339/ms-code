// Product.js
import React from 'react';
import DetailsCard from '../../components/detailsProduct';
import OpenProduct from '../../components/openProduct';
const Product = () => {
    return (React.createElement("div", null,
        React.createElement(OpenProduct, null),
        React.createElement(DetailsCard, null)));
};
export default Product;
