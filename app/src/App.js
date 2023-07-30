import "./App.css";
import Home from "./components/Home";
// import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import Nav from './components/Nav'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Team from "./components/Team";
import Shop from "./components/Shop";
import Cart from "./components/Cart";
import Sell from "./components/Sell";
import SignUp from "./components/SignUp";


function App() {
  return (
    <div className="App bg-gray-50">
      <Router>
        <Nav/>
        {/* <Navbar /> */}
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/team" element={<Team />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/sell" element={<Sell />} />
            <Route path="/sell" element={<Sell />} />
          </Routes>
        </div>
        <Routes>
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
