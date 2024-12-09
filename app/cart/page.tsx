import React from "react";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { FaTrash } from "react-icons/fa";
import Link from "next/link";

function page() {
  return (
    <section className="flex flex-col min-h-screen justify-between items-center w-full overflow-hidden">
      <Header />
      <div
        className="w-full h-[316px] bg-cover bg-center"
        style={{ backgroundImage: "url('/Rectangle 1.png')" }}
      >
        {/* top div */}
        <div className="flex items-center justify-center h-full">
          <div className="text-center p-6">
            <Image
              src="/Meubel House_Logos-05.png"
              alt="Image"
              width={77}
              height={77}
              className="ml-2"
            />
            <h1 className="font-poppins font-medium text-[48px] leading-[72px] text-[#000000] md:mb-4">
              Cart
            </h1>
            <div className="flex justify-center items-center">
              <p className="font-poppins font-medium text-[16px] leading-6 text-[#000000]">
                Home ...
              </p>
              <p className="font-poppins font-light text-[16px] leading-6 text-[#000000] pl-2">
                Cart
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* cart detail section */}
      <div className="flex flex-col md:flex-row justify-between my-10 ">
      {/* Cart Items */}
      <div className="w-full md:w-[700px] h-auto">
        <table className="min-w-full table-auto border-collapse">
          <thead>
            <tr className="bg-[#fff9e5]">
              <th className="md:px-4 md:py-4 text-left"></th>
              <th className="px-4 py-4 text-left font-poppins font-medium text-[10px] md:text-[16px] leading-6 text-[#000000]">
                Product
              </th>
              <th className="px-4 py-4 text-left font-poppins font-medium text-[10px] md:text-[16px] leading-6 text-[#000000]">
                Price
              </th>
              <th className="px-4 py-4 text-left font-poppins font-medium text-[10px] md:text-[16px] leading-6 text-[#000000]">
                Quantity
              </th>
              <th className="px-4 py-4 text-left font-poppins font-medium text-[10px] md:text-[16px] leading-6 text-[#000000]">
                Subtotal
              </th>
              <th className="px-4 py-4 text-left"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4 py-6">
                <Image
                  src="/Asgaard sofa 1 (1).png"
                  alt="Product 1"
                  width={100}
                  height={100}
                />
              </td>
              <td className="px-4 py-2 font-poppins font-normal text-[10px] md:text-[16px] leading-6 text-[#9f9f9f]">
                Asgaard sofa
              </td>
              <td className="px-4 py-2 font-poppins font-normal text-[10px] md:text-[16px] leading-6 text-[#9f9f9f]">
                Rs. 250,000.00
              </td>
              <td className="px-4 py-2 font-poppins font-normal text-[10px] md:text-[16px] leading-6 text-[#9f9f9f]">
                1
              </td>
              <td className="px-4 py-2 font-poppins font-normal text-[10px] md:text-[16px] leading-6 text-[#9f9f9f]">
                Rs. 250,000.00
              </td>
              <td>
                <button>
                  <FaTrash color="#fbebb5" />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Cart Totals */}
      <div className="w-[250px] md:w-[300px] bg-[#fff9e5] p-6 md:ml-8 ml-14 mt-8 md:mt-0">
        <div className="mb-4">
          <h1 className="text-center font-poppins font-semibold text-[32px] leading-[48px] text-[#000000] mb-6">
            Cart Total
          </h1>
          <div className="flex justify-between items-center mb-4">
            <span className="font-poppins font-medium text-[10px] md:text-[16px] leading-6 text-[#000000]">
              Subtotal:
            </span>
            <span className="font-poppins font-normal text-[10px] md:text-[16px] leading-6 text-[#9f9f9f]">
              Rs. 250,000.00
            </span>
          </div>
          <div className="flex justify-between items-center mb-4">
            <span className="font-poppins font-medium text-[10px] md:text-[16px] leading-6 text-[#000000]">
              Total:
            </span>
            <span className="font-poppins font-medium text-[10px] md:text-[20px] leading-[30px] text-[#b88e2f]">
              Rs. 250,000.00
            </span>
          </div>
        </div>
        <button className="w-full sm:w-[200px] py-3 md:ml-6 sm:mr-2 border-[1px] border-[#000000] items-center rounded-[15px] font-poppins font-normal text-[16px] leading-[24px]">
        <Link href="/checkout">
          Check Out
        </Link>
        </button>
      </div>
    </div>

      {/* delivery section */}
      <div className="flex flex-col md:flex-row justify-around items-center mt-10 pt-12 mb-6 w-full px-4 bg-[#faf4f4] h-full md:h-[300px]">
        <div className="w-[300px] md:w-[376px] h-[108px] text-center md:text-left mb-10 md:mb-0">
          <h1 className="font-poppins font-medium text-[32px] leading-48px] text-[#000000] mb-4">
            Free Delivery
          </h1>
          <p className="font-poppins font-normal text-[20px] leading-[30px] txet-[#9f9f9f]">
            For all oders over $50, consectetur adipim scing elit.
          </p>
        </div>

        <div className="w-[300px] md:w-[376px] h-[108px] text-center md:text-left mb-10 md:mb-0">
          <h1 className="font-poppins font-medium text-[32px] leading-48px] text-[#000000] mb-4">
            90 Days Return
          </h1>
          <p className="font-poppins font-normal text-[20px] leading-[30px] txet-[#9f9f9f]">
            If goods have problems, consectetur adipim scing elit.
          </p>
        </div>

        <div className="w-[300px] md:w-[376px] h-[108px] text-center md:text-left mb-10 md:mb-0">
          <h1 className="font-poppins font-medium text-[32px] leading-48px] text-[#000000] mb-4">
            Secure Payment
          </h1>
          <p className="font-poppins font-normal text-[20px] leading-[30px] txet-[#9f9f9f]">
            100% secure payment, consectetur adipim scing elit.
          </p>
        </div>
      </div>

      <Footer />
    </section>
  );
}

export default page;
