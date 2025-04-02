import React, { Component } from 'react';

export class Rating extends Component {
  render() {
    return (
      <div class='rating'>
        <i class='fa-solid fa-star fa-2x'></i>
        <i class='fa-solid fa-star fa-2x'></i>
        <i class='fa-solid fa-star fa-2x'></i>
        <i class='fa-regular fa-star fa-2x'></i>
        <i class='fa-regular fa-star fa-2x'></i>
      </div>
    );
  }
}

export default Rating;
