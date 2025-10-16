import React, { useState } from "react";
import { FiSearch, FiMenu, FiX } from "react-icons/fi";
import { FiChevronDown } from "react-icons/fi";
import { MdArrowOutward } from "react-icons/md";
import logo from "../assets/avidozlogo.png";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const navItems = [
    {
      title: "Home",
      submenu: [],
    },
    {
      title: "About Us",
      submenu: ["Our Story", "Team", "Careers"],
    },
    {
      title: "Pages",
      submenu: ["FAQ", "Pricing", "Testimonials"],
    },
    {
      title: "Our Services",
      submenu: ["SEO Optimization", "Web Development", "Graphic Design"],
    },
    {
      title: "Projects",
      submenu: ["Case Studies", "Portfolio Grid", "Client Results"],
    },
    {
      title: "Blog",
      submenu: ["Latest Posts", "Categories", "Tags"],
    },
    {
      title: "Contact Us",
      submenu: ["Contact Info", "Support", "Location Map"],
    },
  ];

  return (
    <header className="w-full bg-white shadow-sm relative sticky top-0 z-50">
      <div className="max-w-8xl mx-auto flex items-center justify-between px-0">
        {/* Left Logo Section */}
        <div
          className="flex items-center gap-2 bg-blue-600 text-white px-5 py-3 w-full md:w-auto"
        //   style={{
        //     background: "linear-gradient(135deg, #007bff, #004bce)",
        //     clipPath: "polygon(0 0, 100% 15%, 100% 100%, 0 100%)",  
        //   }}
        >
          <img src={logo} alt="Adivoz Logo" className="h-8 w-auto" />
          <div className="flex flex-col leading-tight">
            <h2 className="font-bold text-lg text-white">Adivoz</h2>
            <span className="text-xs text-white/90">
              Digital Marketing Agency
            </span>
          </div>
        </div>

        {/* Hamburger for mobile */}
        <button
          className="md:hidden p-3 text-gray-700"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex items-center gap-6 font-medium text-gray-700 relative">
            {navItems.map((item, index) => (
              <li
                key={index}
                className="relative group cursor-pointer flex items-center gap-1"
              >
                <span>{item.title}</span>

                {/* Dropdown Icon — visible only if submenu exists */}
                {item.submenu.length > 0 && (
                  <FiChevronDown
                    size={16}
                    className="transition-transform duration-300 group-hover:rotate-180"
                  />
                )}

                {/* Underline Animation */}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-black group-hover:w-full transition-all duration-300"></span>

                {/* Dropdown Menu */}
                {item.submenu.length > 0 && (
                  <ul className="absolute left-0 top-10 bg-white shadow-lg rounded-md opacity-0 group-hover:opacity-100 group-hover:visible invisible transition-all duration-300 min-w-[180px] py-2 z-50">
                    {item.submenu.map((subItem, subIndex) => (
                      <li
                        key={subIndex}
                        className="px-4 py-2 hover:bg-blue-50 hover:text-blue-600 transition"
                      >
                        {subItem}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Right Section */}
        <div className="hidden md:flex items-center gap-4 pr-6">
          <button
            className="p-2 border border-gray-300 rounded-full hover:bg-gray-100 transition"
            onClick={() => setIsSearchOpen(!isSearchOpen)}
          >
            <FiSearch size={18} />
          </button>
          {/* Animated Search Input */}
          <div
            className={`absolute right-45 top-15 flex items-center bg-white border border-gray-300 rounded-full overflow-hidden shadow-md transition-all duration-300 ${
              isSearchOpen ? "w-64 opacity-100" : "w-0 opacity-0"
            }`}
          >
            <input
              type="text"
              placeholder="Search..."
              className={`pl-4 pr-10 py-2 text-sm outline-none w-full transition-all duration-300 ${
                isSearchOpen ? "opacity-100" : "opacity-0"
              }`}
            />

            {/* 🔹 Cross Icon */}
            {isSearchOpen && (
              <button
                className="p-2 text-gray-500 hover:text-gray-700 transition"
                onClick={() => setIsSearchOpen(false)}
              >
                <FiX size={18} />
              </button>
            )}
          </div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 flex items-center gap-1 font-medium">
            Get In Touch{" "}
            <span className="text-2xl ">
              <MdArrowOutward />
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t shadow-sm">
          <ul className="flex flex-col gap-3 py-4 px-6 font-medium text-gray-700">
            {navItems.map((item, index) => (
              <li key={index} className="cursor-pointer">
                <details>
                  <summary className="flex justify-between items-center cursor-pointer hover:text-blue-600">
                    {item.title}
                    {item.submenu.length > 0 && (
                      <span className="text-gray-500 text-sm">▾</span>
                    )}
                  </summary>
                  {item.submenu.length > 0 && (
                    <ul className="ml-4 mt-2 border-l border-gray-200 pl-3 space-y-1">
                      {item.submenu.map((subItem, subIndex) => (
                        <li
                          key={subIndex}
                          className="hover:text-blue-600 text-gray-600 transition"
                        >
                          {subItem}
                        </li>
                      ))}
                    </ul>
                  )}
                </details>
              </li>
            ))}

            {/* Mobile Right Section */}
            <div className="flex items-center gap-4 pt-3">
              <button className="p-2 border border-gray-300 rounded-full hover:bg-gray-100 transition">
                <FiSearch size={18} />
              </button>
              <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 flex items-center gap-1 font-medium">
                Get In Touch <span>↗</span>
              </button>
            </div>
          </ul>
        </div>
      )}
    </header>
  );
}
