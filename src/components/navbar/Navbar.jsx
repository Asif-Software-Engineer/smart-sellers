import React, { useState } from "react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="navbar fixed top-0 left-0 w-full h-[9.2rem] z-50 bg-gradient-to-r from-black/80 to-black/80">
      <div className="flex justify-between items-center">
        <div className="ml-12 -mt-8">
          <img src="./assets/images/logo.webp" alt="logo" className="absolute h-full pb-10" />
        </div>
        <div className="block lg:hidden">
          <button onClick={toggleMenu} className="text-white font-bold pt-8 pr-8">
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
        <div className="hidden lg:flex text-white justify-center items-center pt-16 pr-12 font-bold">
          <a
            className="block lg:inline-block text-white hover:text-tgray cursor-pointer mr-8 uppercase"
            href="home"
          >
            Home
          </a>
          <a
            className="block lg:inline-block text-white hover:text-tgray cursor-pointer mr-8 uppercase"
            href="form"
          >
            Try Now
          </a>
          <a
            className="block lg:inline-block text-white hover:text-tgray cursor-pointer mr-8 uppercase"
            href="about"
          >
            About Us
          </a>
        </div>
      </div>
      {isOpen && (
        <div className="lg:hidden text-white text-center -mt-12 font-bold">
          <a
            className="block p-2 text-white hover:text-tgray cursor-pointer uppercase"
            href="home"
          >
            Home
          </a>
          <a
            className="block p-2 text-white hover:text-tgray cursor-pointer uppercase"
            href="form"
          >
            Try Now
          </a>
          <a
            className="block p-2 text-white hover:text-tgray cursor-pointer uppercase"
            href="about"
          >
            About Us
          </a>
        </div>
      )}
    </nav>
  );
};
