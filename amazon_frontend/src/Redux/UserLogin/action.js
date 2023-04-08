

import axios from "axios"
import { LOGIN_DATA_FALIURE, LOGIN_DATA_REQUEST, LOGIN_DATA_SUCCESS } from "./actiontypes";

export const getLoginREqWithAPI = () =>({type : LOGIN_DATA_REQUEST});
export const getLoginSucWithAPI = (payload) =>({type : LOGIN_DATA_SUCCESS, payload});
export const  getLoginErrWithAPi = () =>({type : LOGIN_DATA_FALIURE});


export const userlogindata = (data) => (dispatch) => {
  dispatch(getLoginREqWithAPI())
  return axios.post(`https://amazon-x3fk.onrender.com/user/login`, data).then(res=>{
    dispatch(getLoginSucWithAPI(res.data.token))
  }).catch(err=>{
    console.log(err);
    dispatch(getLoginErrWithAPi())
  })
}



