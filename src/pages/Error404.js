import React from 'react';
import { NavLink } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Error404() {
    return(
        <div className="page-404">
            <Header />
            <section className="section-error404">
                <article className="content">
                    <h1 className="titre-404">404</h1>
                    <span className="description-404">Oups! La page que vous demandez n'existe pas.</span>
                </article>
                <NavLink to="/" className="link-404">Retourner sur la page d’accueil</NavLink>
            </section>
            <Footer />
        </div>
    );
}

export default Error404;