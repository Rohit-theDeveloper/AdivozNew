import React, { useState } from "react";
import { FiSearch, FiMenu, FiX, FiChevronDown } from "react-icons/fi";
import { MdArrowOutward } from "react-icons/md";
import logo from "../assets/adivoz.jpg";
import { Link, useNavigate } from "react-router-dom";
import SearchModal from "./Modal/SearchModal";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchModalOpen, setSearchModalOpen] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState(null);

  const Navigate = useNavigate();

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
        // { name: "Our Story", path: "/about-us/story" },
        // { name: "Team", path: "/about-us/team" },
        // { name: "Careers", path: "/about-us/careers" },
      ],
    },
    // {
    //   title: "Pages",
    //   path: "/pages",
    //   submenu: [
    //     // { name: "FAQ", path: "/pages/faq" },
    //     // { name: "Pricing", path: "/pages/pricing" },
    //     // { name: "Testimonials", path: "/pages/testimonials" },
    //   ],
    // },
    {
      title: "Our Services",
      path: "/services",
      submenu: [
        // { name: "SEO Optimization", path: "/services/seo" },
        // { name: "Web Development", path: "/services/web-dev" },
        // { name: "Graphic Design", path: "/services/design" },
      ],
    },
    // {
    //   title: "Projects",
    //   path: "/projects",
    //   submenu: [
    //     { name: "Case Studies", path: "/projects/case-studies" },
    //     { name: "Portfolio Grid", path: "/projects/portfolio" },
    //     { name: "Client Results", path: "/projects/results" },
    //   ],
    // },
    // {
    //   title: "Blog",
    //   path: "/blog",
    //   submenu: [
    //     { name: "Latest Posts", path: "/blog/latest" },
    //     { name: "Categories", path: "/blog/categories" },
    //     { name: "Tags", path: "/blog/tags" },
    //   ],
    // },
    {
      title: "Contact Us",
      path: "/contact-us",
      submenu: [
        // { name: "Contact Info", path: "/contact/info" },
        // { name: "Support", path: "/contact/support" },
        // { name: "Location Map", path: "/contact/location" },
      ],
    },
  ];

  const toggleSubMenu = (index) => {
    if (openSubMenu === index) {
      setOpenSubMenu(null);
    } else {
      setOpenSubMenu(index);
    }
  };

  return (
    <header className="w-full bg-white shadow-sm relative sticky top-0 z-50 sm:py-4 py-1">
      <div className="max-w-8xl mx-auto flex items-center justify-between px-0">
        {/* Left Logo Section */}
        <div className="flex items-center gap-2 bg-blue-600 text-white w-auto sm:w-auto md:w-40 lg:w-40 sm:mx-4 mx-10">
          <img
            src={logo}
            alt="Adivoz Logo"
            className="h-8  md:h-full w-auto transition-all duration-300 cursor-pointer"
            onClick={()=> Navigate("")}
          />
        </div>

        {/* icon for mobile */}
        <button
          className="lg:hidden p-3 text-gray-700"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden lg:block">
          <ul className="flex items-center gap-6 md:gap-1 lg:gap-15 font-medium text-gray-700 relative">
            {navItems.map((item, index) => (
              <li
                key={index}
                className="relative group cursor-pointer flex items-center gap-1 md:text-[10px] lg:text-[18px]"
              >
                <Link to={item.path}>{item.title}</Link>
                {item.submenu.length > 0 && (
                  <FiChevronDown
                    size={16}
                    className="transition-transform duration-300 group-hover:rotate-180"
                  />
                )}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-black group-hover:w-full transition-all duration-300"></span>

                {item.submenu.length > 0 && (
                  <ul className="absolute left-0 top-10 bg-white shadow-lg rounded-md opacity-0 group-hover:opacity-100 group-hover:visible invisible transition-all duration-300 min-w-[160px] md:min-w-[180px] py-2 z-50 text-sm">
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
        <div className="hidden lg:flex items-center gap-4 pr-6">
          <button
            className="p-2 border border-gray-300 rounded-full hover:bg-gray-100 transition cursor-pointer"
            onClick={() => setSearchModalOpen(!isSearchModalOpen)}
          >
            <FiSearch size={18} />
          </button>

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

      {/* Mobile + Tablet Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t shadow-sm">
          <ul className="flex flex-col gap-3 py-4 px-6 font-medium text-gray-700">
            {navItems.map((item, index) => (
              <li key={index} className="cursor-pointer">
                <div className="flex justify-between items-center">
                  <Link
                    to={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className="hover:text-blue-600"
                  >
                    {item.title}
                  </Link>
                  {item.submenu.length > 0 && (
                    <FiChevronDown
                      size={18}
                      className={`transition-transform ${
                        openSubMenu === index ? "rotate-180 text-blue-600" : ""
                      }`}
                      onClick={() => toggleSubMenu(index)}
                    />
                  )}
                </div>

                {item.submenu.length > 0 && openSubMenu === index && (
                  <ul className="ml-4 mt-2 border-l border-gray-200 pl-3 space-y-1">
                    {item.submenu.map((submenu, subIndex) => (
                      <li
                        key={subIndex}
                        className="hover:text-blue-600 text-gray-600 transition"
                      >
                        <Link
                          to={submenu.path}
                          onClick={() => {
                            setIsMenuOpen(false);
                            setOpenSubMenu(null);
                          }}
                        >
                          {submenu.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}

            {/* Mobile Right Section */}
            <div className="flex items-center gap-4 pt-3">
              <button
                className="p-2 border border-gray-300 rounded-full hover:bg-gray-100 transition"
                onClick={() => setSearchModalOpen(true)}
              >
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

      <SearchModal
        isOpen={isSearchModalOpen}
        onClose={() => setSearchModalOpen(false)}
      />
    </header>
  );
}
