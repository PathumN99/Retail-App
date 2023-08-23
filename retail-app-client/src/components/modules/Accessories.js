import Axios from "axios";
import { useEffect, useState } from "react";
import AccessoriesCSS from "../../style/Accessories.module.css";

export default function AccessoriesPage() {

    const [accessoriesData, setAccessoriesData] = useState([]);

    useEffect(() => {
        Axios.get('http://localhost:5105/api/Accessory')
            .then(response => {
                setAccessoriesData(response.data);
            })
            .catch(error => {
                console.error("Error fetching data:", error);
            });
    }, []);

    return (
        <div>

            <div className={AccessoriesCSS.filterContainer}>
                <div>Filter Products</div>
                <div>
                    <label>Filter Item :</label>
                    <select className={AccessoriesCSS.selectField}>
                        <option disabled selected>Select Item</option>
                        <option value="0">Watches</option>
                        <option value="1">Bags</option>
                        <option value="2">Other</option>
                    </select>
                </div>
                <div>
                    <button className={AccessoriesCSS.filterBtn}>Filter</button>
                    <button className={AccessoriesCSS.filterBtn}>Clear Filter</button>
                </div>

            </div>

            <div className={AccessoriesCSS.grid}>
                {/* should use return statement in the map function if the curly brases are used */}
                {accessoriesData.map((item, index) => {
                    return <div key={index} className={AccessoriesCSS.gridElement}>
                        <img className={AccessoriesCSS.imgContainer} src={item.imageUrl} alt="shoe1"></img>
                        <div className={AccessoriesCSS.productName}>{item.productName}</div>
                        <div className={AccessoriesCSS.price}>$ {item.price}</div>
                        <button className={AccessoriesCSS.atcBtn}>Add to Cart</button>
                    </div>
                })}
            </div>

        </div>
    )
}