import NavBar from "./NavBar";
import Maps from "./Maps";

const contentStyle = {
    width: "100%",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Poppins, sans-serif",
}


export default function Dashboard({username}){
    return(
        <>
            <NavBar/>
            <div id="content" style={contentStyle}>
                <h1>Welcome {username}</h1>
                <h1>Your childs live Location:</h1>
                <Maps/>
            </div>
        </>
    )
}