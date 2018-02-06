import React, { Component } from 'react';
import './App.css';
import * as axios from 'axios';
var firstName="Tracie";
var lastName="Gagnier";

function getJoke(firstName, lastName) {
  return axios.post('http://api.icndb.com/jokes/random?firstName='+firstName+'&lastName='+lastName)
    .then((res)=> {
      console.log(res)
      return res.data.value.joke;
    });
}

function AppHeader(props) {
  return <h1 className="App-title">{props.greeting}</h1>
}

class App extends Component { 
  constructor(props) {
    super(props);
    this.state = {
      joke: 'None',
      firstName: 'Chuck',
      lastName: 'Norris'
    }
    // this.updateFirstName = this.updateFirstName.bind(this)
    // this.updateLastName = this.updateLastName.bind(this)


    // updateFirstName(event) {
    //   this.setState({
    //     firstName: event.target.value
    //   });
    // };
    // updateLastName(event) {
    //   this.setState({
    //     lastName: event.target.value
    //   });
    // };

    getJoke().then(joke => {
      this.setState({
        joke
      });
    });
  }
 
  render() {
    // getJoke();
    return (
      <div className="App">
        <header className="App-header">
          <AppHeader greeting="Be Chuck Norris" />
          <input 
          onChange={ this.updateFirstName } 
          placeholder="First Name"/>
          <input 
          onChange={ this.updateFirstName } 
          placeholder="Last Name"/>
          <button>Be like Chuck</button>
        </header>
        <p>{this.state.joke}</p>
        <p className="App-intro">
          Enter your name above and enter the world of Chuck Norris
        </p>
      </div>
    );
  }
}

export default App;
