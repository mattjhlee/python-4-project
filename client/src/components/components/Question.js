import React, { useState} from "react";



function Question({id, prompt, c_ans, alt_1,alt_2,alt_3,diff}) {
    //fetch the data needed or maybe pass instead of fetching for each question
    //better to reduce number of fetches i think. 

    //get back a card block

    //place a submit button. Once the User submits we then send a patch request to the server using the question 
   
    answers = [c_ans,alt_1,alt_2,alt_3] //shuffle this

    const [isCorrect,setIsCorrect] = useState(false)
    
    function checkanswer(){
        if (c_ans === '5' /*onclick read the value*/ ){
            setIsCorrect(isCorrect = true) }
        else {
            setIsCorrect(isCorrect = false)
        }
    }


    return (
        <div className ='question-block'>
            <h4 className="question-prompt">Prompt is {prompt}</h4>
                <ul className="answer-block">
                    <li onClick={checkanswer}>{answers[0]}</li>
                    <li onClick={checkanswer}>{answers[1]}</li>
                    <li onClick={checkanswer}>{answers[2]}</li>
                    <li onClick={checkanswer}>{answers[3]}</li>
                </ul>
            <h4>Difficulty: {diff}</h4>
        </div>

    )
}

export default Question