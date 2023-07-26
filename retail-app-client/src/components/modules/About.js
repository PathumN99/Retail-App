import { useNavigate } from "react-router-dom";

export default function AboutPage() {

    const history = useNavigate();

    const handleClick = () => {
        // history.call()
        // Use the history object to navigate to the desired page
        history('/home');
    };

    return (
        <div>
            <p>sssssssssssssssssssssssss</p>
            <button onClick={handleClick}>button</button>
            {/* <input>Username</input>
            <input>Password</input> */}
        </div>
    )
}