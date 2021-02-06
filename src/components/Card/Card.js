import React from 'react';
import './Card.css'
//card -> cards?

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
