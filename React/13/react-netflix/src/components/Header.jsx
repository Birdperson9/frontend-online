import React from 'react';
import PropTypes from 'prop-types';
import Search from './Search';
import NetflixLogo from '../assets/netflix-logo-png-2562-1.png';
import UserIcon from '../assets/Ellipse-2.png';
import HeaderNav from './HeaderNav';

const Header = (props) => {
  return (
    <header>
      <div className='container'>
        <div className='left-side'>
          <div className='logo'>
            <a href='#'>
              <img src={NetflixLogo} alt='Netflix logo' />
            </a>
          </div>
          <h4>{props.date}</h4>
        </div>

        <HeaderNav></HeaderNav>

        {props.isLogin ? (
          <div className='right-side'>
            <Search></Search>
            <div className='user-icon'>
              <img src={UserIcon} alt='User icon' />
            </div>
          </div>
        ) : (
          <div className='right-side'>
            <button className='btn-all-episodes'>Log In</button>
          </div>
        )}
      </div>
    </header>
  );
};

Header.propTypes = {
  isLogin: PropTypes.bool.isRequired,
  date: PropTypes.string,
};
Header.defaultProps = {
  isLogin: false,
  date: 'N/A',
};

export default Header;
