import React from 'react';

const Product = () => {
  return (
    <div>
      {/* Section Heading */}
      <div className="absolute w-[625px] h-[58px] left-[80px] top-[2989px] 
                      font-inter font-semibold text-[42px] leading-[58px] 
                      tracking-[-0.02em] text-[#000000]">
       FreshPick - Taste the Freshness
      </div>

      {/* First List */}
      <div className="absolute flex flex-col items-start gap-[48px] h-[396px] left-[5.55%] right-[58.74%] top-[3095px]">
      <div className="w-[32px] h-[0.1px] flex-none order-0 flex-grow-0">
<span>🌍</span>
</div>
<div className="w-[515px] h-[0.1px] font-inter font-medium text-[24px] leading-[150%] text-black flex-none order-1 self-stretch flex-grow-0">
Worldwide Shipping
</div>
<div className="w-[515px] h-[90px] font-inter font-normal text-[20px] leading-[150%] text-[#828282] flex items-center flex-none order-2 self-stretch flex-grow-0">
FreshPick delivers our handpicked fruits to your door, no matter where you are. Enjoy the taste of freshness wherever you live!</div>
 </div>

      {/* Second List */}
      <div className="absolute flex flex-col items-start gap-[48px] h-[396px] left-[58.6%] right-[5.69%] top-[3095px]">
      <div className="w-[32px] h-[0.1px] flex-none order-0 flex-grow-0">
<span>📞</span>
</div>
<div className="w-[515px] h-[0.1px] font-inter font-medium text-[24px] leading-[150%] text-black flex-none order-1 self-stretch flex-grow-0">
Get In Touch
</div>
<div className="w-[515px] h-[90px] font-inter font-normal text-[20px] leading-[150%] text-[#828282] flex items-center flex-none order-2 self-stretch flex-grow-0">
Have any questions or need assistance? Our customer service team is ready to help you with any inquiries.</div>
      </div>
     {/* Third List */}
<div className="absolute flex flex-col items-start gap-[48px] h-[396px] left-[5.55%] right-[58.74%] top-[3350px]">
  <div className="w-[32px] h-[0.1px] flex-none order-0 flex-grow-0">
    <span>🔒</span>
  </div>
  <div className="w-[515px] h-[0.1px] font-inter font-medium text-[24px] leading-[150%] text-black flex-none order-1 self-stretch flex-grow-0">
  Secure Shopping
  </div>
  <div className="w-[515px] h-[90px] font-inter font-normal text-[20px] leading-[150%] text-[#828282] flex items-center flex-none order-2 self-stretch flex-grow-0">
  Your privacy and safety are our top priority. Shop with confidence knowing that your information is always secure.  </div>
</div>

{/* Fourth List */}
<div className="absolute flex flex-col items-start gap-[48px] h-[396px] left-[58.6%] right-[5.69%] top-[3350px]">
  <div className="w-[32px] h-[0.1px] flex-none order-0 flex-grow-0">
    <span>📅</span>
  </div>
  <div className="w-[515px] h-[0.1px] font-inter font-medium text-[24px] leading-[150%] text-black flex-none order-1 self-stretch flex-grow-0">
  Timely Delivery
  </div>
  <div className="w-[515px] h-[90px] font-inter font-normal text-[20px] leading-[150%] text-[#828282] flex items-center flex-none order-2 self-stretch flex-grow-0">
  Expect your fresh fruits to arrive on time, every time. We ensure fast and reliable delivery for all our customers.  </div>
</div>



    </div>
  );
};

export default Product;