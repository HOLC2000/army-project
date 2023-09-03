// Header.js
import React from 'react';
import '../scss/Header.scss';
import Photo from '../assets/pictures/app-logo.png'

const Header = ({ isLoggedIn, onLogin, onLogout }) => {
  return (
    <div className="header">
      <img src={Photo} className='header__logo' />
      <h1 className="header__title">Social App</h1>
      {isLoggedIn ? (
        <button className="header__logout-button" onClick={onLogout}>
          Logout
        </button>
      ) : (
        <button className="header__login-button" onClick={onLogin}>
          Login
        </button>
      )}
    </div>
  );
};

export default Header;
