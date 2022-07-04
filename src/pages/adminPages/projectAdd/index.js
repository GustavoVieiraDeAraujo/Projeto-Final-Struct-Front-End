import { useEffect, useState } from "react"
import { ButtomForms } from "../../../components/buttomFoms/styles"
import { api } from "../../../services/api"
import { Container } from "./styles"




const ProjectAdd = () => {

    const [name, setName] = useState('')
    const [link, setLink] = useState('')
    const [photo, setPhoto] = useState([])
    const [description, setDescription] = useState('')




    const addProjectPhoto = async (id) => {
        const formData = new FormData()
        formData.append('photo[]', photo[0])

        let response = await api.post(`projects/add_photo/${id}`, formData)
        if (response.data){
            alert("Projeto Criado")
            setPhoto(response.data)
        }
    }

    const createProject = () => {
        if (photo && name && link && description) {
            api.post('projects/create', {name, link, description}).then(response => {
                addProjectPhoto(response.data.id)
            })
        } else {
            alert("Preencha todos os campos")
        }
    }



    return(
        <Container>
            <h1>Adicionar Projeto</h1>

            <div className="form">
                <div className="name">
                    <h2>Nome</h2>
                    <input onChange={(event) => setName(event.target.value)} />
                </div>
                <div className="name">
                    <h2>Link</h2>
                    <input onChange={(event) => setLink(event.target.value)} />
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
                    <textarea onChange={(event) => setDescription(event.target.value)} className="sobre_input"/>
                </div>

                <div className="photo">
                    <h2>Selecionar Foto</h2>
                    <label for="photo_input" className="photo_label" >{ photo[0] ? photo[0].name : "Selecione o arquivo"}</label>
                    <input onChange={(event) => setPhoto(event.target.files)} type="file" className="photo_input" id="photo_input"/>
                </div>

                
            </div>
            <ButtomForms onClick={() => createProject()} >Criar</ButtomForms>
        </Container>
    )
}

export default ProjectAdd