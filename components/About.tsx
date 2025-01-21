"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { client } from "@/sanity/lib/client";

// Define the type for the data
interface AboutData {
  heading: string;
  description: string;
  buttonText: string;
}

const query = async () => {
  const res = await client.fetch(`
    *[_type == "about"]{
      heading,
      description,
      buttonText
    }
  `);
  return res;
};

function About() {
  // Use the defined type for the data state
  const [data, setData] = useState<AboutData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const aboutData = await query();
      setData(aboutData[0]);
    };

    fetchData();
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <section className="flex flex-col min-h-screen justify-between items-center w-full overflow-hidden">
      <Header />

      {/* Hero Section */}
      <div
        className="w-full h-[316px] bg-cover bg-center"
        style={{ backgroundImage: "url('/Rectangle 1.png')" }}
      >
        <div className="flex items-center justify-center h-full">
          <div className="text-center p-6">
            <Image
              src="/Meubel House_Logos-05.png"
              alt="Meubel House Logo"
              width={77}
              height={77}
              className="ml-14"
            />
            <h1 className="font-poppins font-medium text-[48px] leading-[72px] text-[#000000] md:mb-4">
              About Us
            </h1>
            <div className="flex justify-center items-center">
              <p className="font-poppins font-medium text-[16px] leading-6 text-[#000000]">
                <Link href="/">Home</Link>
              </p>
              <p className="font-poppins font-light text-[16px] leading-6 text-[#000000] pl-2">
                / About
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* About Content */}
      <div className="flex flex-col items-center mt-16 px-4 md:px-20 text-center">
        <div className="max-w-4xl">
          <h2 className="font-poppins font-bold text-[36px] leading-[54px] text-[#000000]">
            {data.heading}
          </h2>
          <p className="font-poppins font-normal text-[16px] leading-6 text-[#4f4f4f] mt-6">
            {data.description}
          </p>
        </div>
        <div className="flex justify-center items-center mt-8">
          <Link href="/shop">
            <button className="px-8 py-3 border-[1px] border-[#000000] rounded-[15px] font-poppins font-normal text-[16px] md:text-[20px] leading-[30px]">
              {data.buttonText}
            </button>
          </Link>
        </div>
      </div>

      <Footer />
    </section>
  );
}

export default About;
