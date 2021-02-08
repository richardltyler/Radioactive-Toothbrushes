import React from 'react';
import PropTypes from 'prop-types';
import './Cards.css'

const Card = ({id, poster, title, selectMovie}) => {
  return (
    <article className='card' id={id} onClick={selectMovie}>
      <img
        src={poster}
        alt={title}
        className='card-poster'
      />
      <h2 className='card-title'>{title}</h2>
    </article>
  )
}

export default Card;

Card.propTypes = {
  id: PropTypes.number.isRequired,
  poster: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  selectMovie: PropTypes.func.isRequired
}
