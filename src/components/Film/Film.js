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

  formatMoney = (money) => {
    const amount = this.state[money];
    const splitAmount = amount.toString().split('').reverse();
    const commas = splitAmount.map((number, i) => {
      if (i % 3 === 0 && i !== 0) {
        return number + ',';
      } else {
        return number;
      }
    });
    const formattedAmount = commas.reverse().join('');

    const name = money.charAt(0).toUpperCase() + money.slice(1);

    return <h4>{`${name}: $${formattedAmount}`}</h4>
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
            <h4>{this.state.genres[0].name}</h4>
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
            {/* <h4>{`Budget: ${this.state.budget}`}</h4>
            <h4>{`Revenue: ${this.state.revenue}`}</h4> */}
            {this.formatMoney('budget')}
            {this.formatMoney('revenue')}
            {/* <h4>{this.getProfit}</h4> */}
          </div>
        </section>
        </article>
    )
  }
} 

export default Film;