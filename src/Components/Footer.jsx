// src/components/Footer.js

import React from 'react';
import '../scss/Footer.scss';
import logo from '../assets/pictures/app-logo.png'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Your Company Name</p>
        <p>All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
