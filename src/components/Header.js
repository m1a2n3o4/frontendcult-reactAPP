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
            <ul className="nav">
                <li className="nav-item"><Link className="nav-item" to="/">Home</Link></li>
                <li className="nav-item"><Link className="nav-item" to="/about">About</Link></li>
                <li className="nav-item"><Link className="nav-item" to="/service">Services</Link></li>
                <li className="nav-item"><Link className="nav-item" to="/topoffers">Top-offers</Link></li>
                <button className="btn btn-danger" onClick={ () => {
                  btnName == "Login" ? setbtnName("Logout") : setbtnName("Login");
                }}
                 value="Login">{btnName}</button>
            </ul>
         </div>
      </div>
    )
}

export default HeaderComponent;