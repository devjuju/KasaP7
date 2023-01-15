import React from "react";

function Banner({image, texte}) {
    return(
        <section className="banner">
            <img className="banner-img" src={image} alt="Bannière"/>
            <div className="banner-background"></div>
            <h1 className="banner-txt">{texte}</h1>
        </section>
    );
}

export default Banner;