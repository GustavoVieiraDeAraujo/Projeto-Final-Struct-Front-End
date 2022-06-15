import { Container } from "./styles"
import mascote from "../../assets/foguete.png"
import { Link, useLocation } from "react-router-dom"
import Button from "../buttom"

const Navbar = () => {
    const location = useLocation()

    let change_link_color = (link_path) => {
        if (location.pathname === link_path) {
            return {color:'#FD8D4B'}}
    }

    return(
        <Container>
        <div className="barra_superior"></div>
        <div className="conteudo">
            <Link to="/"> <img src={mascote} alt='logo'/></Link>

            <div className="Links">
                <Link to={'/'} className="link_home" style={change_link_color('/')}>Home</Link>
                <Link to={'/portifolios'} className="link_portfolio" style={change_link_color('/portifolios')}>Portifólios</Link>
                <Link to={'/about'} className="link_about" style={change_link_color('/about')}>Sobre Nós</Link>
            </div>
            <div className="botao">
                <Button text="Contato" link={"/contato"} className="botao_contato"/>
                <button className="botao_menu"><hr/><br/><hr/><br/><hr/></button>

            </div>
        </div>
        </Container>
    )
}

export default Navbar