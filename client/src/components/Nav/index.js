import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Nav(props) {
    return(
        <nav className="navbar navbar-dark bg-dark">
            <span className="navbar-brand mb-0 h1">Google Books Search</span>
            <Link to={"/"}><button type="button" className="btn btn-light">Search</button></Link>
            <Link to={"/saved"}><button type="button" className="btn btn-light">Saved</button></Link>
        </nav>
    )
}

export default Nav;