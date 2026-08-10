'use client';

import { useState } from "react";
import { Download } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const linkClass =
    "relative py-2 text-white/70 hover:text-white transition-all duration-300 " +
    "hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] " +
    "after:content-[''] after:absolute after:left-0 after:-bottom-0.5 " +
    "after:h-[2px] after:w-0 after:bg-[#6366F1] " +
    "after:transition-all after:duration-300 hover:after:w-full";

  const links = [
    { href: "#Work", label: "Work" },
    { href: "#about", label: "About" },
    { href: "#Stack", label: "Stack" },
    { href: "#Contact", label: "Contact" },
  ];

  return (
    <nav className="flex items-center sticky top-0 z-50 justify-between w-full border-0 bg-[#09090B] px-8 py-4 relative">
      {/* Logo */}
      <div className="font-semibold antialiased font-inter text-2xl text-white select-none">
        JOSHUA
      </div>

      {/* Desktop Links */}
      <div className="hidden md:flex items-center justify-center space-x-14 antialiased font-inter text-lg text-white">
        {links.map((link) => (
          <a key={link.href} href={link.href} className={linkClass}>
            {link.label}
          </a>
        ))}
      </div>

      {/* Resume Button (desktop) */}
      <div className="hidden md:flex items-center justify-end">
        <button
          className="flex items-center space-x-2 bg-[#6366F1] font-geist text-white py-1 px-2 rounded-md hover:bg-[#4F46E5] transition-colors duration-300 h-10 select-none"
        >
          
          <Download size={16} />Resume
        </button>
      </div>

      {/* Mobile Hamburger */}
      <button
        className="md:hidden flex flex-col justify-center items-center gap-1.5 w-8 h-8 select-none"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        <span className={`block h-0.5 w-6 bg-white transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`} />
        <span className={`block h-0.5 w-6 bg-white transition-all duration-300 ${isOpen ? "opacity-0" : ""}`} />
        <span className={`block h-0.5 w-6 bg-white transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`} />
      </button>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#09090B] border-t border-white/10 flex flex-col items-center gap-6 py-8 antialiased font-inter text-lg text-white">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={linkClass}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <button className="flex items-center space-x-2 bg-[#6366F1] font-geist text-white py-2 px-4 rounded-md hover:bg-[#4F46E5] transition-colors duration-300 select-none">
            <Download size={16} />Resume  
          </button>
        </div>
      )}
    </nav>
  );
}