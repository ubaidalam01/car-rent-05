import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Recomend = () => {
  return (
    <div className="min-h-screen p-4 bg-[#FFFFFF]">
      <div className="text-center">
        <h1 className="text-[#90A3BF] text-3xl font-bold text-start p-2">Recomendation Cars</h1>
        <h1 className="text-[#3563E9] text-end font-bold p-6">View all</h1>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

        {/* Car Card 1 */}
        <div className="w-[295px] h-[350px] rounded-lg overflow-hidden shadow-lg bg-lime p-6">
          <div className="flex justify-between">
            <h2 className="text-2xl font-bold text-gray-800 p-4">All New Rush</h2>
            <Image src="/heart.svg" alt="Heart" width={24} height={24} />
          </div>
          <h2 className="text-[#90A3BF] ml-4">Sport</h2>
          <Image src="/car.svg" alt="Car" className="object-cover mt-4" width={295} height={150} />
          <div className="p-4">
            <Image src="/specs.svg" alt="Car Specs" className="w-full" width={295} height={50} />
            <div className="flex items-center justify-between mt-4 gap-2">
              <p className="text-lg font-bold">$99.00/<span className="text-[#90A3BF]">day</span></p>
              <button className="bg-blue-600 text-white w-[116px] h-[44px] rounded-md hover:bg-blue-700 transition">
                <Link href="/Cart">Rent now</Link>
              </button>
            </div>
          </div>
        </div>

        {/* Car Card 2 */}
        <div className="w-[295px] h-[350px] rounded-lg overflow-hidden shadow-lg bg-lime p-6">
          <div className="flex justify-between">
            <h2 className="text-2xl font-bold text-gray-800 p-4">CR - V</h2>
            <Image src="/like1.svg" alt="Like" width={24} height={24} />
          </div>
          <h2 className="text-[#90A3BF] ml-4">Sport</h2>
          <Image src="/car1.svg" alt="Car" className="object-cover mt-4" width={295} height={150} />
          <div className="p-4">
            <Image src="/specs1.svg" alt="Car Specs" className="w-full" width={295} height={50} />
            <div className="flex items-center justify-between mt-4 gap-2">
              <p className="text-lg font-bold">$80.00/<span className="text-[#90A3BF]">day</span></p>
              <button className="bg-blue-600 text-white w-[116px] h-[44px] rounded-md hover:bg-blue-700 transition">
                <Link href="/Cart">Rent now</Link>
              </button>
            </div>
          </div>
        </div>

        {/* Car Card 3 */}
        <div className="w-[295px] h-[350px] rounded-lg overflow-hidden shadow-lg bg-lime p-6">
          <div className="flex justify-between">
            <h2 className="text-2xl font-bold text-gray-800 p-4">All New Terios</h2>
            <Image src="/heart.svg" alt="Heart" width={24} height={24} />
          </div>
          <h2 className="text-[#90A3BF] ml-4">Sedan</h2>
          <Image src="/car2.svg" alt="Car" className="object-cover mt-4" width={295} height={150} />
          <div className="p-4">
            <Image src="/specs2.svg" alt="Car Specs" className="w-full" width={295} height={50} />
            <div className="flex items-center justify-between mt-4 gap-2">
              <p className="text-lg font-bold">$96.00/<span className="text-[#90A3BF]">day</span></p>
              <button className="bg-blue-600 text-white w-[116px] h-[44px] rounded-md hover:bg-blue-700 transition">
                <Link href="/Cart">Rent now</Link>
              </button>
            </div>
          </div>
        </div>

        {/* Car Card 4 */}
        <div className="w-[295px] h-[350px] rounded-lg overflow-hidden shadow-lg bg-lime p-6">
          <div className="flex justify-between">
            <h2 className="text-2xl font-bold text-gray-800 p-4">CR - V</h2>
            <Image src="/heart.svg" alt="Heart" width={24} height={24} />
          </div>
          <h2 className="text-[#90A3BF] ml-4">Sport</h2>
          <Image src="/car3.svg" alt="Car" className="object-cover mt-4" width={295} height={150} />
          <div className="p-4">
            <Image src="/specs.svg" alt="Car Specs" className="w-full" width={295} height={50} />
            <div className="flex items-center justify-between mt-4 gap-2">
              <p className="text-lg font-bold">$120.00/<span className="text-[#90A3BF]">day</span></p>
              <button className="bg-blue-600 text-white w-[116px] h-[44px] rounded-md hover:bg-blue-700 transition">
                <Link href="/Cart">Rent now</Link>
              </button>
            </div>
          </div>
        </div>

        {/* Car Card 5 */}
        <div className="w-[295px] h-[350px] rounded-lg overflow-hidden shadow-lg bg-lime p-6">
          <div className="flex justify-between">
            <h2 className="text-2xl font-bold text-gray-800 p-4">New MG ZS</h2>
            <Image src="/like1.svg" alt="Like" width={24} height={24} />
          </div>
          <h2 className="text-[#90A3BF] ml-4">Sport</h2>
          <Image src="/car4.svg" alt="Car" className="object-cover mt-4" width={295} height={150} />
          <div className="p-4">
            <Image src="/specs1.svg" alt="Car Specs" className="w-full" width={295} height={50} />
            <div className="flex items-center justify-between mt-4 gap-2">
              <p className="text-lg font-bold">$115.00/<span className="text-[#90A3BF]">day</span></p>
              <button className="bg-blue-600 text-white w-[116px] h-[44px] rounded-md hover:bg-blue-700 transition">
                <Link href="/Cart">Rent now</Link>
              </button>
            </div>
          </div>
        </div>

        {/* Car Card 6 */}
        <div className="w-[295px] h-[350px] rounded-lg overflow-hidden shadow-lg bg-lime p-6">
          <div className="flex justify-between">
            <h2 className="text-2xl font-bold text-gray-800 p-4">MG ZX Excite</h2>
            <Image src="/heart.svg" alt="Heart" width={24} height={24} />
          </div>
          <h2 className="text-[#90A3BF] ml-4">Sport</h2>
          <Image src="/car5.svg" alt="Car" className="object-cover mt-4" width={295} height={150} />
          <div className="p-4">
            <Image src="/specs.svg" alt="Car Specs" className="w-full" width={295} height={50} />
            <div className="flex items-center justify-between mt-4 gap-2">
              <p className="text-lg font-bold">$130.00/<span className="text-[#90A3BF]">day</span></p>
              <button className="bg-blue-600 text-white w-[116px] h-[44px] rounded-md hover:bg-blue-700 transition">
                <Link href="/Cart">Rent now</Link>
              </button>
            </div>
          </div>
        </div>

        {/* Car Card 7 */}
        <div className="w-[295px] h-[350px] rounded-lg overflow-hidden shadow-lg bg-lime p-6">
          <div className="flex justify-between">
            <h2 className="text-2xl font-bold text-gray-800 p-4">New MG ZS</h2>
            <Image src="/like1.svg" alt="Like" width={24} height={24} />
          </div>
          <h2 className="text-[#90A3BF] ml-4">Sport</h2>
          <Image src="/car6.svg" alt="Car" className="object-cover mt-4" width={295} height={150} />
          <div className="p-4">
            <Image src="/specs1.svg" alt="Car Specs" className="w-full" width={295} height={50} />
            <div className="flex items-center justify-between mt-4 gap-2">
              <p className="text-lg font-bold">$140.00/<span className="text-[#90A3BF]">day</span></p>
              <button className="bg-blue-600 text-white w-[116px] h-[44px] rounded-md hover:bg-blue-700 transition">
                <Link href="/Cart">Rent now</Link>
              </button>
            </div>
          </div>
        </div>

        {/* Car Card 8 */}
        <div className="w-[295px] h-[350px] rounded-lg overflow-hidden shadow-lg bg-lime p-6">
          <div className="flex justify-between">
            <h2 className="text-2xl font-bold text-gray-800 p-4">New MG ZS</h2>
            <Image src="/heart.svg" alt="Heart" width={24} height={24} />
          </div>
          <h2 className="text-[#90A3BF] ml-4">Sport</h2>
          <Image src="/car7.svg" alt="Car" className="object-cover mt-4" width={295} height={150} />
          <div className="p-4">
            <Image src="/specs2.svg" alt="Car Specs" className="w-full" width={295} height={50} />
            <div className="flex items-center justify-between mt-4 gap-2">
              <p className="text-lg font-bold">$145.00/<span className="text-[#90A3BF]">day</span></p>
              <button className="bg-blue-600 text-white w-[116px] h-[44px] rounded-md hover:bg-blue-700 transition">
                <Link href="/Cart">Rent now</Link>
              </button>
            </div>
          </div>
        </div>
        </div>
        <div className='flex items-center justify-center'>
        <button className="bg-blue-600 text-white font-medium w-[150px] h-[44px] rounded-md hover:bg-blue-700 transition">
                <Link href="/Rent">Show mor Car</Link>
        </button>
        </div>
    </div>
  );
};

export default Recomend;
