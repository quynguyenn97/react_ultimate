import { useState } from "react";
import { postRegister } from "../services/apiServices";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");

    return (
        <>
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
                            onChange={(event) =>
                                setPassword(event.target.value)
                            }
                        />
                    </div>
                </div>
            </div>
        </>
    );
};
export default Register;
