import Navbar from './components/Navbar';
import News from './components/News';
import React, { useState } from 'react';
import LoadingBar from 'react-top-loading-bar';
import {BrowserRouter as Router,Route,Routes, } from "react-router-dom";

const App =()=> {

const pageSize = 15;

const [progress , setProgress] = useState(0)


      return (
        <div>
          <Router>
          < Navbar/>
          <LoadingBar
          height={3}
        color='#f11946'
        progress={progress}
        />
          <Routes>
            <Route exact path="/"element = {<News setProgress={setProgress} key="General" pageSize={pageSize} country="in"category = "General"/>} />
            <Route exact path="/Business"element = {<News setProgress={setProgress} key="Business" pageSize={pageSize} country="in"category = "Business"/>} />
            <Route exact path="/Entertainment"element = {<News setProgress={setProgress} key="Entertainment" pageSize={pageSize} country="in"category = "Entertainment"/>} />
            <Route exact path="/Health"element = {<News setProgress={setProgress} key="Health" pageSize={pageSize} country="in"category = "Health"/>} />
            <Route exact path="/Science"element = {<News setProgress={setProgress} key="Science" pageSize={pageSize} country="in"category = "Science"/>} />
            <Route exact path="/Sports"element = {<News setProgress={setProgress} key="Sports" pageSize={pageSize} country="in"category = "Sports"/>} />
            <Route exact path="/Technology"element = {<News setProgress={setProgress} key="Technology" pageSize={pageSize} country="in"category = "Technology"/>} />
            
          </Routes>
          </Router>
        </div>
      )
    }
    export default App;
// 5a241559fd564fcfb3e59a32e5a96163  0511
// e6ad3380473d4bc1b3611f044cc32c40  666
