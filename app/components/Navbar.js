"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Links = [
  { path: "/", name: "Home" },
  { path: "/experience", name: "Education & Experience" },
  { path: "/education", name: "Education" },
  { path: "/contact", name: "Contact" },
];

function Navbar() {
  const pathname = usePathname();

  return (
    <nav  className="hidden lg:flex  space-x-10 items-center">
      {Links.map((link, index) => {
        return (
          <Link href={link.path} key={index} className={`${pathname === link.path ? "text-yellow-400" : " "} px-4 py-2 rounded-lg 2xl-text-2xl  xl:text-xl lg:text-xl md:text-base font-poppins`}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
}
export default Navbar;
