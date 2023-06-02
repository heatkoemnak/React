import BAG from "../BagProduct";
import "../Pages/CSS/fashion.css";

import React, { useState } from "react";
import Product from "../components/Product";
function Bag() {
  const [bag] = useState(BAG);

  return (
    <div>
      <Product product={bag} />;
    </div>
  );
}

export default Bag;
