import React from "react";
import Banniere from "../components/BannerHome";
import banniereAccueil from "../assets/BannerHome.png";
import { NavLink } from "react-router-dom";
import ListeLogements from "../assets/rentals.json";
import Header from "../components/Header";
import Card from "../components/Card";
import Footer from "../components/Footer";

function Home() {
    return(
        <div className="Accueil">
            <Header />
            <Banniere image={banniereAccueil} texte="Chez vous, partout et ailleurs"/>
            <section className="section-card">
                {ListeLogements.map((logement) => <NavLink key={logement.id} to={"/logement/"+logement.id+"/#"}><Card key={logement.id} id={logement.id} image={logement.cover} titre={logement.title} /></NavLink>)}
            </section>
            <NavLink to="*" className="link-404">Voir la page d'erreur 404</NavLink>
            <Footer />
        </div>
    );
}

export default Home;