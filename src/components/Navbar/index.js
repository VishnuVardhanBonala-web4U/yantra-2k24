import React from 'react';
import './navbar.css';
import { Bars, Nav, NavIcon } from './NavbarElements';
import img from "../../images/logo.png";
import clg from "../../assets/image.png";

import { Link } from 'react-router-dom';

const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <div className="flex w-full justify-between items-center py-4 mt-16 mx-5"> {/* Added padding for better spacing */}
          {/* Left Logo */}



          {/* Right Logo */}
          <div className="flex items-center">
            <a
              href="https://yantra-mech.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl font-bold text-white hover:text-blue-500"
            >
              <img
                id='logo-right'
                src={clg}
                alt="logo"
                loading='lazy'
                className='rounded-lg shadow-md  bg-white hover:shadow-lg hover:scale-105 transition-all w-160 h-16 sm:w-28 sm:h-28 md:w-28 md:h-28 lg:w-30 lg:h-20 xl:w-40 xl:h-40 object-contain cursor-pointer'
              />
            </a>


          </div>

          <div className="flex items-center">
            <a
              href="https://yantra-mech.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl font-bold text-white hover:text-blue-500"
            >
              <img
                id='logo-left'
                src={img}
                alt="logo"
                loading='lazy'
                className='rounded-lg  hover:shadow-lg hover:scale-105 transition-all w-20 h-20 sm:w-28 sm:h-28 md:w-28 md:h-28 lg:w-30 lg:h-20  xl:w-40 xl:h-40 object-contain cursor-pointer'
              />
            </a>

          </div>



        </div>


        <NavIcon onClick={toggle}>
          <Bars />
        </NavIcon>
      </Nav>

      <div className="flex     justify-start md:justify-around  w-full text-white absolute m-4 p-3">
        <div className="mt-3  text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
          YANTRA
        </div>
        <div className=" mt-3   relative mx-20 text-3xl sm:text-4xl md:text-5xl lg:text-6xl" style={{ marginRight: "2rem" }}>
          2K24
        </div>
      </div>


    </>
  );
}

export default Navbar;
