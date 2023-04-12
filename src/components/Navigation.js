import React from 'react';
import { NavLink } from 'react-router-dom';
// SOURCE : https://reactrouter.com/en/main/components/nav-link
function Navigation() {
  // Ce style sera appliqué à un <NavLink> lorsque le
  // l'itinéraire auquel il se connecte est actuellement sélectionné.
  let activeStyle = {
    textDecoration: "underline",
  };
  return (
    <nav>
      <ul>
        <li>
          <NavLink
            to="/"
            style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }
          >
            Accueil
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/a-propos"
            style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }
          >
            A propos
          </NavLink>
        </li>
  
      </ul>
    </nav>
  );
}

export default Navigation;