import React  from "react";
import ReactDOM  from "react-dom";
import HeaderComponent  from "./components/Header.js";
import FooterComponent from "./components/Footer.js";


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
 * ......................Folder Strcuturing.................................
 *  Properties for components.
 *  Will Crate SRC folder and move the APP.js in to it.
 *  Will create component and will put all ccomp in folder.
 *  Will create separate component file and link in App.js
 */




const restorentData = [
   {
       id: "347774",
       name: "Varalakshmi Tiffins",
       cloudinaryImageId: "8523266de1213e8ea57e5df4eedf747e",
       locality: "Manikonda",
       areaName: "Narsingi",
       costForTwo: "₹150 for two",
       cuisines: ["South Indian", "North Indian", "Thandoori"],
       avgRating: 4.5,
       veg: true,
    },
    {
    id: "3477e74",
    name: "Udipi;s upgaar",
    cloudinaryImageId: "nqgrpd6e8vliz57mxlvu ",
    locality: "GAchibowlli",
    areaName: "Narsingi",
    costForTwo: "₹550 for two",
    cuisines: ["South Indian", "North Indian"],
    avgRating: 4.5,
    veg: true,
 },
    {
    id: "347774",
    name: "ChaiPoint",
    cloudinaryImageId: "p4znxkstyrdobxwl6rxa ",
    locality: "Ameerpet",
    areaName: "Narsingi",
    costForTwo: "₹50 for two",
    cuisines: ["South Indian", "North Indian"],
    avgRating: 3.5,
    veg: true,
 },
 {
   id: "347774",
   name: "Eat Fit",
   cloudinaryImageId: "6126c9b45de2cb222405c1af8a321e74 ",
   locality: "Kukatpalli",
   areaName: "Narsingi",
   costForTwo: "₹560 for two",
   cuisines: ["South Indian", "North Indian"],
   avgRating: 2.5,
   veg: true,
},
{
   id: "347774",
   name: "SubWay",
   cloudinaryImageId: "1ace5fa65eff3e1223feb696c956b38b ",
   locality: "Kukatpalli",
   areaName: "Narsingi",
   costForTwo: "₹560 for two",
   cuisines: ["South Indian", "North Indian"],
   avgRating: 5.5,
   veg: true,
},
{
   id: "347774",
   name: "ChaiPoint",
   cloudinaryImageId: "p4znxkstyrdobxwl6rxa ",
   locality: "Ameerpet",
   areaName: "Narsingi",
   costForTwo: "₹50 for two",
   cuisines: ["South Indian", "North Indian"],
   avgRating: 3.5,
   veg: true,
}
   ];
   


const RestoComponent = (props) => {
   // console.log(props);
   const {restoData} = props;
   console.log(restoData);
    return (
        <div className="resto">
            <img src= 
            {
               "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + restoData.cloudinaryImageId 
            }/>
           <h2>{restoData.name}</h2>
           <h4>{restoData.avgRating}</h4>
           <h4>{restoData.locality}</h4>
           <h4>{restoData.costForTwo}</h4>
           <h4>{restoData.cuisines.join(", ")}</h4>
        </div>
    )
};

const BodyComponent = () => {
    return (
        <div className="body">
            <div className="resto-container">
               
            {
               restorentData.map( (restrorent) => ( <RestoComponent restoData = {restrorent} />))
            
            /* <RestoComponent restoData = {restorentData[0]}/>
            <RestoComponent restoData = {restorentData[1]}/>
            <RestoComponent restoData = {restorentData[2]}/>
            <RestoComponent restoData = {restorentData[3]}/>
            <RestoComponent restoData = {restorentData[4]}/> */}
           
            </div>
            
        </div>
    )
};




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