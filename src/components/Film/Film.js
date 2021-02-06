import React, { Component } from 'react';
import './Film.css';

class Film extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${this.props.currentMovie}`)
      .then(response => response.json())
      .then(film => this.setState(film.movie))
  }

  getGenres = () => {
    return <h4>{this.state.genres.join(', ')}</h4>
  }

  formatMoney = money => {
    const name = money.charAt(0).toUpperCase() + money.slice(1);

    return (
      <>
        <h4>{`${name}:`}</h4> 
        <h5>{`${this.getNumberAmount(money)}`}</h5>
      </>
    )
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

  checkForFinancialData = (amount) => {
    if (amount) {
      return this.getNumberAmount(amount);
    } else {
      
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
