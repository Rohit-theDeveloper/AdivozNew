import React from "react";
import { FaLinkedinIn, FaTwitter, FaFacebookF } from "react-icons/fa";
import team1 from "../assets/team1.jpg";
import team2 from "../assets/team2.jpg";
import team3 from "../assets/team3.jpg";
import team5 from "../assets/team5.jpg";




export default function OurTeam() {
  const team = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      img: team1,
    },
    {
      name: "Michael Lee",
      role: "Chief Marketing Officer",
      img: team2,
    },
    {
      name: "Ava Martinez",
      role: "Creative Director",
      img: team3,
    },
    {
      name: "Daniel Thompson",
      role: "Technical Lead",
      img: team5,
    },
  ];

  return (
    <section className="py-20 px-6 md:px-16 lg:px-28 bg-gray-100 relative overflow-hidden">
      <div className="absolute inset-0 bg-gray-200 "></div>
      <div className="relative z-10 text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-blue-600 mb-4">
          Our Team
        </h2>
        <p className="text-black max-w-2xl mx-auto">
          Meet the creative minds driving innovation and excellence at our digital marketing agency in Canada.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 relative z-10">
        {team.map((member, index) => (
          <div
            key={index}
            className="group relative bg-[#111827] rounded-2xl shadow-xl hover:shadow-2xl overflow-hidden transform hover:-translate-y-2 transition duration-500"
          >
            <div className="relative">
              <img
                src={member.img}
                alt={member.name}
                className="w-full h-72 object-cover"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center gap-4">
                <a
                  href="#"
                  className="p-3 bg-white/10 hover:bg-blue-500 rounded-full text-white text-lg transition"
                >
                  <FaLinkedinIn />
                </a>
                <a
                  href="#"
                  className="p-3 bg-white/10 hover:bg-blue-400 rounded-full text-white text-lg transition"
                >
                  <FaTwitter />
                </a>
                <a
                  href="#"
                  className="p-3 bg-white/10 hover:bg-blue-600 rounded-full text-white text-lg transition"
                >
                  <FaFacebookF />
                </a>
              </div>
            </div>

            <div className="p-6 text-center">
              <h3 className="text-xl font-semibold text-white mb-1">
                {member.name}
              </h3>
              <p className="text-blue-400 font-medium">{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
