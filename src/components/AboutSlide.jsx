import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const AboutSlide = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    // slidesToShow: 1,
    // slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // Slide every 3 seconds
    arrows: false,      
  };

  return (
    <div className='w-full text-black text-2xl'>
    <Slider {...settings}>
      <div>
       <h2>A Full Stack Web Developer</h2>
      </div>
      <div>
       <h2>Freelance Web Developer & Designer</h2>
      </div>
    </Slider>
    </div>
  );
};

export default AboutSlide;

