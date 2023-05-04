import HomeScreen from "../src/screen/Home/HomeScreen";
import ServiceScreen from "../src/screen/Service/ServiceScreen";
import ShopScreen from "../src/screen/Shop/ShoScreen";
import ContactScreen from "../src/screen/Contact/ContactScreen";
import TeamScreen from "../src/screen/Team/TeamScreen";

import FashionScreen from "../src/screen/product/Fashion/FashionScreen";
import ShoesScreen from "../src/screen/product/Shoes/ShoesScreen";
import BagScreen from "../src/screen/product/Bag/BagScreen";
import WatchScreen from "../src/screen/product/Watch/WatchScreen";
import ToyScreen from "../src/screen/product/Toy/ToyScreen";
import AccessoriesScreen from "../src/screen/product/Accessories/AccessoriesScreen";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import "./screen/Home/HomeScreen.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h3 className="header">RECYCLING WEBSITE</h3>
        <nav className="nav-bar">
          <h1 className="logo">Anti WastE</h1>
          <div className="nav-container">
            <li>
              <Link className="item" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="item" to="/Service">
                Services
              </Link>
            </li>
            <li>
              <Link className="item" to="/Shop">
                Shop
              </Link>
            </li>
            <li>
              <Link className="item" to="/Contact">
                Contact us
              </Link>
            </li>
            <li>
              <Link className="item" to="/Team">
                Team
              </Link>
            </li>
          </div>
          <div className="nav-icon" id="nav-icon">
            <i className="bx bx-search btn-search" id="search"></i>
            <i className="bx bxs-cart-download icon" id="shopping-cart"></i>

            <div className="sign-account">
              <div className="log-to-signin">
                <p>Hello👋</p>
                <Link href="#" className="login" id="cta">
                  Sign In
                </Link>
              </div>
              <p>Account</p>
            </div>
          </div>
        </nav>
        <div className="menu-category" id="menu-category">
          <div className="menu-content">
            <div className="menu-item">
              <i className="bx bx-menu menu-icon" id="menu"></i>
              <Link className="item" to="/">
                All
              </Link>
              <Link className="item" to="/Fashion">
                Fashion/
              </Link>
              <Link className="item" to="/Shoes">
                Shoes/
              </Link>
              <Link className="item" to="/Bag">
                Bag/
              </Link>
              <Link className="item" to="/Watch">
                Watches/
              </Link>
              <Link className="item" to="/Toy">
                Toy/
              </Link>
              <Link className="item" to="/Accessories">
                Accessories/
              </Link>
              {/* <Link className="item" to ="/Watch">Toys/</Link>
              <Link className="item" to ="/Watch">Accessories/</Link> */}
            </div>
          </div>
        </div>

        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/Service" element={<ServiceScreen />} />
          <Route path="/Shop" element={<ShopScreen />} />
          <Route path="/Contact" element={<ContactScreen />} />
          <Route path="/Team" element={<TeamScreen />} />
        </Routes>
        <Routes>
          <Route path="/Fashion" element={<FashionScreen />} />
          <Route path="/Shoes" element={<ShoesScreen />} />
          <Route path="/Bag" element={<BagScreen />} />
          <Route path="/Watch" element={<WatchScreen />} />
          <Route path="/Toy" element={<ToyScreen />} />
          <Route path="/Accessories" element={<AccessoriesScreen />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

// Path: my-app\src\App.js
// Compare this snippet from my-app\src\screen\Home\HomeScreen.js:
// import React from "react";
//
