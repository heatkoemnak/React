//Navbar
import React from "react";
import ContactScreen from "../src/screen/Contact/ContactScreen";
import HomeScreen from "../src/screen/Home/HomeScreen";
import ServiceScreen from "../src/screen/Service/ServiceScreen";
import ShopScreen from "../src/screen/Shop/ShoScreen";
import TeamScreen from "../src/screen/Team/TeamScreen";

//commponents
import Login from "./component/login";
import Signup from "./component/signup";

//menu cagegory
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AccessoriesScreen from "../src/screen/product/Accessories/AccessoriesScreen";
import BagScreen from "../src/screen/product/Bag/BagScreen";
import FashionScreen from "../src/screen/product/Fashion/FashionScreen";
import ShoesScreen from "../src/screen/product/Shoes/ShoesScreen";
import ToyScreen from "../src/screen/product/Toy/ToyScreen";
import WatchScreen from "../src/screen/product/Watch/WatchScreen";

//css
import "./App.css";
import "./component/cart.css";
import "./screen/Home/HomeScreen.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* <h3 className="header">RECYCLING WEBSITE</h3> */}
        <Routes>

          <Route path="/" element={<HomeScreen />} />
          <Route path="/Service" element={<ServiceScreen />} />
          {/* <Route path="/Shop" element={<ShopScreen />} /> */}
          <Route path="/Contact" element={<ContactScreen />} />
          <Route path="/Team" element={<TeamScreen />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
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
