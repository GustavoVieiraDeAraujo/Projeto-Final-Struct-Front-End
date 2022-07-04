import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { useAdminContext } from "../contexts/useAdminContext";
import About from "../pages/about";
import Login from "../pages/adminPages/login";
import MemberAdd from "../pages/adminPages/memberAdd";
import MemberEdit from "../pages/adminPages/memberEdit";
import MembersIndex from "../pages/adminPages/membersIndex";
import AdminMenu from "../pages/adminPages/menu";
import PartnershipAdd from "../pages/adminPages/partnershipAdd";
import PartnershipEdit from "../pages/adminPages/partnershipEdit";
import PartnershipIndex from "../pages/adminPages/partnershipIndex";
import ProjectAdd from "../pages/adminPages/projectAdd";
import ProjectEdit from "../pages/adminPages/projectEdit";
import PortifoliosIndex from "../pages/adminPages/projectIndex";
import Contato from "../pages/contato";
import HomePage from "../pages/home";
import PortifolioPage from "../pages/portfolioPage";
import Portifolios from "../pages/portifolios";

const Rotas = () => {

    const {admin} = useAdminContext()

    return(
        <Routes>
            <Route exact path="/" element={<HomePage />}/>
            <Route exact path="/about" element={<About />}/>
            <Route exact path="/portifolios" element={<Portifolios />} />
            <Route exact path="/portifolios/:id" element={<PortifolioPage />} />
            <Route exact path="/contato" element={<Contato />} />

            {/* Admin Routes */}
            <Route exact path="/administrator/login" element={<Login />} />
            <Route exact path="/administrator/" element={<AdminMenu />} />

            <Route exact path="/administrator/member/add" element={admin ? <MemberAdd /> : <Navigate to="/administrator/" /> } />
            <Route exact path="/administrator/member" element={admin ? <MembersIndex /> : <Navigate to="/administrator/" /> } />
            <Route path="/administrator/member/edit/:id" element={admin ? <MemberEdit /> : <Navigate to="/administrator/" /> } />
            <Route exact path="/administrator/partnership/add" element={admin ? <PartnershipAdd /> : <Navigate to="/administrator/" /> } />
            <Route exact path="/administrator/partnership" element={admin ? <PartnershipIndex /> : <Navigate to="/administrator/" /> } />
            <Route path="/administrator/partnership/edit/:id" element={admin ? <PartnershipEdit /> : <Navigate to="/administrator/" /> } />
            <Route exact path="/administrator/project/add" element={admin ? <ProjectAdd /> : <Navigate to="/administrator/" /> } />
            <Route exact path="/administrator/project" element={admin ? <PortifoliosIndex /> : <Navigate to="/administrator/" /> } />
            <Route exact path="/administrator/project/edit/:id" element={admin ? <ProjectEdit /> : <Navigate to="/administrator/" /> } />



            
        </Routes>
    )
}

export default Rotas