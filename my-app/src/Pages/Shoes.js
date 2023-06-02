import React, { useState } from "react";
import SHOES from "../ShoesProduct";
import "../Pages/CSS/fashion.css";
import Product from "../components/Product";
function Shoes() {
  const [shoes] = useState(SHOES);

  return (
    <div>
      <Product product={shoes} />;
    </div>
  );
}

export default Shoes;
