import React from "react";
import logoHeader from "../assets/Logo-red.png";
import { NavLink } from "react-router-dom";

function Header() {
    return(
        <header>
            <NavLink to="/">
                <img className="logo-red" src={logoHeader} alt="Logo"/>
            </NavLink>
       
            <nav>
                <NavLink to="/" className="nav-link">Accueil</NavLink>
                <NavLink to="/a-propos" className="nav-link">À propos</NavLink>
                <NavLink to="/page-erreur" className="nav-link">Error404</NavLink>
            </nav>
        </header>
    );
}

export default Header;