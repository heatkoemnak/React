import React from "react";
import "./cart.css";
import { useState } from "react";
import Product from "../screen/Home/Product";
import data from "../component/Data";

// import Image from "../screen/asset/fashion4.jpg";

const Cart = ({ cart }) => {
  return (
    <div>
      <h2>Cart</h2>
      <ul>
        {cart.map((item) => (
          <>
            <li key={item.id}>
              {item.image}
              {item.name}
              {item.price}
            </li>
          </>
        ))}
      </ul>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <h1>Shopping App</h1>
    </div>
  );
};

export default App;
