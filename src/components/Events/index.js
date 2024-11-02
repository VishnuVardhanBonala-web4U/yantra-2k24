import React, { useEffect } from 'react';
import { EventsJson } from '../data/EventsJson';
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS styles
import { GiClick } from 'react-icons/gi';

const Index = () => {
    // Initialize AOS when the component mounts
    useEffect(() => {
        AOS.init();
    }, []); // Empty dependency array means this effect runs once on mount

    // Get the first event
    const event = EventsJson[0]; // Assuming you want to display only the first event

    return (
        <div className='bg-[#191f29] w-full  '>
            <div id="Events" className="py-12 w-9/12 border-b border-slate-300    bg-slate-50 container sm:shadow-md">
                <h2 className="text-3xl   md:text-4xl font-bold text-center mb-8">Technical Events & Culturals</h2>
                <p className="text-lg text-center mb-10 mx-auto max-w-3xl">
                    Our Yantra 2K24 hosts a variety of technical events and cultural programs designed to foster innovation and celebrate diversity.
                </p>
                <div className="flex justify-center w-full ">
                    <div
                        data-aos="fade-up"
                        data-aos-duration="800"
                        className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col transition-transform transform hover:scale-105 object-cover"
                    >
                        <img
                            src={event.imgSrc}
                            alt={event.title[0]} // Use the first title for the alt text
                            className="w-full h-60 object-fill p-3"
                        />
                        <div className="flex-1 p-6 flex flex-col justify-between">
                            <div className="text-center">
                                <h3 className="text-2xl font-semibold mb-2 bg-slate-200 shadow-md rounded-sm uppercase text-indigo-500">Participation Fees</h3>
                                <ul className="list-disc text-left  mx-4 text-xl  text-gray-700 mb-4">
                                    {event.title.map((title, index) => (
                                        <li key={index}>{title} - {event.price[index].amount} {event.price[index].currency}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className="flex justify-center">


                                <div className="flex justify-center w-full text-xl font-bold">
                                    <a className="min-w-[80%] text-center bg-blue-600 mt-5 text-white px-2 py-2 rounded-lg hover:bg-blue-800 animate-blink" href='https://forms.gle/3hFW7ybd6CfWfGNA9' target='_blank' rel="noopener noreferrer">
                                        <div className='relative left-12 top-1'></div>
                                        Register
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Index;
