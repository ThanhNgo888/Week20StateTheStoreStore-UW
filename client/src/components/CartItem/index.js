import React from "react"
import { useStoreContext } from "../../utils/GlobalState";
import { REMOVE_CART_ITEM } from "../../utils/actions";

function CartItem(props) {
    const [state, dispatch] = useStoreContext();
    
    function removeFromCart() {
        dispatch({
            type: REMOVE_CART_ITEM,
            name: props.item.name
        });
    }

    return (

        <div className="row mt-4">

            <div className="col-2">
                <img className="card-img-top" src={props.item.image} alt={props.item.name} />
            </div>
            <div className="col-4">
                {props.item.shortDescription}
            </div>
            <div className="col-2">
                {props.item.salePrice}
            </div>
            <div className="col-2">
                <input className="form-control" type="text" placeholder={state.cartCount[props.item.name]} />
            </div>
            <div className="col-2">
                <button type="button" className="btn btn-danger" onClick={() => removeFromCart()}>X</button>
            </div>

        </div>

    )
}

export default CartItem