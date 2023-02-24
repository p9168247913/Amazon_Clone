import axios from "axios"
import { GET_PRODUCT_FAILURE, GET_PRODUCT_REQUEST, GET_PRODUCT_SUCCESS } from "./actionTypes"




export const getProductSuccess=(payload)=>{
    return{type:GET_PRODUCT_SUCCESS,payload}
}

export const productRequest=()=>{
    return{type:GET_PRODUCT_REQUEST}
}

export const productFailure=()=>{
    return{type:GET_PRODUCT_FAILURE}
}



export const getProduct=(params)=>(dispatch)=>{
    dispatch(productRequest())
    console.log("Request")
    axios.get(`https://atmazon.onrender.com/${params}`).then((res)=>{
        dispatch(getProductSuccess(res.data))
        console.log("success")
    })
    .catch((err)=>{
        dispatch(productFailure())
    })
}