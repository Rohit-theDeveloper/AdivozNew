import React from "react";
import { useEffect, useRef } from "react";
 import img_1 from '../assets/featureimg1.jpg';
 import img_2 from '../assets/featureimg2.jpg';
import img_3 from '../assets/featureimg3.jpg';
import img_4 from '../assets/featureimg4.jpg';




export default function FeaturesSection() {

  const scrollRef = useRef(null);
  const services = [
  {
    title: "Search Engine Optimization",
    img: img_1,
    desc: "Covers all aspects of IT, from consulting and planning.",
  },
  {
    title: "Email Marketing",
    img: img_2,
    desc: "Reach your audience with targeted campaigns.",
  },
  {
    title: "Content Marketing",
    img: img_3,
    desc: "Create valuable content that drives growth.",
  },
  {
    title: "Graphic Design & Branding",
    img:img_4,
    desc: "Covers all aspects of IT, from consulting and planning.",
  },
  {
    title: "Web Design & Development",
    img: img_2,
    desc: "Covers all aspects of IT, from consulting and planning.",
  },
  {
    title: "Web Design & Development",
    img: img_1,
    desc: "Covers all aspects of IT, from consulting and planning.",
  },
  {
    title: "Web Design & Development",
    img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=500",
    desc: "Covers all aspects of IT, from consulting and planning.",
  },
];


  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const scroll = () => {
      if (!scrollContainer) return;

      // Random delay (2s–5s)
      const delay = Math.random() * 1000 + 2000;

      // Random scroll distance (100–300px)
      const distance = Math.random() * 200 + 100;

      // Smooth scroll to next position
      scrollContainer.scrollBy({
        left: distance,
        behavior: "smooth",
      });

      // If reached end, reset to start
      if (
        scrollContainer.scrollLeft + scrollContainer.clientWidth >=
        scrollContainer.scrollWidth - 10
      ) {
        setTimeout(() => {
          scrollContainer.scrollTo({ left: 0, behavior: "smooth" });
        }, 2000);
      }

      // Schedule next random scroll
      setTimeout(scroll, delay);
    };

    // Start auto scroll after 2 seconds
    const initialTimeout = setTimeout(scroll, 2000);

    return () => clearTimeout(initialTimeout);
  }, []);

  return (
    <section className="py-12 px-6">
      {/* Section Header */}
      <div className="text-center mb-8">
        <h5 className="text-blue-600 font-medium mb-2">Our Features</h5>
        <h2 className="text-2xl md:text-4xl font-bold text-gray-900">
          Reliable Digital Marketing Service For Unstoppable Growth
        </h2>
      </div>

      {/* Horizontal Scroll Wrapper */}
      <div  ref={scrollRef}
        className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth pb-4">
         
        {services.map((service, index) =>{
         const rotation = index % 2 === 0 ? "-rotate-2" : "rotate-2";
        return ( 
          <div
            key={index}
            className={`max-w-[200px] md:max-w-[250px] bg-white shadow-md rounded-2xl overflow-hidden flex-shrink-0 transform transition-all duration-500 ease-in-out ${rotation} hover:rotate-0 hover:scale-105 hover:shadow-xl`}
          >
            <img
              src={service.img}
              alt={service.title}
              className="w-auto h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {service.desc}
              </p>
            </div>
          </div>
        )})}
      </div>
    </section>
  );
}
