import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { checkout } from "../redux/actions/cartActionCreator.js";


const CheckOut = () => {


    let cartReducer = useSelector((state) => state.cartReducer);
    let dispatch = useDispatch();

    function totalPrice(){
        let sum = 0;
        cartReducer.forEach((obj) => {
            sum += obj.price;
        })
        return sum;
    }

    return(
        <div className="checkout">
            <h3 className="checkoutHead">Checkout List</h3>
            <div className="rows">
                {
                    cartReducer && 
                    (
                        cartReducer.map((obj, i) => {
                            return(
                                <div className="row" key={i}>
                                    <p>{obj.title}</p>
                                    <p>${obj.price}</p>
                                </div>
                            )
                        })
                    )
                }
            </div>
            <div className="last-row">Total : ${totalPrice()}</div>
            <button id="checkOutBtn" onClick={() => dispatch(checkout())}>Click To Checkout</button>
        </div>
    )
}

export default CheckOut;