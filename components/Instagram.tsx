"use client";
import { client } from "@/sanity/lib/client";
import React, { useState, useEffect } from "react";

// Define the structure of the fetched data
interface InstagramData {
  backgroundImage: {
    asset: {
      url: string;
    };
  } | null; // Allow backgroundImage to be null
  heading: string;
  description: string;
  buttonText: string;
}

// Modify the query function to allow returning null if no data is found
export const query = async (): Promise<InstagramData | null> => {
  const res = await client.fetch(`
    *[_type == "instagram"] {
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
  return res.length > 0 ? res[0] : null; // Return null if no data
};

function Instagram() {
  // Use the correct type for the state and allow it to be null
  const [data, setData] = useState<InstagramData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const instagramData = await query();
      setData(instagramData);
    };

    fetchData();
  }, []); 

  // Handle case where data is null or loading
  if (!data) {
    return <div>Loading...</div>; // Handle loading state
  }

  // If backgroundImage is missing, provide a fallback message
  if (!data.backgroundImage || !data.backgroundImage.asset?.url) {
    return <div>No background image available</div>; // Handle missing background image
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
