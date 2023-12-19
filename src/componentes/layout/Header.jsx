import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import Login from '../autenticacion/Login'
import Logout from '../autenticacion/Logout'
import Perfil from '../autenticacion/Perfil'

const Header = () => {
    const {isAuthenticated} = useAuth0()
    return (
        <header className="barra">
            <div className="contenedor">
                <h1>Proyecto UADE</h1>
                {isAuthenticated ? (
                    <div className="contenedor-logout-perfil">
                        <Perfil/>
                        <Logout/>
                    </div>
                ) 
                : (
                    <Login/>
                )
                } 
            </div>
        </header>
)
}

export default Header
