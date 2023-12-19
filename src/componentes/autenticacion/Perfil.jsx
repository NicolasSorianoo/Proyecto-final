import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

const Perfil = () => {

    const {user,isAuthenticated,isLoading} =useAuth0();

    if(isLoading){
        return <h2>Cargando...</h2>
    }
  return (
    isAuthenticated && (
        <div>
            <img src={user.picture} alt={user.name}  className='perfil-login'/>
        </div>
    )
  )
}

export default Perfil