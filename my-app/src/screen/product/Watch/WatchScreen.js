import React from "react";
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

function Watchcreen() {
  return (
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
    
  );
}

export default Watchcreen;
