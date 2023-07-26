import NavbarCSS from "../../style/Navbar.module.css"
import { Link } from "react-router-dom";
import logo from '../../Resources/ecartlogo1.jpg';

export default function Navbar() {

    return (
        <nav className={NavbarCSS.nav}>
            <div className={NavbarCSS.logo}>
                <Link to="/Home">
                    <img src={logo} alt="Logo" />
                    <p>E-CART</p>
                </Link>
            </div>

            <div className={NavbarCSS.navdiv}>
                <div className={NavbarCSS.childnavdivs}>
                    <Link className={NavbarCSS.link} to="/home">Home</Link>
                </div>
                <div className={NavbarCSS.childnavdivs}>
                    <Link to="/shoes">Shoes</Link>
                </div>
                <div className={NavbarCSS.childnavdivs}>
                    <Link to="/shoes">Apparel</Link>
                </div>
                <div className={NavbarCSS.childnavdivs}>
                    <Link to="/shoes">Accessories</Link>
                </div>
                <div className={NavbarCSS.childnavdivs}>
                    <Link to="/about">About</Link>
                </div>
            </div>

            <div className={NavbarCSS.buttons}>
                <button className={NavbarCSS.logbtn}>
                    <Link to="/login">Login</Link>
                </button>
                <button className={NavbarCSS.signbtn}>
                    <Link to="/signup">Sign Up</Link>
                </button>
            </div>


        </nav>
    )
}