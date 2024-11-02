import React, { useState } from 'react';
import { FaPhoneSquareAlt, FaInstagram, FaYoutube } from 'react-icons/fa';

const Index = () => {
    const phoneNumbers = [
        { number: "9177629800", label: "Mahesh" },
        { number: "9542578339", label: "Deepak" },
        { number: "6281578169", label: "Ranjitha" }
    ];

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };



    return (
        <div>
            <footer className="bg-gray-800 text-white py-8" id="contact">
                <div className="container mx-auto flex flex-col items-center">
                    <div className="text-center mb-4">
                        <h2 className="text-2xl font-bold">Contact Us</h2>
                    </div>

                    <div className="flex justify-center space-x-6 mb-16">
                        {/* Phone Link with Dropdown */}
                        <div className="relative">
                            <button
                                onClick={toggleDropdown}
                                aria-label="Phone"
                                rel="noopener noreferrer"
                                className="text-white text-3xl "
                            >
                                <FaPhoneSquareAlt />
                            </button>

                            {isDropdownOpen && (
                                <div
                                    className="absolute  md:w-56 flex flex-wrap
                         bg-gray-700 text-white p-1 rounded-lg  shadow-lg  ">
                                    {phoneNumbers.map((phone, index) => (
                                        <a
                                            key={index}
                                            href={`tel:${phone.number}`}
                                            className="block    px-4 py-1 hover:bg-white"
                                        >
                                            <div className='flex'>
                                                {phone.label} - {phone.number}
                                            </div>
                                        </a>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Instagram Link */}
                        <a
                            href="https://www.instagram.com/yantra_2k24_?igsh=ZXM2MHZuMWdsZ3pi"
                            target="_blank"
                            aria-label="Instagram"
                            rel="noopener noreferrer"
                            className="text-white text-3xl hover:text-pink-400"
                        >
                            <FaInstagram />
                        </a>

                        {/* YouTube Link */}
                        <a
                            href="https://youtube.com/@yantra2k23?si=x7UTiJ42Wsm8MouQ"
                            target="_blank"
                            aria-label="YouTube"
                            rel="noopener noreferrer"
                            className="text-white text-3xl hover:text-red-600"
                        >
                            <FaYoutube />
                        </a>
                    </div>

                    <hr className="w-full border-gray-600 mb-4" />

                    <div className="text-center text-lg font-bold">
                        © 2024 Yantra 2k24.com. All Rights Reserved.
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Index;
