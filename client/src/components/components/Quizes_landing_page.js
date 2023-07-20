import React, {useEffect, useState}  from "react";
import ContentCard from "./Content_Card";
import QuizSelect from "./QuizSelect";
import SearchBar from "./SearchBar";
import NavBar from "./NavBar";


//import dependencies 

function Quizes_landing_page(){

    //when you go to the quiz page it shows the nav bar on top
    //Some Text saying what it is and how to browse and what is popular
    //Has a Search Bar to type into 
    //Depending on what is typed into for the category we filter the quizzes
    //If none found here are some recommended quizzes

    const[quizes,setQuizes] = useState([])
    //grab all the quizzes
    useEffect( () =>{
        fetch("linktoquiztabledata")
        .then((resp) => resp.json())
        .then(data => setQuizes(data))
    },[])

    //state for filter
    const [filterBy,setFilterBy] = useState("")
    
    //get the list of filtered quizzes
    let filteredQuizList = quizes.filter((quiz) => {
        return (quiz.category === filterBy)
    })

    //function to display the filtered quizes
    let displayQuiz = filteredQuizList.map( (quizToDisplay) => {
        return <QuizSelect key= {quizToDisplay.id}
        name = {quizToDisplay.name}
        difficulty = {quizToDisplay.difficulty}
        category={quizToDisplay.category}
        />
    })



    return(
        <div>
            <NavBar />
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