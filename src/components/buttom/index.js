import { Link } from "react-router-dom"
import { Container } from "./styles.js"



const Button = ({text, link}) => {
    // console.log(text)
    return(
        <Container>
            <Link to={link} className='link'>{text}</Link>
        </Container>
    )
}

export default Button