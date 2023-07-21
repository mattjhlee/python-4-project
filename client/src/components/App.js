import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/Home_Page" //Can i import all from just componenets folder 
import QuizPage from "./components/Quizes_landing_page"
import StatsPage from "./components/Stats_page" 
import UserPage from "./components/User_page"
import QuestionForm from "./components/QuestionForm";

//No index over the app? might just have to make not included in template?


function App() {
  // Code goes here!

  //could load up all the quizes and questions here to test
  //basically dump the entire database on start into different arrays
  const[user,setUser] = useState('Default')
  const[users, setUsers] = useState([])

  useEffect( () => {
    fetch('/users')
    .then ((resp) => resp.json())
    .then ((data) => {
      setUsers(data)
    })
  },[])


  //Route setup

  return (
    <div className='App'>
      {/* <Home_Page /> */}
      <BrowserRouter>
        <Routes>
          <Route path = '/' element = {<HomePage user={user} setUser={setUser} users={users} setUsesr={setUsers} />}/>
          <Route path = '/Quizzes' element = {<QuizPage/>} />
          <Route path = '/Stats' element = {<StatsPage/>}/>
          <Route path = '/User' element = {<UserPage user={user} setUser={setUser} users={users} setUsesr={setUsers} />}/>
          <Route path = '/NewQuestion' element = {<QuestionForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  )

}

export default App;
