import React, { useState } from "react";
import Navbar from "../../../component/navbar";
import MenuProduct from "../../../component/MenuProduct";
import Product from "../../../component/Product";
import Footer from "../../../component/footer";
import Related from "../../../component/Related";
import Cart from "../../../component/Cart";

import bag1 from "../../../screen/asset/bag1.jpg";
import bag3 from "../../../screen/asset/bag3.jpg";
import bag5 from "../../../screen/asset/bag5.webp";
import bag6 from "../../../screen/asset/bag6.jpg";
import bag7 from "../../../screen/asset/bag7.jpg";

function BagScreen() {
  const product = [
    {
      id: 1,
      name: "Jecket Treamvelet",
      price: 120.4,
      image: bag1,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 2,
      name: "Jecket Treamvelet",
      price: 70.4,
      image: bag3,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 3,

      name: "Mini Luvis",
      price: 80.0,
      image: bag5,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 4,
      name: "Mini Luvis",
      price: 60.0,
      image: bag6,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 5,
      name: "Mini Luvis",
      price: 80.5,
      image: bag7,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
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

export default BagScreen;
