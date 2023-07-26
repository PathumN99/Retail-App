import NavbarCSS from "../../style/Navbar.module.css"
import { Link } from "react-router-dom";
import logo from '../../Resources/ecartlogo1.jpg';

export default function Navbar() {
    return (
        <nav className={NavbarCSS.nav}>
            <div className={NavbarCSS.logo}>
                <Link to="/">
                    <img src={logo} alt="Logo" />
                    <p>E-CART</p>
                </Link>
            </div>

            <div className={NavbarCSS.navdiv}>
                <div className={NavbarCSS.childnavdivs}>
                    <Link to="/">Home</Link>
                </div>
                <div className={NavbarCSS.childnavdivs}>
                    <Link to="/Shoes">Shoes</Link>
                </div>
                <div className={NavbarCSS.childnavdivs}>
                    <Link to="/Shoes">Apparel</Link>
                </div>
                <div className={NavbarCSS.childnavdivs}>
                    <Link to="/Shoes">Accessories</Link>
                </div>
                <div className={NavbarCSS.childnavdivs}>
                    <Link to="/Shoes">About</Link>
                </div>
            </div>

            <div>
                <button className={NavbarCSS.logbtn}>Login</button>
                <button className={NavbarCSS.signbtn}>Sign up</button>
            </div>


        </nav>
    )
}