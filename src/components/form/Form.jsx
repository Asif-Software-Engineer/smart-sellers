import React, { useState } from "react";

export const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    Skus: "",
    Channels: "",
    avgOrder: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.prreventDefault();
  };

  return (
    // <form onSubmit={handleSubmit} className="flex align-center justify-center">
    //   <div className="m-12 mt-[11.2rem] bg-white">
    //     <div className="text-center">
    //       <div className="text-5xl text-blue font-playfair p-4">
    //         Get in Touch
    //       </div>
    //       <hr className="w-14 mx-auto m-4 text-tgray "></hr>
    //     </div>
    //     <div className="flex align-center justify-center grid grid-cols-2 ">
    //       <div className="">
    //         <p className="text-2xl ml-36 p-4">
    //           Get in touch with our expert sales team today!
    //         </p>
    //         <div className="ml-36 p-4">
    //           <div className="mt-4 w-[35rem] relative">
    //             <input
    //               type="text"
    //               name="name"
    //               value={formData.name}
    //               onChange={handleChange}
    //               className="peer block w-full px-5 py-4 border border-bclr rounded bg-white"
    //               placeholder=" "
    //             />
    //             <label
    //               htmlFor="name"
    //               className="absolute left-4 top-4 transition-all transform scale-75 -translate-y-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-2 text-tgray pointer-events-none"
    //             >
    //               Name
    //             </label>
    //           </div>
    //           <div className="mt-4 w-[35rem] relative">
    //             <input
    //               type="text"
    //               name="email"
    //               value={formData.email}
    //               onChange={handleChange}
    //               className="peer block w-full px-5 py-4 border border-bclr rounded bg-white"
    //               placeholder=" "
    //               required
    //             />
    //             <label
    //               htmlFor="name"
    //               className="absolute left-4 top-4 transition-all transform scale-75 -translate-y-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-2 text-tgray pointer-events-none"
    //             >
    //               Email <span className="text-red-500 p-2">*</span>
    //             </label>
    //           </div>
    //           <div className="mt-4 w-[35rem] relative">
    //             <input
    //               type="tel"
    //               name="phone"
    //               value={formData.phone}
    //               onChange={handleChange}
    //               className="peer block w-full px-5 py-4 border border-bclr rounded bg-white"
    //               placeholder=" "
    //               required
    //             />
    //             <label
    //               htmlFor="name"
    //               className="absolute left-4 top-4 transition-all transform scale-75 -translate-y-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-2 text-tgray pointer-events-none"
    //             >
    //               Phone Number <span className="text-red-500 p-2">*</span>
    //             </label>
    //           </div>
    //           <div className="mt-4 w-[35rem] relative">
    //             <input
    //               type="text"
    //               name="skus"
    //               value={formData.skus}
    //               onChange={handleChange}
    //               className="peer block w-full px-5 py-4 border border-bclr rounded bg-white"
    //               placeholder=" "
    //               required
    //             />
    //             <label
    //               htmlFor="name"
    //               className="absolute left-4 top-4 transition-all transform scale-75 -translate-y-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-2 text-tgray pointer-events-none"
    //             >
    //               Number of SKUs <span className="text-red-500 p-2">*</span>
    //             </label>
    //           </div>
    //           <div className="mt-4 w-[35rem] relative">
    //             <input
    //               type="text"
    //               name="channels"
    //               value={formData.channels}
    //               onChange={handleChange}
    //               className="peer block w-full px-5 py-4 border border-bclr rounded bg-white"
    //               placeholder=" "
    //               required
    //             />
    //             <label
    //               htmlFor="name"
    //               className="absolute left-4 top-4 transition-all transform scale-75 -translate-y-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-2 text-tgray pointer-events-none"
    //             >
    //               Sales channels <span className="text-red-500 p-2">*</span>
    //             </label>
    //           </div>
    //           <div className="mt-4 w-[35rem] relative">
    //             <input
    //               type="text"
    //               name="avgOrder"
    //               value={formData.avgOrder}
    //               onChange={handleChange}
    //               className="peer block w-full px-5 py-4 border border-bclr rounded bg-white"
    //               placeholder=" "
    //             />
    //             <label
    //               htmlFor="num"
    //               className="absolute left-4 top-4 transition-all transform scale-75 -translate-y-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-2 text-tgray pointer-events-none"
    //             >
    //               Average orders per month
    //             </label>
    //           </div>
    //           <button
    //             type="submit"
    //             className="mt-4 w-[35rem] h-12 font-bold tracking-wider bg-btnclr hover:bg-hbtnclr"
    //           >
    //             Send
    //           </button>
    //           <div className="text-xs mt-8 text-center">
    //             <p>
    //               This site is protected by reCAPTCHA and the Google
    //               <a
    //                 href="https://policies.google.com/privacy"
    //                 className="p-2 underline text-blue"
    //               >
    //                 Privacy Policy
    //               </a>
    //               and
    //               <a
    //                 href="https://policies.google.com/terms"
    //                 className="p-2 underline text-blue"
    //               >
    //                 Terms of Service
    //               </a>
    //               apply.
    //             </p>
    //           </div>
    //         </div>
    //       </div>
    //       <p className="text-tgray pl-16">omar@smart-sellers.com</p>
    //     </div>
    //   </div>
    // </form>
    <form onSubmit={handleSubmit} className="flex items-center justify-center">
      <div className="m-12 mt-[11.2rem] bg-white p-6 max-w-[50rem] sm:max-w-[60rem] md:max-w-[70rem] lg:max-w-[80rem] xl:max-w-[90rem]">
        <div className="text-center">
          <div className="text-5xl text-blue font-playfair p-4">
            Get in Touch
          </div>
          <hr className="w-14 mx-auto m-4 text-tgray"></hr>
        </div>
        <div className="flex flex-row md:flex-col w-full">
          <p className="text-2xl p-4">
            Get in touch with our expert sales team today!
          </p>
          <p className="text-gray-500 mt-4 text-center">
            omar@smart-sellers.com
          </p>
        </div>
        <div className="mt-4 relative">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="peer block w-full px-5 py-4 border border-gray-300 rounded bg-white"
            placeholder=" "
          />
          <label
            htmlFor="name"
            className="absolute left-4 top-4 transition-all transform scale-75 -translate-y-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-2 text-gray-500 pointer-events-none"
          >
            Name
          </label>
        </div>
        <div className="mt-4 relative">
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="peer block w-full px-5 py-4 border border-gray-300 rounded bg-white"
            placeholder=" "
            required
          />
          <label
            htmlFor="email"
            className="absolute left-4 top-4 transition-all transform scale-75 -translate-y-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-2 text-gray-500 pointer-events-none"
          >
            Email <span className="text-red-500">*</span>
          </label>
        </div>
        <div className="mt-4 relative">
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="peer block w-full px-5 py-4 border border-gray-300 rounded bg-white"
            placeholder=" "
            required
          />
          <label
            htmlFor="phone"
            className="absolute left-4 top-4 transition-all transform scale-75 -translate-y-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-2 text-gray-500 pointer-events-none"
          >
            Phone Number <span className="text-red-500">*</span>
          </label>
        </div>
        <div className="mt-4 relative">
          <input
            type="text"
            name="skus"
            value={formData.skus}
            onChange={handleChange}
            className="peer block w-full px-5 py-4 border border-gray-300 rounded bg-white"
            placeholder=" "
            required
          />
          <label
            htmlFor="skus"
            className="absolute left-4 top-4 transition-all transform scale-75 -translate-y-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-2 text-gray-500 pointer-events-none"
          >
            Number of SKUs <span className="text-red-500">*</span>
          </label>
        </div>
        <div className="mt-4 relative">
          <input
            type="text"
            name="channels"
            value={formData.channels}
            onChange={handleChange}
            className="peer block w-full px-5 py-4 border border-gray-300 rounded bg-white"
            placeholder=" "
            required
          />
          <label
            htmlFor="channels"
            className="absolute left-4 top-4 transition-all transform scale-75 -translate-y-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-2 text-gray-500 pointer-events-none"
          >
            Sales channels <span className="text-red-500">*</span>
          </label>
        </div>
        <div className="mt-4 relative">
          <input
            type="text"
            name="avgOrder"
            value={formData.avgOrder}
            onChange={handleChange}
            className="peer block w-full px-5 py-4 border border-gray-300 rounded bg-white"
            placeholder=" "
          />
          <label
            htmlFor="avgOrder"
            className="absolute left-4 top-4 transition-all transform scale-75 -translate-y-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-2 text-gray-500 pointer-events-none"
          >
            Average orders per month
          </label>
        </div>
        <button
          type="submit"
          className="mt-4 w-full h-12 font-bold tracking-wider bg-btnclr hover:bg-hbtnclr text-white"
        >
          Send
        </button>
        <div className="text-xs mt-8 text-center">
          <p>
            This site is protected by reCAPTCHA and the Google
            <a
              href="https://policies.google.com/privacy"
              className="p-2 underline text-blue"
            >
              Privacy Policy
            </a>
            and
            <a
              href="https://policies.google.com/terms"
              className="p-2 underline text-blue"
            >
              Terms of Service
            </a>
            apply.
          </p>
        </div>
      </div>
    </form>
  );
};
