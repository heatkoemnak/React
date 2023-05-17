import React from "react";
import { useState } from "react";
import Product from "../../component/Product";
import data from "../../component/Data";
import SeeMore from "../../component/seeMore";
import SearchProduct from "../../component/searchProduct";
import Slider from "../../component/slider";
import Related from "../../component/Related";
import Materails from "../../component/materials ";
import Footer from "../../component/footer";
import Cart from "../../component/Cart";
import Navbar from "../../component/navbar";
import MenuProduct from "../../component/MenuProduct";

const HomeScreen = () => {
  const [product] = useState(data);
  const [cart, setTheCart] = useState([]);
  const addToCart = (data) => {
    setTheCart([...cart, { ...data, quantity: 1 }]);
  };
  const [ShowCart, setShowCart] = useState(false);
  const handleCart = () => {
    setShowCart((ShowCart) => !ShowCart);
  };

  return (
    <>
      <Navbar count={cart.length} handleCart={handleCart}></Navbar>
      <MenuProduct />
      <Slider />
      <Materails />
      <SearchProduct />
      <SeeMore />
      {ShowCart ? <Cart cart={cart}></Cart> : null}
      <Product product={product} addToCart={addToCart}></Product>

      <Related />
      <Footer />
    </>
  );
};

export default HomeScreen;
