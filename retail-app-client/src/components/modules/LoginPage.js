import { useState } from "react"
import LoginCSS from "../../style/Login.module.css"


export default function LoginPage() {

    const [username, setUsername] = useState("");
    const [password, setpassword] = useState("");

    function handleUsername(event) {
        setUsername(event.target.value);
    }

    function handlePsassword(event) {
        setpassword(event.target.value);
    }

    function handleClick() {
        console.log("username: " + username, "password: " + password);
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
        </div>
    )
}