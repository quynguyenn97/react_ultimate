import NavDropdown from "react-bootstrap/NavDropdown";
import { useTranslation, Trans } from "react-i18next";

const Language = (props) => {
    return (
        <>
            <NavDropdown
                title="Việt Nam"
                id="basic-nav-dropdown"
                className="language">
                <NavDropdown.Item>English</NavDropdown.Item>
                <NavDropdown.Item>Việt Nam</NavDropdown.Item>
            </NavDropdown>
        </>
    );
};
export default Language;