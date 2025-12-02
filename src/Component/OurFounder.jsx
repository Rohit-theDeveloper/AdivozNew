import React from "react";
import useAOS from "../hooks/useAOS";
import founder from "../assets/co-founder-image.jpg";

export default function OurFounder() {
  useAOS();
  return (
    <>
      <section className="py-20  bg-gray-200  px-6 lg:px-16 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image */}
          <div className="relative group overflow-hidden">
            <img
              data-aos="fade-right"
              loading="lazy"
              src={founder}
              alt="Digital Solutions founder"
              className="w-full h-[420px] object-cover rounded-2xl shadow-lg transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0  opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>

          {/* Right Side - Text */}
          <div data-aos="fade-left">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900  leading-snug">
              Nishit Verma
            </h2>
            <h3 className="text-blue-600 font-bold">
              Founder | Adivoz
            </h3>
            {/* <p className="text-blue-500">CEO & CO-Founder</p> */}

            <p className="text-gray-800 mb-3 text-lg">
              Nishit brings over 25 years of leadership experience across B2B,
              B2C, and fintech sectors. As the founder of Adivoz Digital, he
              combines strategic business insight with a deep understanding of
              marketing and customer engagement to help brands grow in the
              digital era.
            </p>

            <p className="text-gray-800 mb-3 text-lg">
              Having held senior leadership roles including Chief Operating Officer and Vice President at leading organizations such as IndiaMART, Exclusife Technosoft, and Innoviti Payment Solutions, Nishit has built and scaled businesses, expanded brands to new markets, and driven customer engagement through innovative digital strategies.
            </p>
            <p className="text-gray-800 mb-8 text-lg">
              At Adivoz Digital, Nishit’s focus is on guiding clients toward measurable growth, stronger brand presence, and long-term success through intelligent, performance-driven digital marketing strategies.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
