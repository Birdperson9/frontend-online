import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import PricePage from './pages/PricePage';
import HomePage from './pages/HomePage';

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

  return (
    <>
      <Router>
        <Header date={formatDate(new Date())} isLogin={true}></Header>
        <Routes>
          <Route path='/' element={<HomePage></HomePage>}></Route>
          <Route path='/price' element={<PricePage></PricePage>}></Route>
          <Route path='/contact' element={<ContactPage></ContactPage>}></Route>
          <Route path='/about' element={<AboutPage></AboutPage>}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
