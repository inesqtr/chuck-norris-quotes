import React, { Component } from 'react';
import './App.css';
import GenerateJoke from './Components/GenerateJoke';
import DisplayJoke from './Components/DisplayJoke';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      joke: {
        value: '',
      }
    };
  }

  getJoke() {
    fetch("https://api.chucknorris.io/jokes/random")
      .then(response => response.json())
      .then(data => {
        this.setState({
          joke: data,
        });
      });
  }

  render() {
    return (
      <div className="App">
        <GenerateJoke selectJoke={() => this.getJoke()} />
        <DisplayJoke joke={this.state.joke} />
      </div>
    );
  }
}

export default App;
