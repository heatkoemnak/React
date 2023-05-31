import React, { useState } from "react";

import { Link } from "react-router-dom";
import "../style/Navbar.css";
import logo from "../asset/anti.png";
import "../App.css";

function Navbar() {
  return (
    <nav className="nav-bar">
      <div className="nav-container">
        <div className="logo">
          <Link className="item" to="/">
            <img src={logo} alt="anti" width={300} />
          </Link>
        </div>
        <div className="search-bar">
          <input
            className="search-input"
            type="text"
            placeholder="Search for products"
          />
          <i className="bx bx-search search-btn"></i>
        </div>
        <div className="nav-icon">
          <Link to="/cart">
            <i className="bx bxs-cart-download cart-icon ">
              <div className="count-item">
                <span className="value-count">0</span>
              </div>
            </i>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
