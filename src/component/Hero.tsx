import React from 'react'
import Navbar from './Navbar'

const Hero = () => {
  return (
    <div
      id="hero"
      className="min-h-screen bg-no-repeat bg-[url ('/Intro-picture.jpg')] bg-cover"
      style={{
        backgroundImage: "url('/Intro-picture.jpg')",
        backgroundSize: "25%",
        backgroundPosition: "left  100px top  100px"
      }}
    >
    <img src='/Intro-picture.jpg' alt='Intro' className='hidden' />    
      <Navbar />
      <div className="container grid lg:grid-cols-2 h-[calc(100vh-60px)]">
        <div className="hidden lg:block"></div>
        <div className="text-[100px] sm:text-[130px] font-bold leading-tight flex justify-center items-center">
          <div>
            <p data-aos="zoom-out">I'M</p>
            <p data-aos="zoom-out">Tabia</p>
            <p data-aos="zoom-out">Nadir</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
