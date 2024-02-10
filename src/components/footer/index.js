// Footer.js
import './index.css'; // Import your CSS file
import React from 'react';
const Footer = () => {
    return (React.createElement("footer", { className: "footer" },
        React.createElement("div", { className: "footer-section" },
            React.createElement("h3", null, "Explore IKEA"),
            React.createElement("ul", null,
                React.createElement("li", null,
                    React.createElement("a", { href: "#" }, "Products")),
                React.createElement("li", null,
                    React.createElement("a", { href: "#" }, "Rooms")),
                React.createElement("li", null,
                    React.createElement("a", { href: "#" }, "Ideas")))),
        React.createElement("div", { className: "footer-section" },
            React.createElement("h3", null, "Customer Service"),
            React.createElement("ul", null,
                React.createElement("li", null,
                    React.createElement("a", { href: "#" }, "Contact us")),
                React.createElement("li", null,
                    React.createElement("a", { href: "#" }, "FAQ")))),
        React.createElement("div", { className: "footer-section" },
            React.createElement("h3", null, "Company"),
            React.createElement("ul", null,
                React.createElement("li", null,
                    React.createElement("a", { href: "#" }, "About us")),
                React.createElement("li", null,
                    React.createElement("a", { href: "#" }, "Jobs")))),
        React.createElement("div", { className: "footer-section" },
            React.createElement("h3", null, "Connect with us"),
            React.createElement("ul", { className: "social-links" },
                React.createElement("li", null,
                    React.createElement("a", { href: "#", className: "icon-facebook" })),
                React.createElement("li", null,
                    React.createElement("a", { href: "#", className: "icon-twitter" })),
                React.createElement("li", null,
                    React.createElement("a", { href: "#", className: "icon-instagram" }))))));
};
export default Footer;
