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
      <BrowserRouter>
      <header className="App-header" id="top-of-page">
        <Route path="/" component={Navbar} />
      </header>
    </BrowserRouter>
    </div>
  );
}

export default App;
