import React from "react";
import "./App.css";
import Header from "./component/Header";
import About from "./component/About";
import Contact from "./component/Contact";
import Home from "./component/Home";
import Product from "./component/Product";
import Cart from "./component/Cart";
import {  Routes, Route } from "react-router-dom";
import ProductDetail from "./component/ProductDetail";
import Checkout from "./component/Checkout";


const App = () => {
  return (
    <div className="app">
      <Header/>
      <Routes>
        <Route  path="/" element={<Home />}/>
        <Route  path="/products" element={<Product/>}/>
        <Route  path="/products/:id" element={<ProductDetail/>}/>
        <Route  path="/cart" element={<Cart/>}/>
        <Route  path="/checkout" element={<Checkout/>}/>
        <Route  path="/about" element={<About/>}/>
        <Route  path="/contact" element={<Contact/>}/>
      </Routes>
     
    </div>
  );
};

export default App;


