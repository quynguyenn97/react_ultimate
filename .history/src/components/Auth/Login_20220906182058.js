import "./Login.scss";
const Login = (props) => {
    return (
        <div className="login-container">
            <div className="header">Don't have an account yet?</div>
            <div className="title col-4 mx-auto">Quy Nguyen</div>
            <div className="welcome col-4 mx-auto">Hello, who’s this?</div>
            <div className="content-form col-4 mx-auto">
                <div className="form-group ">
                    <label>Email</label>
                    <input type={"email"} className="form-control" />
                </div>
                <div className="form-group ">
                    <label>Password</label>
                    <input type={"password"} className="form-control" />
                </div>
                <span className="forgot-password">Forgot password ?</span>
                <div>
                    <button>Login to HoiDanIT</button>
                </div>
            </div>
        </div>
    );
};
export default Login;