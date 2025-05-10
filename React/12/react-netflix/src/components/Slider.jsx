import React from 'react';
import Movie1 from '../assets/poster-1.png';
import Movie2 from '../assets/poster-2.png';
import Movie3 from '../assets/poster-3.png';
import Movie4 from '../assets/poster-4.png';
import Movie5 from '../assets/poster-5.png';

const Slider = () => {
  return (
    <section className='popular'>
      <div className='popular-scroll'>
        <h4>POPULAR THIS WEEK</h4>
        <div className='scroll-buttons'>
          <button className='btn-backward'>
            <i className='fa-solid fa-chevron-left fa-2x'></i>
          </button>
          <button className='btn-forward'>
            <i className='fa-solid fa-chevron-right fa-2x'></i>
          </button>
        </div>
      </div>

      <div className='poster'>
        <img src={Movie1} alt='movie 1' />
        <img src={Movie2} alt='movie 2' />
        <img src={Movie3} alt='movie 3' />
        <img src={Movie4} alt='movie 4' />
        <img src={Movie5} alt='movie 5' />
      </div>
    </section>
  );
};

export default Slider;
