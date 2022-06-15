import { Container } from "./styles"


const PartnersCard = ({image, link}) => {
    return(
        <Container>
            <a href={link}>
                <img src={image} alt={link}/>
            </a>
        </Container>
    )
}

export default PartnersCard