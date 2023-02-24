import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Components/Home";
import Appliancaes from "../Dashboard_Nav/Pages/Appliances";
import Laptop from "../Dashboard_Nav/Pages/Laptop";
import Soundbar from "../Dashboard_Nav/Pages/Soundbar";
import Television from "../Dashboard_Nav/Pages/Television";
import Watch from "../Dashboard_Nav/Pages/Watch";
import { Location } from "../Pages/Location";

export const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/location" element={<Location />} />
        <Route path="/laptop" element={<Laptop />} />
        <Route path="/television" element={<Television />} />
        <Route path="/appliances" element={<Appliancaes />} />
        <Route path="/watch" element={<Watch />} />
        <Route path="/soundbar" element={<Soundbar />} />
      </Routes>
    </div>
  );
};
