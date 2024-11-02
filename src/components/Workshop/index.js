import React, { useEffect } from 'react';
import { WorkShopJson } from '../data/WorkshopJson';
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS styles
import { GiClick } from "react-icons/gi";

const Workshop = () => {
    // Initialize AOS when the component mounts
    useEffect(() => {
        AOS.init();
    }, []); // Empty dependency array means this effect runs once on mount

    return (
        <div id="Workshops" className="py-12 px-4 bg-[#191f29]">
            <h1 className="text-center text-light text-2xl md:text-3xl lg:text-4xl font-bold mb-8">Workshops</h1>
            <p className="text-center text-light max-w-xl mx-auto mb-10">
                We are Organizing Workshops on various topics. Register now to get the best experience.
            </p>

            {/* Workshop Cards */}
            <div className="container w-full mx-auto grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 lg:gap-11 gap-8 justify-items-center snap-center">
                {WorkShopJson.map((workshop, index) => (
                    <div
                        key={index}
                        data-aos="fade-up" // Add AOS animation here
                        data-aos-duration="800" // Duration of the animation
                        data-aos-delay={`${index * 100}`} // Delay based on index for staggered animation
                        className="bg-gradient-to-b from-slate-300 to-slate-50 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-sm shadow-md rounded-md p-6 transition-transform transform hover:scale-105" // Ombre effect added here
                    >
                        <img
                            src={workshop.image}
                            alt={workshop.title}
                            className="w-full h-48 object-cover rounded-md mb-4"
                        />
                        <div className="text-center">
                            <h3 className="text-xl font-bold bg-slate-200 rounded-md shadow-md text-indigo-600">{workshop.title}</h3>
                            <p className="text-lg font-small">{workshop.price}</p>
                            <p className="text-lg font-small mb-3">{workshop.Accommodation}</p>
                            <strong className='uppercase bg-slate-200 px-3'>{workshop.highlight}</strong>
                            <ul className="list-disc text-start mx-3 text-gray-700 mb-4">
                                {workshop.description.map((desc, i) => (
                                    <li key={i}>{desc}</li>
                                ))}
                            </ul>
                            {/* Separate Explore Button for Each Workshop */}
                            <a
                                href={workshop.pdfLink} // Link to PDF download
                                download // This attribute will trigger download
                                className="w-full bg-slate-600 text-white px-2 py-2 rounded-lg hover:bg-slate-800 flex justify-center items-center"
                            >
                                <GiClick className="mr-2" /> {/* Add Icon to the button */}
                                Explore!
                            </a>
                        </div>
                    </div>
                ))}
            </div>

            <div className="flex justify-center text-xl font-bold">
                <a className="min-w-[40%] text-center bg-blue-600 mt-5 text-white px-2 py-2 rounded-lg hover:bg-blue-800 animate-blink" href='https://forms.gle/g1NitruTgxXUbXz28' target='_blank' rel="noopener noreferrer">
                    <div className='relative left-12 top-1'></div>
                    Click Here To Register For Workshop
                </a>
            </div>
        </div>
    );
};

export default Workshop;   
