import { useEffect, useState } from "react"
import { ButtomForms } from "../../../components/buttomFoms/styles"
import { api } from "../../../services/api"
import { Container } from "./styles"




const PartnershipAdd = () => {


    const [images, setImages] = useState([])
    const [name, setName] = useState('')
    const [link, setLink] = useState("")



    const addPartnership = async (id) => {
        const formData = new FormData()
        formData.append('images[]', images[0])

        let response = await api.post(`partnerships/add_images/${id}`, formData)
        if (response.data){
            alert("Parceiro Criado")
            setImages(response.data)
        }
    }

    const createPartnership = () => {
        if (images && name && link) {
            api.post('partnerships/create', {name, link}).then(response => {
                addPartnership(response.data.id)
            })
        } else {
            alert("Preencha todos os campos")
        }
    }



    return(
        <Container>
            <h1>Adicionar Parceiro</h1>

            <div className="form">
                <div className="name">
                    <h2>Nome</h2>
                    <input onChange={(event) => setName(event.target.value)} />
                </div>
                <div className="link">
                    <h2>Link</h2>
                    <input onChange={(event) => setLink(event.target.value)} />
                </div>
                <div className="photo">
                    <h2>Selecione a Imagem</h2>
                    <label for="photo_input" className="photo_label" >{ images[0] ? images[0].name : "Selecione o arquivo"}</label>
                    <input onChange={(event) => setImages(event.target.files)} type="file" className="photo_input" id="photo_input"/>
                </div>
            </div>
            <ButtomForms onClick={() => createPartnership()} >Criar</ButtomForms>
        </Container>
    )
}

export default PartnershipAdd