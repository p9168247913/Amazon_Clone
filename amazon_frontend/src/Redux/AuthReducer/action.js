import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "./actionTypes";
import axios from "axios"

export const loginRequest=()=>{
    return {type:LOGIN_REQUEST}
};

export const loginSuccess=(payload)=>{
    return {type:LOGIN_SUCCESS,payload}
}

export const loginFailure=()=>{
    return{type:LOGIN_FAILURE}
}

export const login=(userData)=> (dispatch)=>{
    dispatch(loginRequest());
    return axios.post("https://reqres.in/api/login",userData).then((res)=>{
        console.log(res.data)
        dispatch(loginSuccess(res.data.token))
}).catch((err)=>{
    dispatch(loginFailure())
    })
}