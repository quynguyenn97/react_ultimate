import { useState } from "react";
import "./Register.scss";
import { useNavigate } from "react-router-dom";
import { postRegister } from "../services/apiServices";
import { toast } from "react-toastify";

const Register = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const navigate = useNavigate();

    const [isShowPassword, setIsShowPassword] = useState(false);
    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };

    const handleRegister = async () => {
        let data = await postRegister(email, password, username);
        console.log(data);
        if (data && data.EC === 0) {
            toast.success(data.EM);
            navigate("/login");
        }
        if (data && data.EC !== 0) {
            toast.error(data.EM);
        }
    };
    const handleLogin = () => {
        navigate("/login");
    };

    return (
        <>
            <div className="login-container">
                <div className="header">
                    <span>Don't have an account yet?</span>
                    <button onClick={() => handleLogin()}>Login</button>
                </div>
                <div className="title col-4 mx-auto">Register</div>
                <div className="welcome col-4 mx-auto">Start your journey?</div>
                <div className="content-form col-4 mx-auto">
                    <div className="form-group ">
                        <label>Email (*)</label>
                        <input
                            type={"email"}
                            className="form-control"
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                        />
                    </div>
                    <div className="form-group ">
                        <label>Password (*)</label>
                        <input
                            type={"password"}
                            className="form-control"
                            value={password}
                            onChange={(event) =>
                                setPassword(event.target.value)
                            }
                        />
                    </div>
                    <div className="form-group ">
                        <label>Username</label>
                        <input
                            type={"text"}
                            className="form-control"
                            value={username}
                            onChange={(event) =>
                                setUsername(event.target.value)
                            }
                        />
                    </div>
                    <div>
                        <button onClick={() => handleRegister()}>
                            Create my free account
                        </button>
                    </div>
                    <div className="text-center">
                        <span
                            className="back"
                            onClick={() => {
                                navigate("/");
                            }}>
                            {" "}
                            &#60; &#60; Go to HomePage
                        </span>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Register;
