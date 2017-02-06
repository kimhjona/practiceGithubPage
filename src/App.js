import React, { Component } from 'react';
import logo from './logo.svg';
import Grid from './Grid.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Sample GitHub Contribution Page</h2>
        </div>
        <p className="App-intro">
        </p>
        <p>
          <div className="fullBox">
            <Grid />
            {/*<a href="https://help.github.com/articles/why-are-my-contributions-not-showing-up-on-my-profile/">
              Learn how we count contributions
            </a>*/}
          </div>
        </p>
      </div>
    );
  }
}

export default App;
