import React from "react";
import { HomeGrid } from "./HomeGrid";
import { Channels } from "./Channels";

export const Home = () => {
  return (
    <section className="flex align-center justify-center ">
      <div
        className="relative w-screen h-screen bg-fixed bg-center bg-cover bg-no-repeat w-[100%] h-[95%]"
        style={{ backgroundImage: "url(./assets/images/bg-img.webp)" }}
      >
        <div className="text-center mb-20 pt-[8rem] bg-black bg-opacity-25 ">
          <div className="text-7xl text-white font-playfair pl-48 pt-48 pr-48 pb-6 font-playfair">
            Marketplace management for e-commerce businesses
          </div>
          <span className="text-2xl text-white font-playfair font-playfair">
            AUTOMATE. OPTIMIZE. EXPAND.
          </span>
          <div className="mt-16 ">
            <a
              href="form"
              className="uppercase p-4 font-bold tracking-wider bg-btnclr hover:bg-hbtnclr"
            >
              Choose Your Plan
            </a>
          </div>
        </div>
        <HomeGrid />
        <div className="flex align-center justify-center pl-40 pr-40 pb-12 bg-gray">
          <div className="grid grid-cols-2 p-8 gap-4 w-[80rem]">
            <img src="./assets/images/ecom.webp" alt="" className="p-4" />
            <div className="eco">
              <div className="text-5xl font-playfair p-4">
                Simplify Your E-commerce Operations with Smart Seller!
              </div>
              <div className="text-tgray font-semibold p-4">
                Smart Sellers offering easy multi-channel online sales
                management in Saudi arabia. From major to niche marketplaces,
                manage all sales activities effortlessly in one place.
              </div>
              <div className="p-4 mt-4">
                <a
                  href="form"
                  className="uppercase p-4 font-bold tracking-wider bg-btnclr hover:bg-hbtnclr"
                >
                  get started
                </a>
              </div>
            </div>
          </div>
        </div>
        <Channels />
        <div className="flex align-center justify-center pl-40 pb-12 bg-gray">
          <div className="grid grid-cols-2 p-8 gap-4 w-[80rem]">
            <div className="eco">
              <div className="text-5xl font-semibold text-blue font-playfair p-4">
                The integrated solution for e-commerce in the Saudi market
              </div>
              <hr className="w-14 mx-auto m-4 text-tgray "></hr>
              <ul className="text-tgray text-xl font-playfair list-disc p-4 space-y-4">
                <li className="pl-4">
                  <a className="inline-block">
                    Manage your e-commerce operations from one platform instead
                    of managing your products on each store and e-market
                    separately.
                  </a>
                </li>
                <li>
                  <a className="pl-4 inline-block">
                    Double the reach of your products to customers on different
                    markets and online stores.{" "}
                  </a>
                </li>
                <li>
                  <a className="pl-4 inline-block">
                    Control all products, orders and inventory on all e-commerce
                    channels at the same time and in one process.
                  </a>
                </li>
              </ul>
            </div>
            <img src="./assets/images/ksa.webp" alt="" className="p-4" />
          </div>
        </div>
      </div>
    </section>
  );
};
