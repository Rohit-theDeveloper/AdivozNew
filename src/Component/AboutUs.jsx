import React from "react";
import { RiTeamFill } from "react-icons/ri";
import { MdArrowOutward } from "react-icons/md";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img5 from "../assets/img5.jpg";

export default function AboutUs() {
  return (
    <>
      <div></div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 md:gap-3 sm:gap-3 gap-2 md:mx-15 mx-2 my-20">
        {/* Column 1 */}
        <div className="flex justify-center w-full">
          <img
            src={img3}
            alt="Team working together"
            loading="lazy"
            width={200}
            height={350}
            className="sm:w-[350px] sm:h-full  h-[350px] w-[200px] object-cover rounded-full aligns-cenetr"
          />
        </div>

        {/* Column 2 */}
        <div className="flex-1 flex flex-col w-full gap-4">
          <img
            src={img1}
            alt="Office collaboration"
            loading="lazy"
            width={200}
            height={350}
            className="w-full h-[50%] object-cover sm:rounded-tl-[150px] sm:rounded-tr-[150px] sm:rounded-br-[200px] rounded-tl-[150px] rounded-tr-[150px] rounded-br-[200px] "
          />
          <img
            src={img2}
            alt="Developers at work"
            loading="lazy"
            width={200}
            height={350}
            className="w-full h-[50%] object-cover sm:rounded-tl-[150px] sm:rounded-tr-[150px] sm:rounded-br-[200px] rounded-tl-[150px] rounded-tr-[150px] rounded-br-[150px] "
          />
        </div>

        {/* Column 3:  */}
        <div className="flex-1 flex flex-col rounded-lg p-6  ">
          <h5 className="text-blue-900 text-sm font-medium">
            About Us Our Company
          </h5>
          <h1 className="text-2xl md:text-2xl font-medium leading-tight mt-2">
            Solutions That Adapt as Your Business Evolves
          </h1>
          <p className="text-sm text-gray-600 mt-2 text-left md:text-start hyphens-auto ">
            Ever wondered why some brands stick with you while others fade? They
            probably have undertaken strong digital strategies. At Adivoz, we
            create complete solutions that encourage engagement, build loyalty,
            and spur real growth. Our creative thinkers, data-driven
            strategists, and tech addicts are strongly tied to one goal:<span className="font-bold "> “Making
            Your Brand Impossible to Ignore”.</span> 
            <p className="mt-4">Every business is unique! Knowing
            that, we dig right into your goals, your audience, and your market,
            then come up with strategies that evolve as you grow. With Adivoz
            ride-or-die digital partners, ensure your brand is always on point
            and never left behind.</p>
          </p>
          <div className="flex flex-col gap-5 mt-8">
            {/* Section 1 */}
            <div className="flex items-center gap-4">
              <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-blue-600 text-white">
                <RiTeamFill size={20} />
              </div>
              <div>
                <h1 className="font-bold text-lg">Manage Web Services</h1>
                <p className="text-sm text-gray-600">
                  We don’t just launch websites and call it a day. We monitor, optimize, and fix stuff behind the scenes.
                </p>
              </div>
            </div>

            {/* Section 2 */}
            <div className="flex items-center gap-4">
              <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-blue-600 text-white">
                <RiTeamFill size={20} />
              </div>
              <div className="text-start">
                <h1 className="font-bold text-lg">
                  Tailored Growth Strategies
                </h1>
                <p className="text-sm text-gray-600">
                  We build custom-made success plans for SEO, social media campaigns, and more. We test, tweak, and scale until a brand hits the desired numbers. 
                </p>
              </div>
            </div>
          </div>
          <button
            className="relative overflow-hidden bg-blue-500 text-white px-5 py-2 rounded-xl flex items-center justify-center gap-2 font-medium cursor-pointer transition-all duration-500
               before:absolute before:inset-0 before:bg-blue-700 before:-translate-x-full before:transition-transform before:duration-500 hover:before:translate-x-0 z-10 group mt-10"
          >
            <span className="relative z-20 flex items-center justify-center gap-2  text-center">
              Learn More
              <MdArrowOutward className="transition-transform duration-300 group-hover:rotate-45 group-hover:translate-x-1" />
            </span>
          </button>
        </div>

        {/* Column 4
        <div className="flex-1">
          <img
            src={img5}
            loading="lazy"
            width = {300}
            height = {400}
            alt="Office meeting"
            className="w-full h-70 object-cover rounded-4xl md:my-[50%]"
          />
        </div> */}
      </div>
    </>
  );
}
