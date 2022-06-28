import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import PortfolioCard from "../../../components/portfolioCard"
import { api } from "../../../services/api"
import { Container } from "./styles"



const PortifoliosIndex = () =>  {

    const [projects, setProjects] = useState([])
    useEffect(() => {
        api.get('projects/index').then(response => setProjects(response.data))
    },[])

return(
    <Container>
        <h1>Portifólios</h1>
        {projects.map((item) => {
            return(
                <Link to={'edit/' + item.id.toString()} className="project_container">
                    <PortfolioCard project={item} />
                </Link>
            )
        })}

        
    </Container>
    
)
}

export default PortifoliosIndex