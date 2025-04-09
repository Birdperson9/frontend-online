import React, { Component } from 'react';

const Rating = (props) => {
  if (props.ratingValue === 3) {
    return (
      <div className='rating'>
        <i className='fa-solid fa-star fa-2x'></i>
        <i className='fa-solid fa-star fa-2x'></i>
        <i className='fa-solid fa-star fa-2x'></i>
        <i className='fa-regular fa-star fa-2x'></i>
        <i className='fa-regular fa-star fa-2x'></i>
      </div>
    );
  } else {
    return (
      <div className='rating'>
        <i className='fa-solid fa-star fa-2x'></i>
        <i className='fa-solid fa-star fa-2x'></i>
        <i className='fa-solid fa-star fa-2x'></i>
        <i className='fa-solid fa-star fa-2x'></i>
        <i className='fa-solid fa-star fa-2x'></i>
      </div>
    );
  }
};

export default Rating;
