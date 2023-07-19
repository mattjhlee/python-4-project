


function Question({prompt, c_ans, alt_1,alt_2,alt_3,diff}) {

    answers = [c_ans,alt_1,alt_2,alt_3] //shuffle this
    //fetch the data needed or maybe pass instead of fetching for each question
    //better to reduce number of fetches i think. 

    //get back a card block
    return (
        <li className ='question_block'>
            <h4 className="Question Prompt">Prompt</h4>
                <ul className="answer_block">
                    <li>answers[0]</li>
                    <li>answers[1]</li>
                    <li>answers[2]</li>
                    <li>answers[3]</li>
                </ul>
            <h4>Difficulty: </h4>
        </li>

    )
}