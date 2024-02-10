import './App.css';
import React from 'react';
import Footer from './components/footer';
import Header from './components/Header';
import Router from './routing/index';
const App = () => {
    return (React.createElement("div", null,
        React.createElement(Header, null),
        React.createElement(Router, null),
        React.createElement(Footer, null)));
};
export default App;
