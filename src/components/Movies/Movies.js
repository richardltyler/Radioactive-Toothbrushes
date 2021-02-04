import React from 'react';
import './Movies.css'

const Movies = ({movies}) => {
//props passed in

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
    <div className='movies-container'>
      {movieCards}
    </div>
  )
}

export default Movies;
