import React from "react";
import "../../component/cart.css";
import Cart from "../../component/Cart";

const DisplayCart = ({ cart, qty, qtyMinus, removeItemFromCart }) => {
  return (
    <Cart
      cart={cart}
      qty={qty}
      qtyMinus={qtyMinus}
      removeItemFromCart={removeItemFromCart}
    ></Cart>
  );
};
export default DisplayCart;
