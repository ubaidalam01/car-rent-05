import React from 'react';
import Link from 'next/link';

const Recomend = () => {
  return (
    <div className="min-h-scree p-4 bg-[#FFFFFF]">
    <div className="text-center">
      <h1 className="text-[#90A3BF] text-3xl font-bold text-start p-2">Recomendation Cars</h1>
      <h1 className="text-[#3563E9] text-end font-bold p-6">View all</h1>
    </div>
    <div className="grid grid-cols-4 gap-8">
      
      
      <div className="w-[295px] h-[350px] rounded-lg overflow-hidden shadow-lg bg-lime p-6">
        <div className="flex justify-between">
          <h2 className="text-2xl font-bold text-gray-800 p-4">All New Rush</h2>
          <img src="heart.svg" alt="" />
        </div>
        <h2 className="text-[#90A3BF] ml-4">Sport</h2>
        <img src="car.svg" alt="Car" className="object-cover mt-4" />
        <div className="p-4">
          <img src="specs.svg" alt="" className="w-full" />
          <div className="flex items-center justify-between mt-4 gap-2">
            <p className="text-lg font-bold">$99.00/<span className="text-[#90A3BF]">day</span></p>
            <button className="bg-blue-600 text-white w-[116px] h-[44px] rounded-md hover:bg-blue-700 transition">
            <Link href="/Cart">Rent now</Link>
            </button>
          </div>
        </div>
      </div>
  
     
      <div className="w-[295px] h-[350px] rounded-lg overflow-hidden shadow-lg bg-lime p-6">
        <div className="flex justify-between">
          <h2 className="text-2xl font-bold text-gray-800 p-4">CR  - V</h2>
          <img src="like1.svg" alt="" />
        </div>
        <h2 className="text-[#90A3BF] ml-4">Sport</h2>
        <img src="car1.svg" alt="Car" className="object-cover mt-4" />
        <div className="p-4">
          <img src="specs1.svg" alt="" className="w-full" />
          <div className="flex items-center justify-between mt-4 gap-2">
            <p className="text-lg font-bold">$80.00/<span className="text-[#90A3BF]">day</span></p>
            <button className="bg-blue-600 text-white w-[116px] h-[44px] rounded-md hover:bg-blue-700 transition">
            <Link href="/Cart">Rent now</Link>
            </button>
          </div>
        </div>
      </div>
  
      
      <div className="w-[295px] h-[350px] rounded-lg overflow-hidden shadow-lg bg-lime p-6">
        <div className="flex justify-between">
          <h2 className="text-2xl font-bold text-gray-800 p-4">All New Terios</h2>
          <img src="heart.svg" alt="" />
        </div>
        <h2 className="text-[#90A3BF] ml-4">Sedan</h2>
        <img src="car2.svg" alt="Car" className="object-cover mt-4" />
        <div className="p-4">
          <img src="specs2.svg" alt="" className="w-full" />
          <div className="flex items-center justify-between mt-4 gap-2">
            <p className="text-lg font-bold">$96.00/<span className="text-[#90A3BF]">day</span></p>
            <button className="bg-blue-600 text-white w-[116px] h-[44px] rounded-md hover:bg-blue-700 transition">
            <Link href="/Cart">Rent now</Link>
            </button>
          </div>
        </div>
      </div>
  
      
      <div className="w-[295px] h-[350px] rounded-lg overflow-hidden shadow-lg bg-lime p-6">
        <div className="flex justify-between">
          <h2 className="text-2xl font-bold text-gray-800 p-4">CR  - V</h2>
          <img src="heart.svg" alt="" />
        </div>
        <h2 className="text-[#90A3BF] ml-4">Sport</h2>
        <img src="car3.svg" alt="Car" className="object-cover mt-4" />
        <div className="p-4">
          <img src="specs.svg" alt="" className="w-full" />
          <div className="flex items-center justify-between mt-4 gap-2">
            <p className="text-lg font-bold">$120.00/<span className="text-[#90A3BF]">day</span></p>
            <button className="bg-blue-600 text-white w-[116px] h-[44px] rounded-md hover:bg-blue-700 transition">
            <Link href="/Cart">Rent now</Link>
            </button>
          </div>
        </div>
      </div>
  
     
      <div className="w-[295px] h-[350px] rounded-lg overflow-hidden shadow-lg bg-lime p-6">
        <div className="flex justify-between">
          <h2 className="text-2xl font-bold text-gray-800 p-4">New MG ZS</h2>
          <img src="like1.svg" alt="" />
        </div>
        <h2 className="text-[#90A3BF] ml-4">Sport</h2>
        <img src="car4.svg" alt="Car" className="object-cover mt-4" />
        <div className="p-4">
          <img src="specs4.svg" alt="" className="w-full" />
          <div className="flex items-center justify-between mt-4 gap-2">
            <p className="text-lg font-bold">$115.00/<span className="text-[#90A3BF]">day</span></p>
            <button className="bg-blue-600 text-white w-[116px] h-[44px] rounded-md hover:bg-blue-700 transition">
            <Link href="/Cart">Rent now</Link>
            </button>
          </div>
        </div>
      </div>
  
      
      <div className="w-[295px] h-[350px] rounded-lg overflow-hidden shadow-lg bg-lime p-6">
        <div className="flex justify-between">
          <h2 className="text-2xl font-bold text-gray-800 p-4">MG ZX Excite</h2>
          <img src="heart.svg" alt="" />
        </div>
        <h2 className="text-[#90A3BF] ml-4">Sport</h2>
        <img src="car5.svg" alt="Car" className="object-cover mt-4" />
        <div className="p-4">
          <img src="specs5.svg" alt="" className="w-full" />
          <div className="flex items-center justify-between mt-4 gap-2">
            <p className="text-lg font-bold">$130.00/<span className="text-[#90A3BF]">day</span></p>
            <button className="bg-blue-600 text-white w-[116px] h-[44px] rounded-md hover:bg-blue-700 transition">
            <Link href="/Cart">Rent now</Link>
            </button>
          </div>
        </div>
      </div>
  
      
      <div className="w-[295px] h-[350px] rounded-lg overflow-hidden shadow-lg bg-lime p-6">
        <div className="flex justify-between">
          <h2 className="text-2xl font-bold text-gray-800 p-4">New MG ZS</h2>
          <img src="like1.svg" alt="" />
        </div>
        <h2 className="text-[#90A3BF] ml-4">Sport</h2>
        <img src="car6.svg" alt="Car" className="object-cover mt-4" />
        <div className="p-4">
          <img src="specs6.svg" alt="" className="w-full" />
          <div className="flex items-center justify-between mt-4 gap-2">
            <p className="text-lg font-bold">$140.00/<span className="text-[#90A3BF]">day</span></p>
            <button className="bg-blue-600 text-white w-[116px] h-[44px] rounded-md hover:bg-blue-700 transition">
            <Link href="/Cart">Rent now</Link>
            </button>
          </div>
        </div>  
      </div>
  
      
      <div className="w-[295px] h-[350px] rounded-lg overflow-hidden shadow-lg bg-lime p-6">
        <div className="flex justify-between">
          <h2 className="text-2xl font-bold text-gray-800 p-4">New MG ZS</h2>
          <img src="heart.svg" alt="" />
        </div>
        <h2 className="text-[#90A3BF] ml-4">Luxury</h2>
        <img src="car7.svg" alt="Car" className="object-cover mt-4" />
        <div className="p-4">
          <img src="specs7.svg" alt="" className="w-full" />
          <div className="flex items-center justify-between mt-4 gap-2">
            <p className="text-lg font-bold">$150.00/<span className="text-[#90A3BF]">day</span></p>
            <button className="bg-blue-600 text-white w-[116px] h-[44px] rounded-md hover:bg-blue-700 transition">
            <Link href="/Cart">Rent now</Link>
            </button>
          </div>
        </div>
      </div>
      <div className="w-screen flex justify-center mt-8">
        <button className="bg-blue-600 text-white px-6 py-3 mr-8 rounded-lg text-lg font-bold hover:bg-blue-700 transition">
          Show More Cars
        </button>
      </div>
  </div>
  </div>
  
  
  );
};

export default Recomend;




