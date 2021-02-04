import React, { Component } from 'react';
import Header from '../Header/Header';
import Movies from '../Movies/Movies';
// import Film from '../Film/Film';
import movieData from './movie-data';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: movieData.movies
    }
  }

  render() {
    return (
      <>
        <Header />
        <div className="App">
          <Movies
            movies={this.state.movies}
          />
        </div>
      </>
    );
  }
}

export default App;
