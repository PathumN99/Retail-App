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
        <div>

            <div className={ShoeCSS.filterContainer}>
                <div>Filter Products</div>
                <div>
                    <label>Brand Name :</label>
                    <select className={ShoeCSS.selectField}>
                        <option disabled selected>Select Brand</option>
                        <option value="0">Air Jordan</option>
                        <option value="1">Nike</option>
                        <option value="2">Adidas</option>
                    </select>
                </div>
                <div>
                    <label>Price :</label>
                    <select className={ShoeCSS.selectField}>
                        <option disabled selected>Select Price</option>
                        <option value="0">$100 - $150</option>
                        <option value="1">$150 - $200</option>
                        <option value="2">$250 - $300</option>
                        <option value="3">$350 - $400</option>
                    </select>
                </div>
                <div>
                    <button className={ShoeCSS.filterBtn}>Filter</button>
                </div>

            </div>

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

        </div>

    )
}