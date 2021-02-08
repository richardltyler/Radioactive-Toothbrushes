import React from 'react';
import PropTypes from 'prop-types';
import './Movies.css'
import Card from '../Cards/Cards'

const Movies = ({movies, selectMovie}) => {

  const movieCards = movies.map(movie => {
    return (
      <Card
        key={movie.id}
        id={movie.id}
        poster={movie.poster_path}
        title={movie.title}
        selectMovie={selectMovie}
      />
    )
  })

  return (
    <section className='movies-container'>
      {movieCards}
    </section>
  )
}

export default Movies;

//we first call upon the component and the props being passed into it.
Movies.propTypes = {
  //then we access the prop/name we're passing in and assign that as the key with the value being an argument/check that the prop is the data type we're expecting or want
  movies: PropTypes.arrayOf(PropTypes.object),
  //if the data type isn't what we expect or want, an error will be thrown that tells us ie: "we expected a string, but got a number"
  //to test this, please change the value of movies to PropTypes.arrayOf(PropTypes.string) rather than object
  selectMovie: PropTypes.func
}
