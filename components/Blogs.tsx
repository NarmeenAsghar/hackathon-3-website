import React from "react";
import Image from "next/image";
import { FaRegClock, FaCalendarAlt } from "react-icons/fa";
import Link from "next/link";

function Blogs() {
  return (
    <div className="w-full flex flex-col items-center py-8">
      {/* heading and paragraph*/}
      <h2 className="font-poppins font-medium text-[36px] leading-[54px] text-center text-[#000000] mb-4">
        Our Blogs
      </h2>

      <p className="text-center font-poppins font-medium text-[16px] leading-6 text-[#9f9f9f] mb-8">
        Find a bright ideal to suit your taste with our great selection
      </p>

      {/* pproducts section */}
      <div className="flex w-full flex-wrap justify-center gap-6 mb-8 mt-8 overflow-y-auto md:overflow-y-visible md:max-h-full max-h-[560px]">
        {/* product 1 */}
        <div className="w-[325px] md:w-[393px] h-[554px] flex flex-col items-center">
          <Image
            src="/Rectangle 13.png"
            alt="Product 1"
            width={393}
            height={393}
            className="object-contain"
          />
          <h3 className="text-center font-poppins font-normal text-[20px] leading-[30px] text-[#000000] mt-4">
            Going all-in with millennial design
          </h3>
          <button className="md:mt-4 mb-4 md:mb-0 text-[24px] font-poppins font-medium leading-9 text-[#000000] py-2 border-b-[0.5px] border-[#000000]">
            Read More
          </button>
          <div className="flex items-center md:mt-6">
            <FaRegClock className="w-5 h-5 text-[#000000]" />
            <span className="ml-2 font-poppins font-light text-[16px] leading-6 text-[#000000] pr-4">
              5 min
            </span>
            <FaCalendarAlt className="w-5 h-5 text-[#000000]" />
            <span className="ml-2 font-poppins font-light text-[16px] leading-6 text-[#000000]">
              12 <sup>th</sup> Oct 2022
            </span>
          </div>
        </div>

        {/* product 2 */}
        <div className="w-[325px] md:w-[393px] h-[554px] flex flex-col items-center">
          <Image
            src="/Rectangle 14.png"
            alt="Product 2"
            width={393}
            height={393}
            className="object-contain"
          />
          <h3 className="text-center font-poppins font-normal text-[20px] leading-[30px] text-[#000000] mt-4">
            Going all-in with millennial design
          </h3>
          <button className="md:mt-4 mb-4 md:mb-0 text-[24px] font-poppins font-medium leading-9 text-[#000000] py-2 border-b-[0.5px] border-[#000000]">
            Read More
          </button>
          <div className="flex items-center md:mt-6">
            <FaRegClock className="w-5 h-5 text-[#000000]" />
            <span className="ml-2 font-poppins font-light text-[16px] leading-6 text-[#000000] pr-4">
              5 min
            </span>
            <FaCalendarAlt className="w-5 h-5 text-[#000000]" />
            <span className="ml-2 font-poppins font-light text-[16px] leading-6 text-[#000000]">
              12 <sup>th</sup> Oct 2022
            </span>
          </div>
        </div>

        {/* product 3 */}
        <div className="w-[325px] md:w-[393px] h-[554px] flex flex-col items-center">
          <Image
            src="/Rectangle 15.png"
            alt="Product 3"
            width={393}
            height={393}
            className="object-contain"
          />
          <h3 className="text-center font-poppins font-normal text-[20px] leading-[30px] text-[#000000] mt-4">
            Going all-in with millennial design
          </h3>
          <button className="md:mt-4 mb-4 md:mb-0 text-[24px] font-poppins font-medium leading-9 text-[#000000] py-2 border-b-[0.5px] border-[#000000]">
            Read More
          </button>
          <div className="flex items-center md:mt-6">
            <FaRegClock className="w-5 h-5 text-[#000000]" />
            <span className="ml-2 font-poppins font-light text-[16px] leading-6 text-[#000000] pr-4">
              5 min
            </span>
            <FaCalendarAlt className="w-5 h-5 text-[#000000]" />
            <span className="ml-2 font-poppins font-light text-[16px] leading-6 text-[#000000]">
              12 <sup>th</sup> Oct 2022
            </span>
          </div>
        </div>
      </div>

      {/* Button */}
      <button className="md:mt-8 mb-10 md:mb-0 text-[20px] font-poppins font-medium leading-[30px] text-[#000000] py-2 border-b-[0.5px] border-[#000000]">
        <Link href="/blog">
          View All Post
        </Link>
      </button>
    </div>
  );
}

export default Blogs;
