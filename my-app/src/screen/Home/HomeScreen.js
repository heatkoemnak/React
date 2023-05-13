import React from "react";
import { useState } from "react";

import Cart from "../../component/Cart";
import Product from "./Product";
import data from "../../component/Data";
import SeeMore from "../../component/seeMore";
import SearchProduct from "../../component/searchProduct";
import Slider from "../../component/slider";
import Related from "../../component/Related";
import Materails from "../../component/materials ";
import Footer from "../../component/footer";


const HomeScreen = () => {
  const [product, setProduct] = useState(data);

  const [cart, setCart] = useState([]);

  const addToCart = (data) => {
    setCart(...cart, data);
  };
  console.log(cart);

  //set auto slider

  return (
    <>
      <Cart cart={cart}></Cart>
      <Slider />
      <Materails />
      <SearchProduct />
      <SeeMore />
      <Product product={product} addToCart={addToCart}></Product>
      <Related />
      <Footer />
    </>
  );
};



export default HomeScreen;
