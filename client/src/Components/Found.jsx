import React, { Component } from 'react';
import './Found.css';
import './chen.jpg'

class Found extends Component {
  render() {
     return (
       <div className="main">
         <div className="search">
            <input type="text"></input>
            <input type="submit"></input>
         </div>
          <div className="nav">
            <ul>
              <a href="#"><li>Cats</li></a>
              <a href="#"><li>Dogs</li></a>
              <a href="#"><li>Birds</li></a>
            </ul>
          </div>
         <div className="photos">
          <ul>
            <li><img src="./chen.jpg" alt="golf"/></li>
            <li><img src="./chen.jpg" alt="golff" /></li>
          </ul>
         </div>
       </div>  
     );
  }
}

export default Found;