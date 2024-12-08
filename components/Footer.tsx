import React from 'react'

const Footer = () => {
  return (
    <footer className='flex flex-col items-center justify-center'>
      <div className='w-full flex items-center justify-between p-10'>
        <div className='mb-28'>
          <h1 className='font-bold text-[40px] text-[#3563E9]'>MORENT</h1>
          <p>Our vision is to provide convenience<br /> and help increase your sales business.</p>
        </div>
        <div className='flex justify-between w-[35%] h-[40%] bg-slat-600'>
          <div className='flex flex-col gap-8'>
            <h1 className='text-[32px]'>About</h1>
            <h1 className='text-[#1A202C]'>How it works</h1>
            <h1 className='text-[#1A202C]'>Featured</h1>
            <h1 className='text-[#1A202C]'>Partnership</h1>
            <h1 className='text-[#1A202C]'>Business Relation</h1>
          </div>
          <div className='flex flex-col gap-8'>
            <h1 className='text-[32px]'>Community</h1>
            <h1 className='text-[#131313]'>Events</h1>
            <h1 className='text-[#1A202C]'>Blog</h1>
            <h1 className='text-[#1A202C]'>Podcast</h1>
            <h1 className='text-[#1A202C]'>Invite a friend</h1>
          </div>
          <div className='flex flex-col gap-8'>
            <h1 className='text-[32px]'>Socials</h1>
            <h1 className='text-[#1A202C]'>Discord</h1>
            <h1 className='text-[#1A202C]'>Instagram</h1>
            <h1 className='text-[#1A202C]'>Twitter</h1>
            <h1 className='text-[#1A202C]'>Facebook</h1>
          </div>
        </div>
      </div>
      <div className='flex justify-between items-center w-full border-t-2 bg-lie-700 p-10'>
  <h1 className='text-center text-[16px] text-[#1A202C]'>©2022 MORENT. All rights reserved</h1>
  <div className='flex gap-4'>
    <h1 className='text-[16px] font-medium'>Privacy & Policy</h1>
    <h1 className='text-[16px] font-medium'>Terms & Condition</h1>
  </div>
</div>

    </footer>
  )
}

export default Footer
