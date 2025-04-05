import './App.css';
import Header from './components/Header';
import Genre from './components/Genre';
import Description from './components/Description';
import Rating from './components/Rating';
import Buttons from './components/Buttons';
import Slider from './components/Slider';
import AgeRating from './components/AgeRating';

function App() {
  return (
    <>
      <Header></Header>
      <div className='container'>
        <Genre></Genre>
        <Description></Description>
        <Rating></Rating>
        <Buttons></Buttons>
      </div>
      <Slider></Slider>
      <AgeRating></AgeRating>
    </>
  );
}

export default App;
