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

import shoes3 from "../asset/shoes3.jpg";
import shoes4 from "../asset/shoes4.jpg";
import shoes5 from "../asset/shoes5.jpg";
import shoes6 from "../asset/shoes6.jpg";
import shoes7 from "../asset/shoes7.jpg";
import shoes8 from "../asset/shoes8.jpg";
import shoes9 from "../asset/shoes9.jpg";

import fashion1 from "../asset/fashion1.jpg";
import fashion2 from "../asset/fashion2.webp";
import fashion3 from "../asset/fashion3.jpg";
import fashion4 from "../asset/fashion4.jpg";
import fashion5 from "../asset/fashion5.jpg";
import fashion6 from "../asset/fashion6.jpg";
import fashion7 from "../asset/fashion7.jpg";
import fashion8 from "../asset/fashion8.jpg";
import fashion9 from "../asset/fashion9.jpg";

import bag1 from "../asset/bag1.jpg";
import bag2 from "../asset/bag2.jpg";
import bag3 from "../asset/bag3.jpg";
import bag4 from "../asset/bag4.webp";
import bag5 from "../asset/bag5.webp";
import bag6 from "../asset/bag6.jpg";
import bag7 from "../asset/bag7.jpg";
import bag8 from "../asset/bag8.avif";
import bag9 from "../asset/bag9.png";

import watch1 from "../asset/watch1.webp";
import watch2 from "../asset/watch2.jpg";
import watch3 from "../asset/watch3.webp";
import watch4 from "../asset/watch4.webp";
import watch5 from "../asset/watch5.jpg";
import watch6 from "../asset/watch6.jpg";
import watch7 from "../asset/watch7.jpg";
import watch8 from "../asset/watch8.webp";
import watch9 from "../asset/watch9.webp";
import watch10 from "../asset/watch10.webp";


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
      <Shoes />
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

function Shoes() {
  return (
    <>
      <section className="Product active" id="product">
        <div className="product-container" id="product-container">
          <div className="product-info" id="product-info">
            <img
              className="product-image"
              id="product-image"
              src={shoes5}
              alt=""
            />
            <div className="product-text">
              <div className="name-price">
                <h3 className="product-name">Jecket Treamvelet</h3>
                <p className="product-price">150.0$</p>
              </div>
              <p className="product-details">
                Product product-details dverbgern erhehtr erehge
              </p>
              <div className="product-card" id="card">
                <div className="star">
                  <i className="bx bx-star"></i>
                  <i className="bx bx-star"></i>
                  <i className="bx bx-star"></i>
                  <i className="bx bx-star"></i>
                  <i className="bx bxs-star-half"></i>
                </div>
                <i className="bx bx-shopping-bag add-to-cart"></i>
              </div>
            </div>
          </div>
          <div className="product-info" id="product-info">
            <img
              className="product-image"
              id="product-image"
              src={shoes6}
              alt=""
            />
            <div className="product-text">
              <div className="name-price">
                <h3 className="product-name">Mini Luvis</h3>
                <p className="product-price">80.0$</p>
              </div>
              <p className="product-details">
                Product product-details dverbgern erhehtr erehge
              </p>
              <div className="product-card" id="card">
                <div className="star">
                  <i className="bx bx-star"></i>
                  <i className="bx bx-star"></i>
                  <i className="bx bx-star"></i>
                  <i className="bx bx-star"></i>
                  <i className="bx bxs-star-half"></i>
                </div>
                <i className="bx bx-shopping-bag add-to-cart"></i>
              </div>
            </div>
          </div>

          <div className="product-info" id="product-info">
            <img
              className="product-image"
              id="product-image"
              src={shoes7}
              alt=""
            />
            <div className="product-text">
              <div className="name-price">
                <h3 className="product-name">Li Maton</h3>
                <p className="product-price">60.0$</p>
              </div>
              <p className="product-details">
                Product product-details dverbgern erhehtr erehge
              </p>
              <div className="product-card" id="card">
                <div className="star">
                  <i className="bx bx-star"></i>
                  <i className="bx bx-star"></i>
                  <i className="bx bx-star"></i>
                  <i className="bx bx-star"></i>
                  <i className="bx bxs-star-half"></i>
                </div>
                <i className="bx bx-shopping-bag add-to-cart"></i>
              </div>
            </div>
          </div>
          <div className="product-info" id="product-info">
            <img
              className="product-image"
              id="product-image"
              src={shoes8}
              alt=""
            />
            <div className="product-text">
              <div className="name-price">
                <h3 className="product-name">Luvis Jecket</h3>
                <p className="product-price">30.0$</p>
              </div>
              <p className="product-details">
                Product product-details dverbgern erhehtr erehge
              </p>
              <div className="product-card" id="card">
                <div className="star">
                  <i className="bx bx-star"></i>
                  <i className="bx bx-star"></i>
                  <i className="bx bx-star"></i>
                  <i className="bx bx-star"></i>
                  <i className="bx bxs-star-half"></i>
                </div>
                <i className="bx bx-shopping-bag add-to-cart"></i>
              </div>
            </div>
          </div>

          <div className="product-info" id="product-info">
            <img
              className="product-image"
              id="product-image"
              src={fashion1}
              alt=""
            />
            <div className="product-text">
              <div className="name-price">
                <h3 className="product-name">Jacket Suit</h3>
                <p className="product-price">$10.00</p>
              </div>
              <p className="product-details">
                Product product-details dverbgern erhehtr erehge
              </p>
              <div className="product-card" id="card">
                <div className="star">
                  <i className="bx bx-star"></i>
                  <i className="bx bx-star"></i>
                  <i className="bx bx-star"></i>
                  <i className="bx bx-star"></i>
                  <i className="bx bxs-star-half"></i>
                </div>
                <i className="bx bx-shopping-bag add-to-cart"></i>
              </div>
            </div>
          </div>
          <div className="product-info" id="product-info">
            <img
              className="product-image"
              id="product-image"
              src={fashion2}
              alt=""
            />
            <div className="product-text">
              <div className="name-price">
                <h3 className="product-name">Weather Jiut</h3>
                <p className="product-price">$20.0</p>
              </div>
              <p className="product-details">
                Product product-details dverbgern erhehtr erehge
              </p>
              <div className="product-card" id="card">
                <div className="star">
                  <i className="bx bx-star"></i>
                  <i className="bx bx-star"></i>
                  <i className="bx bx-star"></i>
                  <i className="bx bx-star"></i>
                  <i className="bx bxs-star-half"></i>
                </div>
                <i className="bx bx-shopping-bag add-to-cart"> </i>
              </div>
            </div>
          </div>
          <div className="product-info" id="product-info">
            <img
              className="product-image"
              id="product-image"
              src={fashion3}
              alt=""
            />
            <div className="product-text">
              <div className="name-price">
                <h3 className="product-name">Luvist tuon</h3>
                <p className="product-price">$50.0</p>
              </div>
              <p className="product-details">
                Product product-details dverbgern erhehtr erehge
              </p>
              <div className="product-card" id="card">
                <div className="star">
                  <i className="bx bx-star"></i>
                  <i className="bx bx-star"></i>
                  <i className="bx bx-star"></i>
                  <i className="bx bx-star"></i>
                  <i className="bx bxs-star-half"></i>
                </div>
                <i className="bx bx-shopping-bag add-to-cart"></i>
              </div>
            </div>
          </div>
          <div className="product-info" id="product-info">
            <img
              className="product-image"
              id="product-image"
              src={fashion4}
              alt=""
            />
            <div className="product-text">
              <div className="name-price">
                <h3 className="product-name">Sweather Jack</h3>
                <p className="product-price">60.0$</p>
              </div>
              <p className="product-details">
                Product product-details dverbgern erhehtr erehge
              </p>
              <div className="product-card" id="card">
                <div className="star">
                  <i className="bx bx-star"></i>
                  <i className="bx bx-star"></i>
                  <i className="bx bx-star"></i>
                  <i className="bx bx-star"></i>
                  <i className="bx bxs-star-half"></i>
                </div>
                <i className="bx bx-shopping-bag add-to-cart"></i>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="Product" id="product">
        <div class="product-container" id="product-container">
          <div class="product-info" id="product-info">
            <img
              class="product-image"
              id="product-image"
              src={watch5}
              alt=""
            />
            <div class="product-text">
              <div class="name-price">
                <h3 class="product-name">Oris Aqius Date</h3>
                <p class="product-price">150.0$</p>
              </div>
              <p class="product-details">
                Product product-details dverbgern erhehtr erehge
              </p>
              <div class="product-card" id="card">
                <div class="star">
                  <i class="bx bx-star"></i>
                  <i class="bx bx-star"></i>
                  <i class="bx bx-star"></i>
                  <i class="bx bx-star"></i>
                  <i class="bx bxs-star-half"></i>
                </div>
                <i class="bx bx-shopping-bag add-to-cart"></i>
              </div>
            </div>
          </div>
          <div class="product-info" id="product-info">
            <img
              class="product-image"
              id="product-image"
              src={watch6}
              alt=""
            />
            <div class="product-text">
              <div class="name-price">
                <h3 class="product-name">Suunto 5 Peak Mist Blue</h3>
                <p class="product-price">80.0$</p>
              </div>
              <p class="product-details">
                Product product-details dverbgern erhehtr erehge
              </p>
              <div class="product-card" id="card">
                <div class="star">
                  <i class="bx bx-star"></i>
                  <i class="bx bx-star"></i>
                  <i class="bx bx-star"></i>
                  <i class="bx bx-star"></i>
                  <i class="bx bxs-star-half"></i>
                </div>
                <i class="bx bx-shopping-bag add-to-cart"></i>
              </div>
            </div>
          </div>

          <div class="product-info" id="product-info">
            <img
              class="product-image"
              id="product-image"
              src={watch7}
              alt=""
            />
            <div class="product-text">
              <div class="name-price">
                <h3 class="product-name">Radley ladies Strap</h3>
                <p class="product-price">60.0$</p>
              </div>
              <p class="product-details">
                Product product-details dverbgern erhehtr erehge
              </p>
              <div class="product-card" id="card">
                <div class="star">
                  <i class="bx bx-star"></i>
                  <i class="bx bx-star"></i>
                  <i class="bx bx-star"></i>
                  <i class="bx bx-star"></i>
                  <i class="bx bxs-star-half"></i>
                </div>
                <i class="bx bx-shopping-bag add-to-cart"></i>
              </div>
            </div>
          </div>
          <div class="product-info" id="product-info">
            <img
              class="product-image"
              id="product-image"
              src={watch8}
              alt=""
            />
            <div class="product-text">
              <div class="name-price">
                <h3 class="product-name">YA157304</h3>
                <p class="product-price">30.0$</p>
              </div>
              <p class="product-details">
                Product product-details dverbgern erhehtr erehge
              </p>
              <div class="product-card" id="card">
                <div class="star">
                  <i class="bx bx-star"></i>
                  <i class="bx bx-star"></i>
                  <i class="bx bx-star"></i>
                  <i class="bx bx-star"></i>
                  <i class="bx bxs-star-half"></i>
                </div>
                <i class="bx bx-shopping-bag add-to-cart"></i>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="Product" id="product">
      <div class="product-container" id="product-container">
        <div class="product-info" id="product-info">
          <img
            class="product-image"
            id="product-image"
            src={bag8}
            alt=""
          />
          <div class="product-text">
            <div class="name-price">
              <h3 class="product-name">Jecket Treamvelet</h3>
              <p class="product-price">150.0$</p>
            </div>
            <p class="product-details">
              Product product-details dverbgern erhehtr erehge
            </p>
            <div class="product-card" id="card">
              <div class="star">
                <i class="bx bx-star"></i>
                <i class="bx bx-star"></i>
                <i class="bx bx-star"></i>
                <i class="bx bx-star"></i>
                <i class="bx bxs-star-half"></i>
              </div>
              <i class="bx bx-shopping-bag add-to-cart"></i>
            </div>
          </div>
        </div>
        <div class="product-info" id="product-info">
          <img
            class="product-image"
            id="product-image"
            src={bag7}
            alt=""
          />
          <div class="product-text">
            <div class="name-price">
              <h3 class="product-name">Mini Luvis</h3>
              <p class="product-price">80.0$</p>
            </div>
            <p class="product-details">
              Product product-details dverbgern erhehtr erehge
            </p>
            <div class="product-card" id="card">
              <div class="star">
                <i class="bx bx-star"></i>
                <i class="bx bx-star"></i>
                <i class="bx bx-star"></i>
                <i class="bx bx-star"></i>
                <i class="bx bxs-star-half"></i>
              </div>
              <i class="bx bx-shopping-bag add-to-cart"></i>
            </div>
          </div>
        </div>

        <div class="product-info" id="product-info">
          <img
            class="product-image"
            id="product-image"
            src={bag5}
            alt=""
          />
          <div class="product-text">
            <div class="name-price">
              <h3 class="product-name">Li Maton</h3>
              <p class="product-price">60.0$</p>
            </div>
            <p class="product-details">
              Product product-details dverbgern erhehtr erehge
            </p>
            <div class="product-card" id="card">
              <div class="star">
                <i class="bx bx-star"></i>
                <i class="bx bx-star"></i>
                <i class="bx bx-star"></i>
                <i class="bx bx-star"></i>
                <i class="bx bxs-star-half"></i>
              </div>
              <i class="bx bx-shopping-bag add-to-cart"></i>
            </div>
          </div>
        </div>
        <div class="product-info" id="product-info">
          <img
            class="product-image"
            id="product-image"
            src={bag6}
            alt=""
          />
          <div class="product-text">
            <div class="name-price">
              <h3 class="product-name">Luvis Jecket</h3>
              <p class="product-price">30.0$</p>
            </div>
            <p class="product-details">
              Product product-details dverbgern erhehtr erehge
            </p>
            <div class="product-card" id="card">
              <div class="star">
                <i class="bx bx-star"></i>
                <i class="bx bx-star"></i>
                <i class="bx bx-star"></i>
                <i class="bx bx-star"></i>
                <i class="bx bxs-star-half"></i>
              </div>
              <i class="bx bx-shopping-bag add-to-cart"></i>
            </div>
          </div>
        </div>
      </div>
    </section>

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
    </>
  );
}

export default HomeScreen;
