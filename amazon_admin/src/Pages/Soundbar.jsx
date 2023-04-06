import React from 'react'
import Navbar from '../Dashboard/Navbar/Navbar'
import SideBar from '../Dashboard/SideBar/SideBar'
import { Products } from './Products'
import { SoundbarProducts } from './ProductsPage/SoundbarProducts'

export const Soundbar = () => {
  return (
    <div>
      <Navbar />
      <div style={{ display: "flex", gap: "20px" }}>
        <div style={{width:"20%"}}>
          <SideBar />
        </div>
        <div style={{width:"80%"}}>
          <SoundbarProducts />
        </div>
      </div>
    </div>
  )
}
