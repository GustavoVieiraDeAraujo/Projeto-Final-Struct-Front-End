import CaixaTexto from "../../caixaTexto"
import { Container } from "./styles"

import imgTeste from "./../../../assets/foguete.png" // Só para teste

const ServiceCardE = ({service, cor}) => {

return(
    <Container>
    
    <CaixaTexto texto={<>{service.description}<br/><br/></>} titulo={<><br/>{service.name}</>} direcao="e" cor={cor} tam_max_texto="750px"></CaixaTexto>
    <img src={imgTeste} alt={service.name}/>

    </Container>
)
}

export default ServiceCardE