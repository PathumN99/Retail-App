import NavbarCSS from "../../style/Navbar.module.css"
import { Link, useNavigate } from "react-router-dom";
import logo from '../../Resources/ecartlogo1.jpg';
import cart from "../../Resources/cart.jpg";
import { useState } from "react";

export default function Navbar() {

    const [dropDown, setDropDown] = useState(false);
    const navigate = useNavigate();

    const loginClick = () => {
        navigate('/login');
    };
    const signupClick = () => {
        navigate('/signup');
    };
    const productShoe = () => {
        navigate('/product-shoe');
        setDropDown(!dropDown);
    };
    const productApparel = () => {
        navigate('/product-apparel');
        setDropDown(!dropDown);
    };
    const productAccessories = () => {
        navigate('/product-accessories');
        setDropDown(!dropDown);
    };
    const toCart = () => {
        navigate('/cart');
    }

    const showDropDown = () => {
        setDropDown(!dropDown);
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

                <div className={NavbarCSS.dropDownDiv} onClick={showDropDown}>
                    Products
                </div>
                {(dropDown) ? (
                    <div className={NavbarCSS.dropDownMenu}>
                        <div className={NavbarCSS.dropDownElem} onClick={productShoe}>Shoes</div>
                        <div className={NavbarCSS.dropDownElem} onClick={productApparel}>Apparel</div>
                        <div className={NavbarCSS.dropDownElem} onClick={productAccessories}>Accessories</div>
                    </div>
                ) : null}

                <Link className={NavbarCSS.link} to="/about">
                    <div className={NavbarCSS.childdivs}>
                        About
                    </div>
                </Link>
            </div>

            <div className={NavbarCSS.buttons}>
                <div className={NavbarCSS.cartImgDiv}>
                    <img className={NavbarCSS.cartImg} onClick={toCart} src={cart} alt="Logo"></img>
                </div>                
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