import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import image1 from "../asset/s005.jpg";
import image2 from "../asset/s002.png";
import image3 from "../asset/s003.png";
import image4 from "../asset/s001.png";

import material1 from "../asset/1.webp";
import material2 from "../asset/1.webp";
import material3 from "../asset/2.jpg";
import material4 from "../asset/3.jpg";
import material5 from "../asset/4.jfif";
import material6 from "../asset/5.jpg";
import material7 from "../asset/6.jpg";
import material8 from "../asset/1.webp";

const HomeScreen = () => {
  const [selectImage, setSelectImage] = useState(1);
  const [allImage, setAllImage] = useState([image1, image2, image3, image4]);

  //set auto slider
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
  }, [selectImage]);

  return (
    <>
      <div className="campagn">
        <div className="feature">
          <Link className="feature-list" to="/">
            Sell Your Products
          </Link>
          <Link className="feature-list" to="/Service">
            Service Provider
          </Link>
          <Link className="feature-list" to="/Shop">
            Nearby Enterprise
          </Link>
          <div className="location">
            <i className="bx bx-location-plus"></i>
            <i className="bx bx-chevron-up"></i>
            <p>Location</p>
            <p>សង្កាត់ទឹកថ្លា Sangkat Tuek Thla ភ្នំពេញ</p>
            <p>10km 30s</p>
            <i className="bx bx-chevron-down "></i>
          </div>
          <Link className="feature-list" to="/Contact">
            ALL PRODUCTS TYPE
          </Link>
        </div>
        <div className="banner">
          <img src={allImage[selectImage]} alt="all" />
        </div>
      </div>
      <Materails />

      <div className="search-product">
        <input type="text" placeholder="Search Product" />
        <button className="search-btn">Search</button>
      </div>
    </>
  );
};

function Materails() {
  return (
    <div className="materails">
      <div className="materail">
        <img src={material1} alt="image1" />
        <p>Plastic</p>
      </div>
      <div className="materail">
        <img src={material2} alt="image2" />
        <p>Plastic</p>
      </div>
      <div className="materail">
        <img src={material3} alt="image3" />
        <p>Plastic</p>
      </div>
      <div className="materail">
        <img src={material4} alt="image4" />
        <p>Plastic</p>
      </div>
      <div className="materail">
        <img src={material5} alt="image5" />
        <p>Plastic</p>
      </div>
      <div className="materail">
        <img src={material6} alt="image6" />
        <p>Plastic</p>
      </div>
      <div className="materail">
        <img src={material7} alt="image7" />
        <p>Plastic</p>
      </div>

      <div className="materail">
        <img src={material8} alt="image8" />
        <p>Plastic</p>
      </div>
    </div>
  );
}

export default HomeScreen;
