import React from "react";
import {NavLink, useNavigate} from "react-router-dom";

const NavBar = () => {

    return(
        <div className="navbar">
            <div className="left">
                <h3><NavLink to="/"
                    style={{color:"white", textDecoration: "none", padding:"10px"}} 
                    >Shopping Cart</NavLink></h3>
            </div>
            <div className="right">
                <NavLink to="/home"
                    style={{color:"white", textDecoration: "none", padding:"10px"}} 
                    >Home Page</NavLink>
                <NavLink to="/cart"
                    style={{color:"white", textDecoration: "none", padding:"10px"}} 
                    >Cart Page</NavLink>
            </div>
        </div>
    )
}

export default NavBar;