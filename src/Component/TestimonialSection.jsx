import { useEffect, useState } from "react";

import { motion, AnimatePresence } from "framer-motion"; // For smooth animation
import CircularText from "./CircularTextComponent";
import useAOS from "../hooks/useAOS";

const testimonials = [
  {
    id: 1,
    name: "Patricia",
    role: "Front-End Developer",
    rating :5,
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    text: "The support and professionalism they offer during our projects were commendable. They were ready to listen to the objectives of the project and delivered the projects on time. ",
  },
  {
    id: 2,
    name: "James ",
    role: "Tech Startup Founder",
    rating :5,
    image: "https://randomuser.me/api/portraits/women/45.jpg",
    text: "Our website traffic has nearly doubled since we started working with Adivoz. Their SEO strategies are quite impressive, and they always explain things clearly. Highly recommend for anyone looking to boost their online visibility.",
  },
  {
    id: 3,
    name: "Sophia ",
    role: "E-commerce Manager",
    rating :5,
    image: "https://randomuser.me/api/portraits/men/41.jpg",
    text: "It’s been 2 years since we joined hands with Adivoz. Their team marketed our products in the most creative way. They come up with ideas and make plans for success while they are serving. Some of their creative ideas helped us with campaigns that actually worked wonders. Overall, we couldn’t ask for a better digital partner!",
  },
  {
    id: 4,
    name: "Annie",
    role: "Unknown",
    rating :5,
    image: "https://randomuser.me/api/portraits/women/45.jpg",
    text: "I started a small business of jewellery. Adivoz completely changed my social media presence. Their campaigns are creative, engaging, and focused on achievements. I have seen a noticeable spike in followers and customer engagement in just a few months!",
  },
  {
    id: 5,
    name: "Rohan M. ",
    role: "Online Retail Business Owner",
    rating :5,
    image: "https://randomuser.me/api/portraits/men/41.jpg",
    text: "The results speak for themselves. Our paid campaigns and email marketing efforts are finally bringing measurable ROI. Thanks to Adivoz, they know how to turn strategies into real revenue.",
  },
  {
    id: 6,
    name: "Mathew",
    role: "Fashion Brand Owner",
    image: "https://randomuser.me/api/portraits/men/41.jpg",
    text: "We recently worked with Adivoz, and they completely transformed our social media page. Their campaigns and strategic posts turn out amazing, all because of their team of creative thinkers. In just a few months, our business will start to boom with increased visibility of our brand on social media platforms. ",
  }
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
      <div 
      data-aos ="zoom-in"
      className="max-w-5xl mx-auto text-center mb-10">
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
        <div 
        data-aos ="fade-right"
        className="relative flex-shrink-0 z-10">
          <CircularText
            text="100% Trusted Our Clients • 100% Trusted Our Clients • "
            spinDuration={20}
            onHover="speedUp"
          />
        </div>

        {/* Right Testimonial Card */}
        <div
         data-aos ="fade-left"
        className="relative z-10 w-full md:w-[640px]">
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
