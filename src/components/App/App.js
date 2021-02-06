import React, { Component } from 'react';
import Header from '../Header/Header';
import Movies from '../Movies/Movies';
import Film from '../Film/Film';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      currentMovie: '',
      isHome: true
    }
  }

  componentDidMount() {
    fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
      .then(response => response.json())
      .then(films => this.setState({movies: films.movies}));
  }

  goHome = () => {
    this.setState({ currentMovie: '', isHome: true})
  }

  selectMovie = (event) => {
    this.setState({ currentMovie: event.target.closest('article').id, isHome: false });
  }

  render() {
    return (
      <>
        <Header goHome={this.goHome}/>
        <div className="App">
          {!this.state.isHome
            ? <Film currentMovie={this.state.currentMovie} />
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
