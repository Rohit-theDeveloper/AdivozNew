import React from "react";

const steps = [
  {
    id: "01",
    title: "Requirement analysis",
    description:
      "Understanding Business Needs To Define Precise, Actionable, And Effective Solutions.",
    image:
      "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg", // replace with your own
  },
  {
    id: "02",
    title: "Design and Execution",
    description:
      "Creating Visually Engaging Websites And Executing Seamless, User-Friendly Digital Experiences.",
    image:
      "https://images.pexels.com/photos/3184460/pexels-photo-3184460.jpeg", // replace
  },
  {
    id: "03",
    title: "Monitoring",
    description:
      "Tracking Performance Continuously To Optimize Strategies And Ensure Measurable Results.",
    image:
      "https://images.pexels.com/photos/3184461/pexels-photo-3184461.jpeg", // replace
  },
  {
    id: "04",
    title: "Reporting",
    description:
      "Analyzing Data And Generating Insights To Drive Informed Business Decisions.",
    image:
      "https://images.pexels.com/photos/3184300/pexels-photo-3184300.jpeg", // replace
  },
];

const OurProcess = () => {
  return (
<section className="relative bg-gradient-to-b from-gray-400 to-white py-20">
      {/* background subtle tech pattern */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/circles-and-lines.png')] opacity-5"></div>

      <div className=" mx-auto px-6 md:px-5 relative z-10 text-center">
        {/* Heading */}
        <h4 className="text-blue-500 font-medium mb-2">Our Process</h4>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
          How It Work Process!
        </h2>

        {/* Process Steps */}
       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 lg:gap-2 lg:mx-35 place-items-center">

          {steps.map((step) => (
            <div
              key={step.id}
              className="bg-white w-50 h-100  rounded-full shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-2 p-6 flex flex-col items-center text-center border border-gray-100"
            >
              {/* Image */}
              <div className="w-40 h-50 rounded-full overflow-hidden mb-6">
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-600 mb-4">{step.description}</p>

              {/* Step Number */}
              <span className="text-sm font-semibold text-black">
                STEP {step.id}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurProcess;
