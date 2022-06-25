import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { useAdminContext } from "../contexts/useAdminContext";
import About from "../pages/about";
import Login from "../pages/adiminPages/login";
import MemberAdd from "../pages/adiminPages/memberAdd";
import MemberEdit from "../pages/adiminPages/memberEdit";
import MembersIndex from "../pages/adiminPages/membersIndex";
import AdminMenu from "../pages/adiminPages/menu";
import Contato from "../pages/contato";
import HomePage from "../pages/home";
import Portifolios from "../pages/portifolios";

const Rotas = () => {

    const {admin} = useAdminContext()

    return(
        <Routes>
            <Route exact path="/" element={<HomePage />}/>
            <Route exact path="/about" element={<About />}/>
            <Route exact path="/portifolios" element={<Portifolios />} />
            <Route exact path="/contato" element={<Contato />} />

            {/* Admin Routes */}
            <Route exact path="/administrator/login" element={<Login />} />
            <Route exact path="/administrator/" element={<AdminMenu />} />

            <Route exact path="/administrator/member/add" element={admin ? <MemberAdd /> : <Navigate to="/administrator/" /> } />
            <Route exact path="/administrator/member" element={admin ? <MembersIndex /> : <Navigate to="/administrator/" /> } />
            <Route path="/administrator/member/edit/:id" element={admin ? <MemberEdit /> : <Navigate to="/administrator/" /> } />

        </Routes>
    )
}

export default Rotas