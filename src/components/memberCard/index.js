
import { Container } from "./styles"
import { photo } from "../../services/api"
import avatar from "../../assets/avatar redondo.png"



const MemberCard = ({member}) => {
    return(
        <Container>
            <ul><li className="nome">{member.name}</li><li className="idade">{member.age}</li></ul>
            <img src={member.photo_url ? photo.defaults.baseURL + member.photo_url : avatar} alt={`Foto do ${member.name}`}/>
            <p>  {member.office.name}</p>
        </Container>
    )
}

export default MemberCard