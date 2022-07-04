import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { ButtomForms } from "../../../components/buttomFoms/styles"
import { api } from "../../../services/api"
import { Container } from "./styles"




const MemberEdit = () => {

    const {id} = useParams()

    const [offices, setOffices] = useState([])
    useEffect(() => {
        api.get('offices/index').then(response => setOffices(response.data))
    }, [])

    
    const [photo, setPhoto] = useState([])
    const [name, setName] = useState('')
    const [age, setAge] = useState(0)
    const [office_id, setOfficeId] = useState(0)
    
    
    const [member, setMember] = useState({})
    useEffect(() => {
        api.get(`members/show/${id}`).then(response => setMember(response.data))
    }, [])

    const addMemberPhoto = async () => {
        const formData = new FormData()
        formData.append('photo[]', photo[0])

        let response = await api.post(`members/add_photo/${id}`, formData)
        if (response.data){
            setPhoto(response.data)
        }
    }

    const editMember = async (params) =>  {

        try {
            let response = await api.patch(`members/update/${id}`,params)
            setMember(response.data)
        } catch (e) {
            alert("Tente Novamente\n" + e.message)
        }
    }

    const SubmitHandler = () => {

        let params = {}

        if(name) {params["name"] = name}
        if(age) {params["age"] = age}
        if(office_id) {params["office_id"] = office_id}
        if(name || age || office_id){
            editMember(params)
        }
        if(photo[0]){
            addMemberPhoto()
        }
        alert("Membro Atualizado")
    }

    const deleteMember = async () => {
        if (window.confirm(`Tem certeza que deseja deletar o membro ${member.name}?`)){
            let response = await api.delete(`members/delete/${id}`)
            alert(response.data.message)
        }

    }



    return(
        <Container>
            <h1>Editar Membro: <span style={{color : "#F8F8FF"}}>{member.name}</span></h1>
            <ButtomForms onClick={() => {deleteMember()}}>Deletar</ButtomForms>
{ member.office ? <>
    <div className="form">
                <div className="name">
                    <h2>Nome</h2>
                    <input onChange={(event) => setName(event.target.value)} placeholder={member.name} />
                </div>
                <div className="age">
                    <h2>Idade</h2>
                    <input onChange={(event) => setAge(event.target.value)} type="number" min={1} placeholder={member.age} />
                </div>
                <div className="office_id">
                    <h2>Escritório</h2>
                    <select name="office" onChange={(event) => setOfficeId(event.target.value)} placeholder="Selecione o Escritório">
                        <option value={0} >{member.office && member.office.name}</option>
                        {offices.map((item) => {
                            return(
                                <option  value={item.id}  >{item.name}</option>
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
            <ButtomForms onClick={() => SubmitHandler()} >Editar</ButtomForms>
            
</>
        : "espere"    }
        </Container>
    )
}

export default MemberEdit