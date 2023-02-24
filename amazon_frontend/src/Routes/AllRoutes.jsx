import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Components/Home'
import Appliancaes from '../Dashboard_Nav/Pages/Appliances'
import Laptop from '../Dashboard_Nav/Pages/Laptop'
import { SinglePages } from "../Dashboard_Nav/Pages/SinglePages";
import Soundbar from '../Dashboard_Nav/Pages/Soundbar'
import Television from '../Dashboard_Nav/Pages/Television'
import Watch from '../Dashboard_Nav/Pages/Watch'
import { Cart } from '../Pages/Cart_&_Payment/Cart'
import { Payment } from '../Pages/Cart_&_Payment/Payment'
import { Location } from '../Pages/Location'

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
                <Route path="/cart" element={<Cart />} />
                <Route path="/pay" element={<Payment />} />
        <Route path={"/product/:id"} element={<SinglePages />} />
                <Route path="*" element={<h1>404 Page not found</h1>} />
            </Routes>
        </div>
    )
}
