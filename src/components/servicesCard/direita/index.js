import CaixaTexto from "../../caixaTexto"
import { Container } from "./styles"
import { photo } from "../../../services/api"
import imgTeste from "./../../../assets/foguete.png" // Só para teste

const ServiceCardD = ({service, cor}) => {
return(
    <Container>
    {/* {console.log(service)} */}
    <img src={service.images_url ? photo.defaults.baseURL + service.images_url : imgTeste} alt={service.name}/>

    <CaixaTexto texto={<>{service.description} <br/><br/></>} titulo={<><br/>{service.name}</>}  cor={cor} tam_max_texto="750px"></CaixaTexto>

    </Container>
)
}

export default ServiceCardD