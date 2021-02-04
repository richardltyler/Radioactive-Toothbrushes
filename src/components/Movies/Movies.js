import React from 'react';
import './Movies.css'
import Card from '../Card/Card'

const Movies = ({movies}) => {

  const movieCards = movies.map(movie => {
    return (
      <Card
        key={movie.id}
        id={movie.id}
        poster={movie.poster_path}
        title={movie.title}
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
