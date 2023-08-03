import NavbarCSS from "../../style/Navbar.module.css"
import { Link, useNavigate } from "react-router-dom";
import logo from '../../Resources/ecartlogo1.jpg';

export default function Navbar() {

    const navigate = useNavigate();

    const loginClick = () => {
        navigate('/login');
    };

    const signupClick = () => {
        navigate('/signup');
    };

    return (
        <nav className={NavbarCSS.nav}>
            <div className={NavbarCSS.logo}>
                <Link to="/Home">
                    <img src={logo} alt="Logo" />
                    <p>E-CART</p>
                </Link>
            </div>

            <div className={NavbarCSS.navdiv}>
                <Link className={NavbarCSS.link} to="/home">
                    <div className={NavbarCSS.childdivs}>
                        Home
                    </div>
                </Link>
                <Link className={NavbarCSS.link} to="/shoes">
                    <div className={NavbarCSS.childdivs}>
                        Shoes
                    </div>
                </Link>
                <Link className={NavbarCSS.link} to="/apparel">
                    <div className={NavbarCSS.childdivs}>
                        Apparel
                    </div>
                </Link>
                <Link className={NavbarCSS.link} to="/accessories">
                    <div className={NavbarCSS.childdivs}>
                        Accessories
                    </div>
                </Link>
                <Link className={NavbarCSS.link} to="/products">
                    <div className={NavbarCSS.childdivs}>
                        Products
                    </div>
                </Link>
                <Link className={NavbarCSS.link} to="/about">
                    <div className={NavbarCSS.childdivs}>
                        About
                    </div>
                </Link>
            </div>

            <div className={NavbarCSS.buttons}>
                <button className={NavbarCSS.logbtn} onClick={loginClick}>
                    Login
                </button>
                <button className={NavbarCSS.signbtn} onClick={signupClick}>
                    Sign Up
                </button>
            </div>


        </nav>
    )
}