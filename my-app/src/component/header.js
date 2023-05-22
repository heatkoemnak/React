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
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link>Register</Link>
          </li>
        </div>
      </div>
    </>
  );
}

export default header;
