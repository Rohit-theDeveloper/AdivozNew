import React from "react";
import img1 from '../assets/ourprocess1.jpg';
import img2 from '../assets/ourprocess2.jpg';
import img3 from '../assets/ourprocess3.jpg';
import img4 from '../assets/ourprocess4.jpg';

const steps = [
  {
    id: "01",
    title: "Requirement analysis",
    description:
      "We listen to your brand story, we understand your goals, and we launch a powerful digital strategy. Plus, we conduct competitor analysis to identify insights, gaps, and opportunities.",
    image:
      img1, 
  },
  {
    id: "02",
    title: "Design and Execution",
    description:
      "Our creative masterminds and tech experts design visual outlooks to captivate and convert. In essence, we merge creativity with technology to let a brand stand out. ",
    image:
      img2, 
  },
  {
    id: "03",
    title: "Monitoring",
    description:
      "Once your campaigns go live, we double down! Our team monitors real-time data, audience engagement, and performance metrics to yield the greatest ROI.",
    image:
     img3, 
  },
  {
    id: "04",
    title: "Reporting",
    description:
      "Enjoy complete control with data-driven reports to know how our strategies perform, because the stats don’t lie. So, make informed decisions and track your brand’s measurable success.",
    image:
     img4, 
  },
];

const OurProcess = () => {
  return (
<section className="relative bg-gradient-to-b from-gray-200 to-white py-10">
      {/* background subtle tech pattern */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/circles-and-lines.png')] opacity-5"></div>

      <div className=" mx-auto px-6 md:px-5 relative z-10 text-center">
        {/* Heading */}
        <h4 className="text-blue-600 font-semibold mb-2">Our Process</h4>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
         How It Works!
        </h2>

        {/* Process Steps */}
       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  lg:gap-5 lg:mx-35 place-items-center md:mx-3 gap-5">

          {steps.map((step) => (
            <div
             data-aos ="fade-down"
              key={step.id}
              className="bg-white w-60 sm:w-60 h-115 rounded-tr-full rounded-tl-full rounded-br-full rounded-bl-2xl shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-2 p-5 flex flex-col items-center text-center border border-gray-100"
            >
              {/* Image */}
              <div className="w-45 h-45 rounded-full overflow-hidden mb-6">
                <img
               
                  src={step.image}
                  alt={step.title}
                  loading="lazy"
                  decoding="async"
                  width = {160}
                  height = {160}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-blue-600 mb-2">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-600 mb-4 text-left">{step.description}</p>

              {/* Step Number */}
              <span className="text-sm font-semibold text-blue-600">
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
