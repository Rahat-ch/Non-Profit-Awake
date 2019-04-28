
import React from 'react';
// import logo from './logo.svg';
import {
  Route,
  Switch,
  BrowserRouter
} from "react-router-dom";
import Navbar from "./components/navbar/indexnav";
// import './App.css';

import Homepage from './Components/homscreen';

function App() {
  return (
    <div className="App">

      <header className="App-header">

        <Homepage/>

        <h1>Hello Hackers and Team Non-Profit Awake</h1>
        <p>description: Helping non-profit get exposure</p>

      </header>

      <BrowserRouter>
        <header className="App-header" id="top-of-page">
          <Route path="/" component={Navbar} />
        </header>
      </BrowserRouter>
    </div>
  );
}

export default App;
