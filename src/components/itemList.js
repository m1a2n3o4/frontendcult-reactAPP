import  { PRODUCT_IMG_BASEURL} from "../utils/constants";

const ItemList = ( {data}) => {
    console.log(data);
   
    return (
        <div className="sd">
           { <ul className="list-group">
            {  data.map( item =>
                <li className="list-group-item">
                  { item.card.info.name} - {item.card.info.price/100}
                  <p> { item.card.info.description }</p>
                  <img src={ PRODUCT_IMG_BASEURL + item.card.info.imageId} height={70}/>
                  <button className="btn btn-dark"> + Add</button>
                </li>
            )}
           </ul> }
        </div>
    );
}

export default ItemList;