/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./slider.css";
import "../App.css";

import image1 from "../screen/asset/banner4.jpg";
import image3 from "../screen/asset/banner5.jpg";
import image4 from "../screen/asset/s001.png";
import image5 from "../screen/asset/banner8.png";
import image9 from "../screen/asset/banner9.jpg";
import image10 from "../screen/asset/banner10.jpg";

import loca from "../screen/asset/loca.avif";

function Slider() {
  const [selectImage, setSelectImage] = useState(1);
  const [allImage] = useState([
    image1,
    image3,
    image4,
    image5,
    image9,
    image10,
  ]);

  React.useEffect(() => {
    const interval = setInterval(() => {
      if (selectImage < allImage.length - 1) {
        setSelectImage(selectImage + 1);
      }
      if (selectImage === allImage.length - 1) {
        setSelectImage(0);
      }
    }, 3000);
    return () => clearInterval(interval);
  });

  return (
    <div className="campagn">
      <div className="feature">
        <Link className="feature-list" to="/">
          <i class="bx bx-store"></i>
          Sell Your Products
        </Link>
        <Link className="feature-list" to="/Service">
          <i class="bx bxs-donate-blood"></i>
          Service Provider
        </Link>
        <Link className="feature-list" to="/Shop">
          <i class="bx bx-station"></i>
          Nearby Enterprise
        </Link>
        <div className="location">
          <div className="wrap-location">
            <div className="locate-imag">
              <img src={loca} />
              <div className="location-text">
                <i className="bx bx-chevron-left"></i>
                <div className="wrap-text">
                  <i class="bx bxs-map"></i>
                  <p>Location</p>
                  <p>សង្កាត់ទឹកថ្លា Sangkat Tuek Thla ភ្នំពេញ</p>
                  <p>10km 30s</p>
                </div>
                <i className="bx bx-chevron-right "></i>
              </div>
            </div>
          </div>
        </div>
        <Link className="feature-list" to="/Contact">
          ALL PRODUCTS TYPE
        </Link>
      </div>
      <div className="banner">
        <img src={allImage[selectImage]} alt="all" />
      </div>
    </div>
  );
}

export default Slider;
