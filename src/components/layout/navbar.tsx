'use client';


import { useState } from "react";


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
    return (
      <nav className="flex w-screen border-0">
        <div className="items-center justify-between w-full px-8 py-4 bg-[#09090B] font-semibold antialiased font-inter text-2xl text-white">JOSHUA</div>
        <div className="items-center justify-center w-full px-8 py-4 bg-[#09090B] space-x-14  antialiased font-inter text-lg text-white hover">
                <a
                    href="#Work"
                    className="relative py-2 text-white/70 hover:text-white transition-all duration-300 
             hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]
             after:content-[''] after:absolute after:left-0 after:-bottom-0.5 
             after:h-[2px] after:w-0 after:bg-[#6366F1] 
             after:transition-all after:duration-300 hover:after:w-full"
                >
                    Work
                </a>
          <a 
            href="#about" 
            className="relative py-2 text-white/70 hover:text-white transition-all duration-300 
             hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]
             after:content-[''] after:absolute after:left-0 after:-bottom-0.5 
             after:h-[2px] after:w-0 after:bg-[#6366F1] 
             after:transition-all after:duration-300 hover:after:w-full"
          >
            About
          </a>
          <a 
            href="#Stack" 
            className="relative py-2 text-white/70 hover:text-white transition-all duration-300 
             hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]
             after:content-[''] after:absolute after:left-0 after:-bottom-0.5 
             after:h-[2px] after:w-0 after:bg-[#6366F1] 
             after:transition-all after:duration-300 hover:after:w-full"
          >
            Stack
          </a>
          <a 
            href="#Contact" 
            className="relative py-2 text-white/70 hover:text-white transition-all duration-300 
             hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]
             after:content-[''] after:absolute after:left-0 after:-bottom-0.5 
             after:h-[2px] after:w-0 after:bg-[#6366F1] 
             after:transition-all after:duration-300 hover:after:w-full"
          >
            Contact
          </a>
        </div>
        <div className ="flex items-end justify-end w-full px-8 py-4">
            <button 
                className="flex items-center space-x-2 bg-[#6366F1] font-geist text-white py-1 px-2 rounded-md hover:bg-[#4F46E5] transition-colors duration-300 h-10"
                onClick={() => setIsClicked(!isClicked)}
            >
                Resume ↓
            </button>
        </div>
      </nav>
    )
}

