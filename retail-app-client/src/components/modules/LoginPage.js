import { useState } from "react"
import LoginCSS from "../../style/Login.module.css"
import Modal from "../ui-components/Modal";


export default function LoginPage() {

    const [username, setUsername] = useState("");
    const [password, setpassword] = useState("");
    const [modalDisplay, setModalDisplay] = useState(false);

    const modalMessage = "Are You Sure?";

    function handleUsername(event) {
        setUsername(event.target.value);
    }

    function handlePsassword(event) {
        setpassword(event.target.value);
    }

    function handleClick() {        
        setModalDisplay(true);
    }

    function onConfirmation() {        
        console.log("You confirmed")
    }

    return (
        <div className={LoginCSS.loginbox}>
            <div className={LoginCSS.childloginbox}>
                <div>
                    <label className={LoginCSS.label}>Username</label>
                    <input placeholder="" className={LoginCSS.input} name="username" type="text" value={username} onChange={handleUsername} />
                </div>

                <div>
                    <label className={LoginCSS.label}>Password</label>
                    <input placeholder="" className={LoginCSS.input} name="password" type="text" value={password} onChange={handlePsassword} />
                </div>

                <button className={LoginCSS.button} onClick={handleClick}>Login</button>
            </div>
            {(modalDisplay === true) ? <Modal 
            display={setModalDisplay} 
            onConfirm={onConfirmation} 
            message={modalMessage}
            /> : null}
            {/* {modal && <Modal modelState={setModal} />} */}
        </div>
    )
}