import React, { useRef } from 'react';
import Movie1 from '../assets/poster-1.png';
import Movie2 from '../assets/poster-2.png';
import Movie3 from '../assets/poster-3.png';
import Movie4 from '../assets/poster-4.png';
import Movie5 from '../assets/poster-5.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Slider = () => {
  const swiperRef = useRef();

  return (
    <section className='popular'>
      <div className='popular-scroll'>
        <h4>POPULAR THIS WEEK</h4>
        <div className='scroll-buttons'>
          <button className='btn-backward' onClick={() => swiperRef.current.slidePrev()}>
            <FontAwesomeIcon icon={faChevronLeft} className='fa-2x backward-icon' />
          </button>
          <button className='btn-forward' onClick={() => swiperRef.current.slideNext()}>
            <FontAwesomeIcon icon={faChevronRight} className='fa-2x forward-icon' />
          </button>
        </div>
      </div>

      <div className='poster'>
        <Swiper
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          slidesPerView={5}
          spaceBetween={50}
        >
          <SwiperSlide>
            <img src={Movie1} alt='movie 1' />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Movie2} alt='movie 2' />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Movie3} alt='movie 3' />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Movie4} alt='movie 4' />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Movie5} alt='movie 5' />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Movie1} alt='movie 5' />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Movie2} alt='movie 5' />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Movie3} alt='movie 5' />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Movie4} alt='movie 5' />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Movie5} alt='movie 5' />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Slider;
