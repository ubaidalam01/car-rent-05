import React from 'react';
import { FiSearch } from "react-icons/fi";
import Image from 'next/image';

const Header = () => {
  return (
    <div className="flex items-center sm:gap-10 px-4 h-[124px] border-b bg-[#FFFFFF] sm:flex-row flex-col">

      {/* Logo */}
      <h1 className="font-bold text-[30px] sm:text-[40px] text-[#3563E9] sm:mb-0 mb-4">MORENT</h1>

      {/* Search Bar */}
      <div className="flex items-center sm:w-auto w-full sm:justify-between">
        <div className="flex items-center border rounded-full p-2 sm:w-[492px] w-full justify-between">
          {/* Search Icon */}
          <div className="text-gray-500 text-[24px] ml-2">
            <FiSearch />
          </div>

          {/* Input Field */}
          <input
            type="text"
            placeholder="Search something here"
            className="w-full outline-none bg-transparent placeholder:text-[16px] mx-2"
          />

          {/* Adjustment Icon */}
          <div className="text-gray-500 text-xl mr-2">
            <Image src="/adjst.svg" alt="Adjustment" width={24} height={24} />
          </div>
        </div>
      </div>

      {/* Right-aligned profile pic for Mobile */}
      <div className="sm:hidden w-[50px] h-[50px] rounded-full overflow-hidden ml-auto -mt-3 sm:mt-0 absolute top-4 right-4">
        <Image src="prof.svg" alt="profile" width={50} height={50} />
      </div>

      {/* Right-aligned icons for larger screens */}
      <div className="hidden sm:flex w-[240px] h-[44px] justify-between ml-auto">
        <Image src="like.svg" alt="like" width={44} height={44} />
        <Image src="Notify.svg" alt="notification" width={44} height={44} />
        <Image src="sett.svg" alt="settings" width={44} height={44} />
        <Image src="prof.svg" alt="profile" width={44} height={44} />
      </div>
    </div>
  );
};

export default Header;