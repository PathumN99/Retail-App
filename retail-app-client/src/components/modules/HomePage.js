import HomeCSS from "../../style/Home.module.css";
import wp1 from "../../Resources/Wallpapers/wp1.avif";
import wp2 from "../../Resources/Wallpapers/shoewp2.avif";
import wp3 from "../../Resources/Wallpapers/Aprlwp3.avif";
import wp4 from "../../Resources/Wallpapers/accesswp4.jpg";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";

export default function HomePage() {

    const navigate = useNavigate();

    const navigateToShoe = () => {
        navigate('/shoes');
    };

    const navigateToApparel = () => {
        navigate('/apparel');
    };

    const navigateToAccessories = () => {
        navigate('/accessories');
    };

    const shoeSectionRef = useRef(null);

    const scrollToShoeSection = () => {
        if (shoeSectionRef.current) {
            shoeSectionRef.current.scrollIntoView({
                behavior: 'smooth', // Add smooth scrolling animation
            });
        }
    };

    return (
        <div>
            <div className={HomeCSS.imgContainer}>
                <img src={wp1} alt="shoe1"></img>
                <div className={HomeCSS.content1}>
                    <p className={HomeCSS.contentText1}>Pick Your Favourites</p>
                    <button className={HomeCSS.button} onClick={scrollToShoeSection}>Get Started!</button>
                </div>
            </div>

            <div ref={shoeSectionRef} className={HomeCSS.imgContainer}>
                <div className={HomeCSS.content2}>
                    <p className={HomeCSS.contentText2}>Step Into the Elegance</p>
                    <button className={HomeCSS.button} onClick={navigateToShoe}>Shop Now!</button>
                </div>
                <img src={wp2} alt="shoe1"></img>
            </div>

            <div className={HomeCSS.imgContainer}>
                <img className={HomeCSS.imgApparel} src={wp3} alt="shoe1"></img>
                <div className={HomeCSS.content3}>
                    <p className={HomeCSS.contentText2}>Elevate Your Wordrobe</p>
                    <button className={HomeCSS.button} onClick={navigateToApparel}>Shop Now!</button>
                </div>
            </div>

            <div className={HomeCSS.imgContainer}>
                <div className={HomeCSS.content4}>
                    <p className={HomeCSS.contentText2}>Unvail Luxury Charms</p>
                    <button className={HomeCSS.button} onClick={navigateToAccessories}>Shop Now!</button>
                </div>
                <img className={HomeCSS.imgApparel} src={wp4} alt="shoe1"></img>
            </div>
        </div>
    )
}