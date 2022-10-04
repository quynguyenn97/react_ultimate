import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { logout } from "../services/apiServices";
import { toast } from "react-toastify";

const Header = () => {
    const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
    const account = useSelector((state) => state.user.account);
    console.log(account);
    const navigate = useNavigate();
    const handleLogin = () => {
        navigate("/login");
    };
    const handleRegister = () => {
        navigate("/register");
    };

    const handleLogout = async () => {
        let rs = await logout(account.email, account.refresh_token);
        if (rs && rs.EC === 0) {
            navigate("/login");
        } else {
            toast.error(rs.EC);
        }
    };

    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <NavLink to="/" className="navbar-brand">
                    Quy Nguyen
                </NavLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink to="/" className="nav-link">
                            Home
                        </NavLink>
                        <NavLink to="/users" className="nav-link">
                            User
                        </NavLink>
                        <NavLink to="/admins" className="nav-link">
                            Admin
                        </NavLink>
                    </Nav>
                    <Nav>
                        {isAuthenticated === false ? (
                            <>
                                <button
                                    className="btn-login"
                                    onClick={() => handleLogin()}>
                                    Login
                                </button>
                                <button
                                    className="btn-signup"
                                    onClick={() => handleRegister()}>
                                    Sign up
                                </button>
                            </>
                        ) : (
                            <NavDropdown
                                title="Setting"
                                id="basic-nav-dropdown">
                                <NavDropdown.Item>Profile</NavDropdown.Item>
                                <NavDropdown.Item
                                    onClick={() => handleLogout()}>
                                    Log out
                                </NavDropdown.Item>
                            </NavDropdown>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
