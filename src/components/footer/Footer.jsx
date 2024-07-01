import React from "react";

export const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 px-4">
      <div className="flex flex-col justify-center items-center min-h-[8rem]">
        <div className="text-xs p-4 text-center">
          Copyright © 2024 smart seller - All Rights Reserved.
        </div>
        <ul className="flex flex-wrap justify-center items-center space-x-4 p-4 font-bold">
          <li className="lg:flex-initial">
            <a
              href="home"
              className="cursor-pointer p-4 uppercase block lg:inline-block"
            >
              home
            </a>
          </li>
          <li className="lg:flex-initial">
            <a
              href="form"
              className="cursor-pointer p-4 uppercase block lg:inline-block"
            >
              try now
            </a>
          </li>
          <li className="lg:flex-initial">
            <a
              href="about"
              className="cursor-pointer p-4 uppercase block lg:inline-block"
            >
              about us
            </a>
          </li>
          <li className="lg:flex-initial">
            <a
              href="career"
              className="cursor-pointer p-4 uppercase block lg:inline-block"
            >
              career
            </a>
          </li>
          <li className="lg:flex-initial">
            <a
              href="policy"
              className="cursor-pointer p-4 uppercase block lg:inline-block"
            >
              privacy policy
            </a>
          </li>
          <li className="lg:flex-initial">
            <a
              href="terms&conditions"
              className="cursor-pointer p-4 uppercase block lg:inline-block"
            >
              terms & conditions
            </a>
          </li>
          <li className="lg:flex-initial">
            <a
              href="smart-sellers"
              className="cursor-pointer p-4 uppercase block lg:inline-block"
            >
              smart sellers
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};
