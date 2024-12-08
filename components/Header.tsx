import React from 'react'
import { FiSearch } from "react-icons/fi";
  

const Header = () => {
  return (
<div className='w-full flex items-center gap-10 px-4 h-[124px] border-b bg-[#FFFFFF]'>
  <h1 className='font-bold text-[40px] ml-6 text-[#3563E9]'>MORENT</h1>

  <div className='flex items-center w-full sm:w-auto'>
    {/* Search Bar with Adjustment Icon */}
    <div className="flex items-center border rounded-full p-2 w-[492px] justify-between sm:w-[492px] sm:mr-0 mr-2">
      {/* Left SVG Icon */}
      <div className="text-gray-500 text-[24px] ml-2">
        <FiSearch />
      </div>

      {/* Input Field */}
      <input
        type="text"
        placeholder="Search something here"
        className="w-full outline-none bg-transparent placeholder:text-[16px] mx-2"
      />

      {/* Right Search Icon */}
      <div className="text-gray-500 text-xl mr-2">
        <img src="/adjst.svg" alt="Adjustment" />
      </div>
    </div>
  </div>

  {/* Right-aligned icons for larger screens */}
  <div className='w-[236px] h-[44px] flex justify-between mr-2 ml-auto'>
   <div className='sm:flex hidden'>
   <img src="like.svg" alt="like" />
    <img src="Notify.svg" alt="notification" />
    <img src="sett.svg" alt="settings" />
    <img src="prof.svg" alt="profile" />
   </div>
  </div>

  {/* Responsive Profile and Search Section for small screens */}
  <div className='w-full flex flex-col items-center justify-between sm:hidden mt-4'>
    {/* Profile Pic */}
    <div className="w-[50px] h-[50px] rounded-full overflow-hidden mt-0 mb-4">
      <img src="prof.svg" alt="profile" className="w-full h-full object-cover" />
    </div>

  </div>
</div>
  )
}

export default Header
