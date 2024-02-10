import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import Product from '../pages/product';
// import OtherPage from './pages/OtherPage';
const router = () => {
    return (React.createElement(Router, null,
        React.createElement(Routes, null,
            React.createElement(Route, { path: "/", element: React.createElement(HomePage, null) }),
            React.createElement(Route, { path: "/product", element: React.createElement(Product, null) }))));
};
export default router;
