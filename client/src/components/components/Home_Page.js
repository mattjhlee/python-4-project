import React from "react";
import NavBar from "./NavBar";
import LoginSignup from "./LoginSignup"
import ContentCard from "./Content_Card"

//import dependencies 

function HomePage({user, users, setUser, setUsers}){

    return(
        <div>
            <NavBar />
            <LoginSignup user={user} setUser={setUser} users={users} setUsesr={setUsers}/>
            <h1>Welcome to your new Study Helper (totally not a quizlet rippoff)</h1>
            <h1> </h1>
            <ContentCard />

            
            {/* <Footer /> */}
        </div>
    )
}

export default HomePage