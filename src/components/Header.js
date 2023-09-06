import { useState } from "react";
import  { SITE_LOGO } from "../utils/constants";

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
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/service">Services</a></li>
                <li><a href="/topoffers">Top-offers</a></li>
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