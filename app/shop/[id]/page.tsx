"use client";

import React from "react";
import Image from "next/image";
import { useParams } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const products = [
  {
    id: 1,
    name: "Trenton modular sofa_3",
    price: "Rs. 25,000.00",
    image: "/Mask group.png",
    description: "A comfortable modular sofa for modern living spaces.",
  },
  {
    id: 2,
    name: "Granite dining table with dining chair",
    price: "Rs. 25,000.00",
    image: "/Granite dining table with dining chair 1.png",
    description: "Stylish granite dining table with matching chairs.",
  },
  {
    id: 3,
    name: "Outdoor bar table and stool",
    price: "Rs. 25,000.00",
    image: "/Outdoor bar table and stool 1.png",
    description: "Durable bar table set for outdoor spaces.",
  },
  {
    id: 4,
    name: "Plain console with teak mirror",
    price: "Rs. 25,000.00",
    image: "/Plain console with teak mirror 1.png",
    description: "Elegant console with a teak mirror.",
  },
  {
    id: 5,
    name: "Grain coffee table",
    price: "Rs. 15,000.00",
    image: "/Grain coffee table 1.png",
    description: "Minimalistic coffee table for modern living rooms.",
  },
  {
    id: 6,
    name: "Kent coffee table",
    price: "Rs. 225,000.00",
    image: "/Kent coffee table 1.png",
    description: "Sleek and stylish coffee table for your home.",
  },
  {
    id: 7,
    name: "Round coffee table_color 2",
    price: "Rs. 251,000.00",
    image: "/Round coffee table_color 2 1.png",
    description: "Elegant round coffee table for your living space.",
  },
  {
    id: 8,
    name: "Reclaimed teak coffee table",
    price: "Rs. 25,200.00",
    image: "/Reclaimed teak coffee table 1.png",
    description: "Eco-friendly coffee table made of reclaimed teak.",
  },
  {
    id: 9,
    name: "Plain console_",
    price: "Rs. 258,200.00",
    image: "/Plain console_ 1.png",
    description: "Modern console for any space.",
  },
  {
    id: 10,
    name: "Reclaimed teak Sideboardr",
    price: "Rs. 20,000.00",
    image: "/Reclaimed teak Sideboard 1.png",
    description: "Sideboard made of reclaimed teak wood.",
  },
  {
    id: 11,
    name: "SJP_0825",
    price: "Rs. 200,000.00",
    image: "/SJP_0825  1.png",
    description: "A luxurious piece for a sophisticated home.",
  },
  {
    id: 12,
    name: "Bella chair and table",
    price: "Rs. 100,000.00",
    image: "/Bella chair and table 1.png",
    description: "A chic chair and table set.",
  },
  {
    id: 13,
    name: "Granite square side table",
    price: "Rs. 258,800.00",
    image: "/Granite square side table 1.png",
    description: "A durable granite side table.",
  },
  {
    id: 14,
    name: "Asgaard sofa",
    price: "Rs. 250,000.00",
    image: "/Asgaard sofa 1 (1).png",
    description: "Luxurious sofa for your living room.",
  },
  {
    id: 15,
    name: "Maya sofa three seater",
    price: "Rs. 115,000.00",
    image: "/Maya sofa three seater 1.png",
    description: "Comfortable three-seater sofa.",
  },
  {
    id: 16,
    name: "Outdoor sofa set",
    price: "Rs. 244,000.00",
    image: "/Outdoor sofa set 1.png",
    description: "Stylish outdoor sofa set.",
  },
];

const ProductDetail = () => {
  const { id } = useParams();
  {
    /* extraction of product id by url */
  }
  const productId = id ? parseInt(id as string) : null;
  {
    /* conversion of id's number into string*/
  }
  const product = products.find((p) => p.id === productId);
  {
    /* finding product */
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <section>
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
              className="ml-4"
            />
            <h1 className="font-poppins font-medium text-[48px] leading-[72px] text-[#000000] md:mb-4">
              Shop
            </h1>
            <div className="flex justify-center items-center">
              <p className="font-poppins font-medium text-[16px] leading-6 text-[#000000]">
                Home ...{" "}
              </p>
              <p className="font-poppins font-light text-[16px] leading-6 text-[#000000] pl-2">
                Shop
              </p>
            </div>
          </div>
        </div>

        {/* 2nd div (Image section) */}
        <div className="mt-4 hidden md:block">
          <Image src="/Group 63.png" alt="Image" width={1440} height={500} />
        </div>
      </div>

      {/* for products detail */}
      <div className="w-full flex justify-center items-center mt-40">
        <div className="w-full md:w-[60%] flex flex-col md:flex-row items-center md:items-start">
          <img
            src={product.image}
            alt={product.name}
            className="object-contain"
            width={300}
            height={300}
          />
          <div className="md:ml-20 mt-6 text-center md:text-left">
            <h2 className="font-poppins font-semibold text-[24px] leading-9 text-[#000000]">
              {product.name}
            </h2>
            <p className="font-poppins font-normal text-[16px] leading-6 text-[#000000] mt-6">
              {product.description}
            </p>
            <p className="font-poppins font-medium text-[20px] text-[#000000] mt-4">
              {product.price}
            </p>
            <button
              type="submit"
              className="w-[237px] py-3 mt-4 border-[1px] border-[#000000] rounded-[15px] font-poppins font-normal text-[16px] leading-[24px]"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </section>
  );
};

export default ProductDetail;
