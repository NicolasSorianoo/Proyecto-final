import React from 'react'
import ReactDOM from 'react-dom/client'
import {Auth0Provider} from '@auth0/auth0-react'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Auth0Provider  domain = "dev-lq3yd74stakmkne5.us.auth0.com" 
                    clientId = "MKZz2cfw1fUdSxZPxEbQlnb4abd1s0NK"
                    redirectUri = {window.location.origin}
                    >
      <App />
    </Auth0Provider>
    
  </React.StrictMode>,
)
