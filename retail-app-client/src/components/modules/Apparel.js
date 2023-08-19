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
    )
}