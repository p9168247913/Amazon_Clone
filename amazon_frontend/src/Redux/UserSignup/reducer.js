import React from 'react'
import { POSTDATAFAILURE, POSTDATAREQUEST, POSTDATASUCCESS } from './actiontypes'
// import * as types from "./usersignupactiontype"
const init = {
    isError:false,
    isloading:false,
    data:[],
    error:""
}
export const Signupreducer = (state=init,action) => {
    switch(action.type){
        case POSTDATAREQUEST:{
           return{
               ...state,
               isError:false,
               isloading:true,
           }
        }
        case POSTDATASUCCESS:{
           return{
               ...state,
               isError:false,
               isloading:false,
               userdata:action.payload,
               
           }
        }
        case POSTDATAFAILURE:{
           return{
               ...state,
               isError:true,
               isloading:false,  
               error :action.payload    
           }
        }
         default: return state
   }
  
}

