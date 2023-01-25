import React from 'react';

function BannerAbout({image}) {
    return(
        <section className="banner-about">
            <img src={image} alt="Bannière"/>
            <div></div>
        </section>
    );
}

export default BannerAbout;