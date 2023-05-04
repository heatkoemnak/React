import React from "react";
import { Link } from "react-router-dom";

//inport watch from homeScreen
import watch1 from "../../../screen/asset/watch1.webp";
import watch2 from "../../../screen/asset/watch2.jpg";
import watch3 from "../../../screen/asset/watch3.webp";
import watch4 from "../../../screen/asset/watch4.webp";
import watch5 from "../../../screen/asset/watch5.jpg";
import watch6 from "../../../screen/asset/watch6.jpg";
import watch7 from "../../../screen/asset/watch7.jpg";
import watch8 from "../../../screen/asset/watch8.webp";
import watch9 from "../../../screen/asset/watch9.webp";

import related1 from "../../../screen/asset/related_to_recycle1.jpg";
import related2 from "../../../screen/asset/related_to_recycle2.jpg";
import related3 from "../../../screen/asset/related_to_recycle3.jpg";
import related4 from "../../../screen/asset/related_to_recycle4.jpg";
import related5 from "../../../screen/asset/related_to_recycle5.jpg";
import related6 from "../../../screen/asset/related_to_recycle6.jpg";
import related7 from "../../../screen/asset/related_to_recycle7.jpg";
import related8 from "../../../screen/asset/related_to_recycle8.jpg";
import related9 from "../../../screen/asset/related_to_recycle9.jpg";
import related10 from "../../../screen/asset/related_to_recycle10.jpg";
import related11 from "../../../screen/asset/related-to-recycle11.jpg";

function Watchcreen() {
  return (
    <>
      <div className="search-product">
        <input type="text" placeholder="Search Product" />
        <button className="search-btn">Search</button>
      </div>
      <section class="Product" id="product">
        <div class="product-container" id="product-container">
          <div class="product-info" id="product-info">
            <img class="product-image" id="product-image" src={watch5} alt="" />
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
            <img class="product-image" id="product-image" src={watch6} alt="" />
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
            <img class="product-image" id="product-image" src={watch7} alt="" />
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
            <img class="product-image" id="product-image" src={watch8} alt="" />
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
      <Related />
      <Footer />
    </>
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

export default Watchcreen;
