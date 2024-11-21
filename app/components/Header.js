 'use client';
import Link from "next/link";
import Navbar from "./Navbar";
 
import Mobile_Navbar from "./mobile_navbar";
function Header() {
  return (
    <header className='px-0  lg:px-24 py-4 flex items-center  w-full bg-gray-700 text-white'>
 <div className="lg:flex hidden ms-auto">
  <Navbar/>
 </div>
     {/* mobile Navbar Start */}
     <div className="lg:hidden  flex flex-col w-full justify-end ">
      <Mobile_Navbar/>
     </div>
     {/* mobile Navbar End */}
    </header>
  )
}

export default Header;
