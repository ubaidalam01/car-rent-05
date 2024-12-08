import React from 'react';
import Link from 'next/link';

const CarCards = () => {
  return (
    <div className='min-h-screen bg-[#FFFFFF]'>
      {/* Heading */}
      <h1 className='text-[#90A3BF] text-3xl font-bold text-start p-2'>Popular Car</h1>
      <h1 className='text-[#3563E9]  text-end font-bold p-6'>View all</h1>
      <div className='flex items-center justify-evenly'>
        <div className="w-[295px] h-[350px] rounded-lg overflow-hidden shadow-lg bg-lime p-6">
          <div className='flex justify-between'>
            <h2 className="text-2xl font-bold text-gray-800 p-4">Koenigsegg</h2>
            <img src="heart.svg" alt="" />
          </div>
          <h2 className="text-[#90A3BF] ml-4">Sport</h2>
          <img 
            src="car.svg" 
            alt="Car" 
            className="object-cover mt-4"
          />
          <div className="p-4">
            <img src="specs.svg" alt="" className="w-full" />
            <div className="flex items-center justify-between mt-4 gap-2">
              <p className="text-lg font-bold">
                $99.00/<span className="text-[#90A3BF]">day</span>
              </p>
              <button className="bg-blue-600 text-white w-[116px] h-[44px] rounded-md hover:bg-blue-700 transition">
              <Link href="/Cart">Rent now</Link>
              </button>
            </div>
          </div>
        </div>
        
        <div className="w-[295px] h-[350px] rounded-lg overflow-hidden shadow-lg bg-lime p-6">
          <div className='flex justify-between'>
            <h2 className="text-2xl font-bold text-gray-800 p-4">Nissan GT - R</h2>
            <img src="like1.svg" alt="" />
          </div>
          <h2 className="text-[#90A3BF] ml-4">Sport</h2>
          <img 
            src="car1.svg" 
            alt="Car" 
            className="object-cover mt-4"
          />
          <div className="p-4">
            <img src="specs1.svg" alt="" className="w-full" />
            <div className="flex items-center justify-between mt-4 gap-2">
              <p className="text-lg font-bold">
                $80.00/<span className="text-[#90A3BF]">day</span>
              </p>
              <button className="bg-blue-600 text-white w-[116px] h-[44px] rounded-md hover:bg-blue-700 transition">
              <Link href="/Cart">Rent now</Link>
              </button>
            </div>
          </div>
        </div>

        <div className="w-[295px] h-[350px] rounded-lg overflow-hidden shadow-lg bg-lime p-6">
          <div className='flex justify-between'>
            <h2 className="text-2xl font-bold text-gray-800 p-4">Rolls - Royce</h2>
            <img src="heart.svg" alt="" />
          </div>
          <h2 className="text-[#90A3BF] ml-4">Sedan</h2>
          <img 
            src="car2.svg" 
            alt="Car" 
            className="object-cover mt-4"
          />
          <div className="p-4">
            <img src="specs2.svg" alt="" className="w-full" />
            <div className="flex items-center justify-between mt-4 gap-2">
              <p className="text-lg font-bold">
                $96.00/<span className="text-[#90A3BF]">day</span>
              </p>
              <button className="bg-blue-600 text-white w-[116px] h-[44px] rounded-md hover:bg-blue-700 transition">
              <Link href="/Cart">Rent now</Link>
              </button>
            </div>
          </div>
        </div>

        <div className="w-[295px] h-[350px] rounded-lg overflow-hidden shadow-lg bg-lime p-6">
          <div className='flex justify-between'>
            <h2 className="text-2xl font-bold text-gray-800 p-4">Nissan GT - R</h2>
            <img src="like1.svg" alt="" />
          </div>
          <h2 className="text-[#90A3BF] ml-4">Sport</h2>
          <img 
            src="car3.svg" 
            alt="Car" 
            className="object-cover mt-4"
          />
          <div className="p-4">
            <img src="specs.svg" alt="" className="w-full" />
            <div className="flex items-center justify-between mt-4 gap-2">
              <p className="text-lg font-bold">
                $80.00/<span className="text-[#90A3BF]">day</span>
              </p>
              <button className="bg-blue-600 text-white w-[116px] h-[44px] rounded-md hover:bg-blue-700 transition">
              <Link href="/Cart">Rent now</Link>
              </button>
            </div>
          </div>
        </div>
               
      </div>
    </div>
  );
};

export default CarCards;

