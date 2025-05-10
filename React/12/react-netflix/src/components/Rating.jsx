import React from 'react';
import PropTypes from 'prop-types';

const Rating = (props) => {
  return (
    <div className='rating'>
      {[...Array(5)].map((_, index) => (
        <i
          key={index}
          className={`fa-star fa-2x ${
            index < props.ratingValue ? 'fa-solid star-filled' : 'fa-regular star-empty'
          }`}
        />
      ))}
    </div>
  );
};

Rating.propTypes = {
  ratingValue: PropTypes.number,
};

Rating.defaultProps = {
  ratingValue: 0,
};

export default Rating;
