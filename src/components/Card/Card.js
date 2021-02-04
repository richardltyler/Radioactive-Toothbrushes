import React from 'react';
import './Card.css'
//card -> cards?

const Card = ({id, poster, title}) => {
  return (
    <article className='card'>
      <img
        src={poster}
        alt={title}
        id={id}
        className='card-poster'
      />
      <h2 className='card-title'>{title}</h2>
    </article>
  )
}

export default Card;
