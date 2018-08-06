import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      avengers: ['Iron-man','Black-Widow', 'Captain America', 'Hulk', 'Thor','Vision'],
    }

  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Avengers: by Vance Leon</h1>
        </header>
        {this.state.avengers.map(avenger => <div key={avenger}>{avenger}</div>)}
        </div>
    );
  }
}

export default App;
