import React from "react";
import './AboutUs.css';
import { Review } from "./Review";

export const About = () => {
  return (
    <>
    <div className="m-12 mt-[11.2rem]">
      <div className="text-center">
        <div className="text-5xl text-blue font-playfair p-4">About Us</div>
        <hr className="w-14 mx-auto m-4 text-tgray "></hr>
      </div>
      <div className="flex align-center justify-center ml-32 mr-32">
        <img
          src="./assets/images/mission.webp"
          alt=""
          className="m-6 w-[45%]"
        />
        <div className="m-6 pl-4 w-[50%] text-center grid place-items-center">
          <div className="font-playfair text-2xl">Our Mission</div>
          <div className="text-tgray font-playfair">
            to empower online sellers in Saudi Arabia to succeed by providing
            them with a unified platform that synchronizes data across multiple
            sales channels, reduces inconsistencies, enhances operational
            efficiency, and broadens business reach.
          </div>
        </div>
      </div>
      <div className="flex align-center justify-center ml-32 mr-32">
        <div className="m-6 pl-4 w-[50%] text-center grid place-items-center">
          <div className="font-playfair text-2xl">Our Vision</div>
          <div className="text-tgray font-playfair">
            is to become the cornerstone of e-commerce in Saudi Arabia, acting
            as the universal bridge linking service providers to sales channels.
          </div>
        </div>
        <img src="./assets/images/vision.webp" alt="" className="m-6 w-[45%]" />
      </div>
      <div className="flex align-center justify-center ml-32 mr-32">
        <img
          src="./assets/images/values.webp"
          alt=""
          className="m-6 w-[45%]"
        />
        <div className="m-6 pl-4 w-[50%] text-center grid place-items-center">
          <div className="font-playfair text-2xl">Our Values</div>
          <ul className="text-tgray font-playfair list-disc relative w-36">
            <li><a href="" className="absolute pl-4 left-0">Customer Focus</a></li>
            <li><a href="" className="absolute pl-4 left-0">Trust</a></li>
            <li><a href="" className="absolute pl-4 left-0">Agility</a></li>
          </ul>
        </div>
      </div>
    </div>
    <Review/>
    </>
  );
};
