import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Reviews = () => {
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
    <div className="bg-base-100 py-10">
      <div className='w-4/5 mx-auto flex flex-col items-center justify-center'>
        <div className='text-center'>
          <h1 className='text-black text-3xl uppercase'>testimonials</h1>
        </div>
        <div className='w-4/5 mt-5'>
          <div className='w-full text-black text-2xl'>
            <Slider {...settings}>
              <div className='flex flex-row justify-center items-center'>
                <div className='flex justify-center items-center'>
                  <img src="sumon-1.png" alt="" className='w-14 rounded-full' />
                </div>
                <div className='flex justify-center items-center'>
                  <p className='text-sm my-3'>What sets <strong>sumon</strong> apart is their attention to detail and proactive problem-solving skills. Any challenges that arose were met with efficient and innovative solutions. Communication was always clear, and we felt involved and informed throughout the entire development process. The final product was delivered on time and worked flawlessly, with smooth user experiences and secure, scalable architecture.</p>
                </div>
              </div>

              <div className='flex flex-row justify-center items-center'>
                <div className='flex justify-center items-center'>
                  <img src="sumon.png" alt="" className='w-14 rounded-full' />
                </div>
                <div className='flex justify-center items-center'>
                  <p className='text-sm my-3'>Working with <strong>sumon</strong> has been an absolute game-changer for our project. We needed a full-stack developer who could take our vision and make it a reality, and sumonexceeded our expectations at every step. From day one, their professionalism and expertise were evident. They seamlessly managed both the front-end and back-end development, ensuring that our application was not only visually appealing but also robust and high-performing.</p>
                </div>
              </div>

            </Slider>
          </div>
        </div>

      </div>

    </div>
  );
};

export default Reviews;

