import React, { Component } from 'react';

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

export default Description;
