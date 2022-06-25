import { Link } from "react-router-dom"
import { MenuContainer } from "./styles"
import { ButtomForms } from "../../../components/buttomFoms/styles"
import { useAdminContext } from "../../../contexts/useAdminContext"



const AdminMenu = () => {

    const links = [[['Adicionar Membro', 'member/add'],['Editar Membro', 'member']]
        ,[['Adicionar Projeto', 'project/add'],['Editar Projeto', 'project']]
        ,[['Adicionar Parceiro', 'partnership/add'],['Editar Parceiro', 'partnership']]]

    const {logout, admin} = useAdminContext()

    const adminValidation = () => {
        if(admin){
            return(
                <>
                    <h1>Página do Adiministrador</h1>
                    <h2>Olá, {admin.name}</h2>
                    {links.map((item) => {
                        return(
                            <div className="links">
                            <Link to={item[0][1]} className='link'>{item[0][0]}</Link>
                            <Link to={item[1][1]} className='link' >{item[1][0]}</Link>
                            </div>
                        )
                    })}
        
                    <ButtomForms onClick={() => logout()} >Deslogar</ButtomForms>
                </>
            )
        } else {
            return(
                <>
                    <h1>Acesso não autorizado.</h1>
                    <Link to={'login'} className='link'>Login</Link>
                </>
            )
        }
    }

    return(
        <MenuContainer>
            {adminValidation()}
        </MenuContainer>
    )
}

export default AdminMenu