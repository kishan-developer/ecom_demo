import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Product from './Components/product/Product';
import CheckOut from './Components/checkout/CheckOut';

function App() {
  return (
    <div>
      
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/checkout' element={<CheckOut/>} />
          
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;