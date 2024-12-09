import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <div className='min-w-full flex justify-center mt-4'>
  <div className='flex gap-5'>
    {/* Left image */}
    <div className='w-[327px] h-[232px] sm:w-[640px] sm:h-[360px]'>
      <Image
        src="/Ads1.svg"
        alt=""
        width={640}
        height={360}
        sizes="(min-width: 640px) 640px, 327px"
      />
    </div>

    {/* Right image */}
    <div className='w-[640px] h-[360px] sm:block hidden'>
      <Image src="/Ads2.svg" alt="" width={640} height={360} />
    </div>
  </div>
</div>

  );
};

export default Hero;