import { render } from '@testing-library/react';
import React from 'react';
import homeButton from './home.png';
import './Header.css';

const Header = () => {
  return (
    <header>
      <img className='home-icon' src={homeButton} alt='home'></img>
      <h1>Rancid Tarantulas</h1>
    </header>
  )
}

export default Header;
