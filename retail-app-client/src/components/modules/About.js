import { useNavigate } from "react-router-dom";

export default function AboutPage() {

    const navigate = useNavigate();

    const handleClick = () => {        
        navigate('/home');
    };

    return (
        <div>
            <p>Aboutttttttttttttttttttttttttttttt</p>
            <button onClick={handleClick}>button</button>           
        </div>
    )
}