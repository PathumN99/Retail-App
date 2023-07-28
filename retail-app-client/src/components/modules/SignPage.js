import { useState } from "react";
import SignCSS from "../../style/signup.module.css"

export default function SignPage() {

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
        <div className={SignCSS.loginbox}>
            <div className={SignCSS.childloginbox}>
                <div>
                    <label className={SignCSS.label}>Username</label>
                    <input placeholder="" className={SignCSS.input} name="username" type="text" value={username} onChange={handleUsername} />
                </div>
                <div>
                    <label className={SignCSS.label}>E-mail</label>
                    <input placeholder="" className={SignCSS.input} name="username" type="text" value={username} onChange={handleUsername} />
                </div>
                <div>
                    <label className={SignCSS.label}>Phone Number</label>
                    <input placeholder="" className={SignCSS.input} name="username" type="text" value={username} onChange={handleUsername} />
                </div>
                <div>
                    <label className={SignCSS.label}>Address</label>
                    <input placeholder="" className={SignCSS.input} name="username" type="text" value={username} onChange={handleUsername} />
                </div>
                <div>
                    <label className={SignCSS.label}>Password</label>
                    <input placeholder="" className={SignCSS.input} name="password" type="text" value={password} onChange={handlePsassword} />
                </div>


                <button className={SignCSS.button} onClick={handleClick}>Sign Up</button>
            </div>
        </div>
    )
}