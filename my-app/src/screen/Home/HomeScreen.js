import React from "react";
import { Link } from "react-router-dom";




import { useState } from "react";

//slider
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

import related1 from "../asset/related_to_recycle1.jpg";
import related2 from "../asset/related_to_recycle2.jpg";
import related3 from "../asset/related_to_recycle3.jpg";
import related4 from "../asset/related_to_recycle4.jpg";
import related5 from "../asset/related_to_recycle5.jpg";
import related6 from "../asset/related_to_recycle6.jpg";
import related7 from "../asset/related_to_recycle7.jpg";
import related8 from "../asset/related_to_recycle8.jpg";
import related9 from "../asset/related_to_recycle9.jpg";
import related10 from "../asset/related_to_recycle10.jpg";
import related11 from "../asset/related-to-recycle11.jpg";
import Product from "./Product";

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
      <div className="Popular" id="popular">
        <div className="popular-text">
          <div className="products-type">
            <p>Trending Product</p>
          </div>
          <p>See more</p>
        </div>
      </div>
      <Product/>
      <Related />
      <Footer />
    </>
  );
};

function Related() {
  return (
    <div class="Related">
      <h2>Related Collection</h2>
      <div class="related-container">
        <div class="wrape-content">
          <div class="image">
            <img src={related11} alt="" />
          </div>
          <div class="related-text">
            <h3>Recycle</h3>
            <div class="photos-related">
              <p>693 photos</p>
              <p>Created by Mel Hammer</p>
            </div>
          </div>
        </div>
      </div>
      <div class="related-container">
        <div class="wrape-content">
          <div class="image">
            <img src={related2} alt="" />
          </div>
          <div class="related-text">
            <h3>Texture/Plastic</h3>
            <div class="photos-related">
              <p>1.1k photos</p>
              <p>Created by Mixer X</p>
            </div>
          </div>
        </div>
      </div>

      <div class="related-container">
        <div class="wrape-content">
          <div class="image">
            <img src={related5} alt="" />
          </div>
          <div class="related-text">
            <h3>Going Green, Save the Earth, Climate Change</h3>
            <div class="photos-related">
              <p>2.3k photos</p>
              <p>Created by Gen Alert</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

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
function Footer() {
  return (
    <footer>
      <div class="footer-container">
        <div class="footer-menu">
          <div class="footer-menu-item">
            <h2>Menu</h2>
            <Link href="#">Home</Link>
            <Link href="#">About</Link>
            <Link href="#">Service</Link>
            <Link href="#">Product</Link>
            <Link href="#">Contact</Link>
          </div>
          <div class="footer-menu-item">
            <h2>Contact Info</h2>
            <Link href="#">+855 977 304 279</Link>
            <Link href="#">heatkoemnak@gamil.com</Link>
            <Link href="#">Pnom penh,Cambodia-400104</Link>
          </div>
          <div class="footer-menu-item">
            <h2>Follow Us</h2>
            <Link href="#">Facebook</Link>
            <Link href="#">Instagram</Link>
            <Link href="#">Twitter</Link>
            <Link href="#">Youtube</Link>
            <Link href="#">Linkedin</Link>
          </div>
          <div class="footer-menu-item">
            <h2>Legal</h2>
            <Link href="#">Terms of use</Link>
            <Link href="#">Privacy policy</Link>
            <Link href="#">Cookies</Link>
          </div>
        </div>
        <div class="footer-social-media">
          <Link href="#">
            <i class="bx bxl-facebook"></i>
          </Link>
          <Link href="#">
            <i class="bx bxl-instagram"></i>
          </Link>
          <Link href="#">
            <i class="bx bxl-twitter"></i>
          </Link>
          <Link href="#">
            <i class="bx bxl-youtube"></i>
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default HomeScreen;
