import React from "react";
import { RiTeamFill } from "react-icons/ri";
import { MdArrowOutward } from "react-icons/md";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";
import img5 from "../assets/img5.jpg";

export default function AboutUs() {
  return (
    <>
      <div></div>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 md:gap-6 sm:gap-3 gap-2 md:mx-15 py-12  mx-2">
        {/* Column 1 */}
        <div className="flex justify-center ">
          <img
            src={img3}
            alt="Image 1"
            className="sm:w-auto sm:h-full  h-[350px] w-[200px] object-cover rounded-full aligns-cenetr"
          />
        </div>

        {/* Column 2: 2 stacked images */}
        <div className="flex-1 flex flex-col gap-4">
          <img
            src={img1}
            alt="Image 2"
            className="w-full h-[50%] object-cover sm:rounded-tl-[150px] sm:rounded-tr-[150px] sm:rounded-br-[200px] rounded-tl-[150px] rounded-tr-[150px] rounded-br-[200px] "
          />
          <img
            src={img2}
            alt="Image 3"
            className="w-full h-[50%] object-cover sm:rounded-tl-[150px] sm:rounded-tr-[150px] sm:rounded-br-[200px] rounded-tl-[150px] rounded-tr-[150px] rounded-br-[150px] "
          />
        </div>

        {/* Column 3: Text (bigger) */}
        <div className="flex-1 flex flex-col text-justify rounded-lg p-6">
          <h5 className="text-blue-900 text-sm font-medium">
            About Us Our Company
          </h5>
          <h1 className="text-2xl md:text-2xl font-medium leading-tight mt-2">
            Solutions that Evolve With Your Business
          </h1>
          <p className="text-sm text-gray-600 mt-2">
            IT Solutions refer toa board of services and technologies designed
            to address specific business needs , streamlinr operations , and
            drive growth. These solutions encompass hardware.
          </p>
         <div className="flex flex-col gap-5 mt-5">
  {/* Section 1 */}
  <div className="flex items-center gap-4">
    <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-blue-600 text-white">
      <RiTeamFill size={20} />
    </div>
    <div>
      <h1 className="font-bold text-lg">Manage Web Services</h1>
      <p className="text-sm text-gray-600">
        There are many variations of passages available but the majority
      </p>
    </div>
  </div>

  {/* Section 2 */}
  <div className="flex items-center gap-4">
    <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-blue-600 text-white">
      <RiTeamFill size={20} />
    </div>
    <div>
      <h1 className="font-bold text-lg">Tailored Growth Strategies</h1>
      <p className="text-sm text-gray-600">
        There are many variations of passages available but the majority
      </p>
    </div>
  </div>
</div>
          <button
  className="relative overflow-hidden bg-blue-500 text-white px-5 py-2 rounded-xl flex items-center justify-center gap-2 font-medium cursor-pointer transition-all duration-500
    before:absolute before:inset-0 before:bg-blue-700 before:-translate-x-full before:transition-transform before:duration-500 hover:before:translate-x-0 z-10 group mt-2"
>
  <span className="relative z-20 flex items-center justify-center gap-2 w-full text-center">
    Learn More
    <MdArrowOutward className="transition-transform duration-300 group-hover:rotate-45 group-hover:translate-x-1" />
  </span>
</button>
        </div>

        {/* Column 4: Single image (same size as column 2 images) */}
        <div className="flex-1">
          <img
            src={img5}
            alt="Image 4"
            className="w-full h-70 object-cover rounded-4xl md:my-[50%]"
          />
        </div>
      </div>
    </>
  );
}
