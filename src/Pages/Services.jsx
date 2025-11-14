import React from "react";
import { useNavigate } from "react-router-dom";
import AnalyticsdataDrivenStrategy from "../assets/Analytics-data-Driven Strategy.jpg";
import CRO from "../assets/CRO.jpg";
import LocalGeoTargetedMarketing from "../assets/Local-Geo-Targeted Marketing.jpg";
import payperclick from "../assets/pay-per-click.jpg";
import reputation from "../assets/reputation.jpg";
import VideoMarketingInteractiveContent from "../assets/Video-MarketingInter-active Content.jpg";
import socialmediamarketing from "../assets/socialmedia-marketing.jpg";
import webdesign from "../assets/web design.jpg";
import SEO from "../assets/Seo1.jpg";
import Emailmarketing from "../assets/Email-marketing.jpg";
import SEO1 from "../assets/Seo1.jpg";
import { MdArrowOutward } from "react-icons/md";
import useAOS from "../hooks/useAOS";

export default function Services() {
  useAOS();
  const Navigate = useNavigate();
  const services = [
    {
      img: SEO1,
      title: "Search Engine Optimization (SEO)",
      desc: "Boost your visibility across Canadian search engines with bilingual SEO strategies, optimized Google My Business profiles, and province-specific targeting to reach both English and French audiences effectively.",
      button: "Contact Us",
    },
    {
      img: payperclick,
      title: "Pay-Per-Click Advertising (PPC) & SEM",
      desc: "Maximize ROI with data-driven PPC campaigns across Google Ads, Bing, and social media platforms. Our experts craft conversion-focused landing pages and A/B tests to engage your Canadian audience.",
      button: "Contact Us",
    },
    {
      img: socialmediamarketing,
      title: "Social Media & Influencer Marketing",
      desc: "Build a strong brand voice and community across Instagram, LinkedIn, and TikTok. Collaborate with top Canadian influencers and engage local audiences with creative bilingual campaigns.",
      button: "Contact Us",
    },
    {
      img: webdesign,
      title: "Web Design & Development",
      desc: "We create fast, responsive, and accessible websites that meet Canadian web standards. From e-commerce to corporate sites, our UX-focused design ensures performance and user satisfaction.",
      button: "Contact Us",
    },
    {
      img: Emailmarketing,
      title: "Content & Email Marketing",
      desc: "Engage customers with culturally relevant storytelling, bilingual newsletters, and video content tailored to Canadian business seasons and local market trends.",
      button: "Contact Us",
    },
    // {
    //   img: LocalGeoTargetedMarketing,
    //   title: "Local & Geo-Targeted Marketing",
    //   desc: "Drive foot traffic and leads for your local business through Google Maps optimization, province-specific ads, and hyperlocal SEO tailored to your Canadian audience.",
    //   button: "Contact Us",
    // },
    {
      img: AnalyticsdataDrivenStrategy,
      title: "Analytics & Data-Driven Strategy",
      desc: "Turn insights into action with advanced analytics dashboards, attribution tracking, and predictive modelling built for the Canadian market’s unique consumer behaviour.",
      button: "Contact Us",
    },
    {
      img: VideoMarketingInteractiveContent,
      title: "Video Marketing & Interactive Content",
      desc: "Tell your brand story through professional video campaigns, live webinars, and interactive social content crafted to capture Canadian engagement trends.",
      button: "Contact Us",
    },
    {
      img: reputation,
      title: "Reputation & Online Review Management",
      desc: "Protect and enhance your online reputation with proactive review management on Google, Yelp, and industry platforms — handled with bilingual response strategies.",
      button: "Contact Us",
    },
    // {
    //   img: CRO,
    //   title: "Conversion Rate Optimization (CRO) & Growth Marketing",
    //   desc: "Boost lead conversions through optimized funnels, smart retargeting, and growth-driven digital strategies aligned with Canadian startup and enterprise goals.",
    //   button: "Contact Us",
    // },
  ];

  return (
    <>
      <section className="relative  overflow-hidden rounded-2xl mx-10 my-10 ">
        {/* Background Image */}
        <div
        data-aos ="zoom-in"
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1920&q=80')",
          }}
        ></div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-[#0d172a]/80"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center text-white py-24 px-4 sm:py-40">
          <h1 
           data-aos ="fade-down"
          className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4">
            Our Services
          </h1>

          <nav 
          data-aos ="fade-up"
          className="text-sm sm:text-base flex gap-2">
            <a
              href="/"
              className="text-gray-300 hover:text-white transition-colors font-medium text-xl"
            >
              Home
            </a>
            <span className="text-gray-400">»</span>
            <span className="text-white font-medium text-xl cursor-pointer">
              Our Services
            </span>
          </nav>
        </div>
      </section>

      {/* Heading Section */}
      <section className="w-full  my-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          {/* First line */}
          <h3
          data-aos ="zoom-in"
          className="text-blue-600 font-semibold text-sm md:text-2xl mb-2">
            What we are offering
          </h3>

          {/* Second line */}
          <h2
           data-aos ="zoom-in"
          className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Dealing in all professional IT services
          </h2>

          {/* Third line */}
          <p 
           data-aos ="zoom-in"
          className="text-gray-700 text-base md:text-xl leading-relaxed">
            IT solutions refer to a broad range of services and technologies
            designed to address specific business needs, streamline operations,
            and drive growth.
          </p>
        </div>

        {/* Services Card Section */}

        <div className="max-w-7xl mx-auto mt-20 cursor-pointer bg-gray-50 p-5">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => (
              <div
               data-aos ="fade-up"
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col transition-all duration-300 hover:shadow-2xl "
              >
                {/* Image */}
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-48 object-cover transition-transform duration-300 ease-in-out hover:scale-105 mb-5"
                />

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-700 mb-6 flex-grow">{service.desc}</p>
                  <button
                    onClick={() => Navigate("/contact-us")}
                    className="relative overflow-hidden bg-blue-600 text-white py-3 px-4 rounded-lg  mt-auto 
                            flex justify-center items-center gap-2 font-medium cursor-pointer transition-all duration-500
                            before:absolute before:inset-0 before:bg-blue-800 before:-translate-x-full before:transition-transform before:duration-500
                            hover:before:translate-x-0 z-20 group"
                  >
                    <span className="relative z-10 flex items-center gap-1">
                      {service.button}
                      <MdArrowOutward className="transition-transform duration-300 group-hover:rotate-45 group-hover:translate-x-1" />
                    </span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
