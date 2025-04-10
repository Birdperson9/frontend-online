import React from 'react';
import PropTypes from 'prop-types';

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

Rating.propTypes = {
  ratingValue: PropTypes.number,
};
Rating.defaultProps = {
  ratingValue: 1,
};

export default Rating;
