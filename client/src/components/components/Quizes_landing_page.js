import React, {useEffect, useState}  from "react";
import ContentCard from "./Content_Card";
import QuizSelect from "./QuizSelect";
import SearchBar from "./SearchBar";


//import dependencies 

function Quizes_landing_page(){

    const[quizes,setQuizes] = useState([])

    useEffect( () =>{
        fetch("linktoquiztabledata")
        .then((resp => resp.json()))
        .then(data => setQuizes(data))
    },[])



    const [filterBy,setFilterBy] = useState("")
    
    filteredQuizList = quizes.filter((quiz) => {
        return (quiz.category === filterBy)
    })

    let displayQuiz = filteredQuizList.map( (placeholder) => {
        return <QuizSelect key= {placeholder.id}
        name = {placeholder.name}
        difficulty = {placeholder.difficulty}
        />
    })

    return(
        <div>
            <h1>Testing Quiz Page</h1>

            <div className="categoryBrowse">
                <h3> Browse by Category</h3>
                <ul>Popular
                    <li>Cat1</li>
                    <li>Cat2</li>
                </ul>
                <SearchBar setFilter = {setFilterBy}/>
            </div>

            <div>
                {displayQuiz}
            </div>

            <></>
        </div>
    )
}

export default Quizes_landing_page


{/* <div className="difficultyBrowse">
<h3>Browse by Difficulty</h3>
<ul>Popular
    <li>diff1</li>
    <li>diff2</li>
</ul>
<SearchBar />
</div> */}