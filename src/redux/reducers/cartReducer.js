import { ADD_TO_CART, REMOVE_FROM_CART, CHECKOUT } from "../actions/prodActionTypes.js";

let initial_state = [];

const cartReducer = (state = initial_state, action) => {

    switch(action.type){
        case ADD_TO_CART: return checkUnique(state, action.payload);
        case REMOVE_FROM_CART: return filter_fun(state, action.payload);
        case CHECKOUT: return checkout_helper();
        default: return state;
    }
} 

export default cartReducer;

// below two functions are written for adding unique prod to the cart

function isRepeatingProd(arr, new_obj){
    for(let obj of arr){
        if(obj.id === new_obj.id) return true;
    }
    return false;
}
function checkUnique(arr, new_obj){
    if(!isRepeatingProd(arr, new_obj)){
        return [...arr, new_obj];
    }
    // if added product is repeating 
    alert("Product already added to the cart!")
    return arr;
}

// below function is written for removing prod from the cart

function filter_fun(arr, prod_id){

    let updated_arr = arr.filter((obj) => {
        return obj.id !== prod_id
    })
    return updated_arr;
}

// checkout alert msg function

function checkout_helper(){
    alert("Proceed for your paynent");
}