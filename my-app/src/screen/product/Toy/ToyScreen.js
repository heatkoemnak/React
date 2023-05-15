import React from "react";
import Navbar from "../../../component/navbar";
import MenuProduct from "../../../component/MenuProduct";

function ToyScreen() {
  return (
    <>
      <Navbar />
      <MenuProduct />
      <div className="search-product">
        <input type="text" placeholder="Search Product" />
        <button className="search-btn">Search</button>
      </div>
    </>
  );
}

export default ToyScreen;
