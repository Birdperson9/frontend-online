import React from 'react';
import NetflixLogo from '../assets/netflix-logo-png-2562-1.png';
import UserIcon from '../assets/Ellipse-2.png';

function Header() {
  return (
    <header>
      <div className='container'>
        <div className='left-side'>
          <div className='logo'>
            <a href='#'>
              <img src={NetflixLogo} alt='Netflix logo' />
            </a>
          </div>
          <h4>Friday July 8th</h4>
        </div>
        <div className='right-side'>
          <i className='fa-solid fa-magnifying-glass fa-2x'></i>
          <div className='user-icon'>
            <img src={UserIcon} alt='User icon' />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
