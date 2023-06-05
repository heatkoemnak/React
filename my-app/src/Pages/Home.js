import React from "react";
import "./CSS/home.css";
import Product from "../components/Product";
import Slider from "../components/Slider";
import "../style/Product.css";
import Cart from "../Pages/Cart";
import { useContext } from "react";
import CartContext from "../CartContext";

function Home() {
  const { cart, product, addToCart } = useContext(CartContext);

  return (
    <>
      <div className="home">
        <Slider />
        <Cart cart={cart}></Cart>
      </div>
      <Product product={product} addToCart={addToCart}></Product>
    </>
  );
}

export default Home;
