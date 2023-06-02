import React, { useState } from "react";
import "./CSS/home.css";
import PRODUCTS from "../HomeProduct";
import Product from "../components/Product";
import "../style/Product.css";
import Cart from "../Pages/Cart";

function Home() {
  const [count, setCount] = useState(0);
  const [product] = useState(PRODUCTS);
  const [cart, setCart] = useState([]);
  const addToCart = (product) => {
    setCart([...cart, { ...product, quantity: 1 }]);
    setCount(count + 1);
  };
  return (
    <div className="home">
      <Cart cart={cart}></Cart>
      <Product product={product} addToCart={addToCart}></Product>
    </div>
  );
}

export default Home;
