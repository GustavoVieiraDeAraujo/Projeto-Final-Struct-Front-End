import { Container } from "./styles"
import logo from '../../assets/logoTransparente.png'
import foquete_outline from "../../assets/foguetinho-outline.png"
import ServiceCardD from "../../components/servicesCard/direita"
import ServiceCardE from "../../components/servicesCard/esquerda"
import PartnersCard from "../../components/partenersCard"
import { api, photo } from "../../services/api"
import { useState, useEffect } from "react"



const HomePage = () => {

    const [services, setServices] = useState([])

    useEffect(() => {
        api.get("/services/index")
        .then(response => setServices(response.data))
    }, [])



    const [partners, setPartners] = useState([])

    useEffect(() => {
        api.get("partnerships/index")
        .then(response => setPartners(response.data))
    },[])


    return (
        <Container>
        {console.log(services)}
            <img src={logo} alt='{Struct}' className="logo"/>
            <section className="services">
                <h1 className="services_titulo">Serviços</h1>
                {services[0] && <ServiceCardD service={services[0]} />}
                {services[1] && <ServiceCardE service={services[1]} cor="#2DA2FF" />}
                {services[2] && <ServiceCardD service={services[2]} cor="#1D7CFA"/>}

                
            </section>
            <section className="partners">
                <img src={foquete_outline} alt='foguete' className="foguete_outline"/>
                <h1 className="parceiros_titulo">Parceiros</h1>
                <span/>
                <div className="partners_container">
                    {partners.map((item) => {return(
                        <PartnersCard image={item.images_url ? photo.defaults.baseURL + item.images_url : null} link={item.link}/>
                    )
                    })}

                </div>
                
            </section>
        </Container>
    )
}

export default HomePage