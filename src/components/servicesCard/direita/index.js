import CaixaTexto from "../../caixaTexto"
import { Container } from "./styles"

import imgTeste from "./../../../assets/foguete.png" // Só para teste

const ServiceCardD = ({service, cor}) => {
return(
    <Container>
    <img src={imgTeste} alt={service.name}/>

    <CaixaTexto texto={service.description} titulo={service.name} cor={cor}></CaixaTexto>

    </Container>
)
}

export default ServiceCardD