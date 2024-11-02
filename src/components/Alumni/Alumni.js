import React, { useEffect } from 'react';
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS styles
import { AlumniContributionJson } from '../data/Alumni';

const Alumni = () => {
    // Initialize AOS when the component mounts
    useEffect(() => {
        AOS.init();
    }, []); // Empty dependency array means this effect runs once on mount

    // Get the alumni contribution event
    const alumniEvent = AlumniContributionJson[0]; // Get the first alumni contribution event

    return (
        <div className='bg-[#191f29] w-full'>
            <div id="Events" className="py-12 w-full md:w-9/12 mx-auto bg-slate-50 container sm:shadow-md border-b border-gray-300">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">{alumniEvent.title}</h2>
                <p className="text-lg text-center mb-10 mx-auto max-w-3xl">
                    {alumniEvent.thankingMessage}
                </p>
                <div className="flex justify-center">
                    <div
                        data-aos="fade-up"
                        data-aos-duration="800"
                        className="bg-white w-full md:w-8/12 lg:w-4/12 h-auto shadow-md rounded-lg overflow-hidden flex flex-col transition-transform transform hover:scale-105"
                    >
                        <img
                            src={alumniEvent.imgSrc}
                            alt={alumniEvent.title}
                            className="w-full h-60 object-cover p-3"
                        />
                        <div className="flex-1 p-6 flex flex-col justify-between">
                            <div className="text-center">
                                <h3 className="text-2xl font-semibold mb-2 bg-slate-200 shadow-md rounded-sm uppercase text-indigo-500">Thank You!</h3>
                                <p className="text-lg text-gray-700 mb-4">
                                    We appreciate your contributions and support for our College!
                                </p>
                            </div>
                            <div className="flex justify-center">
                                <div className="flex justify-center w-full text-xl font-bold">
                                    <a className="min-w-[80%] text-center bg-blue-600 mt-5 text-white px-2 py-2 rounded-lg hover:bg-blue-800 animate-blink" href='https://forms.gle/kj931cf2Cb6fLkpy6' target='_blank' rel="noopener noreferrer">
                                       Pay Your  Contribution
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

export default Alumni;
