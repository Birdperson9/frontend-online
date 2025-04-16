import React from 'react';
import PropTypes from 'prop-types';

const Genre = (props) => {
  let genresEl = props.genresValue.map((item, index) => {
    return <h4 key={index}>{item}</h4>;
  });

  return <div className='genre'>{genresEl}</div>;
};

Genre.propTypes = {
  genresValue: PropTypes.array,
};
Genre.defaultProps = {
  genresValue: [],
};

export default Genre;
