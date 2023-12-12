import React from "react";
import { Link } from "react-router-dom"

function NavBar(){
    return(
        <nav className="main-nav">
            <Link to="/">Home</Link>
            <Link to="/Quizzes">Go to Quizzes</Link>
            <Link to = "/Stats">View Stats</Link>
            <Link to = "/User">View Profile</Link>
            <Link to = "/NewQuestion"> Submit a Question</Link>
        </nav>
    )
    }       
        
export default NavBar