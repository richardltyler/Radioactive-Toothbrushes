import React from 'react';
import { NavLink } from 'react-router-dom';
import homeButton from './home.png';
import './Header.css';

const Header = () => {
  return (
    <header>
      <h1>Radioactive Toothbrushes</h1>
      <NavLink to='/'>
        <img
          className='home-icon'
          src={homeButton}
          alt='home'
          />
      </NavLink>
    </header>
  );
};

export default Header;
