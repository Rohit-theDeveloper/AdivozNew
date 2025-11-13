import React, { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
 

const faqs = [
  {
    question: "Can You Help Migrate Our Data To The Cloud?",
    answer: `Absolutely. We provide secure and seamless cloud migration services with minimal downtime and full data integrity. Our process begins with an in-depth assessment of your business goals and existing infrastructure, ensuring a smooth transition to platforms like AWS, Azure, or Google Cloud—all optimized for Canadian data regulations (PIPEDA compliance).`,
    // images: [
    //   "https://images.unsplash.com/photo-1598257006458-087169a1f08e?auto=format&fit=crop&w=500&q=80",
    //   "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=500&q=80",
    // ],
  },
  {
    question: "How Do You Ensure Our Data And Systems Are Secure?",
    answer:
      "We implement advanced multi-layered security measures, including encryption, real-time threat monitoring, and regular security audits. Our cybersecurity framework aligns with Canadian compliance standards and ensures your business remains protected against evolving digital threats.",
  },
  {
    question: "What If We Already Have An In-House IT Or Marketing Team?",
    answer:
      "We work as an extension of your existing team—offering specialized support, consulting, and project scalability. Many of our Canadian clients rely on us for complex integrations, automation, and cloud infrastructure while maintaining their in-house operations.",
  },
  {
    question: "How Do I Know Which Services My Business Really Needs?",
    answer:
      "We begin with a free consultation and a full digital or IT audit to understand your challenges and goals. Then, we provide a tailored strategy—whether you need cloud migration, cybersecurity, SEO, or data analytics—ensuring maximum ROI for your business.",
  },
  {
    question: "Do You Provide Support Across Canada?",
    answer:
      "Yes, our team serves businesses across all major provinces, including Ontario, British Columbia, Alberta, and Quebec. We offer bilingual support (English/French) and remote technical assistance to ensure smooth collaboration wherever you are in Canada.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 px-4 md:px-10 lg:px-20 bg-gray-200  rounded-tr-4xl rounded-tl-4xl">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-start">
        {/* Left side */}
        <div>
          <span className="text-blue-600 font-semibold text-xl uppercase tracking-wide">
            FAQ
          </span>
          <h2 className="text-3xl md:text-6xl font-bold mt-3 mb-4 leading-snug text-gray-900">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 mb-8 font-medium">
            With years of experience in the IT industry, our certified
            professionals bring deep knowledge and proven solutions to every
            project.
          </p>
          <button className="flex items-center gap-2 border border-gray-300 rounded-full px-5 py-2 hover:bg-blue-600 hover:text-white transition cursor-pointer"
          >
            Asked Questions
            <span className="text-lg hover:rotate-45">↗</span>
          </button>
        </div>

        {/* Right side */}
        <div className="space-y-4">
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
