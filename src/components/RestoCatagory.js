import ItemList from "./itemList";

const RestoCatagory = ( {data}) =>{
    return (
        <div className="resto-cat">
            <span className="bg-dark text-white w-100 d-block mt-3">{data.title} ( {data.itemCards.length} ) </span>
            <ItemList data = {data.itemCards}/>
        </div>
    );
}

export default RestoCatagory;