import React from 'react'
import OurTeam from '../Component/OurTeam'
import office from "../assets/office.jpg"
import TestimonialSection from '../Component/TestimonialSection'
import { FaEye, FaBullseye } from "react-icons/fa";
import useAOS from '../hooks/useAOS';
import { useNavigate } from 'react-router-dom';
import banner from "../assets/banner.jpg"
import { Link } from "react-router-dom";


export default function About() {
  const navigate = useNavigate()
  useAOS();
  return (
    <>
     <section className="relative  overflow-hidden rounded-2xl mx-10 my-10 ">
      {/* Background Image */}
      <div
      data-aos= "zoom-in"
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${banner})`,
        }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#0d172a]/80"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center text-white py-24 px-4 sm:py-40">
        <h1 
        data-aos= "fade-down"
        className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4">
          About Us
        </h1>

        <nav 
        data-aos="fade-up"
        className="text-sm sm:text-base flex gap-2">
          <Link
            to="/"
            className="text-gray-300 hover:text-white transition-colors font-medium text-xl"
          >
            Home
          </Link>
          <span className="text-gray-400">»</span>
          <span className="text-white font-medium text-xl">About Us</span>
        </nav>
      </div>
    </section>
 
  <section className="py-20 bg-gray-50 px-6 lg:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Side - Image */}
        <div className="relative group">
          <img
          data-aos = "fade-down"
           loading='lazy'
            src={office}
            alt="Digital Solutions Team in Canada"
            className="w-full h-[420px] object-cover rounded-2xl shadow-lg transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0  opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </div>

        {/* Right Side - Text */}
        <div 
          data-aos = "fade-left">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 leading-snug">
            Empowering Businesses with Cutting-Edge Digital Solutions in Canada
          </h2>

          <p className="text-gray-600 mb-6 text-lg">
            We are a full-service digital solutions company based in Canada,
            specializing in innovative web development, strategic marketing, and
            next-generation design. Our mission is to help Canadian businesses
            grow faster through technology, creativity, and performance-driven
            solutions.
          </p>

          <p className="text-gray-600 mb-8 text-lg">
            From data-driven marketing campaigns to responsive web applications,
            we blend technology with human insight to deliver experiences that
            convert and connect. Partner with us to accelerate your digital
            growth journey.
          </p>

          <button
          onClick={()=>navigate('/services')}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 shadow-md cursor-pointer">
           Discover our Services
          </button>
        </div>
      </div>
    </section>

    {/* vision mission */}
      <section className="relative bg-gray-200 py-20 px-6 overflow-hidden">
      {/* Decorative blurred circles (3D light effect) */}
      {/* <div className="absolute top-20 left-10 w-60 h-60 bg-blue-600/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-600/20 blur-3xl rounded-full"></div> */}

      <div className="relative max-w-6xl mx-auto text-center">
        <h2 
        data-aos ="zoom-in"
        className="text-4xl md:text-5xl font-bold text-blue-600 mb-4">
          Our <span className="text-blue-600">Vision</span> &{" "}
          <span className="text-blue-600">Mission</span>
        </h2>
        <p 
        data-aos ="zoom-in"
        className="text-gray-800 text-lg max-w-2xl mx-auto mb-16">
          We are driven by innovation and passion - crafting digital solutions
          that empower businesses to grow, connect, and thrive in the evolving
          digital world.
        </p>

        {/* Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Vision Card */}
          <div
          data-aos ="fade-right"
          className="group perspective">
            <div className="relative bg-white/10 backdrop-blur-lg rounded-2xl p-10 shadow-2xl border border-gray-700 transform transition-transform duration-700 group-hover:rotate-y-6 group-hover:-translate-y-2">
              <div className="flex flex-col items-center text-center space-y-6">
                <div className="bg-blue-600/20 p-6 rounded-full shadow-inner group-hover:scale-110 transition-transform duration-300">
                  <FaEye className="text-blue-400 text-5xl" />
                </div>
                <h3 className="text-2xl font-bold text-black">Our Vision</h3>
                <p className="text-gray-800 leading-relaxed">
                  To be Canada’s most trusted digital solutions partner - helping
                  brands unlock their true potential through creativity, data, and
                  technology.
                </p>
              </div>
            </div>
          </div>

          {/* Mission Card */}
          <div 
           data-aos ="fade-left"
          className="group perspective">
            <div className="relative bg-white/10 backdrop-blur-lg rounded-2xl p-10 shadow-2xl border border-gray-700 transform transition-transform duration-700 group-hover:-rotate-y-6 group-hover:-translate-y-2">
              <div className="flex flex-col items-center text-center space-y-6">
                <div className="bg-blue-600/20 p-6 rounded-full shadow-inner group-hover:scale-110 transition-transform duration-300">
                  <FaBullseye className="text-blue-400 text-5xl" />
                </div>
                <h3 className="text-2xl font-bold text-black">Our Mission</h3>
                <p className="text-gray-800 leading-relaxed">
                  To deliver innovative, result-driven, and sustainable digital
                  strategies that help our clients achieve measurable growth and
                  long-term success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  <OurTeam />
  <TestimonialSection />
    
    </>
  )
}
