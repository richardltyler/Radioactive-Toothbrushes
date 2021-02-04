import React, { Component } from 'react';
import './Film.css';

class Film extends Component {
  constructor() {
    super();
    this.state = {
      id: 1, 
      title: "Fake Movie Title", 
      poster_path: "https://image.tmdb.org/t/p/original//7G2VvG1lU8q758uOqU6z2Ds0qpA.jpg", 
      backdrop_path: "https://image.tmdb.org/t/p/original//oazPqs1z78LcIOFslbKtJLGlueo.jpg", 
      release_date: "2019-12-04", 
      overview: "Some overview that is full of buzzwords to attempt to entice you to watch this movie! Explosions! Drama! True love! Robots! A cute dog!", 
      average_rating: 6, 
      genres: [{id: 18, name:"Drama"}], 
      budget:63000000, 
      revenue:100853753, 
      runtime:139, 
      tagline: "It's a movie!" 
    }
  }

  // formatRuntime() {}

  render() {
    return (
      <article className='single-film'>
        <img src={this.state.poster_path} alt={this.state.title} />
        <article className='film-details'>
          <h2 className='film-title'>{this.state.title} {`${this.state.average_rating}`}</h2>
          <h3>{this.state.tagline}</h3>
          <div>
            <h4>{this.state.runtime}</h4>
            <h4>{this.state.release_date}</h4>
            <h4>{this.state.genres[0].name}</h4>
          </div>
          <article className='summary' aria-label='summary'>
            <h3>Summary:</h3>
            <p>{this.state.overview}</p>
          </article>
          <div>
            <h4>{this.state.budget}</h4>
            <h4>{this.state.revenue}</h4>
          </div>
        </article>
      </article>
    )
  }
} 

export default Film;