import React from "react";
import "./navbar.css"
import logo from "../../assets/images/logo.png"
const Navbar = ()=>{
    return(
        <div className="home__navbar">
             <div className="home__navbar-links">
                <div className="home__navbar-links-logo">
                    <img src={logo} alt="logo" />
                </div>
                <div className="home__navbar-sign">
                    <button type="button">Sign in</button>
                </div>
             </div>
        </div>
    )
}
export default Navbar;