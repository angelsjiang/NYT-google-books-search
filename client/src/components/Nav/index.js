import React from "react";
import { Navbar } from "react-materialize";
import { Link } from "react-router-dom";
import "./style.css";

function Nav(props) {
    return(
        <nav className="navbar navbar-dark bg-dark">
            <span className="navbar-brand mb-0 h1">NYT Google Books Search</span>
            <button type="button" className="btn btn-light"><Link to={"/"}>Search</Link></button>
            <button type="button" className="btn btn-light"><Link to={"/"}></Link><Link to={"/saved"}>Saved</Link></button>
        </nav>
    )
}

export default Nav;