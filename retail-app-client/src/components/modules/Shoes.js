import ShoeCSS from "../../style/Shoe.module.css"
import Axios from "axios"
import { useEffect, useState } from "react"

export default function Shoes() {

    const [shoeData, setShoeData] = useState([]);

    useEffect(() => {
        Axios.get('http://localhost:5105/api/Shoe')
            .then(response => {
                setShoeData(response.data);
            })
            .catch(error => {
                console.error("Error fetching data:", error);
            });
    }, []);

    return (
        <div className={ShoeCSS.grid}>
            {/* should use return statement in the map function if the curly brases are used */}
            {shoeData.map((item, index) => {
                return <div key={index} className={ShoeCSS.gridElement}>
                    <img className={ShoeCSS.imgContainer} src={item.imageUrl} alt="shoe1"></img>
                    <div className={ShoeCSS.productName}>{item.productName}</div>
                    <div className={ShoeCSS.price}>$ {item.price}</div>
                    <button className={ShoeCSS.atcBtn}>Add to Cart</button>
                </div>
            })}
        </div>
    )
}