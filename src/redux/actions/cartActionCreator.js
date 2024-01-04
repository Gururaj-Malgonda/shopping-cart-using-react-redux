import { ADD_TO_CART, REMOVE_FROM_CART, CHECKOUT } from "./prodActionTypes.js";

export const addToCart = (prod_obj) => {

    return (
        {
            type: ADD_TO_CART,
            payload: prod_obj
        }
    )
}

export const removeFromCart = (prod_id) => {

    return(
        {
            type: REMOVE_FROM_CART,
            payload: prod_id
        }
    )
}

export const checkout = () => {

    return(
        {
            type: CHECKOUT
        }
    )
}