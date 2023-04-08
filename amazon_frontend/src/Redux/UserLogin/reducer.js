import { LOGIN_DATA_FALIURE, LOGIN_DATA_REQUEST, LOGIN_DATA_SUCCESS, LOGOUT_USER } from "./actiontypes";
const initlogin  = JSON.parse(localStorage.getItem("isAuth")) || {
    isError: false,
    isLoading: false,
    token: null,
    isAuth: false,
};

/*
const initlogin = {
    isError: false,
    isLoading: false,
    token: null,
    error: "",
    isAuth: auth,
}*/
export const Loginreducer = (state = initlogin, {type, payload}) => {
    switch (type) {
        case LOGIN_DATA_REQUEST: {
            return {
                ...state,
                isError: false,
                isloading: true,
            }
        }
        case LOGIN_DATA_SUCCESS: {
            console.log("payload in reducer", payload);
            localStorage.setItem("isAuth", JSON.stringify({
                ...state,
                isError: false,
                isloading: false,
                token: payload,
                isAuth : true
            }))
            
            return {
                ...state,
                isError: false,
                isloading: false,
                token: payload,
                isAuth : true
            }
        }
        case LOGOUT_USER: {
            localStorage.setItem("isAuth", JSON.stringify({
                ...state,
                isError: false,
                isloading: false,
                token: null,
                isAuth : payload
            }))
            return {
                ...state,
                isError: false,
                isloading: false,
                token: null,
                isAuth : payload
            }
        }
        case LOGIN_DATA_FALIURE: {
            return {
                ...state,
                isError: true,
                isloading: false,
                error: payload,
                isAuth : false
            }
        }
        default: {
            return state
        }
    }

}