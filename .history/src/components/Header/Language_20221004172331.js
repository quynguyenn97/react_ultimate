import NavDropdown from "react-bootstrap/NavDropdown";
import { useTranslation, Trans } from "react-i18next";

const Language = (props) => {
    const { t, i18n } = useTranslation();
    const handleChangeLanguage = (language) => {
        i18next.changeLanguage(language);
    };
    return (
        <>
            <NavDropdown
                title="Việt Nam"
                id="basic-nav-dropdown"
                className="language">
                <NavDropdown.Item onClick={() => handleChangeLanguage("en")}>
                    English
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => handleChangeLanguage("vi")}>
                    Việt Nam
                </NavDropdown.Item>
            </NavDropdown>
        </>
    );
};
export default Language;