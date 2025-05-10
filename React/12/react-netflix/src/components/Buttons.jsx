import React from 'react';

const Buttons = () => {
  let streamNowClick = (e) => {
    e.preventDefault();
    alert('Stream now btn clicked!');
  };
  let episodesClick = (e) => {
    e.preventDefault();
    alert('All episodes btn clicked!');
  };

  return (
    <div className='btn-user'>
      <button onClick={streamNowClick} className='btn-play'>
        <span>STREAM NOW</span>{' '}
        <span>
          <i className='fa-solid fa-circle-play'></i>
        </span>
      </button>
      <button onClick={episodesClick} className='btn-all-episodes'>
        ALL EPISODES
      </button>
    </div>
  );
};

export default Buttons;
