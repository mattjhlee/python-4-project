import React from "react";
import NavBar from "./NavBar";
import LoginSignup from "./LoginSignup"
import ContentCard from "./Content_Card"

//import dependencies 

function Home_Page(){

    return(
        <div>
            <NavBar />
            <LoginSignup />
            <ContentCard />
            <ContentCard />
            <h1>Welcome</h1>
            <Footer />
        </div>
    )
}

export default Home_Page