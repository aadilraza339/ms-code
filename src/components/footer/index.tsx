// Footer.js

import './index.css' // Import your CSS file

import React from 'react'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h3>Explore IKEA</h3>
        <ul>
          <li>
            <a href="#">Products</a>
          </li>
          <li>
            <a href="#">Rooms</a>
          </li>
          <li>
            <a href="#">Ideas</a>
          </li>
          {/* Add more links as needed */}
        </ul>
      </div>

      <div className="footer-section">
        <h3>Customer Service</h3>
        <ul>
          <li>
            <a href="#">Contact us</a>
          </li>
          <li>
            <a href="#">FAQ</a>
          </li>
          {/* Add more links as needed */}
        </ul>
      </div>

      <div className="footer-section">
        <h3>Company</h3>
        <ul>
          <li>
            <a href="#">About us</a>
          </li>
          <li>
            <a href="#">Jobs</a>
          </li>
          {/* Add more links as needed */}
        </ul>
      </div>

      <div className="footer-section">
        <h3>Connect with us</h3>
        <ul className="social-links">
          <li>
            <a href="#" className="icon-facebook"></a>
          </li>
          <li>
            <a href="#" className="icon-twitter"></a>
          </li>
          <li>
            <a href="#" className="icon-instagram"></a>
          </li>
          {/* Add more social media links as needed */}
        </ul>
      </div>
    </footer>
  )
}

export default Footer
