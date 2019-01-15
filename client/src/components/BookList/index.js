import React from "react";
import "./style.css";

function BookList(props) {
    return(
        <div className="card bg-light mb-3">
            <div className="card-body clearfix">
                <img className="bookImage img-thumbnail" src={props.image} />
                <div className="infoDiv">
                    <button type="button" class="btn btn-info">Save</button>
                    &nbsp;
                    <a href={props.link}><button type="button" class="btn btn-secondary">View</button></a>
                    <br></br><br></br>
                    <h5 className="card-title">{props.title}</h5>
                    <p className="author">{props.author}</p>
                    <p className="card-text">{props.description}</p>
                </div>
            </div>
        </div>
    );
}

export default BookList;