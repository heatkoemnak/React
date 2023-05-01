import React from "react";
import { Link } from "react-router-dom";

const HomeScreen = () => {
  return (
    <div className="campagn">
      <div className="feature">
        <Link className="feature-list" to="/">
          Sell
        </Link>
        <Link className="feature-list" to="/Service">
          Service Provider
        </Link>
        <Link className="feature-list" to="/Shop">
          Nearby Enterprise
        </Link>
        <div className="location">
          <i class="bx bx-location-plus"></i>
          <i class="bx bx-chevron-up"></i>
          <p>Location</p>
          <p>សង្កាត់ទឹកថ្លា Sangkat Tuek Thla ភ្នំពេញ</p>
          <p>10km 30s</p>
          <i class="bx bx-chevron-down "></i>
        </div>
        <Link className="feature-list" to="/Contact">
          ALL PRODUCTS TYPE
        </Link>
      </div>
    </div>
  );
};

export default HomeScreen;
