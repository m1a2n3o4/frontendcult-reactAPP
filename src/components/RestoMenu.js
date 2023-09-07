import { useEffect, useState } from "react";
import axios from "axios";
import Shimmer from "./Shimmer";

const RestoMenu = () => {

    const [restoInfo, setrestoInfo] = useState(null);

    useEffect( () => {
        getRestoMenu();
    },[]);

    const getRestoMenu = async() => {
     
        try {
            const restoRespo = await axios.get("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.4241693&lng=78.3476283&restaurantId=244361&catalog_qa=undefined&submitAction=ENTER");
            console.log(restoRespo.data);
            setrestoInfo(restoRespo.data);
            

        } catch {
            // API Error
        }

    };

    if(restoInfo === null) { return <Shimmer></Shimmer>}
    return (
        <div className="menu-items">
            <h1>{restoInfo.data.cards[0].card.card.info.name}</h1>
            <h2>Type of menu</h2>
            <ul className="list-group">
                <li className="list-group-item">Onine Dosa - 200</li>
                <li className="list-group-item">Onine Dosa2 - 200</li>
            </ul>
        </div>

    );
    ;
}

export default RestoMenu;