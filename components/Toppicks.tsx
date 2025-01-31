"use client"
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import Link from "next/link";

interface Product {
  productTitle: string;
  productImage: {
    asset: {
      url: string;
    };
  };
  price: string;
}

interface ToppicksData {
  title: string;
  description: string;
  products: Product[];
  viewMoreText: string | null;
}

const productMargins = ["mt-0", "mt-6", "mt-0", "mt-10"];
const productTitle = ["mt-2", "mt-9", "mt-0", "mt-5"];

const query = async (): Promise<ToppicksData> => {
  const res = await client.fetch(`
    *[_type == "toppicks"][0] {
      title,
      description,
      products[] {
        productTitle,
        productImage {
          asset -> {
            url
          }
        },
        price
      },
      viewMoreText
    }
  `);
  return res;
};

function Toppicks() {
  const [data, setData] = useState<ToppicksData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedData = await query();
      setData(fetchedData);
    };

    fetchData();
  }, []); 
  
  if (!data) {
    return <div className="w-full h-full flex justify-center items-center"></div>;
  }

  return (
    <div className="w-full flex flex-col justify-center items-center mt-10 mb-20 overflow-x-hidden">
      {/* Main heading */}
      <h1 className="font-poppins font-medium text-[36px] leading-[54px] text-[#000000] mb-4">
        {data.title}
      </h1>
      <p className="font-poppins font-medium text-[16px] leading-6 text-[#9f9f9f] mb-6 px-8 text-center">
        {data.description}
      </p>

      {/* Products section */}
      <div className="w-full flex flex-wrap justify-center gap-4 md:gap-6 overflow-y-auto md:overflow-y-visible md:max-h-full max-h-[300px]">
        {data.products.map((product: Product, index: number) => (
          <div
            key={index}
            className={`w-full md:w-[250px] h-auto flex flex-col items-center md:items-start ${productMargins[index]}`}
          >
            <Image
              src={product.productImage.asset.url}
              alt={product.productTitle}
              width={200}
              height={200}
              className="object-contain"
            />
            <h3
              className={`font-poppins font-normal text-[16px] leading-6 text-[#000000] mt-2 ${productTitle[index]}`}
            >
              {product.productTitle}
            </h3>
            <p className="font-poppins font-medium text-[24px] leading-9 text-[#000000]">
              {product.price}
            </p>
          </div>
        ))}
      </div>

      {/* View More Button */}
      <Link href="/shop">
        <button className="md:mt-14 mt-8 mb-10 md:mb-0 bg-gradient-to-r from-teal-600 to-gray-700 text-white font-poppins font-semibold text-xl py-3 px-8 rounded-lg">
          {data.viewMoreText}
        </button>
      </Link>
    </div>
  );
}

export default Toppicks;
