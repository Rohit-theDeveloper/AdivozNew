import { useEffect, useState } from "react";
import { FaQuoteRight } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion"; // For smooth animation
import CircularText from "./CircularTextComponent";

const testimonials = [
  {
    id: 1,
    name: "Michel Andric",
    position: "CEO & Founder, Company ABC",
    rating: 5,
    text: "With years of experience in the IT industry, our certified professionals bring deep knowledge and proven solutions to every project—whether it’s cloud computing, cybersecurity, or software development.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 2,
    name: "Sophia Turner",
    position: "CTO, NextGen Systems",
    rating: 5,
    text: "Outstanding service and exceptional technical expertise. The team’s knowledge in cloud computing helped streamline our entire process.",
    image:  "https://randomuser.me/api/portraits/women/45.jpg",
  },
  {
    id: 3,
    name: "David Lee",
    position: "Founder, InnovateX",
    rating: 5,
    text: "Professional and reliable! Their software solutions exceeded our expectations and delivered results beyond what we imagined.",
    image:"https://randomuser.me/api/portraits/men/41.jpg",
  },
];

export default function TestimonialSection() {
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
    <section className="w-full bg-gradient-to-br from-[#f3f8ff] to-[#f7fbff] py-20 px-6">
      {/* Heading */}
      <div className="max-w-5xl mx-auto text-center mb-10">
        <div className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 mb-3">
          <span className="w-2 h-2 bg-blue-600 rounded-sm inline-block" />
          <span>Testimonials</span>
          <span className="w-2 h-2 bg-blue-600 rounded-sm inline-block" />
        </div>
        <h2 className="text-3xl md:text-4xl font-semibold text-slate-900">
          Real Feedback from Real Clients
        </h2>
      </div>

      {/* Content row */}
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10 relative">
        {/* Left Circle */}
        <div className="relative flex-shrink-0 z-10">
          <CircularText
            text="100% Trusted Our Clients • 100% Trusted Our Clients • "
            spinDuration={20}
            onHover="speedUp"
          />
        </div>

        {/* Right Testimonial Card */}
        <div className="relative z-10 w-full md:w-[640px]">
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
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-12 h-12 md:w-14 md:h-14 rounded-full object-cover"
              />
              <div>
                <div className="font-semibold text-gray-900">
                  {testimonial.name}
                </div>
                <div className="text-sm text-gray-500">
                  {testimonial.position}
                </div>
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
