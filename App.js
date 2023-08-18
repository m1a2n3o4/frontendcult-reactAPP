import React  from "react";
import ReactDOM  from "react-dom";

/**
 * HeaderComponent
 *  -Logo
 *  - Menu Iteam
 * BodyComponent
 *  -SearchBar
 *  -RestoComponent
 *    - Image
 *    - Resto Name
 *    - Rating.
 *    - Devlivery Time
 * FooterComponent
 *  - Copyrights.
 *  - Links, 
 *  Properties for components.
 */

const HeaderComponent = () => {
    return (
      <div className="header">
         <div className="logo">
            <img src="https://img.freepik.com/premium-vector/online-food-app-icon-food-shop-location-logo-also-online-resturent-location-template_608547-155.jpg?w=100" alt="log"></img>
         </div>
         <div className="navitem">
            <ul>
                <li>Home</li>
                <li>About US</li>
                <li>Services</li>
                <li>Top offers</li>
                <li>My card</li>
            </ul>
         </div>
      </div>
    )
};


const RestoComponent = (props) => {
    console.log(props);
    return (
        <div className="resto">
            <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/3632e911860bd3a90f9558fc81372b73" alt=""/>
            <h2>{props.resName}</h2>
            <p>{props.resMake}</p>
            <h4>{props.resRating}</h4>
            <h4>{props.resDeliverytime}</h4>
        </div>
    )
};

const BodyComponent = () => {
    return (
        <div className="body">
            <div className="resto-container">
            <RestoComponent 
            resName = "VaraLashmi" 
            resRating = "3.6" 
            resDeliverytime="30min" 
            resMake="Birani, Tandoori"
            />
            <RestoComponent
             resName = "KFC - food" 
             resRating = "3.8" 
             resDeliverytime="40min" 
             resMake="Fried pices"/>
            <RestoComponent
             resName = "Manoharaaaaaaa food" 
             resRating = "5" 
             resDeliverytime="1min" 
             resMake="All indian foods"/>
            <RestoComponent
             resName = "VaraLashmi 2" 
             resRating = "4" 
             resDeliverytime="20min" 
             resMake="Birani, Tandoori"/>
              <RestoComponent
             resName = "VaraLashmi 2" 
             resRating = "4" 
             resDeliverytime="20min" 
             resMake="Birani, Tandoori"/>
            </div>
            
        </div>
    )
};


const FooterComponent = () => {
    return (
        <div className="footer"><h2>Footer component</h2></div>
    )
}

const AppLayout = () => {
    return (
         <div className="container-fluid">
            <HeaderComponent></HeaderComponent>
            <BodyComponent></BodyComponent>
            <FooterComponent></FooterComponent>
         </div>
    )
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<AppLayout></AppLayout>); 

function funname (a, b, c) {
    console.log(a);
}

funname(1,2,3);