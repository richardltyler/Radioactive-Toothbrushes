import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Header from '../Header/Header';
import Error from '../Error/Error';
import Movies from '../Movies/Movies';
import Film from '../Film/Film';
import apiCalls from '../../api-calls.js';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      isLoading: true,
      error: false
    }
  }

   componentDidMount() {
    apiCalls.getAllMovies()
      .then(response => {
        if (response.ok) {
          return response.json();

        } else {
          this.setState({error: true, isLoading: false});
        }
      })
      .then(films => this.setState({movies: films.movies, isLoading: false}))
      .catch(() => this.setState({isLoading: false, error: true}))
  }
  

  render() {
    return (
      <>
        <Header />
        <div className="App">
          {this.state.isLoading && <h2 className='message'>Please wait...</h2>}
          {this.state.error && <Error />}
          {/* ok so I couldn't figure out how to get error to be routed without it breaking everything
          so I went ahead and just left it conditional
          
          I've also changed the Film path back to just the id
          
          I think for MVP we just don't route Error 
          */}
          {!this.state.error && 
            <Route
              exact
              path='/'
              render={() =>
                <Movies
                  movies={this.state.movies}
                />}
            />
          }

          {!this.state.error && 
            <Route
              exact
              path='/:id'
              render={( { match } ) => {
                const myMovieID = match.params.id;
                return <Film id={myMovieID}/>
              } }
            />
          }
        </div>
      </>
    );
  }
}

export default App;
