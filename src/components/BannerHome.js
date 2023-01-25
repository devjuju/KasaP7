import React from 'react';

function BannerHome({image, texte}) {
    return(
        <section className="banner-home">
            <img src={image} alt="Bannière"/>
            <div></div>
            <h1>{texte}</h1>
        </section>
    );
}

export default BannerHome;