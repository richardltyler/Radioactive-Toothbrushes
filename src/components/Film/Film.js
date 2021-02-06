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
      budget:6300000,
      revenue:1008537530,
      runtime:139,
      tagline: "It's a movie!"
    }
  }

  getGenres = () => {
    const genres = this.state.genres.map(genre => genre.name);

    return <h4>{genres.join(', ')}</h4>
  }

  formatMoney = money => {
    const name = money.charAt(0).toUpperCase() + money.slice(1);

    return <h4>{`${name}:`}<br></br>{`${this.getNumberAmount(money)}`}</h4>
  }

  getNumberAmount = amount => {
    const number = this.state[amount];
    const numLength = parseInt(number).toString().length;
  
    if(numLength > 3 && numLength < 7) {
      const newNum = parseFloat((number/1000).toFixed(1));
      return `$${newNum}k`;
  
    } else if (numLength > 6 && numLength < 10) {
      const newNum = parseFloat((number/1000000).toFixed(1));
      return `$${newNum}mil`;
  
    } else if (numLength > 9) {
      const newNum = parseFloat((number/1000000000).toFixed(1));
      return `$${newNum}bil`;
  
    } else {
      return `$${parseInt(number)}`
    }
  }

  formatDate = () => {
    const newDate = new Date(this.state.release_date).toDateString();
    const dateWithoutDay = newDate.split(' ').slice(1);

    return <h4>{dateWithoutDay.join(' ')}</h4>
  }

  render() {
    return (
      <article className='single-film'>
        <section className='film-details'>
          <div className='film-title-container'>
            <h2 className='title'>{this.state.title}</h2>
            <h3 className='rating'>{`${this.state.average_rating}/10`}</h3>
          </div>
          <h3>{this.state.tagline}</h3>
          <div className='info-container'>
            <h4>{`${this.state.runtime} min`}</h4>
            {this.state.genres && this.getGenres()}
            {this.formatDate()}
          </div>
        </section>
        <img src={this.state.poster_path} alt={this.state.title} />
        <section className='overview'>
          <article className='summary' aria-label='summary'>
            <h3>Summary:</h3>
            <p>{this.state.overview}</p>
          </article>
          <div className='money-container'>
            {this.state.budget > 0 && this.formatMoney('budget')}
            {this.state.revenue > 0 && this.formatMoney('revenue')}
          </div>
        </section>
        </article>
    )
  }
}

export default Film;
