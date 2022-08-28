import {applyMiddleware, combineReducers,createStore} from "redux"
import thunk from 'redux-thunk'
import { componentReducer } from "./reducers/componentReducer"
import {userReducer} from "./reducers/userReducer"

const rootReducer=combineReducers({
    user:userReducer,
    component:componentReducer
})

export const store = createStore(rootReducer,applyMiddleware(thunk))