import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "../pages/about";
import Contato from "../pages/contato";
import HomePage from "../pages/home";
import Portifolios from "../pages/portifolios";

const Rotas = () => {
    return(
        <Routes>
            <Route exact path="/" element={<HomePage />}/>
            <Route path="/about" element={<About />}/>
            <Route path="/portifolios" element={<Portifolios />} />
            <Route path="/contato" element={<Contato />} />

        </Routes>
    )
}

export default Rotas