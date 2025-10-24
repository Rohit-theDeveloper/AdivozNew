import React from "react";
import img from '../assets/subscribe1.jpeg';

const SubscribeSection = () => {
  return (
    <section className=" bg-blue-600 rounded-3xl py-12 px-6 md:px-16 text-white relative overflow-hidden m-5 sm:m-10 sm:mx-20">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/circles-and-lines.png')]"></div>

      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Left Content */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Subscribe To Our latest Newsletter
          </h2>
          <p className="text-sm md:text-base text-blue-100 mb-6 leading-relaxed max-w-md">
            Digital Marketing Solutions encompasses a wide range of Services,
            Technologies, and strategies designed to address the technological
            challenges of today.
          </p>

          {/* Input Field + Button */}
          <form className="flex items-center justify-center md:justify-start bg-white rounded-full overflow-hidden w-full max-w-md">
            <input
              type="email"
              placeholder="Enter your Email"
              className="flex-1 px-4 py-3 text-gray-700 text-sm focus:outline-none"
            />
            <button
              type="submit"
              className="bg-black text-white px-6 py-3 font-medium text-sm rounded-full hover:bg-blue-700 transition-colors m-2"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Right Image Section */}
        <div className="flex-1 flex justify-center  relative">
          <div className="w-60 h-60 md:w-72 md:h-72 bg-black rounded-full flex items-center justify-center relative">
            <img
              src={img} 
              alt="Newsletter"
              className="w-52 h-52 md:w-64 md:h-64 rounded-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubscribeSection;
