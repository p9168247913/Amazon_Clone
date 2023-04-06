import React from 'react'
import Navbar from '../Dashboard/Navbar/Navbar'
import SideBar from '../Dashboard/SideBar/SideBar'
import { ApplianceProducts } from './ProductsPage/ApplianceProducts'


export const Appliance = () => {
  return (
    <div>
      <Navbar />
      <div style={{ display: "flex", gap: "20px" }}>
        <div style={{width:"20%"}}>
          <SideBar />
        </div>
        <div style={{width:"80%"}}>
          <ApplianceProducts />
        </div>
      </div>
    </div>
  )
}
