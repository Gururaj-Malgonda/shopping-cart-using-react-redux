import {FETCH_PRODUCT_REQUEST, FETCH_PRODUCT_SUCCESS, FETCH_PRODUCT_FAILURE} from "./prodActionTypes.js";
import axios from "axios";

export const fetchProductRequest = ()=> {

    return{
        type: FETCH_PRODUCT_REQUEST
    }
}

export const fetchProductSuccess = (prod_arr)=> {

    return{
        type: FETCH_PRODUCT_SUCCESS,
        payload: prod_arr
    }
}

export const fetchProductFailure = (errMsg)=> {

    return{
        type: FETCH_PRODUCT_FAILURE,
        payload: errMsg
    }
}

export const getProductFromApi = ()=> {
    return (dispatch) =>{
        dispatch(fetchProductRequest());

        axios.get("https://dummyjson.com/products")
        .then((response) => dispatch(fetchProductSuccess(response.data)))
        .catch((err) => dispatch(fetchProductFailure(err.message)))
    }
}

