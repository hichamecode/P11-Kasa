import { Link } from 'react-router-dom';

const HeaderMenu = () => {

    return(
        <ul className="header-nav">
            <li className="header-nav-element"><Link to="/">Accueil</Link></li>
            <li className="header-nav-element"><Link to="/about">A Propos</Link></li>
        </ul>
    )
}

export default HeaderMenu;

