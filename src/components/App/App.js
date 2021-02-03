import React, { Component } from 'react';
import './App.css';
import './scss';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
        </header>
      </div>
    );
  }
}

export default App;
