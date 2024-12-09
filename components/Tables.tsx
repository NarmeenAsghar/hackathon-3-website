import React from "react";
import Image from "next/image";

function Tables() {
  return (
    <div className="w-full h-full md:h-[672px] flex flex-col sm:flex-row md:flex-row justify-center items-center mt-20 md:mt-0 overflow-hidden">
      {/* content */}
      <div className="w-full sm:w-[500px] md:w-[500px] h-[562px]">
        {/* product 1 */}
        <div className="relative flex flex-col justify-center items-center sm:p-10 ">
          <Image
            src="/Granite square side table 1.png"
            alt="Product Image"
            width={1092}
            height={1641}
            className="object-contain mr-16 sm:mr-24 md:mr-0"
          />
          <div className="flex flex-col md:items-start sm:items-center md:justify-start md:mr-40">
            <h2 className="text-[30px] sm:text-[28px] md:text-[36px] font-poppins font-medium leading-[54px] text-[#000000]">
              Side table
            </h2>
            <button className="md:mt-4 mb-10 md:mb-0 text-[18px] sm:text-[20px] md:text-[24px] font-poppins font-medium leading-9 text-[#000000] py-2 border-b-[0.5px] border-[#000000]">
              View More
            </button>
          </div>
        </div>
      </div>

      {/* product 2 */}
      <div className="w-full sm:w-[500px] md:w-[500px] h-[562px]">
        <div className="relative flex flex-col justify-center items-center sm:p-10">
          <Image
            src="/Cloud sofa three seater + ottoman_3 1.png"
            alt="Product Image"
            width={1585}
            height={1055}
            className="object-contain mr-28 sm:mr-24 md:mr-0"
          />
          <div className="flex flex-col md:items-start sm:items-center md:justify-start md:mr-40 md:mt-5 mt-0 sm:mt-4">
            <h2 className="text-[30px] sm:text-[28px] md:text-[36px] font-poppins font-medium leading-[54px] text-[#000000]">
              Side table
            </h2>
            <button className="md:mt-4 text-[18px] sm:text-[20px] md:text-[24px] font-poppins font-medium leading-9 text-[#000000] py-2 border-b-[0.5px] border-[#000000]">
              View More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tables;
