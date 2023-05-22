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
            <Link className="item-link" to="/Contact">
              Contact us
              <div className="nav-link-contact-icon">
                <i class="bx bxl-facebook-circle link-icon"></i>
                <i class="bx bxl-twitter link-icon"></i>
              </div>
            </Link>
          </li>
        </div>
        <div className="nav-link-right">
          <li>
            <Link className="item-link" to="/Contact">
              <i class="bx bx-question-mark link-icon"></i>
              Support
            </Link>
          </li>
          <li>
            <Link className="item-link" to="/Team">
              Team
            </Link>
          </li>
          <li>
            <Link className="item-link">Register|</Link>
          </li>
          <li>
            <Link to="/login" className="item-link">
              Login
            </Link>
          </li>
        </div>
      </div>
    </>
  );
}

export default header;
