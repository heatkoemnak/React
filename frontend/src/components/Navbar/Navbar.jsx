import React from 'react';
import './navbar.css';
import logo from '../../assets/new_logo_anti.png';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <div className="wrap-container">
        <div className="logo">
          <img src={logo} alt="logo" width={120} />
        </div>
        <ul>
          <Link to="/">Home</Link>
          <Link to="/featured">Featured</Link>
          <Link to="/about">About</Link>
          <Link to="/fqa">FQA</Link>
          <Link to="/contact">Contact Us</Link>
        </ul>
        <div className="form">
          <Link to="/login" id="form">
            Sign In
          </Link>
          <Link to="/signup" id="form">
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
