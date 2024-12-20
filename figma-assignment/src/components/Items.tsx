import React from "react";
import Image from "next/image";

const Items = () => {
  return (
    <div>
      {/* First Image */}
      <div className="absolute left-[5.55%] right-[53.68%] top-[1320px] bg-[#F7F7F7] rounded-[8px]">
        <Image 
          src="/image.png" 
          alt="Sweet Guava"  // Updated alt text
          className="w-full h-full object-cover rounded-[8px]" 
          width={400} 
          height={400}
        />
      </div>

      {/* First Copy */}
      <div className="absolute flex flex-col justify-center items-start gap-[24px] left-[5.55%] right-[60.82%] top-[906px]">
        <h1 className="text-black font-inter font-semibold text-[40px] leading-[120%]">
          Sweet Guava
        </h1>
        <p className="text-[#828282] font-inter font-normal text-[24px] leading-[150%]">
        &rdquo;Sweet and aromatic guava, full of flavor and a rich source of vitamin C. &rdquo;
        </p>
        <button className="w-[125px] h-[60px] flex items-center justify-center gap-[8px] bg-black shadow-[0px_1px_2px_rgba(0,0,0,0.05)] rounded-[8px] px-[24px] py-[12px] hover:bg-gray-800 hover:scale-105 hover:shadow-lg transition-all duration-300">
          <span className="text-white">Shop Now</span>
        </button>

        <button className="absolute w-[255px] h-[60px] left-[141px] top-[168px] flex items-center justify-center px-[24px] py-[12px] gap-[8px] bg-[#E6E6E6] shadow-[0px_1px_2px_rgba(0,0,0,0.05)] rounded-[8px] hover:bg-gray-300 hover:scale-105 hover:shadow-lg transition-all duration-300">
          <span className="text-black font-inter font-medium text-[24px] leading-[150%] border-[2px] bg-transparent shadow-[0px_1px_2px_rgba(0,0,0,0.05)] rounded-[8px] hover:text-white hover:bg-black hover:border-black">
            Learn More
          </span>
        </button>
      </div>

      {/* Second Copy */}
      <div className="absolute flex flex-col justify-center items-start gap-[24px] left-[58.53%] right-[5.69%] top-[1406px]">
        <h1 className="text-black font-inter font-semibold text-[40px] leading-[120%]">
          Juicy Watermelon
        </h1>
        <p className="text-[#828282] font-inter font-normal text-[24px] leading-[150%]">
        &rdquo;Fresh, juicy watermelon packed with sweetness and hydration in every bite.&rdquo;
        </p>
        <button className="w-[125px] h-[60px] flex items-center justify-center gap-[8px] bg-black shadow-[0px_1px_2px_rgba(0,0,0,0.05)] rounded-[8px] px-[24px] py-[12px] hover:bg-gray-800 hover:scale-105 hover:shadow-lg transition-all duration-300">
          <span className="text-white">Shop Now</span>
        </button>

        <button className="absolute w-[255px] h-[60px] left-[141px] top-[168px] flex items-center justify-center px-[24px] py-[12px] gap-[8px] bg-[#E6E6E6] shadow-[0px_1px_2px_rgba(0,0,0,0.05)] rounded-[8px] hover:bg-gray-300 hover:scale-105 hover:shadow-lg transition-all duration-300">
          <span className="text-black font-inter font-medium text-[24px] leading-[150%] border-[2px] bg-transparent shadow-[0px_1px_2px_rgba(0,0,0,0.05)] rounded-[8px] hover:text-white hover:bg-black hover:border-black">
            Learn More
          </span>
        </button>
      </div>

      {/* Second Image */}
      <div className="absolute left-[51.04%] right-[5.69%] top-[840px] bg-[#F7F7F7] rounded-[8px]">
        <Image 
          src="/image (1).png" 
          alt="Juicy Watermelon"  // Updated alt text
          className="w-full h-full object-cover rounded-[8px]" 
          width={400} 
          height={400}
        />
      </div>
    </div>
  );
};

export default Items;
