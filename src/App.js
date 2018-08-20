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
        </header>
        <p className="App-intro">
          React 也不过如此嘛
        </p>
        <button onClick={this.sayHi}>点我</button>
      </div>
    );
  }
  sayHi() {
    alert('Hi!')
  }
}

export default App;
