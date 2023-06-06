import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import Navbar from "./components/Navbar";
import MenuProduct from "./components/MenuProduct";
import Fashion from "./Pages/Fashion";
import Shoes from "./Pages/Shoes";
import Bag from "./Pages/Bag";
import Watch from "./Pages/Watch";
import Toy from "./Pages/Toy";
import Accessary from "./Pages/Accessary";
// import Materails from "./components/Materails";
import FashionSlider from "./SLIDER/FashionSlider";
import ShoesSlider from "./SLIDER/ShoesSlider";
import BagSlider from "./SLIDER/BagSlider";

import React, { useState } from "react";
import Cart from "./Pages/Cart";
import { CartProvider } from "./CartContext";

function App() {
  const [menu, setMenu] = useState(false);
  const handleMenu = () => {
    setMenu((menu) => !menu);
  };

  return (
    <div className="App">
      <CartProvider>
        <Router>
          <Navbar handleMenu={handleMenu}></Navbar>
          <div className="routes">
            {menu ? <MenuProduct /> : null}
            <div className="right-page">
              <Routes>
                <Route path="/cart" element={<Cart />} />
                <Route path="/fashion" element={<FashionSlider />} />
                <Route path="/shoes" element={<ShoesSlider />} />
                <Route path="/bag" element={<BagSlider />} />
                <Route path="/watch" element={<Watch />} />
                <Route path="/toy" element={<Toy />} />
                <Route path="/accessary" element={<Accessary />} />
              </Routes>
            </div>
          </div>
          <div className="browse">
            {/* <Cart /> */}
            <div className="product-right-page">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/fashion" element={<Fashion />} />
                <Route path="/shoes" element={<Shoes />} />
                <Route path="/bag" element={<Bag />} />
                <Route path="/watch" element={<Watch />} />
                <Route path="/toy" element={<Toy />} />
                <Route path="/accessary" element={<Accessary />} />
              </Routes>
            </div>
          </div>
          {/* <Materails /> */}
        </Router>
      </CartProvider>
    </div>
  );
}

export default App;
