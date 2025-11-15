import React, { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { MdArrowOutward } from "react-icons/md";
import useAOS from "../hooks/useAOS";
import { useNavigate } from "react-router-dom";


const faqs = [
  {
    question: "Can You Help Improve Our SEO and Online Visibility in Canada?",
    answer:
      "Yes. We specialize in Canadian SEO strategies, including local SEO, Google My Business optimization, technical SEO, and content ranking. We help you rank higher across Canadian cities and provinces, driving qualified organic traffic.",
  },

  {
    question:
      "Do You Manage Social Media Marketing Campaigns for Canadian Businesses?",
    answer:
      "Absolutely. We build, optimize, and manage social media campaigns tailored to Canadian audiences. From content creation to paid ads on platforms like Facebook, Instagram, LinkedIn, and TikTok - our strategies boost engagement and conversions.",
  },

  {
    question: "How Can Email and Content Marketing Help My Business Grow?",
    answer:
      "We create targeted email campaigns, automation workflows, and high-value content that attract, nurture, and convert customers. All our email strategies follow Canadian anti-spam regulations (CASL).",
  },

  {
    question: "Do You Provide Website Design and Web Development Services?",
    answer:
      "Yes. We design modern, responsive, and SEO-friendly websites optimized for speed and conversions. Whether you need a business website, eCommerce store, or custom landing pages - we can develop it for you.",
  },

  {
    question:
      "How Do You Decide Which Digital Services My Business Really Needs?",
    answer:
      "We start with a complete digital audit and competitive analysis tailored to the Canadian market. Based on your business goals, we recommend a strategy focusing on SEO, PPC, social media, website improvements, branding, or email automation.",
  },

  {
    question: "Do You Provide Digital Marketing Support Across Canada?",
    answer:
      "Yes, we work with businesses across all major Canadian provinces including Ontario, British Columbia, Alberta, Quebec, and Manitoba. We offer bilingual support (English/French) and remote services nationwide.",
  },

  {
    question: "What If We Already Have an In-House Marketing Team?",
    answer:
      "We work as an extension of your existing team—handling specialized services such as SEO, paid campaigns, automation, analytics, or content while your internal team manages daily marketing tasks.",
  },
];

export default function FAQSection({ onAskClick }) {
  useAOS();
  const navigate = useNavigate()
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 px-4 md:px-10 lg:px-20 bg-gray-200 overflow-hidden  rounded-tr-4xl rounded-tl-4xl">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-start">
        {/* Left side */}
        <div>
          <span
            data-aos="fade-right"
            className="text-blue-600 font-semibold text-xl uppercase tracking-wide"
          >
            FAQ
          </span>
          <h2
            data-aos="fade-right"
            className="text-3xl md:text-6xl font-bold mt-3 mb-4 leading-snug text-gray-900"
          >
            Frequently Asked Questions
          </h2>
          <p data-aos="fade-right" className="text-gray-600 mb-8 font-medium">
            With years of experience in the IT industry, our certified
            professionals bring deep knowledge and proven solutions to every
            project.
          </p>
          <button
         onClick={onAskClick}
            data-aos="fade-right"
            className="relative overflow-hidden border-gray-300 rounded-full px-5 py-2 border border-2 border-gray-300 flex justify-center gap-1 font-md cursor-pointer transition-all duration-500
            before:absolute before:inset-0 before:bg-blue-700 before:-translate-x-full before:transition-transform before:duration-500
            hover:before:translate-x-0 z-20 hover:text-white group"
          >
            <span className="relative z-10 flex items-center gap-1">
              Asked Questions
              <MdArrowOutward className="transition-transform duration-300 group-hover:rotate-45 group-hover:translate-x-1" />
            </span>
          </button>
        </div>
        {/* Right side */}
        <div 
        
        data-aos="fade-left"
        className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              
              key={index}
              className={`rounded-2xl bg-gray-50 transition-all duration-300 ${
                openIndex === index ? "p-6" : "p-4"
              }`}
            >
              {/* Question Row */}
              <button
                onClick={() => toggleFAQ(index)}
                className="flex items-center justify-between w-full text-left"
              >
                <span className="font-medium text-gray-800 text-base sm:text-lg">
                  {faq.question}
                </span>
                <div className="ml-4 flex-shrink-0 p-2 bg-white rounded-full shadow">
                  {openIndex === index ? (
                    <FiChevronUp className="text-blue-600 text-lg" />
                  ) : (
                    <FiChevronDown className="text-blue-600 text-lg" />
                  )}
                </div>
              </button>

              {/* Answer Section */}
              <div
                className={`transition-all overflow-hidden duration-500 ${
                  openIndex === index
                    ? "max-h-[1000px] mt-5 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="flex flex-col sm:flex-row gap-4">
                  {/* Images if available */}
                  {faq.images && (
                    <div className="flex flex-col gap-2 flex-shrink-0">
                      {faq.images.map((img, i) => (
                        <img
                          key={i}
                          src={img}
                          alt="FAQ related"
                          className="w-full sm:w-40 h-32 object-cover rounded-lg"
                        />
                      ))}
                    </div>
                  )}
                  <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
