import { useEffect, useState } from "react"
import { api, photo } from "../../services/api"
import { Container } from "./styles"
import avatar from "../../assets/avatar redondo.png"


const ProjectMemberCard = ({id, role}) => {

    const [member, setMember] = useState({})
    useEffect(() => {
        api.get(`members/show/${id}`).then(response => setMember(response.data))
    },[])

    return(
        <Container>
            <ul><li className="nome">{member.name}</li><li className="idade">{member.age}</li></ul>
            <img src={member.photo_url ? photo.defaults.baseURL + member.photo_url : avatar} alt={`Foto do ${member.name}`}/>
            <p>{role}</p>
        </Container>
    )
}

export default ProjectMemberCard