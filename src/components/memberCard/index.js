
import { Container } from "./styles"



const MemberCard = ({member}) => {
    return(
        <Container>
            <ul><li className="nome">{member.name}</li><li className="idade">{member.age}</li></ul>
            <img src={"https://source.unsplash.com/random?perfil"} alt={`Foto do ${member.name}`}/>
            <p>  {member.office.name}</p>
        </Container>
    )
}

export default MemberCard