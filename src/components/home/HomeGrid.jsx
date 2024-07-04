import React from "react";

export const HomeGrid = () => {
  return (
    <div className="bg-white pt-12 pb-12 font-playfair flex align-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-10 mx-6 md:ml-40 md:mr-10 lg:mr-24 xl:mr-40 h-full w-full md:w-3/3">
        <a
          href="#"
          className="relative text-center overflow-hidden group md:h-[30rem] md:w-full"
        >
          <div
            className="absolute bg-cover bg-center w-full h-full transition-all duration-500 ease-in-out transform"
            style={{ backgroundImage: "url(./assets/images/review.webp)" }}
          ></div>
          <span className="absolute inset-0 flex items-center justify-center text-white text-4xl transition-transform duration-500 transform group-hover:scale-105">
            AUTOMATE.
          </span>
        </a>
        <a
          href="#"
          className="relative text-center overflow-hidden group md:h-[30rem] md:w-full"
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url(./assets/images/values.webp)" }}
          ></div>
          <span className="absolute inset-0 flex items-center justify-center text-white text-4xl transition-transform duration-500 transform group-hover:scale-105">
            OPTIMIZE.
          </span>
        </a>
        <a
          href="#"
          className="relative text-center overflow-hidden group md:h-[30rem] md:w-full"
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url(./assets/images/vision.webp)" }}
          ></div>
          <span className="absolute inset-0 flex items-center justify-center text-white text-4xl transition-transform duration-500 transform group-hover:scale-105">
            EXPAND.
          </span>
        </a>
      </div>
    </div>
    
  );
};
