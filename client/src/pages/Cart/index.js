import React from "react";
import { Link } from "react-router-dom";
import CartItem from "../../components/CartItem";
import { useStoreContext } from "../../utils/GlobalState";

function Cart() {
    const [state, dispatch] = useStoreContext();
    
    return (

        <div className="container mt-5 bg-light p-5">
            <h2 className="text-center"> Shopping Cart</h2>

            <div className="row mt-4">

                <div className="col-2">
                    Product
                </div>
                <div className="col-4">
                </div>
                <div className="col-2">
                    Price
                </div>
                <div className="col-2">
                    Quantity
                </div>
                <div className="col-2">
                </div>

            </div>

            {state.cart.map((i, index) => (
                <CartItem key={index} item={i}/>
            ))}
            
        
            <div className="mt-5 row">

                <div className="col-3">
                    <Link to="/" className="btn btn-secondary btn-lg" role="button">
                       Back to Products
                    </Link>
                </div>
                <div className="col-3">
                </div>
                
                

            </div>


        </div>
    );
}

export default Cart;