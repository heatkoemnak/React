import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
    </div>
  );
}

export default App;
