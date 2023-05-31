import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Cart from "./Pages/Cart";
import Navbar from "./components/Navbar";
import MenuProduct from "./components/MenuProduct";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <div className="routes">
          <div className="menu-product">
            <MenuProduct />
          </div>
          <div className="right-page">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
