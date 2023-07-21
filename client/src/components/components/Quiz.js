import React, {useEffect, useState}  from "react"; 
import Question from "./Question";


function Quiz({category}){
    //we load up all the questions
    //filter out the questions that are present on the quiz
    //For each question we run it thourgh the quiz card

    const [questions,setQuestions] = useState([])

    useEffect( () => {
        fetch('/questions')
        .then ((resp) => resp.json())
        .then ((data) =>setQuestions(data))
    },[])

    //find out which questions are associated with that quiz

    let filteredQuestions = questions.filter((question) => {
        return (question.category === category)}
    )
    
    //function to create each question block
    let displayQuestion = filteredQuestions.map( (questionToDisplay) => {
        return <Question key = {questionToDisplay.id} id = {questionToDisplay.id} prompt = {questionToDisplay.prompt} c_ans = {questionToDisplay.correct_answer} alt_1 = {questionToDisplay.alt_1} alt_2={questionToDisplay.alt_2} alt_3={questionToDisplay.alt_3} diff={questionToDisplay.difficulty} a_count = {questionToDisplay.answer_count} c_count = {questionToDisplay.correct_count}/>
    })

    //at the end of the quiz there is a submit button. Upon submit it is graded and we display the result and make a post request to the results page?

    const [done,setDone] = useState(false)

    function handleClick (){
        //
        setDone((done) => true)
    }

    return (
        <div className="quiz-block">
            {displayQuestion}
            <button onClick={handleClick}>Submit Quiz</button>
        </div>
    )
}


export default Quiz