import React, { useState } from "react";

import Navbar from "../../../component/navbar";
import MenuProduct from "../../../component/MenuProduct";
import Product from "../../../component/Product";
import Footer from "../../../component/footer";
import Related from "../../../component/Related";
import Cart from "../../../component/Cart";

import shoes5 from "../../../screen/asset/shoes5.jpg";
import shoes6 from "../../../screen/asset/shoes6.jpg";
import shoes7 from "../../../screen/asset/shoes7.jpg";
import shoes8 from "../../../screen/asset/shoes8.jpg";

function ShoesScreen() {
  const product = [
    {
      id: 1,
      name: "Jecket Treamvelet",
      price: 150.0,
      image: shoes5,
      description:
        "Product product-details dverbgern erhehtr erehge Product product-details dverbgern erhehtr erehge Product product-details dverbgern erhehtr erehge",
    },
    {
      id: 2,

      name: "Mini Luvis",
      price: 80.0,
      image: shoes6,
      description:
        "Product product-details dverbgern erhehtr erehge Product product-details dverbgern erhehtr erehge Product product-details dverbgern erhehtr erehge",
    },
    {
      id: 3,
      name: "Mini Luvis",
      price: 60.0,
      image: shoes7,
      description:
        "Product product-details dverbgern erhehtr erehge Product product-details dverbgern erhehtr erehge Product product-details dverbgern erhehtr erehge",
    },
    {
      id: 4,
      name: "Luvis Jecket",
      price: 30.0,
      image: shoes8,
      description:
        "Product product-details dverbgern erhehtr erehge Product product-details dverbgern erhehtr erehge Product product-details dverbgern erhehtr erehge",
    },
  ];
  const [cart, setCart] = useState([]);
  const addToCart = (product) => {
    setCart([...cart, { ...product, quantity: 1 }]);
  };

  const [ShowCart, setShowCart] = useState(false);
  const handleCart = () => {
    setShowCart((ShowCart) => !ShowCart);
  };
  const removeItemFromCart = (id) => {
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
      <Navbar count={cart.length} handleCart={handleCart}></Navbar>
      <MenuProduct />
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
}

export default ShoesScreen;
