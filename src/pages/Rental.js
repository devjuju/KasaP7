import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import ListeLogements from '../assets/rentals.json';
import Carrousel from '../components/Carrousel';
import Tag from '../components/Tag';
import Etoile from '../assets/RedStar.png';
import EtoileVide from '../assets/EmptyStar.png';
import Dropdown from '../components/Dropdown';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Rental() {
    const id = useParams();
    const ficheLogement = ListeLogements.find(logement => logement.id === id.id);

    /* Tags */
    const tagsLogement = ficheLogement?.tags.map((tags, index) => {
        return <Tag key={index} nom={tags} />
    });

    /* Notes */
    let noteLogement = [];
    let etoileComplete = true;
    for (let index = 0; index < 5; index++) {
        if(index === parseInt(ficheLogement?.rating)) {
            etoileComplete = false;
        }
        if(etoileComplete === true) {
            noteLogement.push(<img key={index} className="etoile" src={Etoile} alt={`${ficheLogement?.rating}/5`}/>)
        } else {
            noteLogement.push(<img key={index} className="etoile" src={EtoileVide} alt={`${ficheLogement?.rating}/5`}/>)
        }
    }

    /* Équipements */
    const equipementsLogement = ficheLogement?.equipments.map((equipment, index) => {
        return <li key={index}>{equipment}</li>
    })

    return(
        <>
            {
                ficheLogement ? (
                    <div className="Fiche">
                        <Header />
                        <Carrousel images={ficheLogement?.pictures}/>
                        <section className="logements-propietaire">
                            <article className="information-logements">
                                <h1 className="titre-logement">{ficheLogement?.title}</h1>
                                <p className="endroit-logement">{ficheLogement?.location}</p>
                                <div className="tags">
                                    {tagsLogement}
                                </div>
                            </article>
                            <article className="proprietaire-note">
                                <div className="information-propietaire">
                                    <span className="nom-proprietaire">{ficheLogement?.host.name}</span>
                                    <img className="photo-propietaire" src={ficheLogement?.host.picture} alt="Propriétaire"/>
                                </div>
                                <div className="note">
                                    {noteLogement}
                                </div>
                            </article>
                        </section>
                        <section className="description-equipements">
                            <Dropdown titre="Description" description={ficheLogement?.description}/>
                            <Dropdown titre="Équipements" description={equipementsLogement}/>
                        </section>
                        <Footer />
                    </div>
                ) : <Navigate replace to="/404"/>
            }
        </>
    )
}

export default Rental;