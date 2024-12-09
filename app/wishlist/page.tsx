"use client"
import React from "react";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

function page() {
  return (
    <section className="flex flex-col min-h-screen justify-between items-center w-full overflow-hidden">
      <Header />
      
      {/* Page Not Found Section */}
      <div className="w-full h-[316px] bg-cover bg-center" style={{ backgroundImage: "url('/Rectangle 1.png')" }}>
        {/* top div */}
        <div className="flex items-center justify-center h-full">
          <div className="text-center p-6">
            <Image
              src="/Meubel House_Logos-05.png"
              alt="Image"
              width={77}
              height={77}
              className="ml-10"
            />
            <h1 className="font-poppins font-medium text-[48px] leading-[72px] text-[#000000] md:mb-4">
              Wishlist
            </h1>
            <div className="flex justify-center items-center">
              <p className="font-poppins font-medium text-[16px] leading-6 text-[#000000]">
                Home ...{" "}
              </p>
              <p className="font-poppins font-light text-[16px] leading-6 text-[#000000] pl-2">
                Wishlist
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section with Information */}
      <div className="md:h-[200px] flex justify-center items-center mt-20 md:mt-20 px-20">
        <div className="w-full max-w-[1440px]">
          <h1 className="text-center font-poppins font-bold text-[36px] leading-[54px] text-[#000000]">
            Oops! The Page You Are Looking For Doesn`t Exist
          </h1>
          <p className="text-center font-poppins font-normal text-[16px] leading-6 text-[#9f9f9f] mt-4 mb-8">
            It seems you`ve stumbled upon a missing page. Please check the URL or return to the homepage for more options.
          </p>

          <div className="flex justify-center items-center mt-8">
            <button
              className="px-8 py-3 border-[1px] border-[#000000] rounded-[15px] font-poppins font-normal text-[16px] md:text-[20px] leading-[30px]">
              <Link href="/">Go To Home Page</Link>
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </section>
  );
}

export default page;
