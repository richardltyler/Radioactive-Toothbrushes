import React from 'react';
import './Card.css'
//card -> cards?

const Card = ({id, poster, title}) => {
  return (
    <article className='card'>
      <img
        src={poster}
        alt={title}
        className={id}
      />
      <h3>{title}</h3>
    </article>
  )
}

export default Card;
