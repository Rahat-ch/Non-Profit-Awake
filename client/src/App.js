
import React, {Component} from 'react';
import {Route, Switch, BrowserRouter as Router} from "react-router-dom";
import Navbar from "./Components/indexnav";
import './App.css';

import Homepage from './Components/homscreen';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }

  
  render(){
    return(
      <Router>
        <div className="App">
          <Route path="/" render={() =><Homepage/> } />
        </div>
      </Router>
    )
  }
}


 
export default App;
