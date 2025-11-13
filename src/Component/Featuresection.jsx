import React from "react";
import { useEffect, useRef } from "react";
 import img_1 from '../assets/SEO.jpg';
 import img_2 from '../assets/socialmedia-marketing.jpg';
 import img_3 from '../assets/Content-marketing.jpg';
 import img_4 from '../assets/graphic-design.jpg';
 import img_5 from '../assets/web design.jpg';
 import img_6 from '../assets/reputation.jpg';
 import img_7 from '../assets/socialmedia-marketing.jpg';
import useAOS from "../hooks/useAOS";



export default function FeaturesSection() {
  useAOS();

  const scrollRef = useRef(null);
  const services = [
  {
    title: "Search Engine Optimization",
    img: img_1,
    desc: "Strategic SEO for greater visibility with organic traffic. ",
  },
  {
    title: "Email Marketing",
    img: img_2,
    desc: "Raise brand awareness with targeted campaigns",
  },
  {
    title: "Content Marketing",
    img: img_3,
    desc: "valuable and relevant content for SEO success. ",
  },
  {
    title: "Graphic Design & Branding",
    img:img_4,
    desc: "Visual creation of a brand's identity with cohesive visual elements.",
  },
  {
    title: "Web Design & Development",
    img: img_5,
    desc: "Designs that align well with contemporary trends",
  },
  {
    title: "Online Reputation Management",
    img: img_6,
    desc: "Maintain credibility and shape a positive online image.",
  },
  {
    title: "Social Media Marketing",
    img: img_7,
    desc: "Convert subscribers with powerful engagement posts.",
  },
];


  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const scroll = () => {
      if (!scrollContainer) return;
      
      const delay = Math.random() * 1000 + 2000;

      // Random scroll distance (100–300px)
      const distance = Math.random() * 200 + 200;

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

    
    const initialTimeout = setTimeout(scroll, 2000);

    return () => clearTimeout(initialTimeout);
  }, []);

  return (
    <section className="py-12 px-6">
      {/* Section Header */}
      <div 
     data-aos="fade-up"   
        data-aos-duration="1000"
      className="text-center mb-8">
        <h5 className="text-blue-600 font-medium mb-2">Our Features</h5>
        <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-15">
          Professional Digital Marketing Services For Unstoppable Growth
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
             data-aos="zoom-in"         
           
            className={`max-w-[300px] md:max-w-[300px] bg-white shadow-md rounded-2xl overflow-hidden flex-shrink-0 transform transition-all duration-500 ease-in-out ${rotation} hover:rotate-0 hover:scale-105 hover:shadow-xl mb-5`}
          >
            <img
              src={service.img}
              alt={service.title}
              loading="lazy"
              width = {300}
              height = {400}
              className="w-auto h-50 object-cover"
            />
            <div className="p-4 cursor-pointer my-4">
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
