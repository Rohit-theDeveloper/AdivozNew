import React, { useState } from "react";
import { FiSearch, FiMenu, FiX } from "react-icons/fi";
import { FiChevronDown } from "react-icons/fi";
import { MdArrowOutward } from "react-icons/md";
import logo from "../assets/ADIVOZ.png";
import { Link } from "react-router-dom";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const navItems = [
    {
      title: "Home",
      path: "/",
      submenu: [],
    },
    {
      title: "About Us",
      path: "/about-us",
      submenu: [
        { name: "Our Story", path: "/about-us/story" },
        { name: "Team", path: "/about-us/team" },
        { name: "Careers", path: "/about-us/careers" },
      ],
    },
    {
      title: "Pages",
      path: "/pages",
      submenu: [
        { name: "FAQ", path: "/faq" },
        { name: "Pricing", path: "/pricing" },
        { name: "Testimonials", path: "/testimonials" },
      ],
    },
    {
      title: "Our Services",
      path: "/services",
      submenu: [
        { name: "SEO Optimization", path: "/services/seo" },
        { name: "Web Development", path: "/services/web-dev" },
        { name: "Graphic Design", path: "/services/design" },
      ],
    },
    {
      title: "Projects",
      path: "/projects",
      submenu: [
        { name: "Case Studies", path: "/projects/case-studies" },
        { name: "Portfolio Grid", path: "/projects/portfolio" },
        { name: "Client Results", path: "/projects/results" },
      ],
    },
    {
      title: "Blog",
      path: "/blog",
      submenu: [
        { name: "Latest Posts", path: "/blog/latest" },
        { name: "Categories", path: "/blog/categories" },
        { name: "Tags", path: "/blog/tags" },
      ],
    },
    {
      title: "Contact Us",
      path: "/contact-us",
      submenu: [
        { name: "Contact Info", path: "/contact/info" },
        { name: "Support", path: "/contact/support" },
        { name: "Location Map", path: "/contact/location" },
      ],
    },
  ];

  return (
    <header className="w-full bg-white shadow-sm relative sticky top-0 z-50">
      <div className="max-w-8xl mx-auto flex items-center justify-between px-0">
        {/* Left Logo Section */}

        <div
          className="flex items-center gap-2 bg-blue-600 text-white px-4 sm:px-5 sm:py-5 py-3  w-auto md:w-auto lg:w-40"
          style={{
            background: "linear-gradient(135deg, #0b19e43d, #1609caff)",
          }}
        >
          <img
            src={logo}
            alt="Adivoz Logo"
            className="h-6 sm:h:8 md:h-8 w-auto transition-all duration-300 "
            style={{
              background: "linear-gradient(135deg, #00ff953d, #4800ceff)",
              clipPath: "polygon(0 0, 100% 0%, 100% 100%, 0 100%)",
            }}
          />
        </div>
        {/* Hamburger for mobile */}
        <button
          className="md:hidden  p-3 text-gray-700"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>

        {/* Desktop Navigation */}
        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex items-center gap-6 md:gap-1 lg:gap-6 font-medium text-gray-700 relative">
            {navItems.map((item, index) => (
              <li
                key={index}
                className="relative group cursor-pointer flex items-center gap-1 md:text-[10px]  lg:text-[18px]"
              >
                {/* Main Link */}
                <Link to={item.path}>{item.title}</Link>

                {/* Dropdown Icon */}
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
                  <ul className="absolute left-0 top-10 bg-white shadow-lg rounded-md opacity-0 group-hover:opacity-100 group-hover:visible invisible transition-all duration-300 min-w-[160px] md:min-w-[180px] py-2 z-50 text-sm">
                    {/* ✅ Corrected mapping */}
                    {item.submenu.map((subItem, subIndex) => (
                      <li
                        key={subIndex}
                        className="px-4 py-2 hover:bg-blue-50 hover:text-blue-600 transition"
                      >
                        <Link to={subItem.path}>{subItem.name}</Link>
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
          <button
            className="relative overflow-hidden bg-blue-500 text-white px-4 py-2 rounded-xl flex justify-center gap-1 font-medium cursor-pointer transition-all duration-500
          before:absolute before:inset-0 before:bg-blue-700 before:-translate-x-full before:transition-transform before:duration-500 
          hover:before:translate-x-0 z-20 group"
          >
            <span className="relative z-10 flex items-center gap-1">
              Get In Touch
              <MdArrowOutward className="transition-transform duration-300 group-hover:rotate-45 group-hover:translate-x-1" />
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
                    <Link to={item.path}>{item.title}</Link>
                    {item.submenu.length > 0 && (
                      <span className="text-gray-500 text-sm">▾</span>
                    )}
                  </summary>
                  {item.submenu.length > 0 && (
                    <ul className="ml-4 mt-2 border-l border-gray-200 pl-3 space-y-1">
                      {item.submenu.map((submenu, subIndex) => (
                        <li
                          key={subIndex}
                          className="hover:text-blue-600 text-gray-600 transition"
                        >
                          <Link to={submenu.path}>{submenu.name}</Link>
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
                Get In Touch{" "}
                <span>
                  <MdArrowOutward className="rotate-45" />
                </span>
              </button>
            </div>
          </ul>
        </div>
      )}
    </header>
  );
}
