import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./CartContext";
import CartContext from "./CartContext";
import { useContext, useState } from "react";

import Home from "./Pages/Home";

import Cart from "./Pages/Cart";
import Navbar from "./components/Navbar";
import MenuProduct from "./components/MenuProduct";
import Fashion from "./Pages/Fashion";
import Shoes from "./Pages/Shoes";
import Bag from "./Pages/Bag";
import Watch from "./Pages/Watch";
import Toy from "./Pages/Toy";
import Accessary from "./Pages/Accessary";

import Materails from "./components/Materails";
import Slider from "./components/Slider";
import FashionSlider from "./SLIDER/FashionSlider";
import ShoesSlider from "./SLIDER/ShoesSlider";
import BagSlider from "./SLIDER/BagSlider";
import RouteMap from "./components/RouteMap";
import CartDisplay from "./Pages/CartDisplay";

function App() {
  const [menu, setMenu] = useState(true);
  const handleMenu = () => {
    setMenu((menu) => !menu);
  };
  return (
    <div className="App">
      <CartProvider>
        <Router>
          <Navbar handleMenu={handleMenu}></Navbar>
          <RouteMap />
          <div className="routes">
            {menu ? <MenuProduct /> : <Materails />}

            <div className="right-page">
              <Routes>
                <Route path="/" element={<Slider />} />
                <Route path="/cart" element={<CartDisplay />} />
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
        </Router>
      </CartProvider>
    </div>
  );
}

export default App;
