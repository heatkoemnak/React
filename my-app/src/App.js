import HomeScreen from "../src/screen/Home/HomeScreen";
import ServiceScreen from "../src/screen/Service/ServiceScreen";
import ShopScreen from "../src/screen/Shop/ShoScreen";
import ContactScreen from "../src/screen/Contact/ContactScreen";
import TeamScreen from "../src/screen/Team/TeamScreen";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/Service" element={<ServiceScreen />} />
        <Route path="/Shop" element={<ShopScreen />} />
        <Route path="/Contact" element={<ContactScreen />} />
        <Route path="/Team" element={<TeamScreen />} />
    </Routes>
    </BrowserRouter>

  );
}

export default App;

// Path: my-app\src\App.js
// Compare this snippet from my-app\src\screen\Home\HomeScreen.js:
// import React from "react";
//
