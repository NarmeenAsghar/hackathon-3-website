import Blogs from "@/components/Blogs";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Instagram from "@/components/Instagram";
import Newsofa from "@/components/Newsofa";
import Tables from "@/components/Tables";
import Toppicks from "@/components/Toppicks";
import React from "react";

export default function Home() {
  return (
    <div className=""> 
    <Hero />
    <Tables />
    <Toppicks />
    <Newsofa />
    <Blogs />
    <Instagram />
    <Footer />
    </div>
  );
}
