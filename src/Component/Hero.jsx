import React from "react";
import herobg from "../assets/herobg.jpg";
import { MdArrowOutward } from "react-icons/md";
import { GrLocationPin } from "react-icons/gr";
import { RiTeamFill } from "react-icons/ri";
import { FaHeadset } from "react-icons/fa6";
import { RiPriceTag2Line } from "react-icons/ri";
import { Typewriter } from "react-simple-typewriter";
import useAOS from "../hooks/useAOS";

export default function Hero() {
  useAOS();
  return (
    <>
      <section
        className="relative w-full h-[90vh] flex items-center text-white"
        style={{
          backgroundImage: `url(${herobg})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50 z-10"></div>

        {/* Content */}
        <div className="relative z-20 max-w-[600px]  px-6 mx-4  md:mx-40 md:my-5">
          <h4 className="text-sm md:text-base font-medium text-white mb-5">
            <span 
            data-aos ="fade-up"
            className="flex gap-1 items-center">
              <GrLocationPin
                className="rotate-92  align-middle"
                size={"30px"}
              />
             Strategies That Speak and Results That Resonate 
            </span>
          </h4>
          <h2 className="text-3xl md:text-5xl font-bold  mb-5">
            <Typewriter
              words={[
                "Where Ideas Go Viral With Smart Marketing!",
                "Dominate the Digital Space and Get Real Results"
          
              ]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={60}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </h2>
          <p 
           data-aos ="fade-up"
          className="text-white text-sm md:text-base mb-10 leading-relaxed ">
            Adivoz is a next-gen digital marketing agency where we blend creativity with analytics to help your brand stand out. With evident digital strategies, we define brands, engage their audience, and achieve lasting results.
          </p>
          <div
           data-aos ="fade-up"
          className="flex flex-col md:flex-row gap-3 md:gap-2 ">
            {/* Button 1 */}
            <a
              href="#"
              className="relative overflow-hidden border border-gray-300 text-white px-5 py-2 rounded-lg flex justify-center gap-2 transition-all duration-500 
               before:absolute before:inset-0 before:bg-blue-700 before:-translate-x-full before:transition-transform before:duration-500 hover:before:translate-x-0
               hover:text-white hover:border-gray-600 z-10 group"
            >
              <span className="flex items-center text-white gap-2 relative z-10 transition-transform duration-300 group-hover:scale-105 font-bold">
                Discover More
                <MdArrowOutward
                  size={20}
                  className="transition-transform duration-300 group-hover:rotate-45 rotate-0 group-hover:translate-x-1"
                />
              </span>
            </a>

            {/* Button 2 */}
            <a
              href="#"
              className="relative overflow-hidden border border-gray-300 text-white px-5 py-2 rounded-lg flex justify-center gap-2 transition-all duration-500 
               before:absolute before:inset-0 before:bg-blue-700 before:-translate-x-full before:transition-transform before:duration-500 hover:before:translate-x-0
               hover:text-white hover:border-gray-600 z-10 group"
            >
              <span className="flex items-center text-white gap-2 relative z-10 transition-transform duration-300 group-hover:scale-105 font-bold">
                Our Services
                <MdArrowOutward
                  size={20}
                  className="transition-transform duration-300 group-hover:rotate-45 rotate-0 group-hover:translate-x-1"
                />
              </span>
            </a>
          </div>
        </div>
      </section>

      <div 
       
      className=" bg-gray-200">
        <div className="lg:mx-20  flex flex-col  sm:flex-row gap-3 sm:justify-between mx-10 py-4  ">
          <div
          data-aos ="flip-left"
          className=" flex-1 flex gap-3 items-center justify-center px-3 hover:scale-110 cursor-pointer py-4 transition-all duration-500">
            <RiTeamFill
              size={"40px"}
              className="text-blue-500 p-1 rounded-full shadow-lg bg-white "
            />
            <span className="">
              <h1 className="font-bold text-xl">Highly Expert Team</h1>
              <p className="text-sm w-[70%] ">
               Skills-loaded experts deliver digital solutions.
              </p>
            </span>
          </div>
          <div 
          data-aos ="flip-left"
          className=" flex-1 flex gap-3 items-center justify-center px-3 cursor-pointer hover:scale-110 cursor-pointer py-4 transition-all duration-500">
            <RiPriceTag2Line 
              size={"40px"}
              className="text-blue-500 border  p-1 rounded-full shadow-lg bg-white"
            />
            <span>
              <h1 className="font-bold text-xl">Competitive Pricing</h1>
              <p className="text-sm w-[70%]">
                High-quality marketing services at affordable and transparent rates.
              </p>
            </span>
          </div>
          <div 
          data-aos ="flip-left"
          className=" flex-1 flex gap-3 items-center justify-center px-3 hover:scale-110 cursor-pointer py-4 transition-all duration-500">
            <FaHeadset
              size={"45px"}
              className="text-blue-500  p-1 rounded-full shadow-lg bg-white"
            />
            <span>
              <h1 className="font-bold text-xl">24 / 7 Customer Services</h1>
              <p className="text-sm w-[70%]">
               Readily available to support your brand anytime, anywhere.
              </p>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
