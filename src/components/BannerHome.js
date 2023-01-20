import React from "react";

function BannerHome({image, texte}) {
    return(
        <section className="banner-home">
            <img className="banner-img" src={image} alt="Bannière"/>
            <div className="banner-background"></div>
            <h1 className="banner-txt">{texte}</h1>
        </section>
    );
}

export default BannerHome;