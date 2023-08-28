import RestoComponent from "./Resto";
import restorentData from "../utils/mockData";
import { useEffect, useState } from "react";
 

const BodyComponent = () => {

    let [restorentData, filteredRestrunts] = useState(
        [
            {
                id: "34r7774",
                name: "Varalakshmi Tiffins",
                cloudinaryImageId: "8523266de1213e8ea57e5df4eedf747e",
                locality: "Manikonda",
                areaName: "Narsingi",
                costForTwo: "₹150 for two",
                cuisines: ["South Indian", "North Indian", "Thandoori"],
                avgRating: 4.5,
                veg: true,
                type: "Noth"
             },
             {
             id: "34773e74",
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
             id: "3437774",
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
            id: "3437774",
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
            id: "3477374",
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
            id: "347773",
            name: "ChaiPoint",
            cloudinaryImageId: "p4znxkstyrdobxwl6rxa ",
            locality: "Ameerpet",
            areaName: "Narsingi",
            costForTwo: "₹50 for two",
            cuisines: ["South Indian", "North Indian"],
            avgRating: 3.5,
            veg: true,
         }
            ]
    );

    useEffect( () => {
      fectData();
    }, []);

    const fectData = async() => {
      // Javscript Fect Method
      const resdata = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4241693&lng=78.3476283&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
      const orginalData = await resdata.json();
      const apiRestolist = orginalData.data.cards[2].card.card.gridElements.infoWithStyle.restaurants;
      //filteredRestrunts(apiRestolist)
    }
  
    return (
        <div className="body">
            <div className="top-rated">
                <button
                className="top-resto"
                onClick={ () => {
                    let filtredResto = restorentData.filter( (resto) => resto.avgRating > 4);
                   /// console.log(filtredResto);
                   filteredRestrunts(filtredResto)
                   //restorentData = filtredResto;
                }}
                >Top Rated Resto
                </button>
            </div>
            <div className="resto-container">  
            {
               restorentData.map( (restrorent) => ( 
               <RestoComponent restoData = {restrorent} />
               ))
            }
            </div>
        </div>
    )
};


export default BodyComponent;