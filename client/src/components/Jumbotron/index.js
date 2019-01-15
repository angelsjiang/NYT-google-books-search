import React from "react";
import "./style.css";

function Jumbotron(props) {
    return(
        <div className="jumbotron">
            <h1 className="display-4">NYT Google Books Search</h1>
            <p className="lead">This is a simple Google books searching engine, provide you the convenience of quickly looking up books that you are looking forward to read!</p>
        </div>
    )
}

export default Jumbotron;