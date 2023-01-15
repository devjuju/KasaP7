import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/main.scss"
import Routing from "./Router";
import { BrowserRouter } from "react-router-dom";
// Étape 2 : Ajoutez React Router
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
   <BrowserRouter>
      <Routing />
   </BrowserRouter>
);