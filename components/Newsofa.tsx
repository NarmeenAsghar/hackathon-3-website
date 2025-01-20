"use client"
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";

const query = async () => {
  const res = await client.fetch(`
    *[_type == "newsofa"][0] {
      title,
      image {
        asset -> {
          url
        }
      },
      buttonText
    }
  `);
  return res;
};

function Newsofa() {

  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      const sofaData = await query();
      setData(sofaData);
    };

    fetchData();
  }, []); 

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <section className="overflow-hidden">
      <div className="w-full max-w-[1440px] max-h-[900px] flex flex-col md:flex-row justify-center md:justify-around items-center mt-0 sm:mt-10 md:mt-0">
        {/* For image */}
        <div className="md:mt-0 order-2 md:order-1">
          <Image
            src={urlFor(data.image).url()}
            alt={data.title}
            width={853}
            height={1000}
          />
        </div>

        {/* For heading and button */}
        <div className="md:w-[440px] md:h-[192px] mt-10 md:mt-0 flex flex-col justify-center items-center order-1 md:order-2">
          <h2 className="font-poppins font-medium text-[24px] leading-9 text-[#000000]">
            New Arrivals
          </h2>
          <h1 className="font-poppins font-bold text-[35px] md:text-[48px] leading-[72px] text-[#000000] pb-6 md:pb-8">
            {data.title}
          </h1>
          <button className="font-poppins font-normal text-[20px] leading-[30px] text-[#000000] border-[1px] border-[#000000] rounded-[4px] w-[200px] h-[60px] md:w-[255px] md:h-[64px]">
            {data.buttonText}
          </button>
        </div>
      </div>
    </section>
  );
}

export default Newsofa;
