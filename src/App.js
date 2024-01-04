import React from "react";
import Home from "./Components/Home.js";
import NavBar from "./Components/NavBar.js";
import CartPage from "./Components/CartPage.js"
import "./App.css";
import { Route, Routes } from "react-router";





function App() {
  return (
    <div>
        <NavBar />
        <div className="main-container" >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/cart" element={<CartPage />} />
          </Routes>
        </div>
        
    </div>
  );
}

export default App;
