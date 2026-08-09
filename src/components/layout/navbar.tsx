'use client';


import { useState } from "react";


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
    return (
        <nav className="bg-white dark:bg-black border-b border-gray-200 dark:border-gray-700">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex">
                        <div className="flex-shrink-0 flex items-center">
                            <span className="text-xl font-bold text-gray-900 dark:text-white">My Portfolio</span>
                        </div>
                    </div>
                    <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                        <a href="#home" className="text-gray-900 dark:text-white px-3 py-2 rounded-md text-sm font-medium">Home</a>
                        <a href="#about" className="text-gray-900 dark:text-white px-3 py-2 rounded-md text-sm font-medium">About</a>
                        <a href="#projects" className="text-gray-900 dark:text-white px-3 py-2 rounded-md text-sm font-medium">Projects</a>
                        <a href="#contact" className="text-gray-900 dark:text-white px-3 py-2 rounded-md text-sm font-medium">Contact</a>
                    </div>
                    <div className="-mr-2 flex items-center sm:hidden">
                        <button onClick={() => setIsOpen(!isOpen)} type="button" className="bg-gray-100 dark:bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-900 dark:text-white hover:text-gray-500 hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-white" aria-controls="mobile-menu" aria-expanded={isOpen}>
                            <span className="sr-only">Open main menu</span>
                            {!isOpen ? (
                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            ) : (
                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
}

