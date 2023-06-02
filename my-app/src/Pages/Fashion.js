import React, { useState } from "react";
import FASHION from "../FashoinProduct";
import Product from "../components/Product";
import "../Pages/CSS/fashion.css";
function Fashion() {
  const [fashion] = useState(FASHION);
  return (
    <div>
      <Product product={fashion} />;
    </div>
  );
}

export default Fashion;
