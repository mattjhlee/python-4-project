import React from "react";
import { Link } from "react-router-dom"

function NavBar(){
    return(
        <nav className="main-nav">
            <Link to="/">Home</Link>
            <Link to="/Quizzes">Go to Quiizes</Link>
            <Link to = "/Stats">View Stats</Link>
            <Link to = "User">View Profile</Link>
        </nav>
    )
    }       
        
export default NavBar