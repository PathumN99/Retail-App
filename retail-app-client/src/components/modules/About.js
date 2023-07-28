import React, { useEffect, useState } from "react";
import Axios from "axios";

export default function AboutPage() {

    const [values, setValues] = useState([]);
        
    function getData() {
        Axios.get("http://localhost:5105/api/User").then((response) => {
            setValues(response.data);
        }).catch((error) => {
            console.log("Error : " + error);
        })
    }

    useEffect(getData, [])

    return (
        <div>
            <ul>
                {values.map(item => (
                    <li key={item.name}>{item.email}</li>
                ))}
            </ul>
        </div>
    )
}