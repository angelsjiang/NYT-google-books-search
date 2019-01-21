import React from "react";
import "./style.css";

function SearchBar(props) {
    return(
        <div className="searchDiv">
            <label id="bookSearch">Book Search</label>
            <div className="input-group mb-3">
                <input type="text" className="form-control" name="title" onChange={props.onChange} placeholder="Book Title..." aria-label="Recipient's username" aria-describedby="button-addon2" />
                <div className="input-group-append">
                    <button className="btn btn-outline-secondary" onClick={props.onClick} type="button" id="searchBtn">search</button>
                </div>
            </div>
        </div>

    );
}

export default SearchBar;