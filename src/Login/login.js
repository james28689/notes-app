import { GoogleLogin } from "react-google-login";
import env from "react-dotenv";
import React, {useContext} from 'react';
import {Context} from '../store';
import "./login.css";

import { firebaseExport, auth, firestore } from "../firebase"

// const refreshTokenSetup = (res) => {
//   let refreshTiming = (res.tokenObj.expires_in || 3600 - 5 * 60) * 1000;

//   const refreshToken = async () => {
//     const newAuthRes = await res.reloadAuthResponse();
//     refreshTiming = (newAuthRes.expires_in || 3600 - 5 * 60) * 1000;
//     console.log("newAuthRes:", newAuthRes);

//     console.log("new auth token", newAuthRes.id_token);
//   }

//   setTimeout(refreshToken, refreshTiming);
// }

function Login() {
    const [state, dispatch] = useContext(Context);

    const signInWithGoogle = () => {
      const provider = new firebaseExport.auth.GoogleAuthProvider()
      auth.signInWithPopup(provider);

      dispatch({ type: "SET_LOGIN", payload: true })
    }

  return (
    <div>
      <button onClick={signInWithGoogle} className="login">Log In</button>
    </div>
  )
}


export default Login;