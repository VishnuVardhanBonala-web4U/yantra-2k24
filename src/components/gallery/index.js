// src/Gallery.js

import React from 'react';
import { Link } from 'react-router-dom';
import { galleryData } from './Galleryjson';


// Sample data for the gallery with six sections

const Gallery = () => {
    return (
        <div className="container mx-auto py-8">
            <h1 className="text-4xl font-bold text-center mb-8"> Gallery</h1>

            {/* Button to redirect to homepage */}
            <div className="text-center mb-8">
                <Link to="/" className="px-2 py-2 w-full bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition-colors">
                    Go to Homepage
                </Link>
            </div>

            {/* Gallery sections */}
            {galleryData.map((section) => (
                <div key={section.id} className="mb-12  w-full overflow-scroll">
                    <h2 className="text-2xl font-semibold mb-4 text-center">{section.title}</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4  w-full  overflow-scroll">
                        {section.images.map((image, index) => (
                            <div
                                key={index}
                                className=" rounded-lg shadow-md transform transition duration-500 hover:scale-105 overflow-auto"
                            >
                                <img
                                    src={image}
                                    alt={section.title}
                                    className="w-full h-full object-cover rounded-lg hover:shadow-lg transition duration-500 overflow-scroll"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Gallery;
