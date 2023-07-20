import React from "react";
import NavBar from "./NavBar";
import LoginSignup from "./LoginSignup"
import ContentCard from "./Content_Card"

//import dependencies 

function Home_Page({}){

    return(
        <div>
            <h4>idt this is working</h4>
            <NavBar />
            <LoginSignup />
            <h1>Welcome</h1>
            <ContentCard />
            <ContentCard />
            
            {/* <Footer /> */}
        </div>
    )
}

export default Home_Page