import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as faSolidStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as faRegularStar } from '@fortawesome/free-regular-svg-icons';

const Rating = ({ ratingValue }) => {
  return (
    <div className='rating'>
      {[...Array(5)].map((_, index) => (
        <FontAwesomeIcon
          key={index}
          icon={index < ratingValue ? faSolidStar : faRegularStar}
          className={index < ratingValue ? 'star star-filled' : 'star star-empty'}
          size='2x'
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
