/* eslint-disable no-undef */
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
import Header from "../../component/header";

const HomeScreen = () => {
  const [product] = useState(data);
  const [cart, setCart] = useState([]);
  const addToCart = (product) => {
    setCart([...cart, { ...product, quantity: 1 }]);
  };
  const [ShowCart, setShowCart] = useState(false);
  const handleCart = () => {
    setShowCart((ShowCart) => !ShowCart);
  };

  const removeItemFromCart = (id) => {
    console.log(cart.filter((item) => item.id !== id));
    setCart(cart.filter((item) => item.id !== id));
  };

  const qty = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };
  const qtyMinus = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity - 1 } : item
      )
    );
  };

  return (
    <>
      <Header />
      <Navbar count={cart.length} handleCart={handleCart}></Navbar>
      <MenuProduct />
      <Slider />
      <Materails />
      <SeeMore />
      {ShowCart ? (
        <Cart
          cart={cart}
          removeItemFromCart={removeItemFromCart}
          qty={qty}
          qtyMinus={qtyMinus}
        ></Cart>
      ) : null}
      <Product product={product} addToCart={addToCart}></Product>

      <Related />
      <Footer />
    </>
  );
};

export default HomeScreen;
