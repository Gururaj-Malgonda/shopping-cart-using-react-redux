import { fetchProductSuccess } from "../actions/prodActionCreator.js";
import { FETCH_PRODUCT_REQUEST, FETCH_PRODUCT_SUCCESS,FETCH_PRODUCT_FAILURE } from "../actions/prodActionTypes.js";

let initialState = {
    loading: false,
    data: [],
    error: ""
}

const prodReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_PRODUCT_REQUEST: return {...state, loading: true};
        case FETCH_PRODUCT_SUCCESS: return {...state, loading:false, data: action.payload, error: ""};
        case FETCH_PRODUCT_FAILURE: return {...state, loading: false, error: action.payload};
        default: return state;
    }
}

export default prodReducer;
