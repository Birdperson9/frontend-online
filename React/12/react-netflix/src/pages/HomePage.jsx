import React from 'react';
import Genre from '../components/Genre';
import Description from '../components/Description';
import Rating from '../components/Rating';
import Buttons from '../components/Buttons';
import Slider from '../components/Slider';
import AgeRating from '../components/AgeRating';

function HomePage() {
  let genres = ['Drama', 'Thriller', 'Supernatural'];

  return (
    <>
      <div className='container'>
        <Genre genresValue={genres}></Genre>
        <Description
          title='Stranger things'
          year={2019}
          director='Shawn Levy'
          seasons='3 (5 Episodes)'
          description='In 1980s Indiana, a group of young friends witness supernatural forces and
            secret government exploits. As they search for answers, the children unravel a
            series of extraordinary mysteries.'
        ></Description>
        <Rating ratingValue={4}></Rating>
        <Buttons></Buttons>
        <Slider></Slider>
        <AgeRating age='16+'></AgeRating>
      </div>
    </>
  );
}

export default HomePage;
