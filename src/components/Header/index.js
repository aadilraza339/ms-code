// DummyComponent.js
import './index.css';
import React, { useState } from 'react';
import LikeIcon from '../../icons/like.svg';
import UserProfile from '../../icons/user-profile.svg';
import ProductMenu from '../productMenu';
const Header = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const handleChange = (event) => {
        setSearchTerm(event.target.value);
    };
    return (React.createElement("div", { className: "header" },
        React.createElement("div", { className: "lable" }, "Ms Woodwork"),
        React.createElement("div", { className: "header__menu" },
            React.createElement("div", { className: "SearchBox" },
                React.createElement("input", { type: "text", placeholder: "What are you looking for?", value: searchTerm, onChange: handleChange })),
            React.createElement("div", { className: "user icon" },
                React.createElement("img", { src: UserProfile, alt: "" }),
                React.createElement("div", null, "Log In or Sign Up")),
            React.createElement("div", { className: "like icon" },
                React.createElement("img", { src: LikeIcon, alt: "" }))),
        React.createElement(ProductMenu, null)));
};
export default Header;
