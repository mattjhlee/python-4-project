import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home_page from "./components/Home_Page" //Can i import all from just componenets folder 
import Quizes_landing_page from "./components/Quizes_landing_page"
import Stats_page from "./components/Stats_page" 
import User_page from "./components/User_page"

//No index over the app? might just have to make not included in template?


function App() {
  // Code goes here!


  //Route setup

  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path = '/' element = {Home_page}/>
          <Route path = '/Quizzes' element = {Quizes_landing_page} />
          <Route path = '/Stats' element = {Stats_page}/>
          <Route path = 'User' element = {User_page}/>
        </Routes>
      </BrowserRouter>
    </div>
  )

}

export default App;
