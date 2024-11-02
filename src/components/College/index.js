import React from 'react';
import browcher from "../../assets/browcher.jpg"
import poster from "../../assets/poster.jpg"

// Path to your brochure PDF file

const CollegeDetails = () => {
    return (
        <div className="bg-gray-100 p-8" id='college-details'>
            <div className="container mx-auto">
                <h1 className="text-3xl font-bold text-center mb-6">About Yantra</h1>






                <div className="bg-white object-cover shadow-md rounded-lg p-6 mb-6">
                    <h2 className="text-2xl font-semibold text-center p-2 w-full bg-slate-200 shadow-lg mb-2 rounded-md ">Event Poster</h2>
                    <img src={poster} alt="" className='w-full  hover:shadow-lg ' srcset="" />
                    <p className="mt-2 text-gray-700 text-center p-2 text-xl font-bold ">
                        Download our event Poster to learn more about our upcoming events and activities.
                    </p>
                    <div className="mt-4 text-center ">
                        <a
                            href={poster}
                            download
                            className="inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200  hover:shadow-lg"
                        >
                            Download Poster
                        </a>
                    </div>
                </div>

                <div className="bg-white shadow-md rounded-lg p-6 mb-6">
                    <h2 className="text-2xl font-semibold text-center p-2 w-full bg-slate-200 shadow-lg mb-2 rounded-md ">Event Brochure</h2>
                    <img src={browcher} alt="" srcset="" className=' hover:shadow-lg  ' />
                    <p className="mt-2 text-gray-700 text-center p-2 text-xl font-bold ">
                        Download our event brochure to learn more about our upcoming events and activities.
                    </p>
                    <div className="mt-4 text-center">
                        <a
                            href={browcher}
                            download
                            className="inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200 hover:shadow-lg "
                        >
                            Download Brochure
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CollegeDetails;
