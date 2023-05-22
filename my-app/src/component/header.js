import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

function header(props) {
  return (
    <>
      <div className="header-container">
        <div className="item-links">
          <li>
            <Link className="item-link" to="/">
              Seller Center
            </Link>
          </li>
          <li>
            <Link className="item-link" to="/Service">
              Services
            </Link>
          </li>
          <li>
            <Link className="item-link" to="/Shop">
              Contact Us
            </Link>
          </li>
        </div>
        <div className="nav-icon" id="nav-icon">
          <li>
            <Link className="item-link" to="/Contact">
              Support
            </Link>
          </li>
          <li>
            <Link className="item-link" to="/Team">
              Team
            </Link>
          </li>

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
      </div>
    </>
  );
}

export default header;
