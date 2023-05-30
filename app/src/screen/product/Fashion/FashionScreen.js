import React, { useState } from "react";
// import { Link } from "react-router-dom";
import Navbar from "../../../component/navbar";
import MenuProduct from "../../../component/MenuProduct";
import Cart from "../../../component/Cart";
// import data from "../../../component/Data";
import Footer from "../../../component/footer";
import Related from "../../../component/Related";
import Product from "../../../component/Product";
import fashion1 from "../../asset/fashion1.jpg";
import fashion2 from "../../asset/fashion2.webp";
import fashion3 from "../../asset/fashion3.jpg";
import fashion4 from "../../asset/fashion4.jpg";
import fashion5 from "../../asset/fashion5.jpg";
import fashion6 from "../../asset/fashion6.jpg";
import fashion7 from "../../asset/fashion7.jpg";
import fashion8 from "../../asset/fashion8.jpg";
import fashion10 from "../../asset/fashion10.jpg";
import fashion11 from "../../asset/fashion11.jpg";

function FashionScreen() {
  const [product] = useState([
    {
      id: 1,
      name: "Product 1",
      image: fashion1,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      price: 10,
    },
    {
      id: 2,
      name: "Product 2",
      image: fashion2,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      price: 20,
    },
    {
      id: 3,
      name: "Product 3",
      image: fashion3,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      price: 10,
    },
    {
      id: 4,
      name: "Product 4",
      image: fashion4,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      price: 20,
    },
    {
      id: 5,
      name: "Product 5",
      image: fashion5,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      price: 10,
    },
    {
      id: 6,
      name: "Product 6",
      image: fashion6,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      price: 20,
    },
    {
      id: 7,
      name: "Product 7",
      image: fashion7,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      price: 10,
    },
    {
      id: 8,
      name: "Product 8",
      image: fashion8,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      price: 20,
    },
    {
      id: 9,
      name: "Product 7",
      image: fashion10,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      price: 10,
    },
    {
      id: 10,
      name: "Product 8",
      image: fashion11,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      price: 20,
    },
  ]);
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
export default FashionScreen;
