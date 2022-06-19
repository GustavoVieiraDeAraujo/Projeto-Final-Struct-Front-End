import { Container } from "./styles"
import logo from '../../assets/logoTransparente.png'
import foquete_outline from "../../assets/foguetinho-outline.png"
import ServiceCardD from "../../components/servicesCard/direita"
import ServiceCardE from "../../components/servicesCard/esquerda"
import PartnersCard from "../../components/partenersCard"




const HomePage = () => {
    
    const service_teste = {
        name:'Aplicativos',
        description: 'Soluções em aplicativos Android e IOS, desenvolvidos sob demanda, personalizados para sua necessidade.',
        image:'./../../assets/foguete.png'}
    const services_teste = [service_teste]


    const partner_teste = {
        link:"https://google.com",
        image: "https://www.google.com/images/branding/googlelogo/1x/googlelogo_light_color_272x92dp.png"
    }

    const partners_teste = [
        partner_teste, partner_teste, partner_teste, partner_teste, partner_teste, partner_teste
    ]

    return (
        <Container>
            <img src={logo} alt='{Struct}' className="logo"/>
            <section className="services">
                <h1 className="services_titulo">Serviços</h1>
                <ServiceCardD service={services_teste[0]} />
                <ServiceCardE service={services_teste[0]} cor="#2DA2FF" />
                <ServiceCardD service={services_teste[0]} cor="#1D7CFA" />

                
            </section>
            <section className="partners">
                <img src={foquete_outline} alt='foguete' className="foguete_outline"/>
                <h1 className="parceiros_titulo">Parceiros</h1>
                <span/>
                <div className="partners_container">
                    {partners_teste.map((item) => {return(
                        <PartnersCard image={item.image} link={item.link}/>
                    )
                    })}
                </div>
                
            </section>
        </Container>
    )
}

export default HomePage