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
        fetch('/quizzes')
        .then((resp) => resp.json())
        .then(data => setQuizes(data))
    },[])

    //state for filter
    const [filterBy,setFilterBy] = useState("")
    
    //get the list of filtered quizzes

    // let filteredQuizList = quizes.filter((quiz) => {
    //     return (quiz.category === filterBy)
    // })


    console.log(quizes) //Quizzes is an array of objects
    // console.log(quizes[0]) //this should be the first object in the array
    // console.log(quizes[0].id) //this should show the 
  

    //function to display the filtered quizes

    //We take each object in the array. For each one we create a quizSelect component with the following props

    let renderQuiz = quizes.map( (quiz) => {
        return <QuizSelect key= {quiz.id}
        name = {quiz.name}
        category={quiz.category}

        />
    })

    console.log('hello')
    console.log(renderQuiz) //this is a list of react components with props we need

    return(
        <div>
            <NavBar />
            <h1 className="main-header" >View Quizzes</h1>

            <div className="categoryBrowse">
                <h3> Browse by Category</h3><br></br>
                <ul>
                    <h4>Popular Categories</h4> <br></br>
                    <li className="quiz-cat">Sports</li> <br></br>
                    <li className="quiz-cat">Programming</li> <br></br>
                </ul>

                <h3>Search by Category</h3>
                <SearchBar setFilter = {setFilterBy}/>
            </div>
            
            <h4 className="quizheader">List of Available Quizzes</h4>

            <div>
                {renderQuiz}
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