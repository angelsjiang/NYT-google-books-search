import React from "react";
import "./style.css";

function BookList(props) {
    return(
        <div className="card bg-light mb-3">
            <div className="card-body clearfix">
                <img className="bookImage img-thumbnail" alt={props.alt} src={props.image} />
                <div className="infoDiv">
                    {props.saved ? (
                        <button className="btn btn-outline-secondary" onClick={() => props.deleteBook(props.id)} waves='light'>Delete</button>
                    ) : (
                        <button type="button" className="btn btn-info" onClick={() => props.saveBook(props.title)}>Save</button>
                    )}
                    <a href={props.link}><button type="button" className="btn btn-secondary">View</button></a>
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