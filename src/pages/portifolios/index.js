import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import PortfolioCard from "../../components/portfolioCard"
import { api } from "../../services/api"
import { Container } from "./styles"



const Portifolios = () =>  {
    // Os Comentarios são uma fução para adicionar imagens aos serviços

    const [projects, setProjects] = useState([])
    useEffect(() => {
        api.get('projects/index').then(response => setProjects(response.data))
    },[])

    // const id = 4

    // const [images, setImage] = useState([])

    // const submitHandler = (e) => {
    //     e.preventDefault();
    //     serviceAddImage()
    // }

    // const serviceAddImage = async () =>  {
    //     const formData = new FormData()
    //     console.log(images)
    //     formData.append('images[]', images[0])

    //     const response = await api.post(`services/add_images/${id}`, formData)
    //     if(response.data){
    //         alert("Imagens adicionada")
    //         setImage(response.data)
    //         console.log(images)
    //     }
    // }

return(
    <Container>
        <h1>Portifólios</h1>
        {projects.map((item) => {
            return(
                <Link to={item.id.toString()} className="project_container">
                    <PortfolioCard project={item} />
                </Link>
            )
        })}

        
        {/* <form onSubmit={ submitHandler }>
            <input type={"file"} onChange={(event) => setImage(event.target.files)}></input>

            <button type="submit">Foi</button>
        </form> */}
    </Container>
    
)
}

export default Portifolios