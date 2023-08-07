import NavbarCSS from "../../style/Navbar.module.css"
import { Link, useNavigate } from "react-router-dom";
import logo from '../../Resources/ecartlogo1.jpg';
import { Container, NavbarBrand } from "react-bootstrap";

export default function Navbar() {

    const navigate = useNavigate();

    const loginClick = () => {
        navigate('/login');
    };

    const signupClick = () => {
        navigate('/signup');
    };

    return (

        <nav className="navbar navbar-expand fixed-top"
            style={{
                backgroundColor: 'white',
                // borderColor: "black",                
            }}>
            <div className="container">
                <Link to="/Home" className="navbar-brand">
                    <img className="img" style={{ width: '50px', height: '50px' }} src={logo} alt="Logo" />
                    E-CART
                </Link>
                <ul className="navbar-nav">
                    <li className="navbar-item">
                        <Link className="nav-link" to="/home">Home</Link>
                    </li>
                    <li className="navbar-item">
                        <Link className="nav-link" to="/shoes">Shoes</Link>
                    </li>
                    <li className="navbar-item">
                        <Link className="nav-link" to="/apparel">Apparel</Link>
                    </li>
                    <li className="navbar-item">
                        <Link className="nav-link" to="/accessories">Accessories</Link>
                    </li>
                    <li className="navbar-item dropdown">
                        <Link className="nav-link dropdown-toggle" id="navbarDropdown"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >Product</Link>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <Link className="dropdown-item" to="/products">Action</Link>
                            <Link className="dropdown-item" to="/products">Another action</Link>
                            <div className="dropdown-divider"></div>
                            <Link className="dropdown-item" to="/products">Something else here</Link>
                        </div>
                    </li>
                    <li className="navbar-item">
                        <Link className="nav-link" to="/about">About</Link>
                    </li>
                </ul>
                <div>
                    <button className="btn btn-outline-secondary me-3" onClick={loginClick}>Login</button>
                    <button className="btn btn-outline-secondary" onClick={signupClick}>Sign Up</button>
                </div>
            </div>
        </nav>

        //     <Navbar className="bg-body-tertiary">
        //     <Container>
        //       <NavbarBrand href="/home">
        //         <img
        //           alt=""
        //           src={logo}
        //           width="30"
        //           height="30"
        //           className="d-inline-block align-top"
        //         />{' '}
        //         React Bootstrap
        //       </NavbarBrand>
        //     </Container>
        //   </Navbar>

        // <nav className="navbar navbar-light bg-light">
        //     <a className="navbar-brand" href="/Home#">E_CART
        //     <img src={logo} alt="Logo" />
        //         {/* <img src={logo} className="d-inline-block align-top h-30 w-30" alt="">
        //             E-CART</img> */}
        //     </a>
        // </nav>


        // <nav className={NavbarCSS.nav}>
        //     <div className={NavbarCSS.logo}>
        //         <Link to="/Home">
        //             <img src={logo} alt="Logo" />
        //             <p>E-CART</p>
        //         </Link>
        //     </div>

        //     <div className={NavbarCSS.navdiv}>
        //         <Link className={NavbarCSS.link} to="/home">
        //             <div className={NavbarCSS.childdivs}>
        //                 Home
        //             </div>
        //         </Link>
        //         <Link className={NavbarCSS.link} to="/shoes">
        //             <div className={NavbarCSS.childdivs}>
        //                 Shoes
        //             </div>
        //         </Link>
        //         <Link className={NavbarCSS.link} to="/apparel">
        //             <div className={NavbarCSS.childdivs}>
        //                 Apparel
        //             </div>
        //         </Link>
        //         <Link className={NavbarCSS.link} to="/accessories">
        //             <div className={NavbarCSS.childdivs}>
        //                 Accessories
        //             </div>
        //         </Link>
        //         <Link className={NavbarCSS.link} to="/products">
        //             <div className={NavbarCSS.childdivs}>
        //                 Products
        //             </div>
        //         </Link>
        //         <Link className={NavbarCSS.link} to="/about">
        //             <div className={NavbarCSS.childdivs}>
        //                 About
        //             </div>
        //         </Link>
        //     </div>

        //     <div className={NavbarCSS.buttons}>
        //         <button className={NavbarCSS.logbtn} onClick={loginClick}>
        //             Login
        //         </button>
        //         <button className={NavbarCSS.signbtn} onClick={signupClick}>
        //             Sign Up
        //         </button>
        //     </div>


        // </nav>
    )
}