import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
// import { CartProvider } from './CartContext';
import HomePage from './Pages/HomePage/HomePage';
import AboutPage from './Pages/AboutPage/AboutPage';
import ContactPage from './Pages/ContactPage/ContactPage';
import FqaPage from './Pages/FQAPage/FqaPage';
import Featured from './Pages/Featured/Featured';
import Navbar from './components/Navbar/Navbar';
function App() {
  return (
    <div className="App">
      {/* <CartProvider> */}
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/fqa" element={<FqaPage />} />
          <Route path="/featured" element={<Featured />} />
        </Routes>
      </Router>
      {/* </CartProvider> */}
    </div>
  );
}

export default App;
