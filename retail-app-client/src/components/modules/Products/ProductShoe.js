import Axios from "axios";
import { useState } from "react";
import ProductCSS from "../../../style/Product.module.css";

export default function ProductShoe() {

    const [selectedFile, setSelectedFile] = useState(null);
    const [productName, setProductName] = useState(null);
    const [price, setPrice] = useState(null);
    const [brand, setBrand] = useState(null);

    function handleProductName(event) {
        setProductName(event.target.value);
    }
    function handlePrice(event) {
        setPrice(event.target.value);
    }
    function handleBrand(event) {
        setBrand(event.target.value);
    }

    const handleFileChange = (e) => {
        setSelectedFile(e.target.files[0]);
    };
    const resetImage = () => {
        setSelectedFile(null);
    }

    const handleUpload = (e) => {
        const formData = new FormData();
        formData.append('file', selectedFile);

        Axios.post("http://localhost:5105/api/Shoe/image-upload", formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            }
        }).then((response) => {
            console.log("Submitted Data: ", response);
        }).catch((error) => {
            console.log(error);
        })
    }

    return (
        <div>
            <h2 className="h2 medium">Insert a Product</h2>
            <div className={ProductCSS.productCard}>

                <div className={ProductCSS.labelGroup}>
                    <label className={ProductCSS.label}>Product Name</label>
                    <label className={ProductCSS.label}>Price</label>
                    <label className={ProductCSS.label}>Brand</label>
                    <label className={ProductCSS.label}>Upload Image</label>
                </div>

                <div className={ProductCSS.fields}>
                    <input placeholder="" className={ProductCSS.input} name="name" type="text"
                        onChange={handleProductName} />
                    <input placeholder="" className={ProductCSS.input} name="name" type="text"
                        onChange={handlePrice} />
                    <select className={ProductCSS.input} name="brand" defaultValue={0} onChange={handleBrand}>
                        <option value={0}>Air Jordan</option>
                        <option value={1}>Nike</option>
                        <option value={2}>Adidas</option>
                    </select>
                    <input className={ProductCSS.input} type="file" accept="image/*" onChange={handleFileChange} required />
                </div>

            </div>

            <div>
                {selectedFile ? (
                    <p>Uploaded File: {selectedFile.name}</p>
                ) : (
                    <p>No file selected</p>
                )}
            </div>

            <button className={ProductCSS.button} onClick={handleUpload} disabled={!selectedFile}>Upload</button>
            <button className={ProductCSS.button} onClick={resetImage} disabled={!selectedFile}>Clear Image</button>
        </div>
    );
}