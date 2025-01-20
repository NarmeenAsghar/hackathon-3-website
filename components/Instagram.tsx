"use client"
import { client } from "@/sanity/lib/client";
import React, { useState, useEffect } from "react";

export const query = async () => {
  const res = await client.fetch(`
    *[_type == "instagram"][0] {
      backgroundImage {
        asset -> {
          url
        }
      },
      heading,
      description,
      buttonText
    }
  `);
  return res;
};

function Instagram() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      const instagramData = await query();
      setData(instagramData);
    };

    fetchData();
  }, []); 

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div
      className="w-full h-[450px] bg-cover bg-center"
      style={{ backgroundImage: `url(${data.backgroundImage.asset.url})` }}
    >
      {/* Center Section */}
      <div className="flex items-center justify-center h-full">
        <div className="text-center p-6">
          <h1 className="font-poppins font-bold text-[45px] md:text-[60px] leading-[90px] text-[#000000] md:mb-4">
            {data.heading}
          </h1>
          <p className="font-poppins font-normal text-[16px] md:text-[20px] leading-[30px] text-[#000000] mb-6">
            {data.description}
          </p>
          <button className="px-6 py-2 bg-[#f4f4f4] rounded-full shadow-lg w-[200px] md:w-[255px] h-[64px] font-poppins font-normal text-[20px] leading-[30px] text-[#000000]">
            {data.buttonText}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Instagram;
