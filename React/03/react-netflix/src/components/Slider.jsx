import React, { Component } from 'react';
import PosterFirst from '../assets/poster-1.png';
import PosterSecond from '../assets/poster-2.png';
import PosterThird from '../assets/poster-3.png';
import PosterFourth from '../assets/poster-4.png';
import PosterFifth from '../assets/poster-5.png';

export class Slider extends Component {
  render() {
    return (
      <section className='popular'>
        <div className='container'>
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
            <img src={PosterFirst} alt='poster 1' />
            <img src={PosterSecond} alt='poster 2' />
            <img src={PosterThird} alt='poster 3' />
            <img src={PosterFourth} alt='poster 4' />
            <img src={PosterFifth} alt='poster 5' />
          </div>
        </div>
      </section>
    );
  }
}

export default Slider;
