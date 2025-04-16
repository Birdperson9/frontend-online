import React from 'react';
import PropTypes from 'prop-types';

const AgeRating = (props) => {
  return (
    <div className='age-rating'>
      <h4>{props.age}</h4>
    </div>
  );
};

AgeRating.propTypes = {
  age: PropTypes.string,
};

AgeRating.defaultProps = {
  age: 'N/A',
};

export default AgeRating;
