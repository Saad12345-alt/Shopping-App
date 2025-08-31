import React from 'react';
import HomePage from './Pages/HomePage';
import ProductPage from './Pages/ProductPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cart from './Pages/Cart';
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <CartProvider>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/:id" element = {<ProductPage/>}/>
        <Route path= '/Cart' element = {<Cart/>}/>
      </Routes>
    </Router>
    </CartProvider>
  );
}

export default App;
