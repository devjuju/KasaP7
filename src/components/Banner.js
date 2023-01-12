import React from "react";

function Header({image, texte}) {
    return(
        <div className="banniere">
            <img className="banniere-img" src={image} alt="Bannière"/>
            <div className="banniere-sombre"></div>
            <span className="banniere-txt">{texte}</span>
        </div>
    );
}

export default Header;