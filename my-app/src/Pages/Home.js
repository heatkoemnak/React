import React from "react";
import "./CSS/home.css";
import Product from "../components/Product";
import "../style/Product.css";
import Cart from "../Pages/Cart";
import { useContext } from "react";
import CartContext from "../CartContext";

function Home() {
  const { cart, product, addToCart } = useContext(CartContext);

  return (
    <div className="home">
      <Product product={product} addToCart={addToCart}></Product>
      <Cart cart={cart}></Cart>
    </div>
  );
}

export default Home;
