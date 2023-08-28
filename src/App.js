import React  from "react";
import ReactDOM  from "react-dom";
import HeaderComponent  from "./components/Header.js";
import BodyComponent from "./components/Body.js";
import FooterComponent from "./components/Footer.js";



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