import React from "react";
import img1 from '../assets/ourprocess1.avif';
import img2 from '../assets/ourprocess2.avif';
import img3 from '../assets/ourprocess3.avif';
import img4 from '../assets/ourprocess4.avif';

const steps = [
  {
    id: "01",
    title: "Requirement analysis",
    description:
      "Understanding Business Needs To Define Precise, Actionable, And Effective Solutions.",
    image:
      img1, // replace with your own
  },
  {
    id: "02",
    title: "Design and Execution",
    description:
      "Creating Visually Engaging Websites And Executing Seamless, User-Friendly Digital Experiences.",
    image:
      img2, // replace
  },
  {
    id: "03",
    title: "Monitoring",
    description:
      "Tracking Performance Continuously To Optimize Strategies And Ensure Measurable Results.",
    image:
     img3, // replace
  },
  {
    id: "04",
    title: "Reporting",
    description:
      "Analyzing Data And Generating Insights To Drive Informed Business Decisions.",
    image:
     img4, // replace
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
              <div className="w-40 h-40 rounded-full overflow-hidden mb-6">
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
