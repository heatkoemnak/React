import React from "react";
import "./serchProduct.css"

function searchProduct() {
  return (
    <div className="search-product">
      <input type="text" placeholder="Search Product" />
      <button className="search-btn">Search</button>
    </div>
  );
}

export default searchProduct;
