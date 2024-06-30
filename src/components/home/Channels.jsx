import React from "react";

export const Channels = () => {
  return (
    <div className="bg-white p-12">
      <div className="text-center">
        <div className="text-5xl text-blue font-playfair p-4">
          Step Into The Future Of Multi-Channel Selling
        </div>
        <hr className="w-14 mx-auto m-4 text-tgray "></hr>
      </div>
      <div className="flex align-center justify-center pl-40 pr-40 pb-12">
        <div class="grid grid-cols-3 grid-rows-2 gap-4 w-[80rem] font-playfair">
          <div class="col-span-1 row-span-1 m-4 text-center">
            <div className="font-bold text-xl pb-8">
              Multi-Channel Integration
            </div>
            <div className="text-tgray">
              Connect your online store with different sales channels and expand
              your market reach.
            </div>
          </div>
          <div class="col-span-1 row-span-1 m-4 text-center">
            <div className="font-bold text-xl pb-8">Real-time Inventory</div>
            <div className="text-tgray">
              Automatically update inventory across all channels to prevent
              overselling and underselling.
            </div>
          </div>
          <div class="col-span-1 row-span-1 m-4 text-center">
            <div className="font-bold text-xl pb-8">Order Management</div>
            <div className="text-tgray">
              Manage orders from all channels in one place, boosting efficiency.
            </div>
          </div>
          <div class="col-span-1 row-span-1 m-4 text-center">
            <div className="font-bold text-xl pb-8">
              Advanced Data Analytics
            </div>
            <div className="text-tgray">
              Gain insights into business performance to identify the most
              profitable channels.
            </div>
          </div>
          <div class="col-span-1 row-span-1 m-4 text-center">
            <div className="font-bold text-xl pb-8">Pricing Management</div>
            <div className="text-tgray">
              Effortlessly monitor and adjust prices across different channels.
            </div>
          </div>
          <div class="col-span-1 row-span-1 m-4 text-center">
            <div className="font-bold text-xl pb-8">Secure Checkout</div>
            <div className="text-tgray">
              We take your privacy and security seriously. That's why we use the
              latest technology to ensure your information is safe and secure.
            </div>
          </div>
        </div>
      </div>
      <div className="flex align-center justify-center pl-40 pr-40 pb-8">
        <a
          href="form"
          className="uppercase p-4 font-bold tracking-wider bg-btnclr hover:bg-hbtnclr"
        >
          get started now
        </a>
      </div>
    </div>
  );
};
