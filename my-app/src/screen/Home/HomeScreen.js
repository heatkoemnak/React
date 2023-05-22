import React from "react";
import { useState } from "react";
import Product from "../../component/Product";
import data from "../../component/Data";
import SeeMore from "../../component/seeMore";
import Slider from "../../component/slider";
import Related from "../../component/Related";
import Materails from "../../component/materials ";
import Footer from "../../component/footer";
import Cart from "../../component/Cart";
import Navbar from "../../component/navbar";
import MenuProduct from "../../component/MenuProduct";
import Header from "../../component/header"


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

  const handleRemoveItem = (cart) => {
    const newCart = cart.find((cartItem) => cartItem.id !== cart.id);
    setTheCart(newCart);
  };

  return (
    <>
      <Header/>
      <Navbar count={cart.length} handleCart={handleCart}></Navbar>
      <MenuProduct />
      <Slider />
      <Materails />
      <SeeMore />
      {ShowCart ? (
        <Cart cart={cart} handleRemoveItem={handleRemoveItem}></Cart>
      ) : null}
      <Product product={product} addToCart={addToCart}></Product>

      <Related />
      <Footer />
    </>
  );
};

export default HomeScreen;
