import React, { useEffect, useState } from "react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const handleScroll = () => {
    const scrollTop = window.scrollY;
    setScrolled(scrollTop > 50);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <nav
      className={`navbar fixed top-0 left-0 w-full z-50 flex align-center ${
        scrolled
          ? "bg-gradient-to-r from-black/80 to-black/80 flex align-center h-[8rem]"
          : "bg-none pt-1 h-[7.3rem]"
      } transition-all dusration-300`}
    >
      <div className="flex justify-between items-center w-full">
        <a
          className="ml-12 w-[35%] right-0 flex justify-between items-center"
          href="home"
        >
          <img
            src="./assets/images/logo.webp"
            alt="logo"
            className={`absolute ${
              scrolled ? "h-26 " : "h-full pt-3 pb-1 pr-1"
            } transition-all duration-300 cursor-pointer flex justify-start align-center`}
          />
        </a>
        <div className="block lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-white font-bold hover:text-tgray pr-8"
          >
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
        <div className="hidden lg:flex w-[65%] text-xs font-medium tracking-wider text-white justify-end items-center align-center pr-6">
          <a
            className="block lg:inline-block hover:text-tgray cursor-pointer mr-8 uppercase"
            href="home"
          >
            Home
          </a>
          <a
            className="block lg:inline-block hover:text-tgray cursor-pointer mr-8 uppercase"
            href="form"
          >
            Try Now
          </a>
          <a
            className="block lg:inline-block hover:text-tgray cursor-pointer mr-8 uppercase"
            href="about"
          >
            About Us
          </a>
        </div>
      </div>
      {isOpen && (
        <div className="lg:hidden text-white text-center bg-black h-screen w-screen font-bold">
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
