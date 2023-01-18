import React from "react";
import { NavLink } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

function Error404() {
    return(
        <div className="page-404">
            <Header />
            <h1 className="titre-404">404</h1>
            <span className="description-404">Oups! La page que vous demandez n'existe pas.</span>
            <NavLink to="/" className="lien-site lien-404">Retourner sur la page d’accueil</NavLink>
            <Footer />
        </div>
    );
}

export default Error404;