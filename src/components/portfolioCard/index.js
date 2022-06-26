import { Container } from "./styles"
import foguete from "../../assets/ProjetoStruct.png"
import CaixaTexto from "../caixaTexto"



const PortfolioCard = ({project}) => {

    return(
        <Container>
            <img src={foguete} alt={project.name} />
            <CaixaTexto texto={<span style={{color: "#071944", fontSize:"1.5rem"}}>{project.name}</span>} cor="#FD8D4B" tamanho={60} className="project_name"/>
            <br />
            <CaixaTexto texto={<>{project.description}</>} direcao="e" cor="#1D7CFA"/>
        </Container>
    )
}

export default PortfolioCard