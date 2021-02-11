import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
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
      .then(response => this.isResponseOk(response))
      .then(films => this.setState({movies: films.movies, isLoading: false}))
      .catch(() => this.setState({isLoading: false, error: true}))
  }

  isResponseOk = (response) => {
    if (response.ok) {
      return response.json();
    } else {
      this.setState({error: true, isLoading: false});
    }
  }

  render() {
    return (
      <>
        <Header />
        <div className="App">
          {this.state.isLoading && <h2 className='message'>Please wait...</h2>}

          <Route
            exact
            path='/'
            render={() => {
                if(!this.state.error){
                  return <Movies movies={this.state.movies} />
                } else {
                  return <Redirect to='/error' />
                }
              }
            }
          />

          <Route
            exact
            path='/film/:id'
            render={( { match } ) => {
              const myMovieID = match.params.id;
              return <Film id={myMovieID}/>
            } }
          />

          <Route
            exact
            path='/error'
            render={() => <Error />}
          />
        </div>
      </>
    );
  }
}

export default App;
