import React, { useState } from "react";
import Quiz from "./Quiz";
function QuizSelect({name, category}){

    //Start Quiz takes you do the quiz that is selected. 
    //Once i click the StartQuiz button the quiz component will be displayed or send to a new location?
    //New Location is probably better we can have this set for now just to test i think also. 
    const [start,setStart] = useState(false)

    function handleClick(){
        setStart(start => true)
        console.log('hello')
    }

   
    return(
    
    <div className="quiz-item">
        <span> 
            <h3>{name}</h3>
        </span>
        <span>
            <h3>{category}</h3>
        </span>
        <span>
            <button onClick={handleClick}>Start Quiz</button>
        </span>
        <br></br>
        <div>
            {start ? <Quiz category={category} />  : null}
        </div>
    
    </div>
    )
}

export default QuizSelect