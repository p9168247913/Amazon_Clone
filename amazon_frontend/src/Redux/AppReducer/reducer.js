import { DELETE_CART, GET_PRODUCT_FAILURE, GET_PRODUCT_REQUEST, GET_PRODUCT_SUCCESS, SET_CART } from "./actionTypes"


const initialState={
    isLoading:false,
    products:[],
    cart:[],
    isError:false,
}

export const reducer=(state=initialState,{type,payload})=>{
    switch(type){
        case GET_PRODUCT_REQUEST:
            return{...state,isLoading:true}
        case GET_PRODUCT_SUCCESS:
            return{...state,isLoading:false,products:payload}
        case GET_PRODUCT_FAILURE:
            return{...state,isLoading:false,isError:true}
        case SET_CART:
            const data = [...state.cart,payload];
            return {...state,cart:data};
        case DELETE_CART:
            return {...state,cart:payload};
        default:
            return state
    }

}