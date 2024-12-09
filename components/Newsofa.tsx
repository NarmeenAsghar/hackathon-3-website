import React from 'react'
import Image from 'next/image'

function Newsofa() {
  return (
    <section className="overflow-hidden">
      <div className="w-full max-w-[1440px] max-h-[900px] flex flex-col md:flex-row justify-center md:justify-around items-center mt-0 sm:mt-10 md:mt-0">

        {/* for image */}
        <div className="md:mt-0 order-2 md:order-1">
          <Image src="/Asgaard sofa 1 (1).png" alt="Image" width={853} height={1000} />
        </div>

        {/* for heading and button*/}
        <div className="md:w-[440px] md:h-[192px] mt-10 md:mt-0 flex flex-col justify-center items-center order-1 md:order-2">
            <h2 className='font-poppins font-medium text-[24px] leading-9 text-[#000000]'>New Arrivals</h2>
          <h1 className="font-poppins font-bold text-[35px] md:text-[48px] leading-[72px] text-[#000000] pb-6 md:pb-8">
          Asgaard sofa
          </h1>
          <button className="font-poppins font-normal text-[20px] leading-[30px] text-[#000000] border-[1px] border-[#000000] rounded-[4px] w-[200px] h-[60px] md:w-[255px] md:h-[64px]">
          Order Now
          </button>
        </div>

      </div>
    </section>
  )
}

export default Newsofa
