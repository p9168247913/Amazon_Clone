import React from 'react'
import Navbar from '../Dashboard/Navbar/Navbar'
import SideBar from '../Dashboard/SideBar/SideBar'
import { LaptopsProducts } from './ProductsPage/LaptopsProducts'


export const Laptops = () => {
  return (
    <div>
    <Navbar />
    <div style={{ display: "flex", gap: "20px" }}>
      <div style={{width:"20%"}}>
        <SideBar />
      </div>
      <div style={{width:"80%"}}>
        <LaptopsProducts />
      </div>
    </div>
  </div>
  )
}
