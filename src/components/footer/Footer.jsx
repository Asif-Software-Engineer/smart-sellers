import React from "react";

export const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 px-4">
      <div className="flex flex-col justify-center items-center min-h-[8rem]">
        <div className="text-xs p-4 text-center">
          Copyright © 2024 smart seller - All Rights Reserved.
        </div>
        <ul className="flex flex-wrap justify-center items-center space-x-4 p-4 font-bold">
          <li>
            <a href="home" className="cursor-pointer p-4 uppercase">
              home
            </a>
          </li>
          <li>
            <a href="form" className="cursor-pointer p-4 uppercase">
              try now
            </a>
          </li>
          <li>
            <a href="about" className="cursor-pointer p-4 uppercase">
              about us
            </a>
          </li>
          <li>
            <a href="career" className="cursor-pointer p-4 uppercase">
              career
            </a>
          </li>
          <li>
            <a href="policy" className="cursor-pointer p-4 uppercase">
              privacy policy
            </a>
          </li>
          <li>
            <a href="terms&conditions" className="cursor-pointer p-4 uppercase">
              terms & conditions
            </a>
          </li>
          <li>
            <a href="smart-sellers" className="cursor-pointer p-4 uppercase">
              smart sellers
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};
