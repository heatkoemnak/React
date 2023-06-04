import React, { createContext, useState } from "react";
import PRODUCTS from "./HomeProduct";
import FASHION from "./FashoinProduct";
const CartContext = createContext();

export function CartProvider({ children }) {
  const [product] = useState(PRODUCTS);
  const [fashion] = useState(FASHION);
  const [cart, setCart] = useState([]);
  const addToCart = (product, fashion) => {
    setCart([...cart, { ...product, ...fashion, quantity: 1 }]);
  };
  return (
    <CartContext.Provider value={{ cart, product, fashion, addToCart }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartContext;
