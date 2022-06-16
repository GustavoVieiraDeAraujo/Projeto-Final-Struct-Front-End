import CaixaTexto from "../../caixaTexto"
import { Container } from "./styles"

import imgTeste from "./../../../assets/foguete.png" // Só para teste

const ServiceCardD = ({service, cor}) => {
return(
    <Container>
    <img src={imgTeste} alt={service.name}/>

    <CaixaTexto texto={<>{service.description} <br/><br/></>} titulo={<><br/>{service.name}</>}  cor={cor} tam_max_texto="750px"></CaixaTexto>

    </Container>
)
}

export default ServiceCardD