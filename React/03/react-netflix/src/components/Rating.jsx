import React, { Component } from 'react';

export class Rating extends Component {
  render() {
    return (
      <div className='rating'>
        <i className='fa-solid fa-star fa-2x'></i>
        <i className='fa-solid fa-star fa-2x'></i>
        <i className='fa-solid fa-star fa-2x'></i>
        <i className='fa-regular fa-star fa-2x'></i>
        <i className='fa-regular fa-star fa-2x'></i>
      </div>
    );
  }
}

export default Rating;
