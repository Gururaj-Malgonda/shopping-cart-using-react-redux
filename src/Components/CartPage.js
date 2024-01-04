import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../redux/actions/cartActionCreator.js";
import Checkout from "./CheckOut.js"

const CartPage = () => {
    let cartData = useSelector((state) => state.cartReducer);
    let dispatch = useDispatch();

    return(
        <div>
            <h1 className="center">My Cart</h1>
            <div className="cartItems">
                <div className="prodContainer-1">
                    {
                        cartData.map((obj, i) => {
                            return(
                                <div className="product" key={i}>
                                    <img src={obj.thumbnail} alt={obj.description} />
                                    <p><b>Title : {obj.title}</b></p>
                                    <div className="prodrating">
                                        <p>Price : {obj.price}</p>
                                        <p>Rating : {obj.rating}<b>★</b></p>
                                    </div>
                                    <p>Discount : {obj.discountPercentage} %</p>
                                    <button onClick={()=> dispatch(removeFromCart(obj.id))}>Remove From Cart</button>
                                </div>
                            )
                        })
                    }
                </div>
                <Checkout />
            </div>
            
        </div>
    )
}

export default CartPage;