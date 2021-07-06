
import React, {useState} from "react";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';

//pages

import Nav from "./components/Nav";
import LandingPg from "./pages/LandingPg";
import SearchPage from "./pages/SearchPage";
import Footer from "./components/Footer"; 

import "tailwindcss/tailwind.css"; 


function App() {
  return (
    // <Router>
    <div>
    <Nav/>

    <Footer/>
    </div>
    // </Router>
  );
}

export default App;
