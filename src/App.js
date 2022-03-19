import './App.css';
// import {useState} from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HowIsThere from './components/howIsThere/HowIsThere';
import AllOfUs from './components/allOfUs/AllOfUs';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import React, {useState}  from 'react';
function App() {
  // console.log("inside app js",hostName);
  return (
    <div className="App bg-black">
      <Router>
        <Routes>
              <Route exact path="/" element={ <HowIsThere />}/>
              <Route path="/hey_There" element={<AllOfUs/>}/>
           
        </Routes>
     
      </Router>
     
    </div>
  );
}

export default App;
