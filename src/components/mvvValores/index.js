import { Container } from "./styles"


const MVVValores = () => {
    let valores = ["Sinergia","Transparência","Respeito", "União", "Compromisso","Transformadora"]
    return (
        <Container>
            {valores.map((item) => {
                return(
                <div>
                    <h2>{item[0]}</h2><span>{item.slice(1)}</span>
                </div>
                )
            })}

        </Container>
    )
}

export default MVVValores