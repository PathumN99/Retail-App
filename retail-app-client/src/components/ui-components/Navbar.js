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
                    <div>E-CART</div>
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

        // Bootstrap Navbar
        // <nav className="navbar navbar-expand fixed-top"
        //     style={{
        //         backgroundColor: 'white',
        //     }}>
        //     <div className="container">
        //         <Link to="/Home" className="navbar-brand">
        //             <img className="img" style={{ width: '50px', height: '50px' }} src={logo} alt="Logo" />
        //             E-CART
        //         </Link>
        //         <ul className="navbar-nav">
        //             <li className="navbar-item">
        //                 <Link className="nav-link" to="/home">Home</Link>
        //             </li>
        //             <li className="navbar-item">
        //                 <Link className="nav-link" to="/shoes">Shoes</Link>
        //             </li>
        //             <li className="navbar-item">
        //                 <Link className="nav-link" to="/apparel">Apparel</Link>
        //             </li>
        //             <li className="navbar-item">
        //                 <Link className="nav-link" to="/accessories">Accessories</Link>
        //             </li>
        //             <li className="navbar-item">
        //                 <Link className="nav-link" to="/products">Product</Link>
        //             </li>                    
        //             <li className="navbar-item">
        //                 <Link className="nav-link" to="/about">About</Link>
        //             </li>
        //         </ul>
        //         <div>
        //             <button className="btn btn-outline-secondary me-3" onClick={loginClick}>Login</button>
        //             <button className="btn btn-outline-secondary" onClick={signupClick}>Sign Up</button>
        //         </div>
        //     </div>
        // </nav>
    )
}