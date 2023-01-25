import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Rental from './pages/Rental';
import Error404 from './pages/Error404';

function Routing() {
   return (
      <div className="App">
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/logement/:id" element={<Rental />} />
            <Route path="/a-propos" element={<About />} />
            <Route path="*" element={<Error404 />} />
         </Routes>
      </div>
   );
}

export default Routing;