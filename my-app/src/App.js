import HomeScreen from "../src/screen/Home/HomeScreen";
import ServiceScreen from "../src/screen/Service/ServiceScreen";
import ShopScreen from "../src/screen/Shop/ShoScreen";
import ContactScreen from "../src/screen/Contact/ContactScreen";
import TeamScreen from "../src/screen/Team/TeamScreen";
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
