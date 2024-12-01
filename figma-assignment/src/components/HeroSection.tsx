import React from 'react';

const HeroSection = () => {
  return (
    <div className="relative h-screen">
      <img
        src="/image (3).png" // Path to your image
        alt="Hero Background"
        className="absolute top-0 left-0 w-full h-full object-cover"
      />

      <div className="absolute h-[164px] left-0 right-[2px] top-0 flex items-center justify-between px-8">
        {/* Site name */}
        <div className="text-white font-inter font-medium text-[20px]">
        freshpick.com
        </div>

        {/* Page */}
        <div className="absolute right-[70px] top-[56px] flex flex-row items-center justify-end gap-[48px] w-[400px] h-[41px] p-0">

        <div className="w-[49px] h-[30px] text-white font-inter font-medium text-[20px] leading-[150%] flex items-center">
          Home
        </div>
        <div className="w-[49px] h-[30px] text-white font-inter font-medium text-[20px] leading-[150%] flex items-center">
          Shop
        </div>
        <div className="w-[55px] h-[30px] text-white font-inter font-medium text-[20px] leading-[150%] flex items-center whitespace-nowrap">
          About Us
        </div>
        <button className="flex flex-row items-center justify-center px-[24px] py-[14px] gap-[8px] w-[99px] h-[52px] border-2 border-white rounded-[8px] hover:bg-gray-500 shadow-[0px_1px_2px_rgba(0,0,0,0.05)]">
        Explore</button>
        </div>
      </div>
      <div className="absolute flex flex-col items-center gap-[40px] w-[844px] h-[256px] left-[calc(50%-422px)] top-[284px] p-0">
      <div className="w-[844px] h-[90px] text-white text-center text-[64px] font-bold leading-[140%] tracking-[-0.02em]">
      Fresh Pick
</div>
<div className="w-[844px] h-[34px] text-white text-center text-[24px] font-medium leading-[140%] flex justify-center items-center">
  "Freshly Picked, Naturally Delicious!"
  <br />
  FreshPick offers a variety of premium, handpicked fruits, delivered straight to your door. Enjoy the taste of freshness with every bite!
</div>

<button className="flex items-center justify-center gap-[8px] w-[141px] h-[76px] bg-black shadow-[0px_1px_2px_rgba(0,0,0,0.05)] rounded-[8px] hover:bg-gray-800 hover:scale-105 hover:shadow-lg transition-all duration-300">
  <span className="flex items-center w-[77px] h-[36px] text-white font-inter font-medium text-[15px] leading-[150%]">
    Order Now
  </span>
</button>



</div>

    </div>
  );
};

export default HeroSection;
