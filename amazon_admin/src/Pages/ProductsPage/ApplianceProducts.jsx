import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { editAPI, getDataAPI } from '../../AllAPIFect'
import BoilerCode from '../../compoents/BoilerCode'
import axios from 'axios'


export const ApplianceProducts = () => {
  const [proData, setProData] = useState([])
  const [loading, setLoading] = useState(false)

  const getTelivisionAPI = async () => {
    setLoading(true)
    let data = await getDataAPI("appliance")
    setLoading(false)
    setProData(data)
  }

  const handelDelete = (value) => {
    // deleteAPI("appliance", value)
    axios.delete(`https://atmazon.onrender.com/appliance/${value}`)
    getTelivisionAPI()
  }

  const handlePatch = (value) => {
    editAPI("appliance", value)
    getTelivisionAPI()
  }

  useEffect(() => {
    getTelivisionAPI()
  }, [])
  console.log(proData);
  if (loading) {
    return <div style={{ textAlign: "center", margin: "300px" }}>
      <img style={{ margin: "auto" }} width={"100px"} src="https://i.ibb.co/3mVT24P/137894-loading.gif" alt="https://i.ibb.co/3mVT24P/137894-loading.gif" />
      <h1 >Loading Appliances.....</h1>
    </div>
  }
  return (
    <>
      <div style={{ display: "flex", justifyContent: "flex-end", alignItems: "center", padding: "1rem" }}>
        <div>
          <Link to="/add/appliance" style={{ padding: "10px 20px", cursor: "pointer", textDecoration: "none", backgroundColor: "teal", color: "#fff", fontSize: "18px", borderRadius: "5px" }}>Add New</Link>
        </div>
      </div>
      <div className='proData-container'>
        {proData.map((ele, index) => (
          <BoilerCode key={index} {...ele} handlaingDelete={handelDelete} handlingPatch={handlePatch} />
        ))}
      </div>

    </>
  )
}
