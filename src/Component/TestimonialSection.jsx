import { useEffect, useState } from "react";

import { motion, AnimatePresence } from "framer-motion"; // For smooth animation
import CircularText from "./CircularTextComponent";
import useAOS from "../hooks/useAOS";

const testimonials = [
  {
    id: 1,
    name: "Patricia R.",
    role: "Front-End Developer",
    rating: 5,
    text: "The professionalism and support Adivoz provided throughout our project were exceptional. They listened carefully to our objectives and delivered everything on time. Truly reliable and easy to collaborate with.",
  },
  {
    id: 2,
    name: "James K.",
    role: "Tech Startup Founder",
    rating: 5,
    text: "Our website traffic has nearly doubled since partnering with Adivoz. Their SEO approach is clear, strategic, and effective. They always explain things in a simple way, which makes decision-making easier. Highly recommended!",
  },
  {
    id: 3,
    name: "Sophia L.",
    role: "E-commerce Manager",
    rating: 5,
    text: "We’ve been working with Adivoz for over two years now, and the experience has been outstanding. Their team brings creative ideas and strategic planning that have helped several of our campaigns perform beyond expectations.",
  },

  {
    id: 5,
    name: "Rohan M.",
    role: "Online Retail Business Owner",
    rating: 5,
    text: "The results speak for themselves. Our paid ads and email campaigns are finally generating consistent ROI. Adivoz really understands how to convert strategy into real revenue. Super impressed with their expertise.",
  },

  {
    id: 9,
    name: "Arjun Verma",
    role: "Fitness Trainer & Coach",
    rating: 5,
    text: "Before Adivoz, my Instagram barely reached anyone. Their content planning and ad strategy helped me gain real, engaging followers and more clients for my fitness programs. They truly understand branding for personal coaches.",
  },
];

export default function TestimonialSection() {
  useAOS();
  const [index, setIndex] = useState(0);

  // Auto-slide every 7 seconds (slower)
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  const testimonial = testimonials[index];

  return (
    <section className="w-full bg-gradient-to-br from-[#f3f8ff] to-[#f7fbff] py-20 px-6 overflow-hidden">
      {/* Heading */}
      <div data-aos="zoom-in" className="max-w-5xl mx-auto text-center mb-10">
        <div className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 mb-3">
          <span className="w-2 h-2 bg-[#004aac] rounded-sm inline-block" />
          <span>Testimonials</span>
          <span className="w-2 h-2 bg-[#004aac] rounded-sm inline-block" />
        </div>
        <h2 className="text-3xl md:text-4xl font-semibold text-slate-900">
          Real Feedback from Real Clients
        </h2>
      </div>

      {/* Content row */}
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10 relative">
        {/* Left Circle */}
        <div data-aos="fade-right" className="relative flex-shrink-0 z-10">
          <CircularText
            text="A Trusted Choice for Our Clients • A Trusted Choice for Our Clients • "
            spinDuration={20}
            onHover="speedUp"
          />
        </div>

        {/* Right Testimonial Card */}
        <div data-aos="fade-left" className="relative z-10 w-full md:w-[640px]">
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-10">
            {/* Rating */}
            <div className="flex items-center mb-4">
              {Array.from({ length: testimonial.rating }).map((_, i) => (
                <span key={i} className="text-yellow-400 text-xl mr-1">
                  ★
                </span>
              ))}
              <span className="ml-3 text-sm text-gray-400">5.0</span>
            </div>

            {/* Testimonial text with smooth slide-in animation */}
            <div className="relative h-24 md:h-28 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.p
                  key={testimonial.id}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 1 }}
                  className="text-gray-700 text-base md:text-lg leading-relaxed mb-6 line-clamp-3"
                >
                  {testimonial.text}
                </motion.p>
              </AnimatePresence>
            </div>

            {/* Profile row */}
            <div className="flex items-center gap-4 mt-4">
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-blue-600 text-white flex items-center justify-center text-lg md:text-xl font-semibold">
                {testimonial.name.charAt(0)}
              </div>

              <div>
                <div className="font-semibold text-gray-900">
                  {testimonial.name}
                </div>
                <div className="text-sm text-black">{testimonial.role}</div>
              </div>
            </div>

            {/* Dots indicators */}
            <div className="mt-6 flex justify-center">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  className={`mx-2 rounded-full transition-all duration-300 ${
                    i === index
                      ? "w-4 h-4 bg-blue-600 shadow-lg"
                      : "w-2 h-2 bg-gray-300"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
