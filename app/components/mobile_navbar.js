'use client';
import { HiMenu, HiX } from "react-icons/hi"; 
import { useState } from "react";
import { Links } from "./Navbar"; // Correctly import Links
import Link from "next/link";
import { usePathname } from "next/navigation";

function Mobile_Navbar() {
   const [isMenuOpen, setIsMenuOpen] = useState('');
   const pathname = usePathname(); 

   return (
    <>
      <nav className="lg:hidden flex flex-col space-y-4 py-4 ms-auto px-8 md:px-16">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <HiX size={30} /> : <HiMenu size={30} />}
        </button>
      </nav>
      <div  className=" relative  w-full">
        {isMenuOpen && (
          <nav className="flex flex-col  lg:hidden space-y-4 absolute top-full left-0 w-full bg-gray-700 text-white py-4 z-10 px-8 md:px-16 ">
            {Links.map((link, indx) => (
              <Link
                key={indx}
                href={link.path}
                className={`${
                  pathname === link.path ? "text-yellow-400" : ""
                } px-4 py-2 rounded-lg text-base font-poppins`}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </>
  );
}

export default Mobile_Navbar;
