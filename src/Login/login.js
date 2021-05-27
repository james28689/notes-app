import { GoogleLogin } from "react-google-login";
import env from "react-dotenv";
import React, {useContext} from 'react';
import {Context} from '../store';
import "./login.css";

function Login() {
  const [state, dispatch] = useContext(Context);

  const handleLogin = async googleData => {
    dispatch({type: 'SET_LOGIN', payload: true});

    console.log("Handling login!")

    const res = await fetch("https://fauna-notes-api.herokuapp.com/auth/google", {
      method: "POST",
      body: JSON.stringify({
        token: googleData.tokenId
      }),
      headers: {
        "Content-Type": "application/json"
      }
    })

    const data = await res.json()
    console.log(data);
    // console.log(data.data.name)
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