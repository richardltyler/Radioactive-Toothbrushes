import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import './Cards.css';

const Card = ({id, poster, title}) => {
  return (
    <NavLink className='nav' to={`/film/${id}`}>
      <article className='card' id={title}>
        <img
          src={poster}
          alt={title}
          className='card-poster'
        />
        <h2 className='card-title'>{title}</h2>
      </article>
    </NavLink>
  );
};

export default Card;

Card.propTypes = {
  id: PropTypes.number.isRequired,
  poster: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
