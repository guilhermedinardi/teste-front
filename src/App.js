import React from 'react'; 
import logo from './assets/logo.png';
import './App.css';


//import content
import HomePage from './page/HomePage';


function App() {
  return (
    // Logo and title header
    <div className="App">
        <img className="logoV4" src={logo}  alt="V4 Company" />
        <p className="titleWeb"> VUTTR <br/> 
          Very Userful Tools to Remember
        </p>
    
    <div id="content">
      <form/>
        <HomePage />
    </div>
  </div>
  );
}

export default App;
