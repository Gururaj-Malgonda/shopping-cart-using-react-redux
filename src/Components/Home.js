import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProductFromApi } from "../redux/actions/prodActionCreator.js";
import { addToCart } from "../redux/actions/cartActionCreator.js";


const Home = () => {
    let {loading, data, error} = useSelector((state) => state.prodReducer);
    console.log(loading, data, error);

    let dispatch = useDispatch();

    let [isAdded, setIsAdded] = useState(false);

    function add_in_cart_helper(obj){
        dispatch(addToCart(obj));
        setIsAdded(true);
    }

    useEffect(() => {
        dispatch(getProductFromApi())
    },[])


    return(
        <div>
            <h1 className="center">All Items</h1>

            <div className="prodContainer">
                {
                    data.products && 
                    (
                        data.products.map((obj, i) => {
                            return(
                                <div className="product" key={i}>
                                    <img src={obj.thumbnail} alt={obj.description} />
                                    <p><b>Title : {obj.title}</b></p>
                                    <div className="prodrating">
                                        <p>Price : ${obj.price}</p>
                                        <p>Rating : {obj.rating}<b>★</b></p>
                                    </div>
                                    <p>Discount : {obj.discountPercentage}%</p>
                                    <button onClick={()=> dispatch(addToCart(obj))}>Add To Cart</button>
                                </div>
                            )
                        })
                    )
                }
            </div>
        </div>
    )
}


export default Home;