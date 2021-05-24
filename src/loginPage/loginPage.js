import "./loginPage.css";
import Login from "../Login/login";

function LoginPage() {
    return (
        <div className="loginPage">
            <div className="container">
                <h1>Welcome to Notes</h1>
                <Login />
            </div>
        </div>
    )
}

export default LoginPage;