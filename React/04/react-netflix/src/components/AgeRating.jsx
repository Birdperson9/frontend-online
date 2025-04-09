import React, { Component } from 'react';

const AgeRating = (props) => {
  return (
    <div className='age-rating'>
      <h4>{props.age}</h4>
    </div>
  );
};

export default AgeRating;
