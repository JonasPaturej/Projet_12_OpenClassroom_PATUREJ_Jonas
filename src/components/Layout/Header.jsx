import { Link } from "react-router-dom"
import logo from "../../assets/LogoSportSee.svg"
import "./Header.css";

function Header() {
    return (
        <header className="header">
            <div className="header_logo">
                <img src={logo} alt="Logo SportSee" />
            </div>
            
            <nav className="header_nav">
                <Link to="/">Accueil</Link>
                <Link to="/user/12">Profil</Link>
                <Link to="/">Réglage</Link>
                <Link to="/">Communauté</Link>
            </nav>
        </header>
    );
}

export default Header;