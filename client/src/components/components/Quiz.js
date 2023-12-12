import React, {useEffect, useState}  from "react"; 
import Question from "./Question";


function Quiz({category}){
    //we load up all the questions
    //filter out the questions that are present on the quiz
    //For each question we run it thourgh the quiz card


   
    
    const [questions,setQuestions] = useState([])
    const [submitted,setSubmitted] = useState(false)

    useEffect( () => {
        fetch('/questions')
        .then ((resp) => resp.json())
        .then ((data) =>setQuestions(data))
    },[])

    //find out which questions are associated with that quiz

    let filteredQuestions = questions.filter((question) => {
        return (question.category.toLowerCase() === category.toLowerCase())}
    )
    
    let questionCount = filteredQuestions.length
  


    //function to create each question block
    let displayQuestion = filteredQuestions.map( (questionToDisplay) => {
        return <Question key = {questionToDisplay.id} id = {questionToDisplay.id} prompt = {questionToDisplay.prompt} c_ans = {questionToDisplay.correct_answer} alt_1 = {questionToDisplay.alt_1} alt_2={questionToDisplay.alt_2} alt_3={questionToDisplay.alt_3} diff={questionToDisplay.difficulty} a_count = {questionToDisplay.answer_count} c_count = {questionToDisplay.correct_count}  />
    })

    //at the end of the quiz there is a submit button. Upon submit it is graded and we display the result and make a post request to the results page?

    const [done,setDone] = useState(false)
    let final_score = 0
    let right = 0

    function handleClick (){
        setDone((done) => true)
        setSubmitted(true)
        final_score =  (right/questionCount)*100
    }

    return (
        <div className="quiz-block">
            { submitted ? null : displayQuestion}
            {submitted? null :<button onClick={handleClick}>Submit Quiz</button> }
            <h3> {done ? final_score + '%' : 'complete quiz to get final score'} </h3>
        </div>
    )
}


export default Quiz