import { useEffect, useState } from "react"
import { ButtomForms } from "../../components/buttomFoms/styles"
import { api, photo } from "../../services/api"
import { Container } from "./styles"

const Contato = () => {

    const [services, setServices] = useState([])
    useEffect(() => {
        api.get('services/index').then(response => setServices(response.data.sort((a,b) => {
            return a.id - b.id
        })))
    }, [])
    const service_colors = ["#0A369F", "#2DA2FF", "#1D7CFA","#0A369F"]


    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [service_id, setServiceId] = useState(0)
    const [about, setAbout] = useState('')

    return (
        <Container>
            <h1>Contato</h1>

            <div className="form">
                <div className="name">
                    <h2>Nome</h2>
                    <input onChange={(event) => setName(event.target.value)} placeholder='Seu Nome' />
                </div>
                <div className="email">
                    <h2>Email</h2>
                    <input onChange={(event) => setEmail(event.target.value)} type='email' placeholder="Seu_Email@email.com"/>
                </div>
                <div className="service">
                    <h2>Serviço Desejado</h2>
                    <div className="service_div">
                        {services.map((item, number) => {
                            return(
                            <label className="service_label" style={service_id == item.id ? {backgroundColor: service_colors[number], border: "4px solid #FD8D4B"} : {backgroundColor: service_colors[number]}}>
                                <span className="service_span">
                                    <p className="service_p">{item.name}</p>
                                    <img src={photo.defaults.baseURL + item.images_url[0]} className="service_image" alt={item.name} />
                                </span>
                                <input onChange={(event) => setServiceId(event.target.value)} type="radio" id={item.name} name="service" value={item.id} className="service_input"/>
                            </label>
                            )
                        })}
                    </div>
                </div>

                <div className="sobre">
                    <h2>Sobre</h2>
                    <textarea onChange={(event) => setAbout(event.target.value)} className="sobre_input" placeholder="Como você quer que seja o seu produto"/>
                </div>

            </div>
            <ButtomForms onClick={() => console.log(name, email, service_id, about)} >Criar</ButtomForms>
        </Container>
    )
}

export default Contato