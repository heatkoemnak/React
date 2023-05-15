import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

function Navbar(props) {
  return (
    <>
      <nav className="nav-bar">
        <h1 className="logo">Anti WastE</h1>
        <div className="nav-container">
          <li>
            <Link className="item" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="item" to="/Service">
              Services
            </Link>
          </li>
          <li>
            <Link className="item" to="/Shop">
              Shop
            </Link>
          </li>
          <li>
            <Link className="item" to="/Contact">
              Contact us
            </Link>
          </li>
          <li>
            <Link className="item" to="/Team">
              Team
            </Link>
          </li>
        </div>
        <div className="nav-icon" id="nav-icon">
          <i className="bx bx-search btn-search"></i>
          <i
            onClick={() => props.handleCart(true)}
            className="bx bxs-cart-download icon "
            id="shopping-cart"
          >
            <sup className="count-cart">{props.count}</sup>
          </i>
          <Link to="/Login" className="sign-account">
            <div className="log-to-signin">
              <p>Hello👋</p>
              <Link className="login" id="cta">
                Sign In
              </Link>
            </div>
            <p>Account</p>
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
