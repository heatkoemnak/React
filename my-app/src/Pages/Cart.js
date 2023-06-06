import React from "react";
import "../Pages/CSS/cart.css";
import { useContext } from "react";
import CartContext from "../CartContext";
function Cart() {
  const { cart } = useContext(CartContext);

  return (
    <div className="cart-list">
      <h2>YOUR CART</h2>
      {cart.map((cartItem) => {
        return (
          <div className="cart-item" key={cartItem.id}>
            <div>
              <img src={cartItem.image} alt="" width={60} height={60}></img>
            </div>

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
