import React, { Component } from 'react';
import Header from '../Header/Header';
import Movies from '../Movies/Movies';
import Card from '../Card/Card';
import Film from '../Film/Film';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
    }
  }

  render() {
    return (
      <>
        <Header />
        <div className="App">
        </div>
      </>
    );
  }
}

export default App;