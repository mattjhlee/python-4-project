import React from "react";

function QuizSelect({name, difficulty}){
   
    return(
    
    <div>
        <h3>{name}</h3>
        <h3>{difficulty}</h3>
        <button>Start Quiz</button>
    </div>
    )
}

export default QuizSelect