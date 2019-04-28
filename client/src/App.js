import React from 'react';
import logo from './logo.svg';
import './App.css';

import Homepage from './Components/homscreen';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <h1>Hello Hackers and Team Non-Profit Awake</h1> */}
        <Homepage/>
      </header>
    </div>
  );
}

export default App;
