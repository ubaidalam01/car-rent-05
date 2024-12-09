"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image'; // Import the Image component

const CarCards = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Array of car cards
  const carCards = [
    {
      title: 'Koenigsegg',
      img: '/car.svg', // Update the path to relative paths
      specs: '/specs.svg',
      price: '$99.00/day',
      description: 'Sport',
    },
    {
      title: 'Nissan GT - R',
      img: '/car1.svg',
      specs: '/specs1.svg',
      price: '$80.00/day',
      description: 'Sport',
    },
    {
      title: 'Rolls - Royce',
      img: '/car2.svg',
      specs: '/specs2.svg',
      price: '$96.00/day',
      description: 'Sedan',
    },
    {
      title: 'Nissan GT - R',
      img: '/car3.svg',
      specs: '/specs.svg',
      price: '$80.00/day',
      description: 'Sport',
    },
  ];

  // Function to go to the next slide
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carCards.length);
  };

  // Function to go to the previous slide
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carCards.length) % carCards.length);
  };

  return (
    <div className="min-h-screen bg-[#FFFFFF]">
      {/* Heading for mobile view */}
      <div className="block sm:hidden p-4">
        <h1 className="text-[#90A3BF] text-3xl font-bold text-start">Popular Car</h1>
        <h1 className="text-[#3563E9] text-end font-bold">View all</h1>
      </div>

      {/* Slider container for mobile view */}
      <div className="relative block sm:hidden">
        <div className="flex justify-center items-center space-x-6">
          {/* Previous Button */}
          <button
            onClick={prevSlide}
            className="absolute left-0 z-10 bg-gray-300 text-white p-2 rounded-full shadow-md hover:bg-gray-400"
          >
            &#10094;
          </button>

          {/* Current car card */}
          <div className="w-[295px] h-[350px] rounded-lg overflow-hidden shadow-lg bg-lime p-6">
            <div className="flex justify-between">
              <h2 className="text-2xl font-bold text-gray-800 p-4">{carCards[currentSlide].title}</h2>
              <Image src="/heart.svg" alt="Heart Icon" width={24} height={24} />
            </div>
            <h2 className="text-[#90A3BF] ml-4">{carCards[currentSlide].description}</h2>
            <Image src={carCards[currentSlide].img} alt="Car" className="object-cover mt-4" width={295} height={200} />
            <div className="p-4">
              <Image src={carCards[currentSlide].specs} alt="Car Specs" className="w-full" width={295} height={50} />
              <div className="flex items-center justify-between mt-4 gap-2">
                <p className="text-lg font-bold">{carCards[currentSlide].price}</p>
                <button className="bg-blue-600 text-white w-[116px] h-[44px] rounded-md hover:bg-blue-700 transition">
                  <Link href="/Cart">Rent now</Link>
                </button>
              </div>
            </div>
          </div>

          {/* Next Button */}
          <button
            onClick={nextSlide}
            className="absolute right-0 z-10 bg-gray-300 text-white p-2 rounded-full shadow-md hover:bg-gray-400"
          >
            &#10095;
          </button>
        </div>
      </div>

      {/* Static cards for larger screens (laptop/tablet) */}
      <div className="hidden sm:block p-4">
        <h1 className="text-[#90A3BF] text-3xl font-bold text-start">Popular Car</h1>
        <h1 className="text-[#3563E9] text-end font-bold">View all</h1>
        <div className="flex space-x-6">
          {carCards.map((car, index) => (
            <div key={index} className="w-[295px] h-[350px] rounded-lg overflow-hidden shadow-lg bg-lime p-6">
              <div className="flex justify-between">
                <h2 className="text-2xl font-bold text-gray-800 p-4">{car.title}</h2>
                <Image src="/heart.svg" alt="Heart Icon" width={24} height={24} />
              </div>
              <h2 className="text-[#90A3BF] ml-4">{car.description}</h2>
              <Image src={car.img} alt="Car" className="object-cover mt-4" width={295} height={200} />
              <div className="p-4">
                <Image src={car.specs} alt="Car Specs" className="w-full" width={295} height={50} />
                <div className="flex items-center justify-between mt-4 gap-2">
                  <p className="text-lg font-bold">{car.price}</p>
                  <button className="bg-blue-600 text-white w-[116px] h-[44px] rounded-md hover:bg-blue-700 transition">
                    <Link href="/Cart">Rent now</Link>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CarCards;
