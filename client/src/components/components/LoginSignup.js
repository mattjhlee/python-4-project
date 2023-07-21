import React, {useEffect, useState}  from "react"; 

function LoginSignup({user, users, setUser, setUsers}) {
    const [userLogged, setUserLogged] = useState('')
    const [displayL, setDisplayL] = useState(false)
    const [displayS, setDisplayS] = useState(false)
    const [displayAll, setDisplayAll] = useState(true)
    const [displayButtL, setDisplayButtL] = useState(true)
    const [displayButtS, setDisplayButtS] = useState(true)
    // const [usernames, setUsernames] = useState([])
    
    let usernames = []

    users.forEach((user) => {
        usernames = [...usernames, user.username]
    })
    
    function handleClickL(e){
        e.preventDefault()
        
        console.log(usernames)
        if (usernames.includes(userLogged)) {
            setUser(userLogged)
        } else {
            alert("Invalid username. Try again, sign up for an account, or continue as a guest.")
            setDisplayButtS(true)
            setDisplayL(false)
            setUserLogged('')
            setDisplayButtL(true)
        }
    }

    function handleLogInClick(){
        setDisplayL(true)
        setDisplayButtS(false)
        setDisplayButtL(false)
    }

    function handleSignUpClick() {

    }

    function handleClickS() {

    }

    return (
        <div className="log-signup" style={{display: displayAll? 'block' : 'none'}}>
            <button onClick={handleLogInClick} style={{display: displayButtL? 'block' : 'none'}}> Log In </button>
                <div className="log-in" style={{display: displayL? 'block' : 'none'}} >
                    <form id="log-in-form">
                        <label for="username">Username(case-sensitive): </label>
                        <input type="text" name="username" value={userLogged} onChange={(e) => setUserLogged(e.target.value)} /> <br />
                        <button type="submit" onClick={handleClickL}>Log In</button>
                    </form>
                </div>
            <button onClick={handleSignUpClick} style={{display: displayButtS? 'block' : 'none'}}> Sign Up</button>
                <div className="sign-up" style={{display: displayS? 'block' : 'none'}} >
                    <form id="sign-up-form">
                        <label for="new-username">New Username(case-sensitive): </label>
                        <input type="text" name="new-username" value={userLogged} onChange={(e) => setUserLogged(e.target.value)} /> <br />
                        <button type="submit" onClick={handleClickS}>Log In</button>
                    </form>
                </div>
        </div>

    )
}

export default LoginSignup