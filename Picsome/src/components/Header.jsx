import React from "react"
import {Link, Route,Routes}from "react-router-dom"
import { ThemeContext } from "../themeContext";
import '../App.css'
import { useContext } from "react";
function Header() {
    const{cartItems}=useContext(ThemeContext)
    const cartLogo=()=>{
        return cartItems.length ? <i className="ri-shopping-cart-line ri-fw ri-2x"> </i> : <i className="ri-shopping-cart-fill ri-fw ri-2x"> </i>
    }

    return (
        <header>
            <h2><Link to="/">Pic Some</Link></h2>
           <Link to="/cart"> {cartLogo()}</Link>
        </header>
    )
}

export default Header
