import { GoogleLogin, GoogleLogout } from "react-google-login";
import env from "react-dotenv";

const refreshTokenSetup = (res) => {
  let refreshTiming = (res.tokenObj.expires_in || 3600 - 5 * 60) * 1000;

  const refreshToken = async () => {
    const newAuthRes = await res.reloadAuthResponse();
    refreshTiming = (newAuthRes.expires_in || 3600 - 5 * 60) * 1000;
    console.log("newAuthRes:", newAuthRes);

    console.log("new auth token", newAuthRes.id_token);
  }

  setTimeout(refreshToken, refreshTiming);
}

function Login() {
  const handleLogin = async googleData => {
    var res = await fetch("https://fauna-notes-api.herokuapp.com/auth/google", {
      method: "POST",
      body: JSON.stringify({
        token: googleData.tokenId
      }),
      headers: {
        "Content-Type": "application/json"
      }
    })

    var data = await res.json()
    console.log(data, data.ref);

    var res = await fetch("https://fauna-notes-api.herokuapp.com/user/data", {
      method: "POST",
      body: JSON.stringify({
        token: googleData.tokenId
      }),
      headers: {
        "Content-Type": "application/json"
      }
    })

    var data = await res.json()
    console.log(data);
  }

  return (
    <div>
      <GoogleLogin
        clientId={`${env.CLIENT_ID}`}
        buttonText="Login"
        onSuccess={handleLogin}
        onFailure={handleLogin}
        cookiePolicy={"single_host_origin"}
        style={{ marginTop: "100px" }}
        isSignedIn={true}

        render={renderProps => (
            <button onClick={renderProps.onClick} disabled={renderProps.disabled}>This is my custom Google button</button>
          )}
      />
    </div>
  )
}

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

function UI() {
  return (
    <div className="App">
      <Login />
      <Logout />
    </div>
  );
}

export default UI;