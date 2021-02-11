import React from 'react';
import PropTypes from 'prop-types';
import './Movies.css';
import Card from '../Cards/Cards';

const Movies = ({ movies }) => {

  const movieCards = movies.map(movie => {
    return (
      <Card
        key={movie.id}
        id={movie.id}
        poster={movie.poster_path}
        title={movie.title}
      />
    );
  });

  return (
    <section className='movies-container'>
      {movieCards}
    </section>
  );
}

export default Movies;

Movies.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};
