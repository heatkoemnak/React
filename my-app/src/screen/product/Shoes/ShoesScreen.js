import React from "react";
import { Link } from "react-router-dom";

// import shoes3 from "../../../screen/asset/shoes3.jpg";
// import shoes4 from "../../../screen/asset/shoes4.jpg";
import shoes5 from "../../../screen/asset/shoes5.jpg";
import shoes6 from "../../../screen/asset/shoes6.jpg";
import shoes7 from "../../../screen/asset/shoes7.jpg";
import shoes8 from "../../../screen/asset/shoes8.jpg";
// import shoes9 from "../../../screen/asset/shoes9.jpg";

// import related1 from "../../../screen/asset/related_to_recycle1.jpg";
import related2 from "../../../screen/asset/related_to_recycle2.jpg";
// import related3 from "../../../screen/asset/related_to_recycle3.jpg";
// import related4 from "../../../screen/asset/related_to_recycle4.jpg";
import related5 from "../../../screen/asset/related_to_recycle5.jpg";
// import related6 from "../../../screen/asset/related_to_recycle6.jpg";
// import related7 from "../../../screen/asset/related_to_recycle7.jpg";
// import related8 from "../../../screen/asset/related_to_recycle8.jpg";
// import related9 from "../../../screen/asset/related_to_recycle9.jpg";
// import related10 from "../../../screen/asset/related_to_recycle10.jpg";
import related11 from "../../../screen/asset/related-to-recycle11.jpg";

function ShoesScreen() {
  return (
    <>
      <div className="search-product">
        <input type="text" placeholder="Search Product" />
        <button className="search-btn">Search</button>
      </div>
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
        </div>
      </section>
      <Related />
      <Footer />
    </>
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

export default ShoesScreen;
