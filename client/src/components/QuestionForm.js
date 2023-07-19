import { useState, useEffect } from "react"
import React from "react"

function QuestionForm({}) {
    const [ prompt, setPrompt ] = useState("")
    const [ correctAnswer, setCorrectAnser ] = useState("")
    const [ alt1, setAlt1 ] = useState("")
    const [ alt2, setAlt2 ] = useState("")
    const [ alt3, setAlt3 ] = useState("")
    const [ difficulty, setDifficulty ] = useState("")
    // const [ correctCount, setCorrectCount ] = useState("")
    // const [ answerCount, setAnswerCount ] = useState("")
    const [ category, setCategory ] = useState("")
    // const [ quizId, setQuizId ] = useState("")

    function handleSubmit(e){

    }

    return(
        <form id = "question-form" onSubmit={handleSubmit}>
            <label for="prompt">Question Prompt: </label>
            <input type="text" name="prompt" value={prompt} onChange={(e) => setPrompt(e.target.value)} /> <br /> 
            <label for="correctAnswer">Correct Answer: </label>
            <input type="text" name="correctAnswer" value={correctAnswer} onChange={(e) => setCorrectAnser(e.target.value)} /> <br />
            <label for="alt1">Incorrect Option: </label>
            <input type="text" name="alt1" value={alt1} onChange={(e) => setAlt1(e.target.value)} /> <br />
            <label for="alt2">Incorrect Option: </label>
            <input type="text" name="alt2" value={alt2} onChange={(e) => setAlt2(e.target.value)} /> <br />
            <label for="alt3">Incorrect Option: </label>
            <input type="text" name="alt3" value={alt3} onChange={(e) => setAlt3(e.target.value)} /> <br />
            <label for="difficulty">Difficulty Level (1-3): </label>
            <input type="text" name="difficulty" value={difficulty} onChange={(e) => setDifficulty(e.target.value)} /> <br />
            <label for="category">Question Category: </label>
            <input type="text" name="category" value={category} onChange={(e) => setCategory(e.target.value)} /> <br />
        </form>
    )

}

export default QuestionForm