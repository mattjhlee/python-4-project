import { useState, useEffect } from "react"
import React from "react"

function QuestionForm( {} ) {
    const [ prompt, setPrompt ] = useState("")
    const [ correctAnswer, setCorrectAnswer ] = useState("")
    const [ alt1, setAlt1 ] = useState("")
    const [ alt2, setAlt2 ] = useState("")
    const [ alt3, setAlt3 ] = useState("")
    const [ difficulty, setDifficulty ] = useState("")
    // const [ correctCount, setCorrectCount ] = useState("")
    // const [ answerCount, setAnswerCount ] = useState("")
    const [ category, setCategory ] = useState("")
    // const [ quizId, setQuizId ] = useState("")

    const[quizes,setQuizes] = useState([])
    //grab all the quizzes
    useEffect( () =>{
        fetch('/quizzes')
        .then((resp) => resp.json())
        .then(data => setQuizes(data))
    },[])

    function handleSubmit(e){
        e.preventDefault()
        console.log(quizes)
        const correctQuiz = quizes.filter((quiz) => {
            return quiz.category == category
        })

        console.log(correctQuiz)
        
        if (prompt.length > 0
        && correctAnswer.length > 0
        && alt1.length > 0
        && alt2.length > 0
        && alt3.length > 0
        && difficulty.length > 0
        && category.length > 0) {
            const newQuestion = {
                prompt: prompt,
                correct_answer: correctAnswer,
                alt_1: alt1,
                alt_2: alt2,
                alt_3: alt3,
                difficulty: parseInt(difficulty),
                correct_count: 0,
                answer_count: 0,
                category: category,
                quiz_id: correctQuiz[0].id
                //quiz_id will be the quiz that has the same category
            }

            fetch("/questions", {
                method: "POST",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newQuestion)
            })
                .then(resp => resp.json())

                setAlt1('')
                setAlt2('')
                setAlt3('')
                setCategory('')
                setCorrectAnswer('')
                setDifficulty('')
                setPrompt('')
        } else {
            setAlt1('')
            setAlt2('')
            setAlt3('')
            setCategory('')
            setCorrectAnswer('')
            setDifficulty('')
            setPrompt('')
            alert("Please Fill Out All Sections of Form")
        }
    }       

    return(
        <form id = "question-form" onSubmit={handleSubmit}>
            <label for="prompt">Question Prompt: </label>
            <input type="text" name="prompt" value={prompt} onChange={(e) => setPrompt(e.target.value)} /> <br /> 
            <label for="correctAnswer">Correct Answer: </label>
            <input type="text" name="correctAnswer" value={correctAnswer} onChange={(e) => setCorrectAnswer(e.target.value)} /> <br />
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
            <button type="submit">Submit</button>
        </form>
    )

}

export default QuestionForm