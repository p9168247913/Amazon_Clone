import React from 'react'
import {Route, Routes} from "react-router-dom"
import AdminLogin from '../Dashboard/AdminLogin'
// import Products from '../Dashboard/AddProducts/AddProduct'
// import SingleProduct from '../Dashboard/SingleProduct'
import NotFoundPage from './NotFoundPage'
import { Home } from './Home'
import { Dashboard } from '../Dashboard/Products'
import { Telivision } from './Telivision'
import { Appliance } from './Appliance'
import { Laptops } from './Laptops'
import { Watch } from './Watch'
import { Soundbar } from './Soundbar'
import AddProduct from '../Dashboard/AddProducts/AddProduct'

export const AllRoutes = () => {
  return (
    <div>
        <Routes>
        {/* <Route path='/' element={<Home/>}/> */}
        <Route path='/telivision' element={<Telivision/>}/>
        <Route path='/appliance' element={<Appliance/>}/>
        <Route path='/laptop' element={<Laptops/>}/>
        <Route path='/watch' element={<Watch/>}/>
        <Route path='/soundbar' element={<Soundbar/>}/>
        <Route path='/' element={<AdminLogin />}/>
        {/* <Route path='/admin-products' element={<Products />}/>
        <Route path='/admin-single-product' element={<SingleProduct />}/> */}
        <Route path='/add/:product' element={<AddProduct />}/>
        {/* <Route path="/:"/> */}
        <Route path='*' element={<NotFoundPage />}/>
        </Routes>
    </div>
  )
}
