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

      <div className="flex gap-4 mx-15 py-30">
        {/* Column 1 */}
        <div className="flex-1">
          <img
            src={img3}
            alt="Image 1"
            className="w-full h-full object-cover rounded-full"
          />
        </div>

        {/* Column 2: 2 stacked images */}
        <div className="flex-1 flex flex-col gap-4">
          <img
            src={img1}
            alt="Image 2"
            className="w-full h-[50%] object-cover rounded-tl-[150px] rounded-tr-[150px] rounded-br-[200px] "
          />
          <img
            src={img2}
            alt="Image 3"
            className="w-full h-[50%] object-cover rounded-tl-[150px] rounded-tr-[150px] rounded-br-[200px]"
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
          <div className="flex gap-1 items-center  mt-5 ">
            <RiTeamFill
              size={"60px"}
              className="text-white p-2  rounded-lg  bg-blue-600 "
            />
            <span>
              <h1 className="font-bold ">Manage Web Services</h1>
              <p className="text-sm ">
                There are many variations of passages of avilable but the
                majority
              </p>
            </span>
          </div>
          <div className="flex gap-1 items-center  mt-5 ">
            <RiTeamFill
              size={"60px"}
              className="text-white px-2 rounded-lg  bg-blue-600 "
            />
            <span>
              <h1 className="font-bold ">Tailored Growth Strategies</h1>
              <p className="text-sm ">
                There are many variations of passages of avilable but the
                majority
              </p>
            </span>
          </div>
          <button className="bg-blue-600  justify-center text-white px-4 py-2 rounded-xl hover:bg-blue-700 flex items-center gap-1 font-medium mt-5 cursor-pointer">
            Learn More
            <span className="text-2xl ">
              <MdArrowOutward />
            </span>
          </button>
        </div>

        {/* Column 4: Single image (same size as column 2 images) */}
        <div className="flex-1">
          <img
            src={img5}
            alt="Image 4"
            className="w-full h-70 object-cover rounded-4xl my-[50%]"
          />
        </div>
      </div>
    </>
  );
}
