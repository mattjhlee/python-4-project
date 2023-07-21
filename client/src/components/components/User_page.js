import React, {useEffect, useState}  from "react";
import { Link } from "react-router-dom"

//import dependencies 

function UserPage({user, users, setUser, setUsers}){
    const[results, setResults] = useState([])
    const[name, setName] = useState('')
    const[category, setCategory] = useState('')
    const[displayButt, setDisplayButt] = useState(true)
    const[displayConfirm, setDisplayConfirm] = useState(false)
    const[displayAll, setDisplayAll] = useState(true)
    const[displayReturn, setDisplayReturn] = useState(false)

    useEffect(() => {
        fetch('/results')
        .then ((resp) => resp.json())
        .then ((data) => {
        setResults(data)
    })
    }, [])

    const userResults = results.filter((result) => {
        return result.user_id == user.id
    })

    const resultsDiv = userResults.map((userResult) => {
        
        const quizId = userResult.quiz_id
        fetch(`/quizzes/${quizId}`)
        .then((resp) => resp.json())
        .then((data) => {
            console.log(data.name)
            setName(data.name)
            setCategory(data.category)
        })
        return (
            <div key = {userResult.id} className="user-results">
                <h3>{name}</h3>
                <h4>{category}</h4>
                <p>Score(out of 100): {userResult.score} </p>
            </div>
        )
    })

    function handleClick(){
        setDisplayButt(false)
        setDisplayConfirm(true)
    }
    function handleClickY(){
        fetch(`/users/${user.id}`, {
            method: "DELETE",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        .then(resp => resp.json())
        setDisplayAll(false)
        setDisplayReturn(true)
    }
    function handleClickN(){
        setDisplayButt(true)
        setDisplayConfirm(false)
    }

    return(
        <div>
        <div className="return-to-home" style={{display: displayReturn? 'block' : 'none'}}>
            <Link to="/">Return to Home Page</Link>
        </div>
        <div className="user-page" style={{display: displayAll? 'block' : 'none'}}>
            <h1>Stats for {user.username}</h1>
            {resultsDiv}
            <div className="remove-user">
                <button onClick={handleClick} style={{display: displayButt? 'block' : 'none'}}>Delete Account</button>
                <div className="confirm-delete" style={{display: displayConfirm? 'block' : 'none'}}>
                    <p>Are you sure you want to delete your account?</p> <br />
                    <button onClick={handleClickY} >Delete Account</button><br />
                    <button onClick={handleClickN} >I Changed My Mind</button><br />
                </div>
            </div>
        </div>    
        </div>
    )
}

export default UserPage