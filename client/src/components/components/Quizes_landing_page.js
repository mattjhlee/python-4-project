import React, {useEffect, useState}  from "react";
import ContentCard from "./Content_Card";
import QuizSelect from "./QuizSelect";
import SearchBar from "./SearchBar";
import NavBar from "./NavBar";


//import dependencies 

function QuizPage(){

    //when you go to the quiz page it shows the nav bar on top
    //Some Text saying what it is and how to browse and what is popular
    //Has a Search Bar to type into 
    //Depending on what is typed into for the category we filter the quizzes
    //If none found here are some recommended quizzes

    const[quizes,setQuizes] = useState([])
    //grab all the quizzes
    useEffect( () =>{
        fetch('http://localhost:5555/quizzes')
        .then((resp) => resp.json())
        .then(data => setQuizes(data))
    },[])

    //state for filter
    const [filterBy,setFilterBy] = useState("")
    
    //get the list of filtered quizzes

    // let filteredQuizList = quizes.filter((quiz) => {
    //     return (quiz.category === filterBy)
    // })


    console.log(quizes)

    //function to display the filtered quizes

    let displayQuiz = quizes.map( (quizToDisplay) => {
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
            <p>{quizes}</p>

            <div className="categoryBrowse">
                <h3> Browse by Category</h3>
                <ul>
                    <h4>Popular Quizes</h4>
                    <li className="quiz-cat">Sports</li>
                    <li className="quiz-cat">Programming</li>
                </ul>
                <SearchBar setFilter = {setFilterBy}/>
            </div>
            
            <h4>List of Available Quizes</h4>
            <div>
                {displayQuiz}
            </div>

            <></>
        </div>
    )
}

export default QuizPage


{/* <div className="difficultyBrowse">
<h3>Browse by Difficulty</h3>
<ul>Popular
    <li>diff1</li>
    <li>diff2</li>
</ul>
<SearchBar />
</div> */}