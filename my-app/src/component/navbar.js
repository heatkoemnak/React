import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import logo from "../screen/asset/Anti2.png";

function Navbar(props) {
  return (
    <>
      <nav className="nav-bar">
        <h1 className="logo">
          {" "}
          <Link className="item" to="/">
            <img src={logo} alt="anti" width="300" />
          </Link>
        </h1>

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
        <div className="nav-icon" id="nav-icon">
          <i
            onClick={() => props.handleCart(true)}
            className="bx bxs-cart-download icon "
            id="shopping-cart"
          >
            <sup className="count-cart">{props.count}</sup>
          </i>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
