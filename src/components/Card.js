import React from 'react';
// La bibliothèque  prop-types permet de sécuriser 
// les props en déclarant un type pour chaque prop.
import PropTypes from 'prop-types';

function Card({id, image, titre}) {
    return(
        <div className="card" id={id}> 
            <img src={image} alt="Card"/>
            <div></div>
            <h2>{titre}</h2>
        </div>
    );
}
// “exiger” une prop dans un composant avec isRequired
// Préciser qu'une prop est requise pour le bon 
// fonctionnement de l'application. 
// Les Wargning disparaissent!
Card.propTypes = {
    id: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    titre: PropTypes.string.isRequired,
}
 
export default Card;