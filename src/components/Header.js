import { useState } from "react";
import  { SITE_LOGO } from "../utils/constants";
import { Link } from "react-router-dom";

const HeaderComponent = () => {

    const [btnName, setbtnName]= useState("Login");
    
    console.log("Hey rect");
    
   
    return (
      <div className="header">
         <div className="logo">
            <img src={SITE_LOGO} alt="log"></img>
         </div>
         <div className="navitem">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/service">Services</Link></li>
                <li><Link to="/topoffers">Top-offers</Link></li>
                <li>My card</li>
                <button className="btn" onClick={ () => {
                  btnName == "Login" ? setbtnName("Logout") : setbtnName("Login");
                }}
                 value="Login">{btnName}</button>
            </ul>
         </div>
      </div>
    )
}

export default HeaderComponent;