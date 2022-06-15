import CaixaTexto from "../../caixaTexto"
import { Container } from "./styles"

import imgTeste from "./../../../assets/foguete.png" // Só para teste

const ServiceCardE = ({service, cor}) => {
console.log(cor)

return(
    <Container>
    
    <CaixaTexto texto={service.description} titulo={service.name} direcao="e" cor={cor}></CaixaTexto>
    <img src={imgTeste} alt={service.name}/>

    </Container>
)
}

export default ServiceCardE