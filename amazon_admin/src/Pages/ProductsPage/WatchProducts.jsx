import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { deleteAPI, editAPI, getDataAPI } from '../../AllAPIFect'
import BoilerCode from '../../compoents/BoilerCode'
import axios from 'axios'


export const WatchProducts = () => {
    const [proData, setProData] = useState([])
    const [loading, setLoading] = useState(false)

    const getTelivisionAPI = async () => {
      setLoading(true)
      let data = await getDataAPI("watch")
      setLoading(false)
      setProData(data)
    }
  
    const handelDelete = (value) =>{
      // deleteAPI("watch", value)
      axios.delete(`https://atmazon.onrender.com/watch/${value}`)

      getTelivisionAPI()
    }
  
    const handlePatch = (value) =>{
      // editAPI("watch", value)
      axios.patch(`https://atmazon.onrender.com/watch/${value}`)
      getTelivisionAPI()
    }
    useEffect(() => {
      getTelivisionAPI()
    }, [])
    console.log(proData);
    if(loading){
      return <div style={{ textAlign: "center", margin: "300px" }}>
      <img style={{ margin: "auto" }} width={"100px"} src="https://i.ibb.co/3mVT24P/137894-loading.gif" alt="https://i.ibb.co/3mVT24P/137894-loading.gif" />
      <h1 >Loading Watches.....</h1>
  </div>
    }
    return (
      <>
      <div style={{ display: "flex", justifyContent: "flex-end", alignItems: "center", padding: "1rem" }}>
        <div>
          <Link to="/add/watch" style={{ padding: "10px 20px", cursor: "pointer", textDecoration:"none", backgroundColor: "teal", color: "#fff", fontSize: "18px", borderRadius: "5px" }}>Add New</Link>
        </div>
      </div>
      <div className='proData-container'>
        {proData.map((ele,index)=>(
          <BoilerCode key={index} {...ele} handlaingDelete = {handelDelete} handlingPatch={handlePatch}/>
        ))}
      </div>
    </>
    )
}
