import prodReducer from "./reducers/prodReducer.js";

import {createStore, combineReducers, applyMiddleware} from "redux";
import { thunk } from "redux-thunk";
import cartReducer from "./reducers/cartReducer.js";

let rootRecucer = combineReducers({
    prodReducer: prodReducer,
    cartReducer: cartReducer

})

let store = createStore(rootRecucer, applyMiddleware(thunk));
export default store;