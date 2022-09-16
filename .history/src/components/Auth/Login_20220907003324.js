import { useState } from "react";
import "./Login.scss";
import { useNavigate } from "react-router-dom";

const Login = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate;
    const handleLogin = () => {
        alert("me");
    };
    return (
        <div className="login-container">
            <div className="header">
                <span>Don't have an account yet?</span>
                <button>Sign up</button>
            </div>
            <div className="title col-4 mx-auto">Quy Nguyen</div>
            <div className="welcome col-4 mx-auto">Hello, who’s this?</div>
            <div className="content-form col-4 mx-auto">
                <div className="form-group ">
                    <label>Email</label>
                    <input
                        type={"email"}
                        className="form-control"
                        // value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    />
                </div>
                <div className="form-group ">
                    <label>Password</label>
                    <input
                        type={"password"}
                        className="form-control"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    />
                </div>
                <span className="forgot-password">Forgot password ?</span>
                <div>
                    <button
                        className="btn-submit"
                        onClick={() => handleLogin()}>
                        Login to HoiDanIT
                    </button>
                </div>
                <div className="text-center">
                    <span> &#60; &#60; Go to HomePage</span>
                </div>
            </div>
        </div>
    );
};
export default Login;