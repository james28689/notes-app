import { GoogleLogout } from "react-google-login";
import env from "react-dotenv";
import React, {useContext} from 'react';
import {Context} from '../store';
import "./UserOptions.css";
import settings from "../Icons/settings.svg";

function Logout() {
    const [state, dispatch] = useContext(Context);

    const toggleTheme = () => {
        if(state.theme == "light") {
            dispatch({type: "CHANGE_THEME", payload:"dark"});
        } else {
            dispatch({type: "CHANGE_THEME", payload:"light"});
        }
    }

    const onSuccess = () => {
        dispatch({type: 'SET_LOGIN', payload: false});
    }
  
    return (
        <div class="userContainer">
            <button onClick={toggleTheme} className="settings"><img className="icon" src={settings}></img></button>
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