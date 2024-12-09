import React from 'react'

function Instagram() {
  return (
    <div className="w-full h-[450px] bg-cover bg-center" style={{ backgroundImage: "url('/Rectangle 17.png')" }}>
      {/* center section */}
      <div className="flex items-center justify-center h-full">
        <div className="text-center p-6">
          <h1 className="font-poppins font-bold text-[45px] md:text-[60px] leading-[90px] text-[#000000] md:mb-4">Our Instagram</h1>
          <p className="font-poppins font-normal text-[16px] md:text-[20px] leading-[30px] text-[#000000] mb-6">Follow our store on Instagram</p>
          <button className="px-6 py-2 bg-[#f4f4f4] rounded-full shadow-lg w-[200px] md:w-[255px] h-[64px] font-poppins font-normal text-[20px] leading-[30px] text-[#000000]">
          Follow Us
          </button>
        </div>
      </div>
    </div>
  )
}

export default Instagram
