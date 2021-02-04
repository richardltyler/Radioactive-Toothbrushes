// import { render } from '@testing-library/react';
import React from 'react';
import homeButton from './home.png';
import './Header.css';

const Header = () => {
  return (
    <header>
      <h1>Radioactive Toothbrushes</h1>
      <img className='home-icon' src={homeButton} alt='home'></img>
    </header>
  )
}

export default Header;
