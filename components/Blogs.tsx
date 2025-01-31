"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FaRegClock, FaCalendarAlt } from "react-icons/fa";
import Link from "next/link";
import { client } from "@/sanity/lib/client";

interface Product {
  image: {
    asset: {
      url: string;
    };
  };
  title: string;
  readMore: string;
  readTime: string;
  publishDate: string;
}

interface Blog {
  _id: string;
  title: string;
  description: string;
  products: Product[];
  viewAllPost: string;
}

const query = async (): Promise<Blog[]> => {
  const res = await client.fetch(`
    *[_type == "blog"]{
      _id,
      title,
      description,
      products[] {
        image {
          asset -> {
            _id,
            url
          }
        },
        title,
        readMore,
        readTime,
        publishDate
      },
      viewAllPost
    }
  `);
  return res;
};

function Blogs() {
  const [data, setData] = useState<Blog[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const blogData = await query();
      setData(blogData);
    };

    fetchData();
  }, []); 

  return (
    <div className="w-full flex flex-col items-center py-8">
      {/* Heading and paragraph */}
      <h2 className="font-poppins font-medium text-[36px] leading-[54px] text-center text-[#000000] mb-4">
        Our Blogs
      </h2>

      <p className="text-center font-poppins font-medium text-[16px] leading-6 text-[#9f9f9f] mb-8">
        Find a bright idea to suit your taste with our great selection
      </p>

      {/* Products section */}
      <div className="flex w-full flex-wrap justify-center gap-6 mb-8 mt-8 overflow-y-auto md:overflow-y-visible">
        {data.map((blog) =>
          blog.products.map((product, index) => {
            if (!product.image || !product.title) {
              console.log(
                `Skipping product with index ${index} due to missing data.`
              );
              return null; 
            }

            return (
              <div
                key={index}
                className="w-[325px] md:w-[393px] h-[554px] flex flex-col items-center"
              >
                <Image
                  src={product.image.asset.url}
                  alt={product.title || "Default Product Title"}
                  width={393}
                  height={393}
                  className="object-contain"
                />
                <h3 className="text-center font-poppins font-normal text-[20px] leading-[30px] text-[#000000] mt-4">
                  {product.title || "Default Product Title"}
                </h3>
                <button className="md:mt-4 mb-4 md:mb-0 text-[24px] font-poppins font-medium leading-9 text-[#000000] py-2 border-b-[0.5px] border-[#000000]">
                  <Link href="/blog">Read More</Link>
                </button>
                <div className="flex items-center md:mt-6">
                  <FaRegClock className="w-5 h-5 text-[#000000]" />
                  <span className="ml-2 font-poppins font-light text-[16px] leading-6 text-[#000000] pr-4">
                    {product.readTime || "5 min"}
                  </span>
                  <FaCalendarAlt className="w-5 h-5 text-[#000000]" />
                  <span className="ml-2 font-poppins font-light text-[16px] leading-6 text-[#000000]">
                    {product.publishDate
                      ? new Date(product.publishDate).toLocaleDateString()
                      : "12th Oct 2022"}
                  </span>
                </div>
              </div>
            );
          })
        )}
      </div>

      {/* Button to view all posts */}
      <button className="md:mt-8 mb-10 md:mb-0 bg-gradient-to-r from-teal-600 to-gray-700 text-white font-poppins font-semibold text-xl py-3 px-8 rounded-lg">
        <Link href="/blog">View All Posts</Link>
      </button>
    </div>
  );
}

export default Blogs;
