import React from "react";
import logoFooter from "../assets/Logo-white.png";
function Footer() {
    return(
        <footer>
            <div className="content">
            <img src={logoFooter} alt="Logo" />
                <p>&copy; 2022 Kasa. Tous droits réservés</p>
            </div>
        </footer>
    );
}
export default Footer;