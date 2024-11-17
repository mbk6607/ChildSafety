import './login.css'
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {useFirebase} from "../context/Firebase";


function Form(){

    const firebase = useFirebase();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isError, setIsError] = useState(false);
    const navigate = useNavigate();
    async function handleSubmit(e){
        e.preventDefault();
        firebase.loginUser(email, password).then(() => {
                localStorage.setItem("login", true);
                navigate('/dashboard');
            }
        ).catch((e)=> {
            console.log("Login failed")
            setIsError(true);
        });
    }

    return(
        <form className="loginForm" autoComplete="false" method="post" onSubmit={handleSubmit}>
            <input
                required
                className="inputField"
                type="email"
                placeholder="Email"
                value={email}
                name="email"
                onChange={e => setEmail(e.target.value)}
            />
            <input
                required
                className="inputField"
                type="password"
                placeholder="Password"
                value={password}
                name="password"
                onChange={e => setPassword(e.target.value)}
            />
            {isError && <p className="error">Invalid email or password! Please try again!</p>}
            <button type="submit" className="submitBtn" disabled={email.length === 0 || password.length === 0}>
            Login
            </button>
        </form>
    )
}



export default function Login(){
    return(
        <div className="container">
            <h1 className="heading">Login</h1>
            <Form />
        </div>
    )
}