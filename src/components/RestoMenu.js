import { useEffect, useState } from "react";
import axios from "axios";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { API_RESTOMENU } from "../utils/constants";
const RestoMenu = () => {

    const [restoInfo, setrestoInfo] = useState(null);

    const { restoId} = useParams();
    console.log(restoId);

    useEffect( () => {
        getRestoMenu();
    },[]);

    const getRestoMenu = async() => {
     
        try {
            const restoRespo = await axios.get(API_RESTOMENU+restoId);
            console.log(restoRespo.data);
            setrestoInfo(restoRespo.data);
            

        } catch {
            // API Error
        }

    };

    if(restoInfo === null) { return <Shimmer></Shimmer>};

    const {name, areaName, avgRating, city, cuisines } = restoInfo.data.cards[0].card.card.info;
    const { itemCards }= restoInfo.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card;
    return (
        <div className="menu-items">
            <h1>{name}</h1>
            <h2>{areaName}</h2>
            <h3>{city}</h3>
            <h2>{cuisines.join(",")}</h2>
            <p>{avgRating}</p>
            <ul className="list-group">
                { itemCards.map( (item) => 
                <li className="list-group-item">{item.card.info.name} - {item.card.info.price}</li>
                )}
            </ul>
        </div>

    );
    ;
}

export default RestoMenu;