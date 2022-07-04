import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import MemberCard from "../../../components/memberCard"
import PartnersCard from "../../../components/partenersCard"
import { api, photo } from "../../../services/api"
import { Container } from "./styles"



const PartnershipIndex = () => {

    const [partnerships, setPartnerships] = useState([])
    useEffect(() => {
        api.get('partnerships/index').then(response => setPartnerships(response.data))
    }, [])

    return(
        <Container>
        <h1>Selecione uma Parceria</h1>
            <div className="parcerias">
                {partnerships.map((item) => {
                    return(
                        <Link to={`edit/${item.id}`} className="link">
                            <PartnersCard image={ photo.defaults.baseURL + item.images_url} />
                            <h2>{item.name}</h2>
                        </Link>
                        
                )
                })}
            </div>
        </Container>
    )
}

export default PartnershipIndex