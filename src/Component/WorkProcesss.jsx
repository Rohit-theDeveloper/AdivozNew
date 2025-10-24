import React, { useState } from "react";
import img1 from '../assets/workprocess1.jpeg';
import img2 from '../assets/workprocess2.jpeg';
import img3 from '../assets/workprocess3.jpeg';


const WorkProcesss = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="relative bg-gray-100 py-20 overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 bg-gradient-to-tr from-white to-gray-100 opacity-40" />

      <div className="container mx-auto relative z-10 flex flex-col md:flex-row items-center justify-between gap-12 px-6 md:px-16">
        {/* ---------- LEFT IMAGES ---------- */}
        <div className="relative w-full md:w-1/2 flex justify-center">
          {/* Small Labels */}
          <div className="absolute -top-8 -left-8 text-sm text-gray-600 space-y-2">
            <div className="flex items-center space-x-2">
              <span className="font-semibold">UI/UX</span>
              <span className="w-12 h-px bg-black"></span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="font-semibold">Marketing</span>
              <span className="w-12 h-px bg-black"></span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="font-semibold border-2 border-black rounded-full px-2 py-0.5">
                Web Design
              </span>
            </div>
          </div>

          {/* Stacked Images */}
          <div className="relative w-72 h-80 md:h-96">
            {/* Image 1 */}
            <div
              className={`absolute top-[-5px] left-[-30px] w-full h-full  bg-cover bg-center rounded-2xl shadow-xl md:rotate-[-12deg] transition-all duration-500 ease-in-out ${
                activeStep === 0 ? "z-30 brightness-110" : "z-10 opacity-80"
              }`}  style={{ backgroundImage: `url(${img1})` }}
            ></div>

            {/* Image 2 */}
            <div
              className={`absolute top-3 left-[-4px] w-full h-full bg-cover bg-center rounded-2xl shadow-xl md:rotate-[-8deg] transition-all duration-500 ease-in-out ${
                activeStep === 1 ? "z-30 brightness-110" : "z-20 opacity-80"
              }`} style={{ backgroundImage: `url(${img3})` }}
            ></div>

            {/* Image 3 */}
            <div
              className={`absolute top-6 left-6 w-full h-full  bg-cover bg-center rounded-2xl shadow-xl md:rotate-[-5deg] transition-all duration-500 ease-in-out ${
                activeStep === 2 ? "z-30 brightness-110" : "z-0 opacity-80"
              }`} style={{ backgroundImage: `url(${img2})` }}
            ></div>
          </div>
        </div>

        {/* ---------- RIGHT CONTENT ---------- */}
        <div className="w-full md:w-1/2 space-y-6">
          <h4 className="text-blue-500 font-semibold tracking-wide">
            Work Process
          </h4>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight text-gray-900">
            Manage Web Services Tailored Growth Strategies
          </h2>

          <div className="space-y-6 mt-8">
            {/* Step 1 */}
            <div
              onMouseEnter={() => setActiveStep(0)}
              className={`p-5 rounded-xl bg-gray-50 hover:bg-white shadow-sm hover:shadow-lg transition cursor-pointer ${
                activeStep === 0 ? "bg-white shadow-lg" : ""
              }`}
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-bold text-gray-900">
                    Consultation & Assessment
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">
                    We begin with a deep understanding of your business needs,
                    current IT environment.
                  </p>
                </div>
                <span
                  className={`text-2xl font-bold transition-all duration-200 ${
                    activeStep === 0 ? "text-blue-600" : "text-gray-300"
                  }`}
                >
                  01
                </span>
              </div>
            </div>

            {/* Step 2 */}
            <div
              onMouseEnter={() => setActiveStep(1)}
              className={`p-5 rounded-xl bg-gray-50 hover:bg-white shadow-sm hover:shadow-lg transition cursor-pointer ${
                activeStep === 1 ? "bg-white shadow-lg" : ""
              }`}
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-bold text-gray-900">
                    Implementation & Integration
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">
                    Our team ensures seamless integration of new solutions into
                    your existing infrastructure.
                  </p>
                </div>
                <span
                  className={`text-2xl font-bold transition-all duration-200 ${
                    activeStep === 1 ? "text-blue-600" : "text-gray-300"
                  }`}
                >
                  02
                </span>
              </div>
            </div>

            {/* Step 3 */}
            <div
              onMouseEnter={() => setActiveStep(2)}
              className={`p-5 rounded-xl bg-gray-50 hover:bg-white shadow-sm hover:shadow-lg transition cursor-pointer ${
                activeStep === 2 ? "bg-white shadow-lg" : ""
              }`}
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-bold text-gray-900">
                    Ongoing Support & Optimization
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">
                    We provide continuous support and regularly assess
                    performance to enhance system efficiency.
                  </p>
                </div>
                <span
                  className={`text-2xl font-bold transition-all duration-200 ${
                    activeStep === 2 ? "text-blue-600" : "text-gray-300"
                  }`}
                >
                  03
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkProcesss;