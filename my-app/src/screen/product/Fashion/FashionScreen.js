import React, { useState } from "react";
// import { Link } from "react-router-dom";
import Navbar from "../../../component/navbar";
import MenuProduct from "../../../component/MenuProduct";
// import Cart from "../../../component/Cart";
// import data from "../../../component/Data";
import Footer from "../../../component/footer";
import Related from "../../../component/Related";
import Product from "../../../component/Product";

function FashionScreen() {
  return (
    <>
      <Navbar />
      <MenuProduct />
      <Product />
      <Related />
      <Footer />
    </>
  );
}
export default FashionScreen;
