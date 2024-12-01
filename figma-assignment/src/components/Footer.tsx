import React from 'react'
import { FaInstagram, FaYoutube, FaLinkedin, FaFacebook } from 'react-icons/fa';




const Footer = () => {
  return (
    <div className="absolute h-[264px] left-0 right-[2px] top-[3641px] bg-white">
<div className="absolute w-[1280px] h-0 left-[80px] top-[1px] border border-[#E6E6E6]"></div>
<div className="absolute w-[113px] h-[36px] left-[80px] top-[52px] 
                font-inter font-normal text-[24px] leading-[150%] 
                flex items-center text-[#000000]">
 FreshPick.com
</div>



<div className="absolute flex flex-row items-start gap-[8px] w-[184px] h-[40px] left-[80px] top-[176px]">
      {/* Instagram */}
      <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-[24px] text-[#000000] hover:text-[#E1306C]">
        <FaInstagram />
      </a>
      
      {/* YouTube */}
      <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="text-[24px] text-[#000000] hover:text-[#FF0000]">
        <FaYoutube />
      </a>
      
      {/* LinkedIn */}
      <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-[24px] text-[#000000] hover:text-[#0077B5]">
        <FaLinkedin />
      </a>
      
      {/* Facebook */}
      <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-[24px] text-[#000000] hover:text-[#1877F2]">
        <FaFacebook />
      </a>
    </div>
    <div className="absolute flex flex-col justify-center items-end gap-[24px] w-[187px] h-[168px] right-[80px] top-[48px]">
    <div className="w-[100%] h-[30px] font-bold text-[20px]">About US</div>
  <div className="w-[100%] h-[30px] ">Our Story</div>
  <div className="w-[100%] h-[30px] ">Mission & Vision</div>
  <div className="w-[100%] h-[30px] ">Careers</div>
</div>
<div className="absolute flex flex-col justify-center items-end gap-[24px] w-[187px] h-[168px] right-[298px] top-[48px]">
<div className="w-[100%] h-[30px] font-bold text-[20px] ">Shop</div>
<div className="w-[100%] h-[30px] ">Products</div>
  <div className="w-[100%] h-[30px] ">Best Sellers</div>
  <div className="w-[100%] h-[30px] ">New Arrivals</div>
</div>
<div className="absolute flex flex-col justify-center items-end gap-[24px] w-[187px] h-[168px] right-[517px] top-[48px]">
<div className="w-[100%] h-[30px] font-bold text-[20px]">Customer Support</div>
  <div className="w-[100%] h-[30px] ">Contact US</div>
  <div className="w-[100%] h-[30px] ">FAQs</div>
  <div className="w-[100%] h-[30px] ">Returns & Exchanges</div>
</div>





    </div>

  )
}

export default Footer