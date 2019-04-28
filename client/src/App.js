
import React, {Component} from 'react';
import logo from './logo.svg';
import Footer from  './Components/Footer.jsx';
import Founder from './Components/Founders.jsx';
import Found from './Components/Found.jsx';
import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello Hackers and Team Non-Profit Awake</h1>
        <p>description: Helping non-profit get exposure</p>
      </header>
      <Found /> 
      <Founder />
      <Footer />
    </div>
 
  );
}

export default App;




