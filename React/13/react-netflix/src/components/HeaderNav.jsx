import React from 'react';
import { Link } from 'react-router-dom';

function HeaderNav() {
  return (
    <>
      <nav className='header-nav'>
        <Link className='nav-link' to='/'>
          Home
        </Link>
        <Link className='nav-link' to='/price'>
          Price
        </Link>
        <Link className='nav-link' to='/contact'>
          Contact
        </Link>
        <Link className='nav-link' to='/about'>
          About
        </Link>
      </nav>
    </>
  );
}

export default HeaderNav;
