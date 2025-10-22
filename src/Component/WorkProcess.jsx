import React from "react";

const WorkProcess = () => {
  return (
    <section className="relative bg-gray-100 py-20 overflow-hidden">
      {/* Background decorative curves */}
      <div className="absolute inset-0 bg-gradient-to-tr from-white to-gray-100 opacity-40" />

      <div className="container mx-auto relative z-10 flex flex-col md:flex-row items-center justify-between gap-12 px-6 md:px-16">
        {/* Left Side - Image Stack */}
        <div className="relative w-full md:w-1/2 flex justify-center">
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

          {/* Image Stack */}
          <div className="relative w-72 h-80 ">
            <div className="absolute top-[-4] left-[10] w-full h-full bg-[url('https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg')] bg-cover bg-center rounded-2xl shadow-lg md:rotate-[-30deg]" />
            <div className="absolute top-2 left-[-7] w-full h-full bg-[url('https://images.pexels.com/photos/3184646/pexels-photo-3184646.jpeg')] bg-cover bg-center rounded-2xl shadow-lg md:rotate-[-30deg]" />
            <div className="absolute top-6 left-8 w-full h-full bg-[url('https://images.pexels.com/photos/3182833/pexels-photo-3182833.jpeg')] bg-cover bg-center rounded-2xl shadow-lg md:rotate-[-30deg]" />
          </div>
        </div>

        {/* Right Side - Text Content */}
        <div className="w-full md:w-1/2 space-y-6">
          <h4 className="text-blue-500 font-semibold tracking-wide">Work Process</h4>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight text-gray-900">
            Manage Web Services Tailored Growth Strategies
          </h2>

          <div className="space-y-6 mt-8">
            {/* Step 1 */}
            <div className="p-5 rounded-xl bg-gray-50 hover:bg-white shadow-sm hover:shadow-lg transition">
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
                <span className="text-2xl font-bold text-gray-300">01</span>
              </div>
            </div>

            {/* Step 2 */}
            <div className="p-5 rounded-xl bg-gray-50 hover:bg-white shadow-sm hover:shadow-lg transition">
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
                <span className="text-2xl font-bold text-gray-300">02</span>
              </div>
            </div>

            {/* Step 3 */}
            <div className="p-5 rounded-xl bg-gray-50 hover:bg-white shadow-sm hover:shadow-lg transition">
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
                <span className="text-2xl font-bold text-gray-300">03</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkProcess;
