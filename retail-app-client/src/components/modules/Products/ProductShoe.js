import Axios from "axios";
import { useState } from "react";
import ProductCSS from "../../../style/Product.module.css";
import Modal from "../../ui-components/Modal";
import { ShoeBrands } from "../../../utilities/enums";

export default function ProductShoe() {

    const [selectedFile, setSelectedFile] = useState(null);
    const [productName, setProductName] = useState("");
    const [price, setPrice] = useState("");
    const [brand, setBrand] = useState(0);
    const [error, setError] = useState(false);
    const [modalDisplay, setModalDisplay] = useState(false);

    function handleProductName(event) {
        setProductName(event.target.value);
    }
    function handlePrice(event) {
        setPrice(event.target.value);
    }
    function handleBrand(event) {
        setBrand(parseInt(event.target.value));
    }

    const handleFileChange = (e) => {
        setSelectedFile(e.target.files[0]);
    };
    const resetImage = () => {
        setSelectedFile(null);
    }

    const modalMessage = "Do You Want to Confirm?";

    function invokeModal() {

        if (productName.length === 0 || price.length === 0 || brand.length === 0) {
            setError(true);
            console.log("Error : Fields are empty!");

        } else {
            setModalDisplay(true);
        }
    }

    const handleUpload = (e) => {
        const formData = new FormData();
        formData.append('file', selectedFile);

        let dataObject = {
            productName: productName,
            price: price,
            brand: brand,
            imageName: selectedFile.name,
            imageUrl: `http://localhost:5105/Images/Shoes/${selectedFile.name}`
        }

        Axios.post("http://localhost:5105/api/Shoe/insert-product", dataObject).then((response) => {
            console.log("Submitted Data: ", response);
            setProductName("");
            setPrice("");
            setError(false);
        }).catch((error) => {
            console.log(error);
        })

        Axios.post("http://localhost:5105/api/Shoe/image-upload", formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            }
        }).then((response) => {
            console.log("Submitted Data: ", response);
            setSelectedFile(null);
        }).catch((error) => {
            console.log(error);
        })
    }

    return (
        <div className={ProductCSS.container}>

            {(modalDisplay === true) ? <Modal
                display={setModalDisplay}
                onConfirm={handleUpload}
                message={modalMessage}
            /> : null}

            <h2 className="h2 medium">Insert a Product</h2>
            <div className={ProductCSS.productCard}>

                <div className={ProductCSS.labelGroup}>
                    <label className={ProductCSS.label}>Product Name</label>
                    <label className={ProductCSS.label}>Price</label>
                    <label className={ProductCSS.label}>Brand</label>
                    <label className={ProductCSS.label}>Upload Image</label>
                </div>

                <div className={ProductCSS.fields}>
                    <input placeholder="" className={ProductCSS.input} value={productName} name="productName" type="text"
                        onChange={handleProductName} />
                    <input placeholder="" value={price} className={ProductCSS.input} name="price" type="text"
                        onChange={handlePrice} />
                    <select className={ProductCSS.input} value={brand} name="brand" onChange={handleBrand}>
                        <option value={ShoeBrands.airJordan}>Air Jordan</option>
                        <option value={ShoeBrands.nike}>Nike</option>
                        <option value={ShoeBrands.adidas}>Adidas</option>
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
            {(error) ?
                <div className={ProductCSS.errMsg}>
                    <label>Fields Should not be Empty!</label>
                </div>
                : null}

            <button className={ProductCSS.button} onClick={invokeModal} disabled={!selectedFile}>Upload</button>
            <button className={ProductCSS.button} onClick={resetImage} disabled={!selectedFile}>Clear Image</button>

        </div>

    );
}