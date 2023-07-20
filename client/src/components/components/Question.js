import React, { useState} from "react";



function Question({id, prompt, c_ans, alt_1,alt_2,alt_3,diff}) {
    //Quiz questions will be selected upon selecting a quiz. At that point we will load all the questions which have these values

    
    //get back a card block

    //place a submit button. Once the User submits we then send a patch request to the server using the question 
    //Submit on question submission or submit on quiz submission. Question with submission is easier i think. 

    //onClick change the color or something to indicate what the selection is
    //onSubmit submit a patch request with the selected answer if correct or not. Change the state to whether or not is it correct
    //have an on Submit for the quiz overall? that would go to results i think thats how it was set in models.
    
   
    answers = [c_ans,alt_1,alt_2,alt_3] //shuffle this if theres nothing prebuild we can just write a janky shuffler with pops/inserts

    const [isCorrect,setIsCorrect] = useState(false) //i dont think this is a good way to do this for the quiz overall. Might not need state if i just do this all in comp 
    
    function handleClick(){
        //indicate user has clicked. 
    }

    function checkanswer(){
        if (c_ans === submittedAnswer /*onclick read the value*/ ){
            setIsCorrect(isCorrect = true) }
        else {
            setIsCorrect(isCorrect = false)
        }
    }


    //Change these to not be a list and a form instead most likely.
    return (
        <div className ='question-block'>
            <h4 className="question-prompt">Prompt is {prompt}</h4>
                <ul className="answer-block">
                    <li onClick={handleClick}>{answers[0]}</li>
                    <li onClick={handleClick}>{answers[1]}</li>
                    <li onClick={handleClick}>{answers[2]}</li>
                    <li onClick={handleClick}>{answers[3]}</li>
                </ul>
            <h4>Difficulty: {diff}</h4>
        </div>

    )
}

export default Question