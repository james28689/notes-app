import { GoogleLogout } from "react-google-login";
import env from "react-dotenv";
import React, {useContext} from 'react';
import {Context} from '../store';
import "./UserOptions.css";
import settings from "../Icons/settings.svg";

import { firebase, auth, firestore } from "../firebase"

function Logout() {
    const [state, dispatch] = useContext(Context);

    const toggleTheme = () => {
        if(state.theme === "light") {
            dispatch({type: "CHANGE_THEME", payload:"dark"});
        } else {
            dispatch({type: "CHANGE_THEME", payload:"light"});
        }
    }

    const signOut = () => {
        auth.signOut()
        dispatch({type: 'SET_LOGIN', payload: false});
    }
  
    return (
        <div className="userContainer">
            <button onClick={toggleTheme} className="settings"><img className="icon" src={settings} alt=""></img></button>
            <button onClick={signOut}>Sign Out</button>
      </div>
    )
}

export default Logout;