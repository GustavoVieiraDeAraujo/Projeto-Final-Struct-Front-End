
import { Container } from "./styles"



const MemberCard = ({member}) => {
    return(
        <Container>
            <ul><li className="nome">{member.name}</li><li className="idade">{member.age}</li></ul>
            <img src={member.image} alt={`Foto do ${member.name}`}/>
            <p>  {member.position}</p>
        </Container>
    )
}

export default MemberCard