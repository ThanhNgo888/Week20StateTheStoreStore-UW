import React, { useEffect, useRef } from "react";
import ItemCard from "../../components/ItemCard";
import API from "../../utils/API";
import { useStoreContext } from "../../utils/GlobalState";
import { UPDATE_ITEMS, UPDATE_CATEGORIES } from "../../utils/actions"

function Home() {
    const [state, dispatch] = useStoreContext();
    const searchRef = useRef();

    const getItems = (item) => {
         
        API.findAll(item)
            .then(results => {
                 
                var random = Math.floor(Math.random() * (results.data.length))
                var categoryList = results.data[random].categoryPath.map(cat => cat.name);
                
                dispatch({
                    type: UPDATE_CATEGORIES,
                    categories: categoryList
                })
                dispatch({
                    type: UPDATE_ITEMS,
                    searchItems: results.data
                });
            })
            .catch(err => console.log(err));
    };

    useEffect(() => {
        getItems("");
    }, []);


    return (

        <div className="container mt-5 bg-light p-5">

            <div className="input-group md-form form-sm form-2 pl-0">
                <input ref={searchRef} className="form-control my-0 py-1 red-border" type="text" placeholder="Search Product" aria-label="Search" />
                <div className="input-group-append">
                    <span className="input-group-text red lighten-3" id="basic-text1" onClick={() => getItems(searchRef.current.value)}><i className="fas fa-search text-grey"
                        aria-hidden="true"></i></span>
                </div>
            </div>

            <div className="row justify-content-around mt-4">
                <div className="col-2">
                    Available Categories
                </div>

                {state.categories.map((cat, index) => (
                    <div key={index} className="col-2 my-1">
                        <button type="button" className="btn btn-dark" onClick={() => getItems(cat)}>{cat}</button>
                    </div>
                ))}

            </div>

            <div className=" mt-5 container">
                <div className="row">

                    {state.searchItems.map((i, index) => (
                        <ItemCard key={index} item={i} />
                    ))}

                </div>
            </div>

        </div>
    );
}

export default Home;