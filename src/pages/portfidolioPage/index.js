import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { api } from "../../services/api"
import { Container } from "./styles"
import foguete from "../../assets/ProjetoStruct.png"
import CaixaTexto from "../../components/caixaTexto"
import ProjectMemberCard from "../../components/projectMemberCard"



const PortifolioPage = () => {

    const {id} = useParams()

    const [ project, setProject ] = useState({})
    useEffect(() => {
        api.get(`projects/show/${id}`).then(response => setProject(response.data))
    },[])


    return(
        <Container>
        {console.log(project)}
            <h1>Portifólio de <span style={{color: "#F8F8FF"}}>{project.name}</span></h1>
            <span className="linha" />
            <a href={project.link}>
                <img src={foguete} alt={project.link} className="image"/>
            </a>
            <CaixaTexto texto={<span style={{color : "#071944"}}>{project.description}</span>} titulo={<span style={{fontWeight: 300}}>Descrição</span>} tamanho={75} direcao="e" cor="#1D7CFA"/>
            <div className="membros_titulo">
                <h1>Membros</h1>
            </div>

            <div className="membros" >
                {project.members && project.members.map((item) => {
                    return(
                        <>
                            {<ProjectMemberCard id={item.id} role={item.role_in_the_project} />}
                        </>
                    )
                })}
            </div>

            

        </Container>
    )
}

export default PortifolioPage