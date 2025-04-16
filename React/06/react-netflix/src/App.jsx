import './App.css';
import Header from './components/Header';
import Genre from './components/Genre';
import Description from './components/Description';
import Rating from './components/Rating';
import Buttons from './components/Buttons';
import Slider from './components/Slider';
import AgeRating from './components/AgeRating';

function App() {
  const formatDate = (d) => {
    const days = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ];
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    const n = d.getDate();
    const s = (n) =>
      n % 10 === 1 && n !== 11
        ? 'st'
        : n % 10 === 2 && n !== 12
        ? 'nd'
        : n % 10 === 3 && n !== 13
        ? 'rd'
        : 'th';
    return `${days[d.getDay()]} ${months[d.getMonth()]} ${n}${s(n)}`;
  };

  let genres = ['Dramma', 'Thriller', 'Supernatural'];

  return (
    <>
      <Header date={formatDate(new Date())} isLogin={true}></Header>
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
        <Rating ratingValue={3}></Rating>
        <Buttons></Buttons>
      </div>
      <Slider></Slider>
      <AgeRating age='16+'></AgeRating>
    </>
  );
}

export default App;
