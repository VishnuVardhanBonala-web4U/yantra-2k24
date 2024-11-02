import React, { useState, useRef } from 'react';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import BirthdayLottie from '../Lottie/BirthdayLottie';
import backgroundVideo from "../../assets/bg-video.mp4";

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showLottie, setShowLottie] = useState(false);
  const lottieRef = useRef(null);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const handleViewMoreClick = () => {
    setShowLottie(true);
    setTimeout(() => {
      setShowLottie(false);
    }, 2000);
  };

  return (
    <>
      <div className="relative bg-slate-100 z-100 object-cover">

        <div className="relative bg-slate-800 w-full h-screen overflow-hidden">
          <video
            className="absolute top-0 left-0 h-full w-full object-cover opacity-50 md:scale-100 scale-50 "
            src={backgroundVideo}
            autoPlay
            muted
            loop
            playsInline
          />

          {/* Overlaying Content */}
          <Navbar toggle={toggle} />
          <Sidebar isOpen={isOpen} toggle={toggle} />

          <div className="relative z-10 flex flex-col justify-center items-center w-full h-full px-4 sm:px-6 md:px-10 text-center">
            <div className="bg-transparent w-full">

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 text-light">
                <div className="mb-3  animate-bounce transition-all">
                  Man Made By Mechanism.
                </div>
                <div className="mb-3  animate-bounce transition-all">
                  World ruled by Mechanicals
                </div>
              </h1>
            </div>
          </div>

          {/* Conditional rendering of the Lottie animation */}
          {showLottie && (
            <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-75 z-50">
              <BirthdayLottie />
            </div>
          )}

          {/* Scroll target section */}
          <div ref={lottieRef} className="relative z-10 mt-40 pt-20 bg-gray-200 w-full">
            {/* Add content for the section here */}
          </div>

          {/* Adding the new headings at the bottom */}
          <div className="flex justify-around w-full py-6 bg-gray-800 text-white">
            <h2 className="text-lg md:text-2xl lg:text-3xl">LEDF AD</h2>
            <h2 className="text-lg md:text-2xl lg:text-3xl">Hi Right Ads Hello</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
