import Link from "next/link";
import React from "react";

const CarRent = () => {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      {/* Sidebar */}
      <aside className="hidden lg:block w-full lg:w-1/5 bg-white p-6 shadow-lg">
  <h3 className="text-lg font-bold mb-4">Filter Cars</h3>

  {/* Type Filter */}
  <div className="mb-6">
    <h4 className="text-sm font-semibold text-gray-600 mb-2">Type</h4>
    <div className="space-y-2">
      {["Sport", "SUV", "MPV", "Sedan", "Coupe", "Hatchback"].map(
        (type, index) => (
          <label key={index} className="flex items-center text-sm">
            <input
              type="checkbox"
              className="mr-2 rounded text-[#3563E9] focus:ring-[#3563E9]"
            />
            {type} <span className="ml-auto text-gray-500">({index + 10})</span>
          </label>
        )
      )}
    </div>
  </div>

  {/* Capacity Filter */}
  <div className="mb-6">
    <h4 className="text-sm font-semibold text-gray-600 mb-2">Capacity</h4>
    <div className="space-y-2">
      {["2 Person", "4 Person", "6 Person", "8 or More"].map(
        (capacity, index) => (
          <label key={index} className="flex items-center text-sm">
            <input
              type="checkbox"
              className="mr-2 rounded text-blue-500 focus:ring-[#3563E9]"
            />
            {capacity}{" "}
            <span className="ml-auto text-gray-500">({index + 10})</span>
          </label>
        )
      )}
    </div>
  </div>

  {/* Price Filter */}
  <div className="mb-6">
    <h4 className="text-sm font-semibold text-gray-600 mb-2">Price</h4>
    <input
      type="range"
      className="w-full"
      min="0"
      max="100"
      defaultValue="50"
    />
    <p className="text-sm text-gray-600 mt-2">Max. $100.00</p>
  </div>
</aside>


      {/* Main Content */}
      <main className="flex-1 p-6 ">
      <div className="w-full flex flex-col md:flex-row items-center justify-center mt-10 overflow-hidden p-4">
      {/* Left side Pick-Up section */}
      <div className="p-4 rounded-lg w-full md:w-[486px] h-[132px] shadow-md">
        <div className="flex items-center">
          <span className="mr-1">
            {/* <Image src="/mark.svg" alt="Mark Icon" width={24} height={24} /> */}
            <img src="mark.svg" alt="" />
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
        {/* <Image src="/switch.svg" alt="Switch Icon" width={100} height={60} /> */}
        <img src="/switch.svg" alt="" />
      </div>

      {/* Right side Pick-Up section */}
      <div className="p-4 rounded-lg w-full md:w-[486px] h-[132px] shadow-md">
        <div className="flex items-center">
          <span className="mr-1">
            <img src="/mark.svg" alt="" />
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
        
<div className='min-h-screen bg-[#FFFFFF]'> 
  {/* Car Section for Desktop */}
  <div className='flex items-center justify-evenly md:flex-row flex-col space-y-4 md:space-y-0'>
    {/* Car Card 1 */}
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
            <Link href="/Payment">Rent now</Link>
          </button>
        </div>
      </div>
    </div>

    {/* Car Card 2 */}
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
            <Link href="/Payment">Rent now</Link>
          </button>
        </div>
      </div>
    </div>

    {/* Car Card 3 */}
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
            <Link href="/Payment">Rent now</Link>
          </button>
        </div>
      </div>
    </div>
  </div>
</div>
<div className='min-h-screen bg-[#FFFFFF]'> 
  {/* Car Section for Desktop */}
  <div className='flex items-center justify-evenly md:flex-row flex-col space-y-4 md:space-y-0'>
    {/* Car Card 1 */}
    <div className="w-[295px] h-[350px] rounded-lg overflow-hidden shadow-lg bg-lime p-6">
      <div className='flex justify-between'>
        <h2 className="text-2xl font-bold text-gray-800 p-4">Koenigsegg</h2>
        <img src="heart.svg" alt="" />
      </div>
      <h2 className="text-[#90A3BF] ml-4">Sport</h2>
      <img
        src="car4.svg"
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
            <Link href="/Payment">Rent now</Link>
          </button>
        </div>
      </div>
    </div>

    {/* Car Card 2 */}
    <div className="w-[295px] h-[350px] rounded-lg overflow-hidden shadow-lg bg-lime p-6">
      <div className='flex justify-between'>
        <h2 className="text-2xl font-bold text-gray-800 p-4">Nissan GT - R</h2>
        <img src="like1.svg" alt="" />
      </div>
      <h2 className="text-[#90A3BF] ml-4">Sport</h2>
      <img
        src="car5.svg"
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
            <Link href="/Payment">Rent now</Link>
          </button>
        </div>
      </div>
    </div>

    {/* Car Card 3 */}
    <div className="w-[295px] h-[350px] rounded-lg overflow-hidden shadow-lg bg-lime p-6">
      <div className='flex justify-between'>
        <h2 className="text-2xl font-bold text-gray-800 p-4">Rolls - Royce</h2>
        <img src="heart.svg" alt="" />
      </div>
      <h2 className="text-[#90A3BF] ml-4">Sedan</h2>
      <img
        src="car6.svg"
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
            <Link href="/Payment">Rent now</Link>
          </button>
        </div>
      </div>
    </div>
  </div>
  <div className="flex items-center justify-center mt-5">
  <Link href="/Payment">
  <button className="bg-blue-600 text-white w-[116px] h-[44px] rounded-md hover:bg-blue-700 transition">
   Rent now
</button>
</Link>
  </div>
</div>
      </main>
    </div>
  );
};

export default CarRent;
