import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';

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
          <FontAwesomeIcon icon={faCirclePlay} />
        </span>
      </button>
      <button onClick={episodesClick} className='btn-all-episodes'>
        ALL EPISODES
      </button>
    </div>
  );
};

export default Buttons;
