import React from 'react';
import './Navbar.css';
import logo from '../../assets/new_logo_anti.png';

function Navbar() {
  return (
    <div>
      <h1>Navbar</h1>
      <nav>
        <div className="wrap-container">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
          <ul>
            <li>Home</li>
            <li>Products</li>
            <li>Cart</li>
          </ul>
        </div>

        <ul>
          <li>Sign In</li>
          <li>Sign Up</li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
