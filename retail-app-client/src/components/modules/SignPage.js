import { useState } from "react";
import SignCSS from "../../style/signup.module.css"
import Axios from "axios";
import Modal from "../ui-components/Modal";

export default function SignPage() {

    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [address, setAddress] = useState("");
    const [modalDisplay, setModalDisplay] = useState(false);
    const [error, setError] = useState(false)

    const modalMessage = "Do You Want to Confirm?";

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
    function invokeModal() {
        if (name.length === 0 || email.length === 0 || phoneNumber.length === 0 || password.length === 0) {
            setError(true);
            console.log("Error : Validation Error!");
        } else {
            setModalDisplay(true);
        }
    }

    let dataObject = {
        name: name,
        password: password,
        email: email,
        phoneNumber: phoneNumber,
        address: address
    }

    function submitData() {
        if (name.length === 0 || email.length === 0 || phoneNumber.length === 0 || password.length === 0) {
            console.log("Error : Validation Error!");
        } else {
            Axios.post("http://localhost:5105/api/User", dataObject).then((response) => {
                console.log("Submitted Data: ", response);
                setName("");
                setPassword("");
                setEmail("");
                setPhoneNumber("");
                setAddress("");
                setError(false);
            }).catch((error) => {
                console.log(error);
            })
        }
    }

    return (
        <div className={SignCSS.loginbox}>
            <div className={SignCSS.childloginbox}>
                <div>
                    <label className={SignCSS.label}>Username</label>
                    <input placeholder="" className={SignCSS.input} name="name" type="text"
                        value={name} onChange={handleName} />
                </div>
                {(error && name.length === 0) ?
                    <div>
                        <label className={SignCSS.errMsg}>Username Should not be Empty!</label>
                    </div>
                    : null}

                <div>
                    <label className={SignCSS.label}>E-mail</label>
                    <input placeholder="" className={SignCSS.input} name="email" type="text"
                        value={email} onChange={handleEmail} />
                </div>
                {(error && email.length === 0) ?
                    <div>
                        <label className={SignCSS.errMsg}>Email Should not be Empty!</label>
                    </div>
                    : null}

                <div>
                    <label className={SignCSS.label}>Phone Number</label>
                    <input placeholder="" className={SignCSS.input} name="phoneNumber" type="text"
                        value={phoneNumber} onChange={handlePhoneNumber} />
                </div>
                {(error && phoneNumber.length === 0) ?
                    <div>
                        <label className={SignCSS.errMsg}>Phone Number Should not be Empty!</label>
                    </div>
                    : null}

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
                {(error && password.length === 0) ?
                    <div>
                        <label className={SignCSS.errMsg}>Password Should not be Empty!</label>
                    </div>
                    : null}

                <button className={SignCSS.button} onClick={invokeModal}>Sign Up</button>
            </div>
            {(modalDisplay === true) ? <Modal
                display={setModalDisplay}
                onConfirm={submitData}
                message={modalMessage}
            /> : null}
        </div>
    )
}