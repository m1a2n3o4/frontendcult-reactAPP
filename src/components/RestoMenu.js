import { useEffect, useState } from "react";
import axios from "axios";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { API_RESTOMENU } from "../utils/constants";
import RestoCatagory from "./RestoCatagory";
const RestoMenu = () => {

    const [restoInfo, setrestoInfo] = useState(null);

    const { restoId} = useParams();

    useEffect( () => {
        getRestoMenu();
    },[]);

    const getRestoMenu = async() => {
     
        try {
            const restoRespo = await axios.get(API_RESTOMENU+restoId);
            setrestoInfo(restoRespo.data);
            

        } catch {
            // API Error
        }

    };

    if(restoInfo === null) { return <Shimmer></Shimmer>};

    const {name, areaName, avgRating, city, cuisines } = restoInfo.data.cards[0].card.card.info;
    const { itemCards }= restoInfo.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card;
    // type.googleapis.com/swiggy.presentation.food.v2.ItemCategory
    const catagories = restoInfo.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards.filter(
        (c) => c?.card?.card?.["@type"] == "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
    
    return (
        <div className="menu-items">
            <h1>{name}</h1>
            <h2>{areaName}</h2>
            <h3>{city}</h3>
            <h2>{cuisines.join(",")}</h2>
            <p>{avgRating}</p>
             { catagories.map( ( catagory) => (
                    <RestoCatagory data = {catagory.card.card}/> 
             ))
             }

        </div>

    );
    ;

}

export default RestoMenu;