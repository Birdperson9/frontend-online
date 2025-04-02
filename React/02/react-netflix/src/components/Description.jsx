import React, { Component } from 'react';

export class Description extends Component {
  render() {
    return (
      <div>
        <h1>Stranger Things</h1>
        <div class='info'>
          <h4>2019</h4>
          <h4>
            DIRECTOR: <span>Shawn Levy</span>
          </h4>
          <h4>
            seasons: <span>3 (5 Episodes)</span>
          </h4>
        </div>
        <div class='text-desc'>
          <p>
            In 1980s Indiana, a group of young friends witness supernatural forces and
            secret government exploits. As they search for answers, the children unravel a
            series of extraordinary mysteries.
          </p>
        </div>
      </div>
    );
  }
}

export default Description;
