import React from "react";
import "./cart.css";
import Image from "../screen/asset/fashion4.jpg";

function Cart() {
   
  return (
    <div className="cart-item">
      <h1>Cart</h1>
      <div className="header-table">
        <div className="pro-Image">
          <p>Pro-Image</p>
        </div>
        <div className="cart-item-details header-title">
          <div className="cart-item-brand ">
            <p>Brand</p>
          </div>
          <div className="cart-item-name">
            <p>Name</p>
          </div>
          <div className="cart-item-price">
            <p>Price</p>
          </div>
          <div className="cart-item-quantity">
            <p>Quantity</p>
          </div>
        </div>
      </div>

      <div className="cart-content">
        <div className="cart-item-image">
          <img src={Image} alt="product" />
        </div>
        <div className="cart-item-details">
          <div className="cart-item-brand">
            <p>Brand</p>
          </div>
          <div className="cart-item-name">
            <p>Name</p>
          </div>
          <div className="cart-item-price">
            <p>Price</p>
          </div>
          <div className="cart-item-quantity">
            <p>Quantity</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
