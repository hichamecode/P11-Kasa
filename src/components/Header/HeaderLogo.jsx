import logo from '../../assets/logo.png';
import "./Header.scss";

const HeaderLogo = () => {

    return (
        <a href='/'>
            <img src={logo} alt="Kasa Logo" className="header-logo" />
        </a>
    );
}

export default HeaderLogo;
