import axios from "axios"
import { DELETE_CART, GET_PRODUCT_FAILURE, GET_PRODUCT_REQUEST, GET_PRODUCT_SUCCESS, SET_CART } from "./actionTypes"




export const getProductSuccess = (payload) => {
    return { type: GET_PRODUCT_SUCCESS, payload }
}

export const productRequest = () => {
    return { type: GET_PRODUCT_REQUEST }
}

export const productFailure = () => {
    return { type: GET_PRODUCT_FAILURE }
}

export const setCartProducts = (payload) => {
    return { type: SET_CART, payload }
}

export const deleteCartProducts = (payload) => {
    return { type: DELETE_CART, payload }
}

export const getProduct = (category, params) => (dispatch) => {
    dispatch(productRequest())
    console.log("Request")
    axios.get(`https://elated-lime-hippo.cyclic.app/products?category=${category}`, params).then((res) => {
        dispatch(getProductSuccess(res.data))
        console.log("success", params)
    })
        .catch((err) => {
            dispatch(productFailure())
        })
}

export const getBrands = (category, setBrands) => {
    axios.get(`https://elated-lime-hippo.cyclic.app/products?category=${category}`).then((res) => {
        setBrands(res.data);
    })
}

export const setCart = (data) => (dispatch) => {
    dispatch(setCartProducts(data));
}

export const deleteCart = (data) => (dispatch) => {
    dispatch(deleteCartProducts(data));
}