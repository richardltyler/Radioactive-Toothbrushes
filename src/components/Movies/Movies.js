import React from 'react';
import './Movies.css'
import Card from '../Card/Card'

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
