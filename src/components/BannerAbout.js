import React from "react";

function BannerAbout({image}) {
    return(
        <section className="banner-about">
            <img className="banner-img" src={image} alt="Bannière"/>
            <div className="banner-background"></div>
        </section>
    );
}

export default BannerAbout;