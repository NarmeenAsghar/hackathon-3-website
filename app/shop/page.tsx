"use client";
import React from "react";
import dynamic from "next/dynamic";
import Image from "next/image";

const Header = dynamic(() => import('@/components/Header'));
const Shopproducts = dynamic(() => import('@/components/Shopproducts'));
const Footer = dynamic(() => import('@/components/Footer'));

function page() {
  return (
    <section className="flex flex-col min-h-screen justify-between items-center w-full">
      <Header />
      <div className="w-full h-[316px] bg-cover bg-center" style={{ backgroundImage: "url('/Rectangle 1.png')" }}>
        {/* top div */}
        
          <div className="text-center p-6">
            <Image src="/Meubel House_Logos-05.png" alt="Image" width={77} height={77} className="ml-4" />
            <h1 className="font-poppins font-medium text-[48px] leading-[72px] text-[#000000] md:mb-4">Shop</h1>
            <div className="flex justify-center items-center">
              <p className="font-poppins font-medium text-[16px] leading-6 text-[#000000]">Home ... </p>
              <p className="font-poppins font-light text-[16px] leading-6 text-[#000000] pl-2">Shop</p>
            </div>
          </div>
        </div>

      {/* Products Section */}
      <Shopproducts />

      {/* Delivery section */}
      <div className="flex flex-col md:flex-row justify-around items-center mt-10 pt-6 mb-6 w-full px-4 bg-[#faf4f4] h-full md:h-[300px]">
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
  );
}

export default page;
