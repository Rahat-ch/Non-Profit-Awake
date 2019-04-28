
import React, {Component} from 'react';
import logo from './logo.svg';
import Footer from  './Components/Footer.jsx';
import Founder from './Components/Founders.jsx';
import Found from './Components/Found.jsx';
import './App.css';
import React from 'react';
// import logo from './logo.svg';
import {
  Route,
  Switch,
  BrowserRouter
} from "react-router-dom";
import Navbar from "./components/navbar/indexnav";
// import './App.css';


function App() {
  return (
    <div className="App">

      <header className="App-header">
        <h1>Hello Hackers and Team Non-Profit Awake</h1>
        <p>description: Helping non-profit get exposure</p>
        <p>Delete this line</p>
      </header>
      <Found /> 
      <Founder />
      <Footer />

      <BrowserRouter>
        <header className="App-header" id="top-of-page">
          <Route path="/" component={Navbar} />
        </header>
      </BrowserRouter>
    </div>
 
  );
}

export default App;




