import React from "react";
import "./NavApp.css";

// import Navbar from "./components/Navbar";
import { Router, Route } from "react-router-dom";
import { Home } from "../../Home";
import Products from "./Products";
import Reports from "./Reports";

// PAGES


// import Reports from "./pages/Reports";
import {Navbar2} from "../Navbar2";

export default function NavApp() {
  return (
    <div className="App">
      <Router>
        <Navbar2 />
       
          <Route path="/"  element={<Home/>} />
          <Route path="/products" element={<Products/>} />
          <Route path="/reports" element={<Reports/>} />
       
      </Router>
    </div>
  );
}
