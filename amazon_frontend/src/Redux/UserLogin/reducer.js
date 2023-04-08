import { LOGIN_DATA_FALIURE, LOGIN_DATA_REQUEST, LOGIN_DATA_SUCCESS } from "./actiontypes"

const initlogin = {
    isError: false,
    isLoading: false,
    token: null,
    error: "",
    isAuth: false,
}
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
            return {
                ...state,
                isError: false,
                isloading: false,
                token: payload,
                isAuth : true
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