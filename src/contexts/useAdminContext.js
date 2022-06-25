import { createContext, useContext, useEffect, useState } from "react";
import Cookie from "js-cookie"
import { api } from "../services/api";


const  AdminContext = createContext({})

const AdminProvider = ({children}) => {
    const [admin, setAdmin] = useState(undefined)

    const login =  async (email, password) => {
        try {
            const response = await api.get('/administrators/login', {params: {email, password}})
            if (response.data){
                setAdmin(response.data)
                api.defaults.headers.common['X-administrator-email'] = response.data.email
                api.defaults.headers.common['X-administrator-token'] = response.data.authentication_token
                Cookie.set('struct.administrator', JSON.stringify(response.data), {expires: 1})
                alert("Login Efetuado")
            }
        } catch (e) {
            alert(e)
        }
    }

    const logout = () => {
        if(window.confirm("Deseja deslogar como administrador?")){
            setAdmin(undefined)
            Cookie.remove('struct.administrator')
        }
    }

    useEffect(() => {
        const retrievedAdmin = Cookie.get('struct.administrator')
        if(retrievedAdmin) {
            let tempAdmin = JSON.parse(retrievedAdmin)
            setAdmin(JSON.parse(retrievedAdmin))
            api.defaults.headers.common['X-administrator-email'] = tempAdmin.email
            api.defaults.headers.common['X-administrator-token'] = tempAdmin.authentication_token
        }
    },[])



    return(
        <AdminContext.Provider value={{admin, login, logout}}>
            {children}
        </AdminContext.Provider>
    )
}

const useAdminContext = () => {
    const context = useContext(AdminContext)
    return context
}

export {useAdminContext, AdminProvider}