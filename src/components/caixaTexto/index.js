import { Container } from "./styles"


const CaixaTexto = ({texto, direcao="d", titulo=null, cor_titulo="#F8F8FF", cor="#0A369F"}) => {

    let estilo_titulo = {color : cor_titulo }
    let estilo = {}
    
    estilo["backgroundColor"] = cor


    if (direcao === "e") {
        // estilo = { position : "relative", right: "-10%", "z-level" : '-1'}
        estilo["position"] = "relative"
        estilo["right"] = "-10%"
    }

    return(
        <Container style={estilo && estilo}>
            {titulo && <h1 style={estilo_titulo}>{titulo}</h1>}
            <p>
                {texto}
            </p>
        </Container>
    )
}

export default CaixaTexto