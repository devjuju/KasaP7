import React from "react";
import logoHeader from "../assets/Logo-red.png";
import { NavLink } from "react-router-dom";
import Navigation from "./Navigation";

function Header() {
    return(
        <header>
            <NavLink to="/">
                <img className="logo-red" src={logoHeader} alt="Logo"/>
            </NavLink>
            <Navigation />
        </header>
    );
}

export default Header;