import React, {useEffect, useState}  from "react"; 

function LoginSignup({user, users, setUser, setUsers}) {
    const [userLogged, setUserLogged] = useState('')
    const [displayL, setDisplayL] = useState(false)
    const [displayS, setDisplayS] = useState(false)
    const [displayAll, setDisplayAll] = useState(true)
    const [displayButtL, setDisplayButtL] = useState(true)
    const [displayButtS, setDisplayButtS] = useState(true)
    const [userSignedUp, setUserSignedUp] = useState('')
    const [displayW, setDisplayW] = useState(false)
    const [username, setUsername] = useState('')
    
    let usernames = []

    users.forEach((user) => {
        usernames = [...usernames, user.username]
    })
    
    function handleClickL(e){
        e.preventDefault()
        
        console.log(usernames)
        if (usernames.includes(userLogged)) {
            const fullUser = users.filter((user) => {
                return (user.username == userLogged)
            })
            setUser(fullUser)
            setUsername(userLogged)
            setDisplayW(true)
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
        setDisplayS(true)
        setDisplayButtL(false)
        setDisplayButtS(false)
    }

    function handleClickS(e) {
        e.preventDefault()
        if (usernames.includes(userSignedUp)) {
            alert('Username not available.')
            setDisplayButtL(true)
            setDisplayS(false)
            setUserSignedUp('')
            setDisplayButtS(true)
        } else {
            const newUser = {
                username: userSignedUp,
                created_at: null
            }

            fetch("/users", {
                method: "POST",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newUser)
            })
                .then(resp => resp.json())
                setDisplayAll(false)
                const fullUser = users.filter((user) => {
                    return (user.username == userSignedUp)
                })
                setUser(fullUser)
                setUsername(userSignedUp)
                setDisplayW(true)
        }
    }

    return (
        <div>
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
                        <input type="text" name="new-username" value={userSignedUp} onChange={(e) => setUserSignedUp(e.target.value)} /> <br />
                        <button type="submit" onClick={handleClickS}>Sign Up</button>
                    </form>
                </div>
        </div>
        <div className="welcome" style={{display: displayW? 'block' : 'none'}}>
            <h4>Welcome, {username}!</h4>
        </div>
        </div>

    )
}

export default LoginSignup