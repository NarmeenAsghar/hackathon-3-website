import React from "react";
import Image from "next/image";

function Toppicks() {
  return (
    <div className="w-full flex flex-col justify-center items-center mt-10 mb-20 overflow-x-hidden">
      {/* main heading */}
      <h1 className="font-poppins font-medium text-[36px] leading-[54px] text-[#000000] mb-4">
        Top Picks For You
      </h1>
      <p className="font-poppins font-medium text-[16px] leading-6 text-[#9f9f9f] mb-6 px-8  text-center">
        Find a bright ideal to suit your taste with our great selection of
        suspension, floor and table lights.
      </p>

      {/* products section*/}
      <div className="w-full flex flex-wrap justify-center gap-4 md:gap-6 overflow-y-auto md:overflow-y-visible md:max-h-full max-h-[300px]">
        {/* product 1 */}
        <div className="w-full md:w-[250px] h-auto flex flex-col items-center md:items-start mt-4">
          <Image
            src="/Mask group.png"
            alt="Product 1"
            width={200}
            height={200}
            className="object-contain"
          />
          <h3 className="font-poppins font-normal text-[16px] leading-6 text-[#000000] mt-2">
            Trenton modular sofa_3
          </h3>
          <p className="font-poppins font-medium text-[24px] leading-9 text-[#000000] mt-6">
            Rs. 25,000.00
          </p>
        </div>

        {/* product 2 */}
        <div className="w-full md:w-[250px] h-auto flex flex-col items-center md:items-start mt-6">
          <Image
            src="/Granite dining table with dining chair 1.png"
            alt="Product 2"
            width={200}
            height={200}
            className="object-contain pt-12"
          />
          <h3 className="font-poppins font-normal text-[16px] leading-6 text-[#000000] mt-2">
            Granite dining table with dining chair
          </h3>
          <p className="font-poppins font-medium text-[24px] leading-9 text-[#000000]">
            Rs. 25,000.00
          </p>
        </div>

        {/* product 3 */}
        <div className="w-full md:w-[250px] h-auto flex flex-col items-center md:items-start">
          <Image
            src="/Outdoor bar table and stool 1.png"
            alt="Product 3"
            width={200}
            height={200}
            className="object-contain pt-5"
          />
          <h3 className="font-poppins font-normal text-[16px] leading-6 text-[#000000] mt-2">
            Outdoor bar table and stool
          </h3>
          <p className="font-poppins font-medium text-[24px] leading-9 text-[#000000] mt-6">
            Rs. 25,000.00
          </p>
        </div>

        {/* product 4 */}
        <div className="w-full md:w-[250px] h-auto flex flex-col items-center md:items-start mt-6">
          <Image
            src="/Plain console with teak mirror 1.png"
            alt="Product 4"
            width={200}
            height={200}
            className="object-contain pt-12"
          />
          <h3 className="font-poppins font-normal text-[16px] leading-6 text-[#000000] mt-2">
            Plain console with teak mirror
          </h3>
          <p className="font-poppins font-medium text-[24px] leading-9 text-[#000000] mt-6">
            Rs. 25,000.00
          </p>
        </div>
      </div>

      {/* Button */}
      <button className="md:mt-14 mt-8 mb-10 md:mb-0 text-[20px] font-poppins font-medium leading-[30px] text-[#000000]">
        View More
      </button>
    </div>
  );
}

export default Toppicks;
