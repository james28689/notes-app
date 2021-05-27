import { GoogleLogout } from "react-google-login";
import env from "react-dotenv";
import React, {useContext} from 'react';
import {Context} from '../store';

function Logout() {
    const [state, dispatch] = useContext(Context);

    const onSuccess = () => {
        dispatch({type: 'SET_LOGIN', payload: false});
    }
  
    return (
      <div>
        <GoogleLogout
          clientId={`${env.CLIENT_ID}`}
          buttonText="Logout"
          onLogoutSuccess={onSuccess}

          render={renderProps => (
            <button className="logout" onClick={renderProps.onClick} disabled={renderProps.disabled}>Logout</button>
          )}
        />
      </div>
    )
}

export default Logout;