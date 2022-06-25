import { useState } from "react"
import { ButtomForms } from "../../../components/buttomFoms/styles"
import { Container } from "./styles"
import { useAdminContext } from "../../../contexts/useAdminContext"



const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {login, admin} = useAdminContext()

 

    return(
        <Container>
            {admin ? <h1>Bem vindo, {admin.name}!</h1> : <h1>Login do Administrador</h1>}

            <div className="form">
                <div className="email">
                    <h2>Email</h2>
                    <input onChange={(event) => setEmail(event.target.value)} type="email" />
                </div>
                <div className="senha">
                    <h2>Senha</h2>
                    <input onChange={(event) => setPassword(event.target.value)} type="password" />
                </div>
            </div>
            <ButtomForms onClick={() => login(email, password)} >Login</ButtomForms>
        </Container>
    )
}

export default Login