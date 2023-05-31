import React, { useState } from "react";

import { Link } from "react-router-dom";
import "./navbar.css";
import logo from "../screen/asset/anti.png";

function Navbar(props) {
  return (
    <>
      <nav className="nav-bar">
        <div className="logo">
          {" "}
          <Link className="item" to="/">
            <img src={logo} alt="anti" />
          </Link>
        </div>

        <div className="search-bar">
          <input
            className="search-input"
            type="text"
            placeholder="Search for products"
          />
          <button className="search-btn">
            <i className="bx bx-search"></i>
          </button>
        </div>
        <div className="nav-icon">
          <i
            onClick={() => props.handleCart(true)}
            className="bx bxs-cart-download cart-icon "
          >
            <div className="count-item">
              <span className="value-count">{props.count}</span>
            </div>
          </i>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
