import React from "react";
import { FaLinkedinIn, FaTwitter, FaFacebookF } from "react-icons/fa";
import team1 from "../assets/team1.jpg";
import team2 from "../assets/team2.jpg";
import team3 from "../assets/team3.jpg";
import team5 from "../assets/team5.jpg";
import useAOS from "../hooks/useAOS";
import office from "../assets/co-founder-image.jpg"



export default function OurTeam() {
  useAOS();
  // const team = [
  //   {
  //     name: "Nishit Verma",
  //     role: "CEO & Founder",
  //     img: team2,
  //   },
  //   {
  //     name: "Michael Lee",
  //     role: "Chief Marketing Officer",
  //     img: team1,
  //   },
  //   {
  //     name: "Ava Martinez",
  //     role: "Creative Director",
  //     img: team3,
  //   },
  //   {
  //     name: "Daniel Thompson",
  //     role: "Technical Lead",
  //     img: team5,
  //   },
  // ];

  return (

    <>
     

        <section className="py-20  bg-gray-200  px-6 lg:px-16 overflow-hidden">
         <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
           {/* Left Side - Image */}
           <div className="relative group overflow-hidden">
             <img
             data-aos = "fade-right"
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
             <h2 className="text-3xl sm:text-4xl font-bold text-gray-900  leading-snug">
              Nishit Verma 
             </h2>
             <h3 className="text-blue-600 font-bold">CEO & CO-Founder of Adivoz</h3>
             {/* <p className="text-blue-500">CEO & CO-Founder</p> */}
   
             <p className="text-gray-800 mb-6 text-lg">
               A fast-growing digital marketing agency dedicated to helping brands scale in today’s competitive digital landscape. With a strong vision for data-driven growth, he leads the company’s strategy, innovation, and client success operations. His leadership blends creativity with analytics, ensuring every campaign delivers measurable impact.
             </p>
   
             <p className="text-gray-800 mb-8 text-lg">
               Under Nishit’s guidance, Adivoz has become known for delivering high-performance digital solutions across SEO, social media marketing, branding, and paid advertising. He is passionate about empowering businesses - startups to enterprises - to build strong digital identities and achieve sustainable online growth. His commitment to excellence and customer-first approach continues to drive Adivoz’s rapid expansion and industry reputation.
             </p>
   
             
           </div>
         </div>
       </section>
    </>
   
       
  );
}
