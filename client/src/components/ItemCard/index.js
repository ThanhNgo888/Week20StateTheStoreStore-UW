import React from "react";
import { useStoreContext } from "../../utils/GlobalState";
import { Link } from "react-router-dom";
import "../ItemCard/style.css"
import { SET_CURRENT_ITEM } from "../../utils/actions";

function ItemCard(props) {
    const [state, dispatch] = useStoreContext();

    function setCurrentItem() {
        dispatch({
            type: SET_CURRENT_ITEM,
            item: props.item
        });
    }

    return (

        <div className="col-sm-4 my-3">
            <div className="card">
                <img className="card-img-top " src={props.item.image} alt={props.item.name} />
                <div className="card-body">
                    <Link className="card-title" onClick={() => setCurrentItem()} to="/Item">
                        {props.item.name}
                    </Link>
                    <p className="card-text">${props.item.salePrice}</p>
                    <p className="card-text">{props.item.shortDescription}</p>
                </div>
            </div>
        </div>

    )
}
export default ItemCard
