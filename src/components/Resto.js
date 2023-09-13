import {PRODUCT_IMG_BASEURL} from "../utils/constants"

const RestoComponent = (props) => {
    const {restoData} = props;
     return (
         <div className="resto">
             <img src= 
             {
                PRODUCT_IMG_BASEURL + restoData.cloudinaryImageId 
             }/>
            <h2>{restoData.name}</h2>
            <h4>{restoData.avgRating}</h4>
            <h4>{restoData.locality}</h4>
            <h4>{restoData.costForTwo}</h4>
            <h4>{restoData.cuisines.join(", ")}</h4>
         </div>
     )
 };

 // Highr order function
 // Input/component (Resto Component) => PrintLabel(onefree) => retunr As new component.

 export const withOnefeeDeliveryLabel = (RestoComponent) => {
    return (props) => {
        return (
            // Add the lable
            <div>
               <label className="bg-dark text-white">free Delivery.</label>
               <RestoComponent {...props}/>
            </div>
        );
    }
 }


 export default RestoComponent;