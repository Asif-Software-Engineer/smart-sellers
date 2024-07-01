import React from "react";

export const HomeGrid = () => {
  return (
    <div className="bg-white p-12 flex align-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:ml-10 lg:ml-25 xl:ml-40 md:mr-10 lg:mr-25 xl:mr-40 h-[30rem] w-full md:w-2/3">
        <a
          href="#"
          className="relative border text-center overflow-hidden group"
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url(./assets/images/review.webp)" }}
          ></div>
          <span className="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold transition-transform duration-500 transform group-hover:scale-105">
            AUTOMATE.
          </span>
        </a>
        <a
          href="#"
          className="relative border text-center overflow-hidden group"
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url(./assets/images/values.webp)" }}
          ></div>
          <span className="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold transition-transform duration-500 transform group-hover:scale-105">
            OPTIMIZE.
          </span>
        </a>
        <a
          href="#"
          className="relative border text-center overflow-hidden group"
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url(./assets/images/vision.webp)" }}
          ></div>
          <span className="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold transition-transform duration-500 transform group-hover:scale-105">
            EXPAND.
          </span>
        </a>
      </div>
    </div>
    
  );
};
