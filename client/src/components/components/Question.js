import React, { useState} from "react";



function Question({id, prompt, c_ans, alt_1,alt_2,alt_3,diff}) {
    //Quiz questions will be selected upon selecting a quiz. At that point we will load all the questions which have these values

    
    //get back a card block

    //place a submit button. Once the User submits we then send a patch request to the server using the question 
    //Submit on question submission or submit on quiz submission. Question with submission is easier i think. 

    //onClick change the color or something to indicate what the selection is
    //onSubmit submit a patch request with the selected answer if correct or not. Change the state to whether or not is it correct
    //have an on Submit for the quiz overall? that would go to results i think thats how it was set in models.
    
   
    let answers = [c_ans,alt_1,alt_2,alt_3] //shuffle this if theres nothing prebuild we can just write a janky shuffler with pops/inserts

    const [choice,setchoice] = useState('') //i dont think this is a good way to do this for the quiz overall. Might not need state if i just do this all in comp 
    
    function handleClick(){
        //indicate user has clicked. 
    }

    function handleConfirm(){
        //once the user submits the question we will check if its correct and then send a patch request.

        //1. Check if the answer is correct
        //2. If it is correct send a patch request incrementing correct ans and quantity count
        //3. If it is incorrect send a patch just incrementing the quantity count       
    }

    //CHANGE TO FORM 


    return (
        <div className ='question-block'>
            <h4 className="question-prompt">Prompt is {prompt}</h4>
            <div className ='question-block'>
            <h4 className="question-prompt">Prompt is {prompt}</h4>
                <div className="answer-block">
                    <input type="checkbox" onClick={handleClick}>{answers[0]}</input>
                    <input type="checkbox" onClick={handleClick}>{answers[1]}</input>
                    <input type="checkbox" onClick={handleClick}>{answers[2]}</input>
                    <input type="checkbox" onClick={handleClick}>{answers[3]}</input>
                </div>
            <h4>Difficulty: {diff}</h4>
            <button onClick={handleConfirm} className="conf-asnwer">Confirm</button>
        </div>
            <h4>Difficulty: {diff}</h4>
            <button onClick={handleConfirm} className="conf-asnwer">Confirm</button>
        </div>

    )
}

export default Question
