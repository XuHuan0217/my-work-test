import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
          <h2>welcome to my test page</h2>
        </header>
        <p className="App-intro">
          <h2>welcome to my test page</h2>
          To get started, edit <code>src/App.js</code> and save to reload.
          {/* <button type="buton" onclick="myFunction()">submit</button>
          <p id="demo"></p>
          <script>
            function myFunction() {
              yeah
            }
            document.getElementById("demo").innerHTML=myFunction();
          </script> 
          <br/><a href="http://127.0.0.1:8020/HelloHBuilder/my.html" target="_blank">my hbuilder</a>
          */}
          
        </p>
      </div>
    );
  }
}

export default App;
