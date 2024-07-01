import React, { useState } from "react";
import { HomeGrid } from "./HomeGrid";
import { Channels } from "./Channels";

export const Home = () => {
  const [formData, setFormData] = useState({
    email: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.prreventDefault();
  };

  return (
    <section className="flex flex-col align-center justify-center ">
      <div
        className="relative w-full bg-fixed bg-center bg-cover bg-no-repeat h-[95%]"
        style={{ backgroundImage: "url(./assets/images/bg-img.webp)" }}
      >
        <div className="text-center mb-20 pt-[8rem] bg-black bg-opacity-25 ">
          <div className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white font-playfair px-8 md:pt-24 lg:px-48 pt-48 pb-6">
            Marketplace management for e-commerce businesses
          </div>
          <span className="text-xl md:text-2xl text-white font-playfair">
            AUTOMATE. OPTIMIZE. EXPAND.
          </span>
          <div className="mt-8 md:mt-16 ">
            <a
              href="form"
              className="uppercase p-2 md:p-4 font-bold tracking-wider bg-btnclr hover:bg-hbtnclr"
            >
              Choose Your Plan
            </a>
          </div>
        </div>
        <HomeGrid />
        <div className="flex flex-col md:flex-row items-center justify-center px-8 md:px-20 lg:px-40 pb-12 bg-gray">
          {/* <div className="grid grid-cols-2 p-8 gap-4 w-[80rem]"> */}
            <img src="./assets/images/ecom.webp" alt="" className="p-4 md:w-1/2" />
            <div className="md:w-1/2">
              <div className="text-3xl md:text-4xl lg:text-5xl font-playfair p-4">
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
                  className="uppercase p-2 md:p-4 font-bold tracking-wider bg-btnclr hover:bg-hbtnclr"
                >
                  get started
                </a>
              </div>
            </div>
          {/* </div> */}
        </div>
        <Channels />
        <div className="flex flex-col md:flex-row items-center justify-center px-8 md:px-20 lg:px-40 pb-12 bg-gray">
          {/* <div className="grid grid-cols-2 p-8 gap-4 w-[80rem]"> */}
            <div className="md:w-1/2">
              <div className="text-3xl md:text-4xl lg:text-5xl font-semibold text-blue font-playfair p-4">
                The integrated solution for e-commerce in the Saudi market
              </div>
              <hr className="w-14 mx-auto m-4 text-tgray "></hr>
              <ul className="text-tgray text-base md:text-lg lg:text-xl font-playfair list-disc p-4 space-y-4">
                <li className="pl-4">
                  Manage your e-commerce operations from one platform instead of
                  managing your products on each store and e-market separately.
                </li>
                <li className="pl-4">
                  Double the reach of your products to customers on different
                  markets and online stores.{" "}
                </li>
                <li className="pl-4">
                  Control all products, orders and inventory on all e-commerce
                  channels at the same time and in one process.
                </li>
              </ul>
            </div>
            <img src="./assets/images/ksa.webp" alt="" className="p-4 md:w-1/2" />
          {/* </div> */}
        </div>
        <div className="p-4 bg-white">
          <div className="text-center">
            <div className="text-3xl md:text-4xl lg:text-5xl text-blue font-playfair p-4">
              Shop smart seller for the Best Deals
            </div>
            <hr className="w-14 mx-auto m-4 text-tgray "></hr>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center px-8 md:px-20 lg:px-40 pb-12">
            {/* <div className="flex p-8 w-[80rem]"> */}
              <img src="./assets/images/deals.webp" alt="" className="p-4 md:w-1/2" />
              <div className="w-full md:w-[65%] pl-4">
                <div className="text-2xl md:text-3xl font-playfair p-4">Register</div>
                <div className="text-tgray font-semibold p-4">
                  Sign up and create your account in a few simple steps!
                </div>
                <div className="text-2xl md:text-3xl font-playfair p-4">Connect</div>
                <div className="text-tgray font-semibold p-4">
                  Integrate your online store or sales platform with Linker
                  sellers. Connect with all the leading markets and online
                  stores and start selling on them all directly!
                </div>
                <div className="text-2xl md:text-3xl font-playfair p-4">Manage</div>
                <div className="text-tgray font-semibold p-4">
                  After completing the linking processes, you can manage all
                  your business operations on all those sales channels from one
                  central platform.
                </div>
                <div className="p-4 mt-4">
                  <a
                    href="form"
                    className="uppercase p-2 md:p-2 font-bold tracking-wider bg-btnclr hover:bg-hbtnclr"
                  >
                    get in touch
                  </a>
                </div>
              </div>
            {/* </div> */}
          </div>
        </div>
        <div className="overflow-hidden bg-gray p-6 h-20">
          <div className="flex space-x-12 animate-marquee">
            <div className="text-center text-blue text-lg md:text-xl lg:text-2xl font-semibold whitespace-nowrap">
              Real-time Inventory * Multi-Channel Integration * Orders
              Management * Pricing Management * Automatic
            </div>
            <div className="text-center text-blue text-lg md:text-xl lg:text-2xl font-semibold whitespace-nowrap">
              Real-time Inventory * Multi-Channel Integration * Orders
              Management * Pricing Management * Automatic
            </div>
            <div className="text-center text-blue text-lg md:text-xl lg:text-2xl font-semibold whitespace-nowrap">
              Real-time Inventory * Multi-Channel Integration * Orders
              Management * Pricing Management * Automatic
            </div>
            <div className="text-center text-blue text-lg md:text-xl lg:text-2xl font-semibold whitespace-nowrap">
              Real-time Inventory * Multi-Channel Integration * Orders
              Management * Pricing Management * Automatic
            </div>
          </div>
        </div>
        <div className="insta bg-white">
          <div className="text-center">
            <div className="text-3xl md:text-4xl lg:text-5xl text-blue font-playfair p-4 pt-12">
              Instagram
            </div>
            <hr className="w-14 mx-auto m-4 text-tgray "></hr>
          </div>
          <p className="pt-8 pb-12 text-center">Feed coming soon</p>
        </div>
        <div className="bg-gray p-20 h-[12.5rem] text-center text-blue text-lg md:text-xl lg:text-2xl font-semibold">
          <div className="flex justify-center items-center">
            <div className="space-x-16 md:space-x-16">
              <a
                href="https://www.facebook.com"
                className="text-fbclr hover:text-hfbclr"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-facebook fa-2x"></i>
              </a>
              <a
                href="https://www.instagram.com"
                className="text-pink-600 hover:text-pink-800"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-instagram fa-2x"></i>
              </a>
            </div>
          </div>
        </div>
        <div
          onSubmit={handleSubmit}
          className="flex flex-col md:flex-row items-center justify-center bg-white p-8 md:p-20"
        >
          <div className="text-blue text-lg md:text-xl lg:text-2xl capitalize tracking-wider font-bold pr-4">
            join our VIP list
          </div>
          <div className="w-full  md:w-[35rem] relative">
            <input
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="peer block w-full px-5 py-4 border border-bclr rounded bg-white"
              placeholder=" "
              required
            />
            <label
              htmlFor="name"
              className="absolute left-4 top-4 transition-all transform scale-75 -translate-y-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-2 text-tgray pointer-events-none"
            >
              Email <span className="text-red-500 p-2">*</span>
            </label>
          </div>
          <div className="pt-4 md:pt-0 md:pl-4 ">
            <a
              type="submit"
              href=""
              className="uppercase pt-2 md:pt-4 pl-6 md:pl-8 pr-6 md:pr-8 pb-2 md:pb-4 font-bold tracking-wider bg-btnclr hover:bg-hbtnclr"
            >
              sign up
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
