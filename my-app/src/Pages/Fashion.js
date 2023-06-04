import React, { useState } from "react";
import Product from "../components/Product";
import Cart from "../Pages/Cart";
import "../Pages/CSS/fashion.css";
import CartContext from "../CartContext";
import { useContext } from "react";

function Fashion() {
  const { cart, fashion, addToCart } = useContext(CartContext);

  return (
    <div className="fashion">
      <Product product={fashion} addToCart={addToCart} />;
      <Cart cart={cart}></Cart>
    </div>
  );
}

export default Fashion;
