import React from "react";
import "../Pages/CSS/cart.css";
import { useContext } from "react";
import CartContext from "../CartContext";
import { Link } from "react-router-dom";
function Cart() {
  const { cart } = useContext(CartContext);

  return (
    <>
      <p>
        <Link to="/">Continue Shopping</Link>
      </p>
      <div className="cart">
        <div className="cart-list">
          <div className="cart-header">
            <i class="bx bxl-shopify"></i>
            <h2>CART PREVIEW</h2>
          </div>

          {cart.map((cartItem) => {
            return (
              <div className="cart-item" key={cartItem.id}>
                <div className="cart-image">
                  <img
                    src={cartItem.image}
                    alt=""
                    width={120}
                    height={120}
                  ></img>
                  <div className="cart-text">
                    <div className="cart-item-name">{cartItem.name}</div>
                    <div className="cart-item-price">${cartItem.price}</div>
                    <div>{cartItem.quantity}</div>
                  </div>
                </div>
                <div className="delete">
                  <i class="bx bx-x"></i>
                </div>
              </div>
            );
          })}
          <div className="total-price">
            <div className="Total">Total</div>
            <div className="price">$0.00</div>
          </div>
        </div>
        
      </div>
      <div className="payment">
        <h2>PAYMENT</h2>
      </div>
    </>
  );
}

export default Cart;
