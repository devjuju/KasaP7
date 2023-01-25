import React, { useState } from 'react';
import fleche from '../assets/Arrow.svg';

function Dropdown({titre, description}) {
    const [ouvert, setOuvert] = useState(false);

    return(
        <div className="dropdown" id={`dropdown-${titre}`}>
            <div className="header-dropdown">
                <span>{titre}</span>
                <a className={`arrow-dropdown ${ouvert}`} href={`#dropdown-${titre}`} onClick={() => setOuvert(!ouvert)}>
                    <img src={fleche} alt="Ouvrir cette liste"/>
                </a>
            </div>
            {
                /* Si le dropdown est à TRUE alors il affichera la description */
                ouvert && <p>{description}</p>
            }
        </div>
    );
}

export default Dropdown;