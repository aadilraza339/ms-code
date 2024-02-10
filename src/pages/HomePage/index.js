import React from 'react';
import CategoryCard from '../../components/productCard';
import DetailsCard from '../../components/detailsProduct';
const HomePage = () => {
    return (React.createElement(React.Fragment, null,
        React.createElement(CategoryCard, null),
        React.createElement(DetailsCard, null)));
};
export default HomePage;
