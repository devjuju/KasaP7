import React from 'react';
import Banniere from '../components/BannerHome';
import banniereAccueil from '../assets/BannerHome.png';
import { NavLink } from 'react-router-dom';
import ListeLogements from '../assets/rentals.json';
import Card from '../components/Card';
function Home() {
    return(
        <div className="Accueil">
            <Banniere image={banniereAccueil} texte="Chez vous, partout et ailleurs"/>
            <section className="section-card">
                {ListeLogements.map((logement) => <NavLink key={logement.id} to={"/logement/"+logement.id+"/#"}><Card key={logement.id} id={logement.id} image={logement.cover} titre={logement.title} /></NavLink>)}
            </section>
        </div>
    );
}

export default Home;