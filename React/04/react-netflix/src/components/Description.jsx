import React from 'react';
import PropTypes from 'prop-types';

const Description = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <div className='info'>
        <h4>{props.year}</h4>
        <h4>
          DIRECTOR: <span>{props.director}</span>
        </h4>
        <h4>
          seasons: <span>{props.seasons}</span>
        </h4>
      </div>
      <div className='text-desc'>
        <p>{props.description}</p>
      </div>
    </div>
  );
};

Description.propTypes = {
  title: PropTypes.string,
  year: PropTypes.number,
  director: PropTypes.string,
  seasons: PropTypes.string,
  description: PropTypes.string,
};
Description.defaultProps = {
  title: 'N/A',
  year: 0,
  director: 'N/A',
  seasons: 'N/A',
  description: 'N/A',
};

export default Description;
