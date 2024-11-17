import './NavBar.css'
import logo from '../images/protection.png'
import {Link} from "react-router-dom";
import {useFirebase} from "../context/Firebase";

export default function NavBar(){
    const firebase = useFirebase();
    return(
        <nav>
            <img src={logo} alt="Image"/>
            <ul>
                <Link className="link" to="/dashboard">Dashboard</Link>
                <Link className="link" to="/history">History</Link>
                <Link className="link" to="/attendance">Attendance</Link>
            </ul>
            <button id="logout" onClick={()=>firebase.logOut()}>
                Log out
            </button>
        </nav>
    )
}