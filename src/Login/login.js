import { GoogleLogin } from "react-google-login";
import env from "react-dotenv";
import React, {useContext} from 'react';
import {Context} from '../store';
import "./login.css";

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


    const handleLogin = async googleData => {
  
      console.log("Handling login!")
  
      const res = await fetch("https://api.watling.dev/auth/google", {
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
      dispatch({type: 'SET_LOGIN', payload: true});
  
      
  
      const notesRes = await fetch("https://api.watling.dev/note/user", {
        credentials: "include",
        method: "GET",
        mode: "cors"
      })
      const noteData = await notesRes.json();

      for(var n in noteData) {
        if("NoteID" in noteData[n]) {
          console.log("Note: ", noteData[n]);
        } else if("FolderID" in noteData[n]) {
          console.log("Folder: ", noteData[n])
        }
      }
      // console.log(noteData);
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