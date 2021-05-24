import { GoogleLogin, GoogleLogout } from "react-google-login";
import env from "react-dotenv";
import React, {useContext} from 'react';
import {Context} from '../store';

function Logout() {
    const onSuccess = () => {
      alert("Logout completed successfully.")
    }
  
    return (
      <div>
        <GoogleLogout
          clientId={`${env.CLIENT_ID}`}
          buttonText="Logout"
          onLogoutSuccess={onSuccess}
        />
      </div>
    )
  }

export default Logout;