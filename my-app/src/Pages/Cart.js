import React from "react";
import "../Pages/CSS/cart.css";
function Cart({ cart }) {
  return (
    <div className="cart-list">
      <h2>YOUR CART</h2>
      {cart.map((cartItem) => {
        return (
          <div className="cart-item" key={cartItem.id}>
            <div>{cartItem.name}</div>
            <div>{cartItem.price}</div>
            <div>{cartItem.quantity}</div>
          </div>
        );
      })}
    </div>
  );
}

export default Cart;
