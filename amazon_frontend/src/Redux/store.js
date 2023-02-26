import {applyMiddleware, combineReducers, legacy_createStore} from "redux"
import { reducer as productReducer } from "./AppReducer/reducer"
import { reducer as authReducer } from "./AuthReducer/reducer"
import thunk from "redux-thunk"

const rootReducer=combineReducers({
    productReducer, authReducer
})


export const store = legacy_createStore(rootReducer,applyMiddleware(thunk))