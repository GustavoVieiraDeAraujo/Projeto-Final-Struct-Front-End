import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { ButtomForms } from "../../../components/buttomFoms/styles"
import { api } from "../../../services/api"
import { Container } from "./styles"




const ProjectEdit = () => {

    const {id} = useParams()
    const [project, setProject] = useState({})

    useEffect(() => {
        api.get(`projects/show/${id}`).then(response => setProject(response.data))
    },[])

    const [name, setName] = useState('')
    const [link, setLink] = useState('')
    const [photo, setPhoto] = useState([])
    const [description, setDescription] = useState('')




    const addProjectPhoto = async (id) => {
        const formData = new FormData()
        formData.append('photo[]', photo[0])

        let response = await api.post(`projects/add_photo/${id}`, formData)
        if (response.data){
            setPhoto(response.data)
        }
    }

    const editProject = () => {
        let params = {}
        if (name) {params['name'] = name}
        if (link) {params['link'] = link}
        if (description) {params['description'] = description}


            api.patch(`projects/update/${id}`, params).then(response => setProject(response.data))
    }

    const submitHandler = () => {
        if (name || link || description) {
            editProject()
            alert("Projeto Editado")
        } else if(photo[0]){
                addProjectPhoto(id)
            }
        else {
            alert('Preencha algum campo')
        }
    }

    const deleteProject = async() => {
        if (window.confirm(`Tem certeza que deseja deletar o projeto ${project.name}?`)){
            let response = await api.delete(`projects/delete/${id}`)
            alert(response.data.message)
        }
    }


    return(
        <Container>
            <h1>Editar Projeto: <span style={{color: "#F8F8FF"}}>{project.name}</span> </h1>
            <ButtomForms onClick={() => {deleteProject()}}>Deletar</ButtomForms>

            <div className="form">
                <div className="name">
                    <h2>Nome</h2>
                    <input onChange={(event) => setName(event.target.value)} placeholder={project.name}/>
                </div>
                <div className="name">
                    <h2>Link</h2>
                    <input onChange={(event) => setLink(event.target.value)} placeholder={project.link}/>
                </div>

                {/* <div className="office_id">
                    <h2>Escritório</h2>
                    <select name="office" onChange={(event) => setOfficeId(event.target.value)} placeholder="Selecione o Escritório">
                        <option value={0} >Selecione o Escritório</option>
                        {offices.map((item) => {
                            return(
                                <option value={item.id}>{item.name}</option>
                            )
                        })}
                    </select>
                </div> */}
                <div className="sobre">
                    <h2>Descrição</h2>
                    <textarea onChange={(event) => setDescription(event.target.value)} className="sobre_input" placeholder={project.description}/>
                </div>

                <div className="photo">
                    <h2>Selecionar Foto</h2>
                    <label for="photo_input" className="photo_label" >{ photo[0] ? photo[0].name : "Selecione o arquivo"}</label>
                    <input onChange={(event) => setPhoto(event.target.files)} type="file" className="photo_input" id="photo_input"/>
                </div>

                
            </div>
            <ButtomForms onClick={() => submitHandler()} >Editar</ButtomForms>
        </Container>
    )
}

export default ProjectEdit