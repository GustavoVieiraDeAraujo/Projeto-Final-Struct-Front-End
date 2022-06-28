import { Container } from "./styles"
import foguete from "../../assets/logo.jpg"
import CaixaTexto from "../caixaTexto"
import { photo } from "../../services/api"



const PortfolioCard = ({project}) => {

    return(
        <Container>

            <img src={project.photo_url ? photo.defaults.baseURL + project.photo_url : foguete} alt={project.name} />
            <CaixaTexto texto={<span style={{color: "#071944", fontSize:"1.5rem"}}>{project.name}</span>} cor="#FD8D4B" tamanho={60} className="project_name"/>
            <br />
            <CaixaTexto texto={<div style={{width : "50%", display: "flex", flexWrap: "wrap"}}><p>{project.description}</p></div> } direcao="e" cor="#1D7CFA"/>
        </Container>
    )
}

export default PortfolioCard