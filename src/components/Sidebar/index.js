import React from 'react';
import { FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <div
      className={`fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-95 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out z-50`}
      onClick={toggle}
    >
      <div className="flex justify-end p-4">
        <button onClick={toggle} className="text-white text-2xl">
          <FaTimes />
        </button>
      </div>
      <div className="flex flex-col items-center justify-center space-y-8">
        <a href="/#Workshops" className="text-white text-2xl hover:text-gray-300" onClick={toggle}>
          Workshops
        </a>
        <a href="/#Events" className="text-white text-2xl hover:text-gray-300" onClick={toggle}>
          Technical Events
        </a>
        <a href="https://jntuacep.ac.in" target="_blank" className="text-white text-2xl hover:text-gray-300" onClick={toggle}>
          College Details
        </a>

        <a href="/#memories" className="text-white text-2xl hover:text-gray-300" onClick={toggle}>
          Memories
        </a>

        <a href="/#contact" className="text-white text-2xl hover:text-gray-300" onClick={toggle}>
          Contact-Us
        </a>

        <Link to="/2k23" className="text-white text-2xl hover:text-gray-300" onClick={toggle}>
          For Gallery
        </Link>


      </div>

    </div>
  );
};

export default Sidebar;
