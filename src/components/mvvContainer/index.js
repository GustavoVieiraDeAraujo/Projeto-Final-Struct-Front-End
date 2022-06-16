import { Container } from "./styles"



const MVVContainer = ({titulo, texto}) => {
    return (
        <Container>
            <div className="titulo">
                <h1>{titulo[0]}</h1><span>{titulo.slice(1)}</span>
            </div>
            <div className="linha"></div>
            {texto}
        </Container>
    )
}

export default MVVContainer