import HomeScreen from "../src/screen/Home/HomeScreen";
import ServiceScreen from "../src/screen/Service/ServiceScreen";
import ShopScreen from "../src/screen/Shop/ShoScreen";
import ContactScreen from "../src/screen/Contact/ContactScreen";
import TeamScreen from "../src/screen/Team/TeamScreen";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import "./screen/Home/HomeScreen.css"

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="Navbar">
          <div className="logo">
            <h1>Anti WastE</h1>
          </div>

          <div className="menu">
            <Link className="menu-item" to="/">
              Home
            </Link>
            <Link className="menu-item" to="/Service">
              Service
            </Link>
            <Link className="menu-item" to="/Shop">
              Shop
            </Link>
            <Link className="menu-item" to="/Contact">
              Contact
            </Link>
            <Link className="menu-item" to="/Team">
              Team
            </Link>
          </div>
          <div className="Nav-icon">
            <i class="bx bx-search icon"></i>
            <i class='bx bxs-cart-download icon'></i>
            



          </div>
        </div>

        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/Service" element={<ServiceScreen />} />
          <Route path="/Shop" element={<ShopScreen />} />
          <Route path="/Contact" element={<ContactScreen />} />
          <Route path="/Team" element={<TeamScreen />} />
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
