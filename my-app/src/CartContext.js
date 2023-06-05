import React, { createContext, useState } from "react";
import PRODUCTS from "./HomeProduct";
import FASHION from "./FashoinProduct";
import SHOES from "./ShoesProduct";
import BAG from "./BagProduct";
import WATCH from "./WatchProduct";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [product] = useState(PRODUCTS);
  const [fashion] = useState(FASHION);
  const [shoes] = useState(SHOES);
  const [bag] = useState(BAG);
  const [watch] = useState(WATCH);

  const [cart, setCart] = useState([]);
  const addToCart = (product, fashion, shoes, bag, watch) => {
    setCart([
      ...cart,
      { ...product, ...fashion, ...shoes, ...bag, ...watch, quantity: 1 },
    ]);
  };
  return (
    <CartContext.Provider
      value={{ cart, product, fashion, shoes, bag, watch, addToCart }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartContext;
