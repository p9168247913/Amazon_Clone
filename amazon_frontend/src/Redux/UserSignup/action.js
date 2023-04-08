import React from 'react'
import axios from "axios"
import { POSTDATAFAILURE, POSTDATAREQUEST, POSTDATASUCCESS } from './actiontypes'
// import * as types from "./actiontypes"
const usersignupaction = (params) =>(dispatch) => {
    dispatch({type:POSTDATAREQUEST})
    return axios.post(`https://amazon-x3fk.onrender.com/user/register`,params)
    .then(r=>dispatch({type:POSTDATASUCCESS,payload:r.data}))
    .catch(e=>dispatch({type:POSTDATAFAILURE,payload:e.message}))
}

export default usersignupaction
