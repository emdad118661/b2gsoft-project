'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const ImageCarousel = ({ images = [] }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Automatically change the image every 3 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            handleNext();
        }, 3000);

        return () => clearInterval(interval); // Cleanup on unmount
    }, [currentIndex]);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    const handleThumbnailClick = (index) => {
        setCurrentIndex(index); // Show the clicked thumbnail in the main carousel
    };

    return (
        <div className="relative">
            {/* Main carousel */}
            <div className="relative w-full h-[400px] md:h-[500px]">
                {images.length > 0 && (
                    <Image
                        src={images[currentIndex]}
                        alt={`Product Image ${currentIndex + 1}`}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-lg"
                    />
                )}
            </div>

            {/* Navigation buttons */}
            <button
                onClick={handlePrev}
                className="absolute p-2 transform -translate-y-1/2 border border-purple-600 rounded-full shadow top-1/2 left-2 hover:bg-gray-200"
            >
                <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.00002 12.5002H20" stroke="#7E53D4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M8.99966 7.5C8.99966 7.5 3.99976 11.1824 3.99976 12.5C3.99976 13.8176 8.99976 17.5 8.99976 17.5" stroke="#7E53D4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
            </button>
            <button
                onClick={handleNext}
                className="absolute p-2 transform -translate-y-1/2 border border-purple-600 rounded-full shadow top-1/2 right-2 hover:bg-gray-200"
            >
                <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 12.4998H4" stroke="#7E53D4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M15.0003 17.5C15.0003 17.5 20.0002 13.8176 20.0002 12.5C20.0002 11.1824 15.0002 7.5 15.0002 7.5" stroke="#7E53D4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
            </button>

            {/* Thumbnails */}
            <div className="justify-center hidden gap-2 mt-4 md:flex sm:block">
                {images.map((image, index) => (
                    <div
                        key={index}
                        onClick={() => handleThumbnailClick(index)}
                        className={`cursor-pointer w-[144px] h-[142px] bg-[#ECE9FE] border-2 ${
                            index === currentIndex
                                ? 'border-purple-600'
                                : 'border-gray-300'
                        } rounded-md overflow-hidden`}
                    >
                        <Image
                        className='mt-6'
                            src={image}
                            alt={`Thumbnail ${index + 1}`}
                            width={144}
                            height={142}
                            objectFit="cover"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ImageCarousel;
