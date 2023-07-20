import React from "react";

function QuizSelect({name, difficulty,category}){

    //Start Quiz takes you do the quiz that is selected. 
    //Once i click the StartQuiz button
   
    return(
    
    <div>
        <h3>{name}</h3>
        <h3>{difficulty}</h3>
        <h3>{category}</h3>
        <button>Start Quiz</button>
    </div>
    )
}

export default QuizSelect