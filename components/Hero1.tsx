import React from 'react';

const Hero1 = () => {
  return (
    <div className=' w-full flex items-center justify-center mt-10 overflow-hidden p-4'>
      <div className=" p-4 rounded-lg w-[582] h-[136] shadow-md">
      <div className="flex items-center">
        <span className='mr-1'>
            <img src="mark.svg" alt="" />
          </span>
        
        <p className="text-[20px] font-medium">Pick-Up</p>
      </div>

      <div className="grid grid-cols-3 gap-4 mt-4">
        <div>
          <label className="block text-[20px] font-bold ">Locations</label>
          <select className="mt-1 block w-full pl-3 pr-10 py-2 text-base text-[#90A3BF] bg-transparent focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
            <option>Select your city</option>
          </select>
        </div>
        <div>
          <label className="block text-[20px] font-bold ">Date</label>
          <select className="mt-1 block w-full pl-3 pr-10 py-2 text-base text-[#90A3BF] bg-transparent focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
            <option>Select your date</option>
          </select>
        </div>
        <div>
          <label className="block text-[20px] font-bold ">Time</label>
          <select className="mt-1 block w-full pl-3 pr-10 py-2 text-base text-[#90A3BF] bg-transparent focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
            <option>Select your time</option>
          </select>
        </div>
      </div>
    </div>
      <div className='mx-4'>
        <img src="switch.svg" alt="" />
      </div>
      <div className=" p-4 rounded-lg w-[582] h-[136] shadow-md">
      <div className="flex items-center">
        <span className='mr-1'>
            <img src="mark.svg" alt="" />
          </span>
        
        <p className="text-[20px] font-medium">Pick-Up</p>
      </div>

      <div className="grid grid-cols-3 gap-4 mt-4">
        <div>
          <label className="block text-[20px] font-bold ">Locations</label>
          <select className="mt-1 block w-full pl-3 pr-10 py-2 text-base text-[#90A3BF] bg-transparent focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
            <option>Select your city</option>
          </select>
        </div>
        <div>
          <label className="block text-[20px] font-bold ">Date</label>
          <select className="mt-1 block w-full pl-3 pr-10 py-2 text-base text-[#90A3BF] bg-transparent focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
            <option>Select your date</option>
          </select>
        </div>
        <div>
          <label className="block text-[20px] font-bold ">Time</label>
          <select className="mt-1 block w-full pl-3 pr-10 py-2 text-base text-[#90A3BF] bg-transparent focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
            <option>Select your time</option>
          </select>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Hero1;
