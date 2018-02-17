import React, { Component } from 'react';
import './App.css';
import * as axios from 'axios';

function getJokes(firstName, lastName) {
  return axios.get(`http://localhost:8686/jokes`, {
    params: {
      firstName,
      lastName
    }
  }).then((response) => {
    return response.data.value.joke;
  });
}

function AppHeader(props) {
  return <h1 className="App-title">{props.greeting}</h1>
}

class App extends Component { 
  constructor(props) {
    super(props);
    this.state = {
      joke: '',
      firstName: 'Chuck',
      lastName: 'Norris'
    }
    this.updateFirstName = this.updateFirstName.bind(this)
    this.updateLastName = this.updateLastName.bind(this)
  }

  updateFirstName(event) {
    console.log(event.target.value)
    this.setState({
      firstName: event.target.value
    })
  }
  updateLastName(event) {
    this.setState({
      lastName: event.target.value
    })
  }

  componentDidMount () {
    this.getJoke()
    // this.getFavorites()
  }
  getFavorites = () => {
    axios.get('http://localhost:8686/favorites').then(response=> {
      this.setState({ favorites: response.data })
    }).catch(error => console.log('this is error', error))
  }

  getJoke = () => {
    console.log(this.state.firstName, this.state.lastName);
    getJokes(this.state.firstName, this.state.lastName).then(joke => {
      this.setState({
        joke
      });
    });
  }
 
  render() {
    
    return (
      <div className="App">
        <header className="App-header">
          <AppHeader greeting="Be Chuck Norris" />
          <input 
          onChange={ this.updateFirstName } 
          placeholder="First Name"/>
          <input 
          onChange={ this.updateLastName } 
          placeholder="Last Name"/>
          <button onClick={this.getJoke}>Be like Chuck</button>
        </header>
        <h3 className="Joke">{this.state.joke}</h3>
        <p className="App-intro">
          Enter your name above and enter the world of Chuck Norris
        </p>


        <div style={{marginTop: 100}} >Display Favorites</div>
        {this.state.favorites}
      </div>
    );
  }
}

export default App;
