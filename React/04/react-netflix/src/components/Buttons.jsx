import React from 'react';

const Buttons = () => {
  return (
    <div className='btn-user'>
      <button className='btn-play'>
        <span>STREAM NOW</span>{' '}
        <span>
          <i className='fa-solid fa-circle-play'></i>
        </span>
      </button>
      <button className='btn-all-episodes'>ALL EPISODES</button>
    </div>
  );
};

export default Buttons;
