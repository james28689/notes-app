import { GoogleLogin } from "react-google-login";
import env from "react-dotenv";
import React, {useContext} from 'react';
import {Context} from '../store';
import "./login.css";
import axios from "axios";

function Login() {
  const [state, dispatch] = useContext(Context);

  const handleLogin = async googleData => {
    dispatch({type: 'SET_LOGIN', payload: true});

    console.log("Handling login!")

    const res = await fetch("https://ww-notes-api.herokuapp.com/auth/google", {
      credentials: "include",
      method: "POST",
      body: JSON.stringify({
        token: googleData.tokenId
      }),
      mode: "cors",
      headers: {
        "Content-Type": "application/json"
      },
    })

    const data = await res.json()
    console.log(data);

    

    const notesRes = await axios.get("https://ww-notes-api.herokuapp.com/note/user", { withCredentials: true })
    const noteData = await notesRes.json()
    console.log(noteData)
  }

  return (
    <div>
      <GoogleLogin
        clientId={`${env.CLIENT_ID}`}
        buttonText="Login"
        onSuccess={handleLogin}
        // onFailure={handleLogin}
        cookiePolicy={"single_host_origin"}
        style={{ marginTop: "100px" }}
        isSignedIn={true}

        render={renderProps => (
            <button className="login" onClick={renderProps.onClick} disabled={renderProps.disabled}>Login</button>
          )}
      />
    </div>
  )
}


export default Login;