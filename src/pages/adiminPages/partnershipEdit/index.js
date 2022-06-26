import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { ButtomForms } from "../../../components/buttomFoms/styles"
import { api } from "../../../services/api"
import { Container } from "./styles"




const PartnershipEdit = () => {

    const {id} = useParams()

    const [partnership, setPartnership] = useState({})
    useEffect(() => {
        api.get(`partnerships/show/${id}`).then(response => setPartnership(response.data))
    },[])

    const [images, setImages] = useState([])
    const [name, setName] = useState('')
    const [link, setLink] = useState("")



    const addPartnershipImages = async () => {
        const formData = new FormData()
        formData.append('images[]', images[0])

        let response = await api.post(`partnerships/add_images/${id}`, formData)
        if (response.data){
            setImages(response.data)
        }
    }

    const EditPartnership = () => {
        if (name || link) {
            let params = {}
            if(name) { params["name"] = name}
            if(link) { params["link"] = link}

            try{
                api.patch(`partnerships/update/${id}`, params).then(response => setPartnership(response.data))
            } catch (e) {
                alert("Tente Novamente\n" + e.message)
            }
        }
    }

    const submitHandler = () => {
        EditPartnership()
        if (images[0]){
            addPartnershipImages()
        }
        alert("Parceiro Atualizado")
    }

    const deletePartnership = async() => {
        if (window.confirm(`Tem certeza que deseja deletar a parceria ${partnership.name}?`)){
            let response = await api.delete(`partnerships/delete/${id}`)
            alert(response.data.message)
        }
    }



    return(
        <Container>
            <h1>Editar Parceiria: { partnership && <span style={{color : "#F8F8FF"}}>{partnership.name}</span>}</h1>
            <ButtomForms onClick={() => {deletePartnership()}}>Deletar</ButtomForms>
            <div className="form">
                <div className="name">
                    <h2>Nome</h2>
                    <input onChange={(event) => setName(event.target.value)} placeholder={partnership.name}/>
                </div>
                <div className="link">
                    <h2>Link</h2>
                    <input onChange={(event) => setLink(event.target.value)} placeholder={partnership.link} />
                </div>
                <div className="photo">
                    <h2>Selecione a Imagem</h2>
                    <label for="photo_input" className="photo_label" >{ images[0] ? images[0].name : "Selecione o arquivo"}</label>
                    <input onChange={(event) => setImages(event.target.files)} type="file" className="photo_input" id="photo_input"/>
                </div>
            </div>
            <ButtomForms onClick={() => submitHandler(name, link, images, partnership)} >Atualizar</ButtomForms>
        </Container>
    )
}

export default PartnershipEdit