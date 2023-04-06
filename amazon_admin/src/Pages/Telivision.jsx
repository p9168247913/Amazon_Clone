import React from 'react'
import Navbar from '../Dashboard/Navbar/Navbar'
import SideBar from '../Dashboard/SideBar/SideBar'
import { Products } from './Products'
import { TelevisionProducts } from './ProductsPage/TelevisionProducts'


export const Telivision = () => {
  return (
    <div>
    <Navbar />
    <div style={{ display: "flex", gap: "20px" }}>
      <div style={{width:"20%"}}>
        <SideBar />
      </div>
      <div style={{width:"80%"}}>
        <TelevisionProducts />
      </div>
    </div>
  </div>
  )
}
