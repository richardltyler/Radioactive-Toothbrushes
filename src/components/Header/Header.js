// import { render } from '@testing-library/react';
import React from 'react';
import homeButton from './home.png';
import './Header.css';

const Header = ({goHome}) => {

  return (
    <header>
      <h1>Radioactive Toothbrushes</h1>
      <img
        className='home-icon'
        src={homeButton}
        alt='home'
        onClick={() => goHome()}
        />
    </header>
  )
}

export default Header;
