import React, { useState } from 'react';
import { ImagesJson } from '../data/ImagesJson';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Sliderimages = () => {
  const [currentIndex, setCurrentIndex] = useState(0); // State to track the active slide

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? ImagesJson.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === ImagesJson.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative bg-[#191f29] w-full py-8 px-4 lg:px-16" id="memories">
      <h1 className="text-center text-2xl text-light md:text-3xl lg:text-4xl font-bold mb-8">
        Recollecting Memories
      </h1>

      {/* Active Image */}
      <div className="flex justify-center mb-8">
        <div className="card bg-white shadow-md p-4 max-w-md sm:max-w-sm md:max-w-sm lg:max-w-sm w-30">
          <Link to={ImagesJson[currentIndex].route} smooth={true} duration={500} className="block text-center">
            <img
              src={ImagesJson[currentIndex].src}
              alt={ImagesJson[currentIndex].title}
              className="rounded-lg w-full object-cover transition-transform duration-500 transform hover:scale-105 hover:shadow-lg"
            />
          </Link>



        </div>
      </div>

      {/* Thumbnail navigation */}
      <p className="text-center text-sm text-light p-2">Scroll for More</p>

      <div className="flex justify-center container col-md-10 scroll-smooth transition-all space-x-2 mb-6 overflow-scroll pre-scrollable w-10/12 sm:w-8/12">
        {ImagesJson.map((image, index) => (
          <div
            key={index}
            className={`flex-shrink-0 w-20 sm:w-24 cursor-pointer ${index === currentIndex ? 'scale-x-125 shadow-lg bg-slate-100 rounded-lg font-bold mx-4 object-scale-down' : 'scale-100'
              } transition-transform duration-300`}
            onClick={() => setCurrentIndex(index)}
          >

            <img
              src={image.src}
              alt={image.title}
              className="p-1  rounded"
              style={{ width: "100%", height: "100% " }}
            />

          </div>
        ))}
      </div>

      {/* Navigation buttons */}
      <div className="relative flex justify-between items-center">
        <button
          className="absolute left-0 sm:left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full flex items-center"
          onClick={handlePrev}
        >
          <FaArrowLeft className="text-lg sm:text-xl" />
        </button>

        <button
          className="absolute right-0 sm:right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full flex items-center"
          onClick={handleNext}
        >
          <FaArrowRight className="text-lg sm:text-xl" />
        </button>
      </div>
    </div>
  );
};

export default Sliderimages;
