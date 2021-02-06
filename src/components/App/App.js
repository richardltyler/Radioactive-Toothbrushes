import React, { Component } from 'react';
import Header from '../Header/Header';
import Movies from '../Movies/Movies';
import Film from '../Film/Film';
import movieData from './movie-data';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: movieData.movies,
      currentMovie: {},
      isHome: true
    }
  }

  goHome = () => {
    this.setState({ currentMovie: {}, isHome: true})
  }

  selectMovie = () => {
    this.setState({ currentMovie: {}, isHome: false });
  }

  render() {
    return (
      <>
        <Header goHome={this.goHome}/>
        <div className="App">
          {!this.state.isHome
            ? <Film />
            : <Movies
                movies={this.state.movies}
                selectMovie={this.selectMovie}
              />
          }
        </div>
      </>
    );
  }
}

export default App;
