import React, { Component } from 'react';
import './Film.css';

class Film extends Component {
  constructor() {
    super();
    this.state = {
      currentMovie: {},
      isLoading: true,
      error: false
    };
  }

  componentDidMount() {
    fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${this.props.currentMovie}`)
      .then(response => response.json())
      .then(film => this.setState({currentMovie: film.movie, isLoading: false}))
  }

  getGenres = () => {
    return <h4 className='genre-display'>{this.state.currentMovie.genres.join(', ')}</h4>
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
    const number = this.state.currentMovie[amount];
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
    const newDate = new Date(this.state.currentMovie.release_date).toDateString();
    const dateWithoutDay = newDate.split(' ').slice(1);

    return <h4>{dateWithoutDay.join(' ')}</h4>
  }

  formatRating = () => {
    const rating = this.state.currentMovie.average_rating;
    const formattedRating = parseFloat(rating.toFixed(1));

    return <h3 className='rating'>{`${formattedRating}/10`}</h3>;
  }

  render() {
    return (
      <>
      {this.state.isLoading && <h2>Looking for your movie...</h2>}

      {!this.state.isLoading &&
        <article className='single-film'>
          <section className='film-details'>
            <div className='film-title-container'>
              <h2 className='title'>{this.state.currentMovie.title}</h2>
              {this.state.currentMovie.average_rating && this.formatRating()}
            </div>
            <h3>{this.state.currentMovie.tagline}</h3>
            <div className='info-container'>
              <h4>{`${this.state.currentMovie.runtime} min`}</h4>
              {this.state.currentMovie.genres && this.getGenres()}
              {this.formatDate()}
            </div>
          </section>
          <img src={this.state.currentMovie.poster_path} alt={this.state.currentMovie.title} />
          <section className='overview'>
            <article className='summary' aria-label='summary'>
              <h3>Summary:</h3>
              <p>{this.state.currentMovie.overview}</p>
            </article>
            <div className='money-container'>
              {this.state.currentMovie.budget > 0 && this.formatMoney('budget')}
              {this.state.currentMovie.revenue > 0 && this.formatMoney('revenue')}
            </div>
          </section>
        </article>
      }
      </>
    )
  }
}

export default Film;
