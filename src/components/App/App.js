import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import Header from '../Header/Header';
import Error from '../Error/Error';
import Movies from '../Movies/Movies';
import Film from '../Film/Film';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      currentMovie: '',
      isHome: true,
      isLoading: true,
      error: false
    }
  }

  componentDidMount() {
    fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies/')
      .then(response => response.json())
      .then(films => this.checkForError(films))
      .catch(error => this.setState({isLoading:false, error: true}))
  }

  checkForError = films => {
    if(films.error) {
      this.setState({error: true, isLoading: false})
    } else {
      this.setState({movies: films.movies, isLoading: false})
    }
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
          {this.state.isLoading && <h2 className='message'>Please wait...</h2>}
          //add path for error
          {this.state.error && <Error />}
          //display home = movies component
          <Route
            path='/'
            render={() =>
              <Movies
                movies={this.state.movies}
                selectMovie={this.selectMovie}
              />
            }
          />

        </div>
      </>
    );
  }
}

export default App;

//movies is home path
// path='/'

// {!this.state.isHome
  //   ? <Film currentMovie={this.state.currentMovie} />
  //   : <Movies
  //       movies={this.state.movies}
  //       selectMovie={this.selectMovie}
  //     />
  // }
