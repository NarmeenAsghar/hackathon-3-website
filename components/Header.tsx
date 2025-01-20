import React from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";
import { FaUser, FaSearch, FaHeart, FaShoppingCart } from "react-icons/fa";

function Header() {
  return (
    <header className="flex items-center justify-around w-full h-[100px] md:pl-80">
      {/* heading 1 shows only on small screens */}
      <h1 className="md:hidden font-inter font-bold text-[24px] sm:text-[30px] leading-6 text-[#000000]">
        <Link href="/">Home</Link>
      </h1>
      {/* for narbar */}
      <nav className="hidden md:flex items-center gap-10">
        <div className="relative cursor-pointer font-poppins font-medium text-[16px] leading-6 text-[#000000]">
          <Link href="/">Home</Link>
        </div>
        <div className="relative cursor-pointer font-poppins font-medium text-[16px] leading-6 text-[#000000]">
          <Link href="/shop">Shop</Link>
        </div>
        <div className="relative cursor-pointer font-poppins font-medium text-[16px] leading-6 text-[#000000]">
          <Link href="/about">About</Link>
        </div>
        <div className="relative cursor-pointer font-poppins font-medium text-[16px] leading-6 text-[#000000]">
          <Link href="/contact">Contact</Link>
        </div>
      </nav>

      {/* for icons */}
      <div className="hidden md:flex items-center gap-8">
        <div className="flex items-center cursor-pointer">
          <Link href="/account"><div><FaUser size={20} color="#000000" /></div></Link>
        </div>
        <div className="flex items-center cursor-pointer">
        <Link href="/searchbar"><div><FaSearch size={20} color="#000000" /></div></Link>
        </div>
        <div className="flex items-center cursor-pointer">
          <Link href="/wishlist"><div><FaHeart size={20} color="#000000" /></div></Link>
        </div>
        <div className="flex items-center cursor-pointer">
          <Link href="/cart"><div><FaShoppingCart size={20} color="#000000" /></div></Link>
        </div>
      </div>

      {/* using shadcn ui component sheet for responsiveness*/}
      <Sheet>
        <SheetTrigger className="md:hidden">
          <Menu size={26} />
        </SheetTrigger>
        <SheetContent>
          <div className="flex flex-col items-start space-y-4 pt-10 px-4 font-poppins font-medium text-[20px] text-[#000000]">
            <Link href="/">Home</Link>
            <Link href="/shop">Shop</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </div>

          <div className="flex flex-row items-center gap-8 mt-8 ml-4">
          <div className="flex items-center cursor-pointer">
          <Link href="/account"><div><FaUser size={20} color="#000000" /></div></Link>
        </div>
        <div className="flex items-center cursor-pointer">
        <Link href="/searchbar"><div><FaSearch size={20} color="#000000" /></div></Link>
        </div>
        <div className="flex items-center cursor-pointer">
          <Link href="/wishlist"><div><FaHeart size={20} color="#000000" /></div></Link>
        </div>
        <div className="flex items-center cursor-pointer">
          <Link href="/cart"><div><FaShoppingCart size={20} color="#000000" /></div></Link>
        </div>
          </div>
        </SheetContent>
      </Sheet>
    </header>
  );
}

export default Header;
