import React, { Component } from 'react';

export class Buttons extends Component {
  render() {
    return (
      <div class='btn-user'>
        <button class='btn-play'>
          <span>STREAM NOW</span>{' '}
          <span>
            <i class='fa-solid fa-circle-play'></i>
          </span>
        </button>
        <button class='btn-all-episodes'>ALL EPISODES</button>
      </div>
    );
  }
}

export default Buttons;
