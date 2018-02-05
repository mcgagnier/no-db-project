import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import * as axios from 'axios';

function getHello() {
  return axios.post('http://localhost:8686/starwars', { param: 'anakin'})
    .then((res)=> {
      return res.data.results[0].name;
    });
}

function AppHeader(props) {
  return <h1 className="App-title">{props.greeting}</h1>
}

class App extends Component { 
  constructor(props) {
    super(props);
    this.state = {
      message: 'None'
    }

    getHello().then(message => {
      this.setState({
        message
      });
    });
  }
  render() {
    getHello();
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <AppHeader greeting="Welcome to The G Spot" />
        </header>
        <p>{this.state.message}</p>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
