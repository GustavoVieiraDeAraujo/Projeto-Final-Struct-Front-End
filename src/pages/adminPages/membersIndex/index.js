import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import MemberCard from "../../../components/memberCard"
import { api } from "../../../services/api"
import { Container } from "./styles"



const MembersIndex = () => {

    const [members, setMembers] = useState([])
    useEffect(() => {
        api.get('members/index').then(response => setMembers(response.data))
    }, [])

    return(
        <Container>
        <h1>Selecione um Membro</h1>
            <div className="membros">
                {members.map((item) => {
                    return(
                        <Link to={`edit/${item.id}`} className="link">
                            <MemberCard member={item} />
                        </Link>
                        
                )
                })}
            </div>
        </Container>
    )
}

export default MembersIndex