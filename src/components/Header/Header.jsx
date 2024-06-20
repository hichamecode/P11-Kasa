import HeaderLogo from "./HeaderLogo";
import HeaderMenu from "./HeaderMenu";
import  "./Header.scss"

const Header = () => {
    return (
        <div className="header">
            <HeaderLogo />
            <HeaderMenu />
        </div>
    )
}

export default Header;

