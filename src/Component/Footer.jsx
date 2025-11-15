import React, { useState } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaWhatsapp,
  FaInstagram,
} from "react-icons/fa";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import logo from "../assets/logo-footer.png";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Footer = () => {
  const [open, setOpen] = useState(false);
  const Navigate = useNavigate;

  return (
    <footer className="bg-[#0B1320] text-gray-300 pt-16 pb-8 px-6 md:px-40 relative overflow-hidden">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 border-b border-gray-700 pb-10">
        {/* Logo & About */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-3 flex items-center gap-2">
            <img
              src={logo}
              alt="logo"
              loading="lazy"
              decoding="async"
              width={100}
              height={40}
              className="w-auto h-15 rounded-xl"
            />
          </h2>
          <p className="text-sm text-gray-400 mb-4 leading-relaxed">
            Delivering smart, data-driven digital marketing solutions that grow
            brands, boost engagement, and drive results.
          </p>
          {/* Social Icons */}
          <div className="flex space-x-3 mt-4">
            {[
              FaFacebookF,
              FaTwitter,
              FaLinkedinIn,
              FaWhatsapp,
              FaInstagram,
            ].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-8 h-8 rounded-full bg-gray-800 hover:bg-blue-600 flex items-center justify-center transition"
              >
                <Icon size={14} />
              </a>
            ))}
          </div>
        </div>

        {/* Useful Links */}
        <div>
          <div
            className="flex justify-between items-center cursor-pointer md:cursor-default"
            onClick={() => setOpen(!open)}
          >
            <h3 className="text-white font-semibold text-lg mb-3">
              Useful Links
            </h3>
            <span className="md:hidden text-xl">{open ? "−" : "+"}</span>
          </div>
          <ul
            className={`space-y-2 text-sm text-gray-400 transition-all duration-300 ${
              open
                ? "max-h-60 opacity-100"
                : "max-h-0 opacity-0 md:opacity-100 md:max-h-none"
            } overflow-hidden md:overflow-visible`}
          >
            <li>
              <Link to="/" className="hover:text-blue-500 transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about-us" className="hover:text-blue-500 transition">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-blue-500 transition">
               Our Services
              </Link>
            </li>
            <li>
              <a href="#" className="hover:text-blue-500 transition">
                Terms of Service
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-500 transition">
                News & Media
              </a>
            </li>
          </ul>
        </div>

        {/* Get In Touch */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-3">
            Get In Touch
          </h3>
          <ul className="space-y-3 text-sm text-gray-400">
            <li className="flex items-center gap-2">
              <FiPhone className="text-blue-500" /> ‪+1 368-997-1808‬
            </li>
            <li className="flex items-center gap-2">
              <FiMail className="text-blue-500" /> nishit@adivoz.com
            </li>

            <li className="flex items-center gap-2">
              <FiMapPin className="text-blue-500" size={"25px"} /> 33 Nolan Hill
              Blvd, NW Calgary, Alberta, T3R 0S5 Canada
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        {/* <div>
          <h3 className="text-white font-semibold text-lg mb-3">
            Get updated the latest newsletter
          </h3>
          <form className="flex items-center bg-gray-800 rounded-full  mt-4">
            <input
              type="email"
              placeholder="Enter your email address..."
              className="flex-1 px-4 py-3 text-sm text-gray-300 bg-transparent focus:outline-none"
            />
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 transition px-4 py-3 rounded-full ml-[-15px] cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M2 21l21-9L2 3v7l15 2-15 2v7z" />
              </svg>
            </button>
          </form>
        </div> */}
      </div>

      {/* Bottom Bar */}
      <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 pt-6">
        <p>
          Copyright © 2025{" "}
          <span className="text-blue-500 hover:underline cursor-pointer">
            Adivoz Digital Marketing Agency
          </span>
          . All Rights Reserved
        </p>
        <div className="flex gap-6 mt-3 md:mt-0">
          <a href="#" className="hover:text-blue-500">
            Terms & Conditions
          </a>
          <a href="#" className="hover:text-blue-500">
            Careers
          </a>
          <a href="#" className="hover:text-blue-500">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
