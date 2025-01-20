"use client"
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Header from "./Header";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link"; 

interface HeroData {
  title: string;
  description: string;
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
    return <div>Loading...</div>; 
  }

  return (
    <section className="overflow-hidden bg-[#fbebb5]">
      <Header />
      <div className="w-full max-w-[1440px] max-h-[900px] flex flex-col md:flex-row justify-center md:justify-around items-center bg-[#fbebb5] mt-0 sm:mt-10 md:mt-0">
        {/* for heading and button */}
        <div className="md:w-[440px] md:h-[192px] mt-10 sm:mt-28 md:mt-0 md:ml-40 sm:mr-32 sm:ml-4 md:mr-0">
          <h1 className="font-poppins font-medium text-[35px] md:text-[64px] leading-[96px] text-[#000000] mb-0 md:mb-10">
            {data.title}
          </h1>
          <Link href="/shop">
            <button className="font-poppins font-medium text-[24px] leading-9 text-[#000000]">
              {data.description}
            </button>
          </Link>
        </div>

        {/* for image */}
        <div className="md:mt-0">
          <Image
            src={urlFor(data.image).url()}
            alt={data.imageAlt}
            width={853}
            height={1000}
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
