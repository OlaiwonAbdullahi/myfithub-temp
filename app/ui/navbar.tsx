"use client";
import { AlignRight, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Become a Partner", href: "/become-a-partner" },
    { name: "Studio", href: "/studio" },
  ];

  return (
    <nav className="relative">
      <div className="sticky top-0 left-0 right-0 bg-white z-50 font-fredoka flex justify-between items-center p-4 md:px-20 px-4 border-b border-b-[#234E49]/20 text-[#234E49]">
        <Link href="/" className="flex items-center">
          <div className="text-2xl font-semibold">MyFitHub</div> <sup>Beta</sup>
        </Link>

        <div className="hidden md:flex">
          <ul className="flex space-x-4">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <li
                  className={`cursor-pointer  py-1.5 ${
                    isActive(link.href)
                      ? " font-medium border-[#234E49]/50 border-b-2 px-2"
                      : "hover:bg-[#234E49]/10 rounded-lg px-3"
                  }`}
                >
                  {link.name}
                </li>
              </Link>
            ))}
          </ul>
        </div>

        <div className="hidden md:flex gap-4 items-center">
          <Link href="/login">
            <button className="cursor-pointer">Login</button>
          </Link>
          <Link href="/signup">
            <button className="cursor-pointer bg-[#234E49] text-white px-4 py-2 rounded-lg">
              Get Started
            </button>
          </Link>
        </div>

        <div
          className="md:hidden transition-transform duration-300 flex cursor-pointer"
          onClick={toggleMenu}
        >
          {!menuOpen ? (
            <AlignRight size={30} color="#234E49" strokeWidth={1.5} />
          ) : (
            <X size={30} color="#234E49" strokeWidth={1.5} />
          )}
        </div>
      </div>

      {menuOpen && (
        <div
          className="fixed inset-0 bg-white/10 backdrop-blur-xs z-30 md:hidden"
          onClick={() => setMenuOpen(false)}
        />
      )}

      <div
        className={`
        fixed top-[64px] right-0 h-screen w-5/6 bg-white shadow-md border-t border-[#234E49]/10 
        flex flex-col md:hidden px-8 py-4 space-y-4 font-fredoka z-40 
        transform transition-transform duration-300 ease-in-out
        ${menuOpen ? "translate-x-0" : "translate-x-full"}
      `}
      >
        <nav className="flex-1">
          <ul className="flex flex-col space-y-2 text-center">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
              >
                <li
                  className={`cursor-pointer py-3 rounded-lg transition-colors ${
                    isActive(link.href)
                      ? "bg-[#234E49]/20 font-semibold text-[#234E49]"
                      : "hover:bg-[#234E49]/10 text-gray-700"
                  }`}
                >
                  {link.name}
                </li>
              </Link>
            ))}
          </ul>
          <div className="flex  gap-3 items-center mt-auto justify-center">
            <Link href="/login" onClick={() => setMenuOpen(false)}>
              <button className="cursor-pointer border border-[#234E49] text-[#234E49] px-4 py-2 w-[80px] rounded-lg hover:bg-[#234E49]/5 transition-colors">
                Login
              </button>
            </Link>
            <Link href="/signup" onClick={() => setMenuOpen(false)}>
              <button className="cursor-pointer bg-[#234E49] text-white px-4 py-2 w-[120px] whitespace-nowrap rounded-lg hover:bg-[#234E49]/90 transition-colors">
                Get Started
              </button>
            </Link>
          </div>
        </nav>
      </div>
    </nav>
  );
};

export default Navbar;
