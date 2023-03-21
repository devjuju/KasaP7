import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import ListRentals from '../assets/rentals.json';
import Carrousel from '../components/Carrousel';
import Tag from '../components/Tag';
import Etoile from '../assets/RedStar.png';
import EtoileVide from '../assets/EmptyStar.png';
import Dropdown from '../components/Dropdown';

function RentalSheet() {
    const id = useParams();
    const rentalSheet = ListRentals.find(rental => rental.id === id.id);

    /* Tags */
    const tagsRental = rentalSheet?.tags.map((tags, index) => {
        return <Tag key={index} nom={tags} />
    });

    /* Notes */
    let ratingRental = [];
    let arrowComplete = true;
    for (let index = 0; index < 5; index++) {
        if(index === parseInt(rentalSheet?.rating)) {
            arrowComplete = false;
        }
        if(arrowComplete === true) {
            ratingRental.push(<img key={index} className="etoile" src={Etoile} alt={`${rentalSheet?.rating}/5`}/>)
        } else {
            ratingRental.push(<img key={index} className="etoile" src={EtoileVide} alt={`${rentalSheet?.rating}/5`}/>)
        }
    }

    /* Équipements */
    const equipmentsRental = rentalSheet?.equipments.map((equipement, index) => {
        return <li key={index}>{equipement}</li>
    })

    return(
        <>
            {
                rentalSheet ? (
                    <div className="Fiche">
                        <Carrousel images={rentalSheet?.pictures}/>
                        <section className="rental-owner">
                            <article>
                                <h1>{rentalSheet?.title}</h1>
                                <p>{rentalSheet?.location}</p>
                                <div className="tags">
                                    {tagsRental}
                                </div>
                            </article>
                            <article>
                                <div className="information-owner">
                                    <span>{rentalSheet?.host.name}</span>
                                    <img src={rentalSheet?.host.picture} alt="Propriétaire"/>
                                </div>
                                <div className="rating">
                                    {ratingRental}
                                </div>
                            </article>
                        </section>
                        <section className="dropdown-equipments">
                            <Dropdown titre="Description" description={rentalSheet?.description}/>
                            <Dropdown titre="Équipements" description={equipmentsRental}/>
                        </section>
                    </div>
                ) : <Navigate replace to="/404"/>
            }
        </>
    )
}

export default RentalSheet;