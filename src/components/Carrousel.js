import React, { useState } from 'react';
import fleche from '../assets/Arrow.png';

function Carrousel({images}) {
    let [imgDisplay, changeImg] = useState(0);
    let nomberImg = images.length;

    const imgPrevious = () => {
        if(imgDisplay === 0) {
            changeImg(nomberImg - 1);
        } else {
            changeImg(imgDisplay - 1);
        }
        return(changeImg);
    };  

    const imgNext = () => {
        if(imgDisplay === nomberImg - 1) {
            changeImg(nomberImg = 0);
        } else {
            changeImg(imgDisplay + 1);
        }
        return(changeImg);
    };

    return(
        <section className="section-carrousel">
            <div className="carrousel">
            {
                nomberImg > 1 && <img className="arrow arrow-left" src={fleche} alt="Contenu précedént" onClick={imgPrevious}/>
            }
            {
                images.map((image, index) => {
                    return(
                        <img key={index} className={index === imgDisplay ? 'carrousel-img actif' : 'carrousel-img'} src={image} alt="Logement"/>
                    )
                })
            }
            {
                nomberImg > 1 && <img className="arrow arrow-right" src={fleche} alt="Contenu suivant" onClick={imgNext}/>
            }
            </div>
        </section>
       
    );
}

export default Carrousel;