import React from 'react';

function Header() {
  return (
    <div class='container'>
      <div class='left-side'>
        <div class='logo'>
          <a href='#'>
            <img src='./assets/netflix-logo-png-2562-1.png' alt='Netflix logo' />
          </a>
        </div>
        <h4>Friday July 8th</h4>
      </div>
      <div class='right-side'>
        <i class='fa-solid fa-magnifying-glass fa-2x'></i>
        <div class='user-icon'>
          <img src='./assets/Ellipse-2.png' alt='User icon' />
        </div>
      </div>
    </div>
  );
}

export default Header;
