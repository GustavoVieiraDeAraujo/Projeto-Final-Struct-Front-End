import { useEffect, useState } from "react"
import { ButtomForms } from "../../../components/buttomFoms/styles"
import { api } from "../../../services/api"
import { Container } from "./styles"




const MemberAdd = () => {

    const [offices, setOffices] = useState([])
    useEffect(() => {
        api.get('offices/index').then(response => setOffices(response.data))
    }, [])


    const [photo, setPhoto] = useState([])
    const [name, setName] = useState('')
    const [age, setAge] = useState(0)
    const [office_id, setOfficeId] = useState(0)



    const addMemberPhoto = async (id) => {
        const formData = new FormData()
        formData.append('photo[]', photo[0])

        let response = await api.post(`members/add_photo/${id}`, formData)
        if (response.data){
            alert("Membro Criado")
            setPhoto(response.data)
        }
    }

    const createMember = () => {
        if (photo && name && age && office_id) {
            api.post('members/create', {name, age, office_id}).then(response => {
                addMemberPhoto(response.data.id)
            })
        } else {
            alert("Preencha todos os campos")
        }
    }



    return(
        <Container>
            <h1>Adicionar Membro</h1>

            <div className="form">
                <div className="name">
                    <h2>Nome</h2>
                    <input onChange={(event) => setName(event.target.value)} />
                </div>
                <div className="age">
                    <h2>Idade</h2>
                    <input onChange={(event) => setAge(event.target.value)} type="number" min={1} />
                </div>
                <div className="office_id">
                    <h2>Escritório</h2>
                    <select name="office" onChange={(event) => setOfficeId(event.target.value)} placeholder="Selecione o Escritório">
                        <option value={0} >Selecione o Escritório</option>
                        {offices.map((item) => {
                            return(
                                <option value={item.id}>{item.name}</option>
                            )
                        })}
                    </select>
                </div>
                <div className="photo">
                    <h2>Selecionar Foto</h2>
                    <label for="photo_input" className="photo_label" >{ photo[0] ? photo[0].name : "Selecione o arquivo"}</label>
                    <input onChange={(event) => setPhoto(event.target.files)} type="file" className="photo_input" id="photo_input"/>
                </div>
            </div>
            <ButtomForms onClick={() => createMember(name, age, office_id, photo)} >Criar</ButtomForms>
        </Container>
    )
}

export default MemberAdd