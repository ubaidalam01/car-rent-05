import React from 'react';
import Image from 'next/image';

const Hero1 = () => {
  return (
    <div className="w-full flex flex-col md:flex-row items-center justify-center mt-10 overflow-hidden p-4">
      {/* Left side Pick-Up section */}
      <div className="p-4 rounded-lg w-full md:w-[582px] h-[136px] shadow-md">
        <div className="flex items-center">
          <span className="mr-1">
            <Image src="/mark.svg" alt="Mark Icon" width={24} height={24} />
          </span>
          <p className="text-[20px] font-medium">Pick-Up</p>
        </div>
        <div className="grid grid-cols-3 gap-4 mt-4">
          <div>
            <label className="block text-[20px] font-bold">Locations</label>
            <select className="mt-1 block w-full pl-3 pr-10 py-2 text-base text-[#90A3BF] bg-transparent focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
              <option>Select your city</option>
            </select>
          </div>
          <div>
            <label className="block text-[20px] font-bold">Date</label>
            <select className="mt-1 block w-full pl-3 pr-10 py-2 text-base text-[#90A3BF] bg-transparent focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
              <option>Select your date</option>
            </select>
          </div>
          <div>
            <label className="block text-[20px] font-bold">Time</label>
            <select className="mt-1 block w-full pl-3 pr-10 py-2 text-base text-[#90A3BF] bg-transparent focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
              <option>Select your time</option>
            </select>
          </div>
        </div>
      </div>

      {/* Middle arrows section */}
      <div className="flex justify-center items-center">
        <Image src="/switch.svg" alt="Switch Icon" width={100} height={60} />
      </div>

      {/* Right side Pick-Up section */}
      <div className="p-4 rounded-lg w-full md:w-[582px] h-[136px] shadow-md">
        <div className="flex items-center">
          <span className="mr-1">
            <Image src="/mark.svg" alt="Mark Icon" width={24} height={24} />
          </span>
          <p className="text-[20px] font-medium">Drop-Off</p>
        </div>
        <div className="grid grid-cols-3 gap-4 mt-4">
          <div>
            <label className="block text-[20px] font-bold">Locations</label>
            <select className="mt-1 block w-full pl-3 pr-10 py-2 text-base text-[#90A3BF] bg-transparent focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
              <option>Select your city</option>
            </select>
          </div>
          <div>
            <label className="block text-[20px] font-bold">Date</label>
            <select className="mt-1 block w-full pl-3 pr-10 py-2 text-base text-[#90A3BF] bg-transparent focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
              <option>Select your date</option>
            </select>
          </div>
          <div>
            <label className="block text-[20px] font-bold">Time</label>
            <select className="mt-1 block w-full pl-3 pr-10 py-2 text-base text-[#90A3BF] bg-transparent focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
              <option>Select your time</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero1;
