import Axios from "axios";
import { useState } from "react";

export default function ProductsPage() {

    const [selectedFile, setSelectedFile] = useState(null);    

    const handleFileChange = (e) => {
        setSelectedFile(e.target.files[0]);          
    };   
    
    const handleUpload = (e) => {        
        const formData = new FormData();
        formData.append('file', selectedFile);        

        Axios.post("http://localhost:5105/api/Shoe/image-upload", formData, {headers: {
            'Content-Type': 'multipart/form-data',
        }}).then((response) => {
            console.log("Submitted Data: ", response);            
        }).catch((error) => {
            console.log(error);
        })
    }

    return (
        <div>
            <input type="file" accept="image/*" onChange={handleFileChange} />            
            <button onClick={handleUpload} disabled={!selectedFile}>Upload</button>
        </div>
    )
}