import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Homepage from '../Components/Home/Homepage'
import { PrivateRoute } from '../Components/PrivateRoute'
import Appliancaes from '../Dashboard_Nav/Pages/Appliances'
import Laptop from '../Dashboard_Nav/Pages/Laptop'
import { SinglePages } from "../Dashboard_Nav/Pages/SinglePages";
import Soundbar from '../Dashboard_Nav/Pages/Soundbar'
import Television from '../Dashboard_Nav/Pages/Television'
import Watch from '../Dashboard_Nav/Pages/Watch'
import { Cart } from '../Pages/Cart_&_Payment/Cart'
import { Payment } from '../Pages/Cart_&_Payment/Payment'
import { Login } from '../Pages/Login'
import { SignupPage } from '../Pages/SignupPage'

export const AllRoutes = () => {

    return (
        <div>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/laptop" element={<Laptop />} />
                <Route path="/television" element={<Television />} />
                <Route path="/appliances" element={<Appliancaes />} />
                <Route path="/watch" element={<Watch />} />
                <Route path="/soundbar" element={<Soundbar />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/pay" element={<Payment />} />
                <Route path="/appliance/:id" element={<PrivateRoute><SinglePages category = "appliance" /> </PrivateRoute>} />
                <Route path="/laptop/:id" element={<PrivateRoute><SinglePages category = "laptop" /> </PrivateRoute>} />
                <Route path="/watch/:id" element={<PrivateRoute><SinglePages category = "watch" /> </PrivateRoute>} />
                <Route path="/telivision/:id" element={<PrivateRoute><SinglePages category = "telivision" /> </PrivateRoute>} />
                <Route path="/soundbar/:id" element={<PrivateRoute><SinglePages category = "soundbar" /> </PrivateRoute>} />
                <Route path='/login' element={<Login />} />
                <Route  path="/signup" element={<SignupPage/>}/>
                <Route path="*" element={<h1>404 Page not found</h1>} />
            </Routes>
        </div>
    )
}

