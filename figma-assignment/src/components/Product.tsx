import React from 'react';
import Image from 'next/image';

const Product = () => {
  return (
    <div>
      {/* Section Heading */}
      <div className="absolute w-[742px] h-[58px] left-[80px] top-[1870px] 
                      font-inter font-semibold text-[48px] leading-[58px] 
                      tracking-[-0.02em] text-[#000000]">
        Our Premium Fruit Collection
      </div>

      {/* Product Layout */}
      <div className="absolute w-[742px] h-[735px] left-[80px] top-[1976px] flex gap-[24px]">
        {/* First Column (Product 3) */}
        <div className="w-[742px] h-[735px] flex flex-col items-start gap-[20px]">
          <div className="w-full h-[1000px] relative bg-[#F7F7F7] rounded-[8px]">
            <Image 
              src="/image (3).png" 
              alt="Guava Pyramid" 
              className="w-full h-full object-cover rounded-[8px]" 
              width={742} 
              height={1000}
            />
          </div>
          <div className="w-[742px] h-[15px] text-black font-inter font-medium text-[24px] leading-[150%]">
            Guava Pyramid
          </div>
          <div className="w-[742px] h-[15px] text-[#828282] font-inter font-normal text-[20px] leading-[150%]">
            A stunning pyramid of perfectly ripe guavas, handpicked for maximum freshness
          </div>
          <div className="w-[742px] h-[12px] text-[#000000] font-inter font-medium text-[20px] leading-[150%]">
            $18.99
          </div>
        </div>

        {/* Second Column (Product 1 and Product 2) */}
        <div className="w-[563px] flex flex-col items-start gap-[24px]">
          {/* Product 1 */}
          <div className="w-full flex flex-col items-start gap-[20px]">
            <div className="w-[500px] h-[300px] relative bg-[#F7F7F7] rounded-[8px]">
              <Image 
                src="/image (1).png" 
                alt="Guava Duo" 
                className="w-full h-full object-cover rounded-[8px]" 
                width={500} 
                height={300}
              />
            </div>
            <div className="w-[563px] h-[15px] text-black font-inter font-medium text-[24px] leading-[150%]">
              Guava Duo
            </div>
            <div className="w-[563px] h-[15px] text-[#828282] font-inter font-normal text-[20px] leading-[150%]">
              Fresh, ripe guavas bursting with flavor and nutrients.
            </div>
            <div className="w-[563px] h-[13px] text-[#000000] font-inter font-medium text-[20px] leading-[150%]">
              $8.99
            </div>
          </div>

          {/* Product 2 */}
          <div className="w-full flex flex-col items-start gap-[20px]">
            <div className="w-[500px] h-[300px] relative bg-[#F7F7F7] rounded-[8px]">
              <Image 
                src="/image (2).png" 
                alt="Tropical Delight" 
                className="w-full h-full object-cover rounded-[8px]" 
                width={500} 
                height={300}
              />
            </div>
            <div className="w-[563px] h-[15px] text-black font-inter font-medium text-[24px] leading-[150%]">
              Tropical Delight
            </div>
            <div className="w-[563px] h-[15px] text-[#828282] font-inter font-normal text-[20px] leading-[150%]">
              Exotic brown fruit, sweet and tangy for a refreshing treat.
            </div>
            <div className="w-[563px] h-[13px] text-[#000000] font-inter font-medium text-[20px] leading-[150%]">
              $12.99
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
