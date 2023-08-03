import ShoeCSS from "../../style/Shoe.module.css"
import Shoe1 from "../../Resources/Shoes/air-jordan-3-retro-palomino.jpg"
import Shoe2 from "../../Resources/Shoes/NBA-X-Dunk-Low-EMB.jpg"
import Shoe3 from "../../Resources/Shoes/Dunk-Low-black-White.jpg"
import Shoe4 from "../../Resources/Shoes/AirMax-1-SC-Clear-Jade.jpg"
import Shoe5 from "../../Resources/Shoes/Air-Jordan-7-Retro-Chambray.jpg"
import Shoe6 from "../../Resources/Shoes/Air-Jordan-5-Retro-SE-UNC.jpg"
import Shoe7 from "../../Resources/Shoes/Air-Jordan-4-Retro-Thunder.jpg"
import Shoe8 from "../../Resources/Shoes/Air-Jordan-14-Retro-Laney.jpg"
import Shoe9 from "../../Resources/Shoes/Air-Jordan-11-Retro-Cherry.jpg"
import Shoe10 from "../../Resources/Shoes/Air-Jordan-1-Retro-High-OG.jpg"

export default function Shoes() {
    return (
        <>
        <input type="file" accept="image/*"></input>
        <div className={ShoeCSS.grid}>
            <div className={ShoeCSS.gridElement}>
                <div className={ShoeCSS.imgContainer}><img src="http://localhost:5105/Images/Shoes/air-jordan-3-retro-palomino.jpg" alt="shoe1"></img></div>
                <div className={ShoeCSS.productName}>Air Jordan 3 Retro Palomino</div>
                <div className={ShoeCSS.price}>$ 175</div>
                <button className={ShoeCSS.atcBtn}>Add to Cart</button>
            </div>
            <div className={ShoeCSS.gridElement}>
                <div><img src={Shoe2} alt="shoe1"></img></div>
                <div className={ShoeCSS.productName}>NBA X Dunk Low EMB</div>
                <div className={ShoeCSS.price}>$ 180</div>
                <button className={ShoeCSS.atcBtn}>Add to Cart</button>
            </div>
            <div className={ShoeCSS.gridElement}>
                <div className={ShoeCSS.imgContainer}><img src={Shoe3} alt="shoe1"></img></div>
                <div className={ShoeCSS.productName}>Dunk Low black White</div>
                <div className={ShoeCSS.price}>$ 150</div>
                <button className={ShoeCSS.atcBtn}>Add to Cart</button>
            </div>
            <div className={ShoeCSS.gridElement}>
                <div className={ShoeCSS.imgContainer}><img src={Shoe4} alt="shoe1"></img></div>
                <div className={ShoeCSS.productName}>AirMax 1 SC Clear Jade</div>
                <div className={ShoeCSS.price}>$ 190</div>
                <button className={ShoeCSS.atcBtn}>Add to Cart</button>
            </div>
            <div className={ShoeCSS.gridElement}>
                <div className={ShoeCSS.imgContainer}><img src={Shoe5} alt="shoe1"></img></div>
                <div className={ShoeCSS.productName}>Air Jordan 7 Retro Chambray</div>
                <div className={ShoeCSS.price}>$ 210</div>
                <button className={ShoeCSS.atcBtn}>Add to Cart</button>
            </div>
            <div className={ShoeCSS.gridElement}>
                <div className={ShoeCSS.imgContainer}><img src={Shoe6} alt="shoe1"></img></div>
                <div className={ShoeCSS.productName}>Air Jordan 5 Retro SE UNC</div>
                <div className={ShoeCSS.price}>$ 240</div>
                <button className={ShoeCSS.atcBtn}>Add to Cart</button>
            </div>
            <div className={ShoeCSS.gridElement}>
                <div className={ShoeCSS.imgContainer}><img src={Shoe7} alt="shoe1"></img></div>
                <div className={ShoeCSS.productName}>Air Jordan 4 Retro Thunder</div>
                <div className={ShoeCSS.price}>$ 200</div>
                <button className={ShoeCSS.atcBtn}>Add to Cart</button>
            </div>
            <div className={ShoeCSS.gridElement}>
                <div className={ShoeCSS.imgContainer}><img src={Shoe8} alt="shoe1"></img></div>
                <div className={ShoeCSS.productName}>Air Jordan 14 Retro Laney</div>
                <div className={ShoeCSS.price}>$ 135</div>
                <button className={ShoeCSS.atcBtn}>Add to Cart</button>
            </div>
            <div className={ShoeCSS.gridElement}>
                <div className={ShoeCSS.imgContainer}><img src={Shoe9} alt="shoe1"></img></div>
                <div className={ShoeCSS.productName}>Air Jordan 11 Retro Cherry</div>
                <div className={ShoeCSS.price}>$ 200</div>
                <button className={ShoeCSS.atcBtn}>Add to Cart</button>
            </div>
            <div className={ShoeCSS.gridElement}>
                <div className={ShoeCSS.imgContainer}><img src={Shoe10} alt="shoe1"></img></div>
                <div className={ShoeCSS.productName}>Air Jordan 1 Retro High OG</div>
                <div className={ShoeCSS.price}>$ 265</div>
                <button className={ShoeCSS.atcBtn}>Add to Cart</button>
            </div>
        </div>
        </>
    )
}