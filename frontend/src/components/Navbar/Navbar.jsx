import React from 'react';
import './navbar.css';
import logo from '../../assets/new_logo_anti.png';

function Navbar() {
  return (
    <nav>
      <div className="wrap-container">
        <div className="logo">
          <img src={logo} alt="logo" width={120} />
        </div>
        <ul>
          <li>Home</li>
          <li>Products</li>
          <li>About</li>
          <li>FQA</li>
        </ul>
        <div className='form'>
          <li id="form">Sign In</li>
          <li id="form">Sign Up</li>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
