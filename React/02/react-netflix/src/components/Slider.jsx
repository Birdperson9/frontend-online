import React, { Component } from 'react';

export class Slider extends Component {
  render() {
    return (
      <div class='popular'>
        <div class='container'>
          <div class='popular-scroll'>
            <h4>POPULAR THIS WEEK</h4>
            <div class='scroll-buttons'>
              <button class='btn-backward'>
                <i class='fa-solid fa-chevron-left fa-2x'></i>
              </button>
              <button class='btn-forward'>
                <i class='fa-solid fa-chevron-right fa-2x'></i>
              </button>
            </div>
          </div>

          <div class='poster'>
            <img src='./assets/poster-1.png' alt='poster 1' />
            <img src='./assets/poster-2.png' alt='poster 2' />
            <img src='./assets/poster-3.png' alt='poster 3' />
            <img src='./assets/poster-4.png' alt='poster 4' />
            <img src='./assets/poster-5.png' alt='poster 5' />
          </div>
        </div>
      </div>
    );
  }
}

export default Slider;
