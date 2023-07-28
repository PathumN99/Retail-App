import { useState } from "react";
import SignCSS from "../../style/signup.module.css"
import Axios from "axios";

export default function SignPage() {

    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [address, setAddress] = useState("");

    function handleName(event) {
        setName(event.target.value);
    }
    function handlePassword(event) {
        setPassword(event.target.value);
    }
    function handleEmail(event) {
        setEmail(event.target.value);
    }
    function handlePhoneNumber(event) {
        setPhoneNumber(event.target.value);
    }
    function handleAddress(event) {
        setAddress(event.target.value);
    }

    let dataObject = {
        name: name,
        password: password,
        email: email,
        phoneNumber: phoneNumber,
        address: address
    }

    function submitData() {
        Axios.post("http://localhost:5105/api/User", dataObject).then((response) => {
            console.log("Submitted Data: ", response);
            setName("");
            setPassword("");
            setEmail("");
            setPhoneNumber("");
            setAddress("");
        }).catch((error) => {
            console.log(error);
        })
    }

    return (
        <div className={SignCSS.loginbox}>
            <div className={SignCSS.childloginbox}>
                <div>
                    <label className={SignCSS.label}>Username</label>
                    <input placeholder="" className={SignCSS.input} name="name" type="text"
                        value={name} onChange={handleName} />
                </div>
                <div>
                    <label className={SignCSS.label}>E-mail</label>
                    <input placeholder="" className={SignCSS.input} name="email" type="text"
                        value={email} onChange={handleEmail} />
                </div>
                <div>
                    <label className={SignCSS.label}>Phone Number</label>
                    <input placeholder="" className={SignCSS.input} name="phoneNumber" type="text"
                        value={phoneNumber} onChange={handlePhoneNumber} />
                </div>
                <div>
                    <label className={SignCSS.label}>Address</label>
                    <input placeholder="" className={SignCSS.input} name="address" type="text"
                        value={address} onChange={handleAddress} />
                </div>
                <div>
                    <label className={SignCSS.label}>Password</label>
                    <input placeholder="" className={SignCSS.input} name="password" type="text"
                        value={password} onChange={handlePassword} />
                </div>

                <button className={SignCSS.button} onClick={submitData}>Sign Up</button>
            </div>
        </div>
    )
}