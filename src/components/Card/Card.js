import React from 'react';
import './Card.css'
//card -> cards?

const Card = ({id, poster, title}) => {
  return (
    <article className='card' id={id}>
    //I had to remove the onClick bc when is was even commented out, react/webpack "Read" that is was still there. 
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
