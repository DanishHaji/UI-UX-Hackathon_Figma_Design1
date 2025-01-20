import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <div className="flex flex-col md:px-8">
      {/* Top Banner Section */}
      <div className="flex flex-col lg:flex-row space-y-8 lg:space-y-0 lg:space-x-8 lg:gap-x-8">
        {/* Left Banner */}
        <div className="relative flex-1 rounded-lg shadow-lg overflow-hidden lg:max-w-[640px] lg:h-[360px] transition-transform duration-500 hover:scale-105">
          <div className="absolute inset-0">
            <Image src="/background1.png" alt="Left Banner Background" layout="fill" objectFit="cover" />
          </div>
          <div className="relative z-10 p-8 text-white">
            <h1 className="text-[24px] sm:text-[32px] leading-[150%] font-sans flex items-center tracking-[-0.03em]">
              The Best Platform <br className="hidden sm:block" /> for Car Rental
            </h1>
            <p className="mt-4 font-medium text-[14px] sm:text-[16px] leading-[150%] flex items-center tracking-[-0.02em]">
              Ease of doing a car rental safely and <br className="hidden sm:block" /> reliably. Of course at a low price.
            </p>
            <button
              aria-label="button"
              type="submit"
              className="mt-6 flex items-center justify-center w-[100px] h-[36px] sm:w-[120px] sm:h-[44px] bg-[#3563E9] text-white rounded-md hover:bg-blue-800 transition-colors duration-300"
            >
              Rental Car
            </button>
          </div>
          <div className="absolute bottom-0 right-0 w-[60%] sm:w-[60%] lg:w-[70%] lg:max-w-[350px] sm:max-w-[250px] transition-transform duration-500 hover:scale-105">
            <Image src="/car1.png" alt="White Sports Car" width={800} height={400} />
          </div>
        </div>

        {/* Right Banner */}
        <div className="relative flex-1 rounded-lg shadow-lg overflow-hidden lg:max-w-[640px] lg:h-[360px] transition-transform duration-500 hover:scale-105">
          <div className="absolute inset-0">
            <Image src="/background2.png" alt="Right Banner Background" layout="fill" objectFit="cover" />
          </div>
          <div className="relative z-10 p-8 text-white">
            <h2 className="font-semibold text-[24px] sm:text-[32px] leading-[150%] font-sans flex items-center tracking-[-0.03em]">
              Easy way to rent a <br className="hidden sm:block" /> car at a low price
            </h2>
            <p className="mt-4 font-medium text-[14px] sm:text-[16px] leading-[150%] flex items-center tracking-[-0.02em]">
              Providing cheap car rental services <br className="hidden sm:block" /> and safe and comfortable facilities.
            </p>
            <button
              type="submit"
              className="mt-6 flex items-center justify-center w-[100px] h-[36px] sm:w-[120px] sm:h-[44px] bg-[#54A6FF] text-white rounded-md hover:bg-blue-800 transition-colors duration-300"
            >
              Rental Car
            </button>
          </div>
          <div className="absolute bottom-0 right-0 w-[60%] sm:w-[60%] lg:w-[70%] lg:max-w-[350px] sm:max-w-[250px] transition-transform duration-500 hover:scale-105">
            <Image src="/car2.png" alt="Silver Sports Car" width={800} height={400} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
