import React from "react";
import "./style.css";

function Nav(props) {
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-info">
            <a className="navbar-brand" href="#">NYT Google Books Search</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                <li className="nav-item active">
                    <a className="nav-link">Search</a>
                </li>
                <li className="nav-item active">
                    <a className="nav-link">Saved</a>
                </li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav;