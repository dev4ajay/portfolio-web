"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Page = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const handleToggle = () => setIsOpen(!isOpen);
  const handleClose = () => setIsOpen(false);

  return (
    <div>
      <nav className="bg-darks border-dark-200">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
            {/* Add logo or brand name here */}
          </a>
          <button 
            onClick={handleToggle}
            className="inline-flex items-center p-2 ml-3 mt-4 mb-2 text-sm text-gray-500 rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded={isOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm1 4a1 1 0 000 2h12a1 1 0 100-2H4z" clipRule="evenodd"></path>
            </svg>
          </button>
          <div className={`w-full md:block md:w-auto ${isOpen ? 'block' : 'hidden'}`} id="navbar-default">
            <ul className="font-medium flex gap-4 flex-col p-4 md:p-0 mt-4  rounded-lg bg-darks md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 text-white">
              <li>
                <Link href="/pages/about"
                 onClick={handleClose} className={`inline-flex rounded-full px-3 py-1.5 bg-orange-950 hover:text-blue-500 ${pathname === '/pages/about' ? 'bg-sky-600' : ''}`}>
                    About
                 
                </Link>
              </li>
              <li>
                <Link href="/pages/resume"
                 onClick={handleClose} className={`inline-flex rounded-full px-3 py-1.5 bg-orange-950 hover:text-blue-500 ${pathname === '/pages/resume' ? 'bg-sky-600' : ''}`}>
                    Resume
                 
                </Link>
              </li>
              <li>
                <Link href="/pages/portfolio"
                 onClick={handleClose} className={`inline-flex rounded-full px-3 py-1.5 bg-orange-950 hover:text-blue-500 ${pathname === '/pages/portfolio' ? 'bg-sky-600' : ''}`}>
                    Portfolio
                 
                </Link>
              </li>
              <li>
                <Link href="/pages/contact"
                onClick={handleClose} className={`inline-flex rounded-full px-3 py-1.5 bg-orange-950 hover:text-blue-500 ${pathname === '/pages/contact' ? 'bg-sky-600' : ''}`}>
                    Contact
                 
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Page;
