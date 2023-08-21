import { useEffect, useState } from "react";
import ApparelCSS from "../../style/Apparel.module.css";
import Axios from "axios";

export default function ApparelPage() {

    const [apprelData, setApparelData] = useState([]);

    useEffect(() => {
        Axios.get('http://localhost:5105/api/Apparel')
            .then(response => {
                setApparelData(response.data);
            })
            .catch(error => {
                console.error("Error fetching data:", error);
            });
    }, []);

    return (
        <>
            <div className={ApparelCSS.filterContainer}>
                <div>Filter Products</div>
                <div>
                    <label>Filter Item :</label>
                    <select className={ApparelCSS.selectField}>
                        <option disabled selected>Select Item</option>
                        <option value="0">Sweatshirts</option>
                        <option value="1">Sweatpants</option>
                        <option value="2">T-Shirts</option>
                    </select>
                </div>
                <div>
                    <label>Price :</label>
                    <select className={ApparelCSS.selectField}>
                        <option disabled selected>Select Price</option>
                        <option value="0">$50 - $100</option>
                        <option value="1">$150 - $200</option>
                        <option value="2">$250 - $300</option>                        
                    </select>
                </div>
                <div>
                    <button className={ApparelCSS.filterBtn}>Filter</button>
                </div>

            </div>

            <div className={ApparelCSS.grid}>
                {/* should use return statement in the map function if the curly brases are used */}
                {apprelData.map((item, index) => {
                    return <div key={index} className={ApparelCSS.gridElement}>
                        <img className={ApparelCSS.imgContainer} src={item.imageUrl} alt="shoe1"></img>
                        <div className={ApparelCSS.productName}>{item.productName}</div>
                        <div className={ApparelCSS.price}>$ {item.price}</div>
                        <button className={ApparelCSS.atcBtn}>Add to Cart</button>
                    </div>
                })}
            </div>
        </>
    )
}