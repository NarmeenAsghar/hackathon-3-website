import Header from '@/components/Header'
import React from 'react'
import Image from 'next/image'
import Shopproducts from '@/components/Shopproducts'
import Footer from '@/components/Footer'

function page() {
  return (
    <section className='flex flex-col min-h-screen justify-between items-center w-full'>
      <Header />
      <div className="w-full h-[316px] bg-cover bg-center" style={{ backgroundImage: "url('/Rectangle 1.png')" }}>
        {/* top div */}
        <div className="flex items-center justify-center h-full">
          <div className="text-center p-6">
            <Image src="/Meubel House_Logos-05.png" alt="Image" width={77} height={77} className='ml-4'/>
            <h1 className="font-poppins font-medium text-[48px] leading-[72px] text-[#000000] md:mb-4">Shop</h1>
            <div className='flex justify-center items-center'>
              <p className='font-poppins font-medium text-[16px] leading-6 text-[#000000]'>Home ... </p>
              <p className='font-poppins font-light text-[16px] leading-6 text-[#000000] pl-2'>Shop</p>
            </div>
          </div>
        </div>

        {/* 2nd div (Image section) */}
        <div className='mt-4 hidden md:block'>
          <Image src="/Group 63.png" alt="Image" width={1440} height={500} />
        </div>
      </div>

      {/* Products Section */}
      <Shopproducts />

      {/* Next Page Button Section */}
      <div className='hidden md:flex flex-col md:flex-row justify-center items-center gap-4 mt-10 mb-6'>
        <button className='bg-[#fbebb5] w-[60px] h-[60px] rounded-[4px] font-poppins font-normal text-[20px] leading-[30px] text-[#000000]'>1</button>
        <button className='bg-[#fff9e5] w-[60px] h-[60px] rounded-[4px] font-poppins font-normal text-[20px] leading-[30px] text-[#000000]'>2</button>
        <button className='bg-[#fff9e5] w-[60px] h-[60px] rounded-[4px] font-poppins font-normal text-[20px] leading-[30px] text-[#000000]'>3</button>
        <button className='bg-[#fff9e5] w-[60px] h-[60px] rounded-[4px] font-poppins font-normal text-[20px] leading-[30px] text-[#000000]'>Next</button>
      </div>

      {/* delivery section */}
      <div className="flex flex-col md:flex-row justify-around items-center mt-10 pt-12 mb-6 w-full px-4 bg-[#faf4f4] h-full md:h-[300px]">
        <div className="w-[300px] md:w-[376px] h-[108px] text-center md:text-left mb-10 md:mb-0">
          <h1 className="font-poppins font-medium text-[32px] leading-48px] text-[#000000] mb-4">Free Delivery</h1>
          <p className="font-poppins font-normal text-[20px] leading-[30px] txet-[#9f9f9f]">For all oders over $50, consectetur adipim scing elit.</p>
        </div>

        <div className="w-[300px] md:w-[376px] h-[108px] text-center md:text-left mb-10 md:mb-0">
          <h1 className="font-poppins font-medium text-[32px] leading-48px] text-[#000000] mb-4">90 Days Return</h1>
          <p className="font-poppins font-normal text-[20px] leading-[30px] txet-[#9f9f9f]">If goods have problems, consectetur adipim scing elit.</p>
        </div>

        <div className="w-[300px] md:w-[376px] h-[108px] text-center md:text-left mb-10 md:mb-0">
          <h1 className="font-poppins font-medium text-[32px] leading-48px] text-[#000000] mb-4">Secure Payment</h1>
          <p className="font-poppins font-normal text-[20px] leading-[30px] txet-[#9f9f9f]">100% secure payment, consectetur adipim scing elit.</p>
        </div>
      </div>

      <Footer />
    </section>
  )
}

export default page
