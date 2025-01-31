"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Header from "./Header";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";

interface HeroData {
  title: string;
  description: string;
  Button: string;
  image: {
    asset: {
      url: string;
    };
    alt: string;
  };
  imageAlt: string;
}

const query = async (): Promise<HeroData> => {
  const res = await client.fetch(`
    *[_type == "hero"][0]{
      title,
      description,
      Button,
      image{
        asset->{
          _id,
          url
        },
        alt
      },
      imageAlt
    }
  `);
  return res;
};

function Hero() {
  const [data, setData] = useState<HeroData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedData = await query();
      setData(fetchedData);
    };

    fetchData();
  }, []);

  if (!data) {
    return (
      <div className="w-full h-full flex justify-center items-center">
        Loading...
      </div>
    );
  }

  return (
    <section className="overflow-hidden">
      <Header />
      <div className="w-full max-w-[1440px] mx-auto px-4 flex flex-col md:flex-row justify-center gap-12 items-center mt-10">
        {/* Text and Button Section */}
        <div className="flex flex-col md:w-[45%] items-center md:items-start text-center md:text-left md:ml-28">
          <h1 className="font-poppins font-semibold text-4xl md:text-5xl leading-tight mb-4 sm:mb-6 md:mb-8 bg-gradient-to-r from-teal-600 to-gray-700 text-transparent bg-clip-text">
            <i>{data.title}</i>
          </h1>
          <p className="text-lg md:text-xl text-[#555555] mb-6 md:mb-8">
            {data.description}
          </p>
          <Link href="/shop">
            <button className="bg-gradient-to-r from-teal-600 to-gray-700 text-white font-poppins font-semibold text-xl py-3 px-8 rounded-lg">
              {data.Button}
            </button>
          </Link>
        </div>

        {/* Image Section */}
        <div className="md:w-[45%] mt-8 md:mt-0">
          <Image
            src={urlFor(data.image).url()}
            alt={data.imageAlt}
            width={500}
            height={500}
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
