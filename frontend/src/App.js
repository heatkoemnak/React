

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
// import { CartProvider } from './CartContext';
import HomePage from './Pages/HomePage/HomePage';
function App() {
  return (
    <div className="App">
      {/* <CartProvider> */}
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Router>
      {/* </CartProvider> */}
    </div>
  );
}

export default App;
