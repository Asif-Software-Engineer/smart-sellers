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
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.prreventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="m-12 mt-[11.2rem]">
        <div className="text-center">
          <div className="text-5xl text-blue font-playfair p-4">
            Get in Touch
          </div>
          <hr className="w-14 mx-auto m-4 text-gray "></hr>
        </div>
        <div className="ml-36 p-4">
          <div className="pt-4 h-12 w-[35rem]">
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
            />
          </div>
          <div className="pt-4">
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
            />
          </div>
          <div className="pt-4">
            <label>Phone:</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone Number"
            />
          </div>
          <div className="pt-4">
            <label>SKUs:</label>
            <input
              type="text"
              name="skus"
              value={formData.skus}
              onChange={handleChange}
              placeholder="Number of SKUs"
            />
          </div>
          <div className="pt-4">
            <label>Channels:</label>
            <input
              type="text"
              name="channels"
              value={formData.channels}
              onChange={handleChange}
              placeholder="Sales channels"
            />
          </div>
          <div className="pt-4">
            <label>Avg Order:</label>
            <input
              type="text"
              name="avgOrder"
              value={formData.avgOrder}
              onChange={handleChange}
              placeholder="Average orders per month"
            />
          </div>
          <button type="submit">Send</button>
        </div>
      </div>
    </form>
  );
};
