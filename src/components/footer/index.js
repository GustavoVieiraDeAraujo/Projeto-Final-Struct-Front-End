import avatar_redondo from '../../assets/avatar redondo.png'
import Button from '../buttom'
import { Link } from 'react-router-dom'
import { BsInstagram, BsFacebook, BsLinkedin } from 'react-icons/bs'
import { Container } from './styles'


const Footer = () => {
    return (
        <Container>
            <div className='maior'>
                <img src={avatar_redondo} alt='logo' />
                <div className='content'>
                    <div className='links'>
                        <Link to={'/'} className="link">Home</Link>
                        <Link to={'/portifolios'} className="link" >Portifólios</Link>
                        <Link to={'/about'} className="link">Sobre Nós</Link>
                    </div>
                    <div className='botao'>
                        <Button text="Contato" link={"/contato"}/>
                    </div>
                    <div className='redes_sociais'>
                        <a href={'https://www.instagram.com/structunb/'} ><BsInstagram  size={32}/></a>
                        <a href='https://www.facebook.com/StructUnB/'><BsFacebook   size={32}/></a>   
                        <a href='https://www.linkedin.com/company/struct-ej/?original_referer=http%3A%2F%2Fstruct.unb.br%2F'><BsLinkedin   size={32}/></a>
                    </div>
                </div>
            </div>    
            <div className='copyright'>
                <p>Copyright © 2022 | Created by us</p>
                <p>Logotipo Vetor Criado por catalyststuff</p>
            </div>
        </Container>
    )
}

export default Footer