import React from 'react';
import './Card.css'
//card -> cards?

const Card = ({id, poster, title}) => {
  return (
    <article className='card' id={id} onClick={this.props.selectMovie}>
      <img
        src={poster}
        alt={title}
        className='card-poster'
        // I changed this className so that we could style this image cuz the styling from the home icon in the header was messing with it
        // I think this should be fine but just in case I don't know what I'm talking about (VERY plausible) it used to be the line below:
        // className={id}
      />
      <h2 className='card-title'>{title}</h2>
    </article>
  )
}

export default Card;
