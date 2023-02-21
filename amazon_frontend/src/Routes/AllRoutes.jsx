import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from '../Components/Home'

export const AllRoutes = () => {
  return (
    <div>
    <Routes>
      <Route path="./" element={<Home/>}/>

     <Route path="./location" element={<Location/>}/>
    </Routes>
    </div>
  )
}
