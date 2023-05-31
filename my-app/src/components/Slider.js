import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../style/Slider.css";
import "../App.css";

import image1 from "../asset/banner4.jpg";
import image3 from "../asset/banner5.jpg";
import image4 from "../asset/s001.png";
import image5 from "../asset/banner8.png";
import image9 from "../asset/banner9.jpg";
import image10 from "../asset/banner10.jpg";

import loca from "../asset/loca.avif";

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
          sell product
        </Link>
        <Link className="feature-list" to="/Service">
          <i class="bx bxs-donate-blood"></i>
          service oprovider
        </Link>
        <Link className="feature-list" to="/Shop">
          <i class="bx bx-station"></i>
          nearby enterprise
        </Link>
        <div className="location">
          <div className="wrap-location">
            <div className="locate-imag">
              <img src={loca} alt="location" />
              <div className="location-text">
                <i className="bx bx-chevron-left"></i>
                <p>Location</p>
                <i className="bx bx-chevron-right "></i>
              </div>
            </div>
          </div>
        </div>
        <Link className="feature-list">All Product Type</Link>
      </div>
      <div className="banner">
        <img src={allImage[selectImage]} alt="all" />
      </div>
    </div>
  );
}

export default Slider;
