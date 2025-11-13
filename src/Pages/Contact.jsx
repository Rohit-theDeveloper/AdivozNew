import React from "react";
import { useState } from "react";
import FAQSection from "../Component/FAQSection";
import {
  FiPhoneCall,
  FiMail,
  FiMapPin,
  FiUser,
  FiSend,
  FiMessageSquare,
} from "react-icons/fi";
import { MdOutlineSubject } from "react-icons/md";
import { FaPaperPlane } from "react-icons/fa";
import MapSection from "../Component/MapSection";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" }); // clear error on typing
  };

  // handle submit
  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Please enter your name.";
    if (!formData.email.trim()) newErrors.email = "Please enter your email.";
    if (!formData.phone.trim())
      newErrors.phone = "Please enter your phone number.";
    if (!formData.subject.trim())
      newErrors.subject = "Please select a subject.";
    if (!formData.message.trim())
      newErrors.message = "Please write your message.";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // If validation passes
    toast.success("Form submitted successfully!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "colored",
    });

    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  return (
    <>
      <section className="relative  overflow-hidden rounded-2xl mx-10 my-10 ">
        {/* Background Image */}
        <div
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
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4">
            Contact Us
          </h1>

          <nav className="text-sm sm:text-base flex gap-2">
            <a
              href="/"
              className="text-gray-300 hover:text-white transition-colors font-medium text-xl"
            >
              Home
            </a>
            <span className="text-gray-400">»</span>
            <span className="text-white font-medium text-xl cursor-pointer">
              Contact Us
            </span>
          </nav>
        </div>
      </section>

      <section className="w-full bg-gray-50 py-20 px-6">
        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left Section - Contact Info */}
          <div className="bg-gray-200 rounded-2xl shadow-md p-10 ">
            <h4 className="text-blue-600 font-semibold mb-2">Work With Us</h4>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Contact Information
            </h2>
            <p className="text-gray-600 mb-8">
              Thank you for your interest in Attach Web Agency. We're excited to
              hear from you and discuss...
            </p>

            <div className="space-y-10 cursor-pointer flex flex-col items-left justify-center">
              {/* Phone */}
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 bg-white flex items-center justify-center rounded-full text-blue-600 text-xl  group-hover:bg-blue-600">
                  <FiPhoneCall className="group-hover:text-white" />
                </div>
                <div>
                  <p className="text-gray-600 text-sm">Call Us For Query</p>
                  <h4 className="text-gray-900 font-semibold text-lg">
                    +1 368-997-1808
                  </h4>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 bg-white flex items-center justify-center rounded-full text-blue-600 text-xl group-hover:bg-blue-600">
                  <FiMail className="group-hover:text-white" />
                </div>
                <div>
                  <p className="text-gray-600 text-sm">Email Us Anytime</p>
                  <h4 className="text-gray-900 font-semibold text-lg">
                    nishit@adivoz.com
                  </h4>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-center gap-4 group ">
                <div className="w-12 h-12 bg-white flex items-center justify-center rounded-full text-blue-600 text-xl  group-hover:bg-blue-600">
                  <FiMapPin className="group-hover:text-white" />
                </div>
                <div>
                  <p className="text-gray-600 text-sm">Visit Our Office</p>
                  <h4 className="text-gray-900 font-semibold text-lg">
                    33 Nolan Hill Blvd,<br></br> NW Calgary, Alberta, T3R 0S5
                    Canada
                  </h4>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section - Contact Form */}
          <div className="bg-gray-100 rounded-2xl shadow-md p-10">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name */}
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full border ${
                      errors.name ? "border-red-500" : "border-gray-300"
                    } rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500`}
                  />
                  <FiUser className="absolute right-4 top-3.5 text-gray-400" />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                  )}
                </div>

                {/* Email */}
                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full border ${
                      errors.email ? "border-red-500" : "border-gray-300"
                    } rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500`}
                  />
                  <FiMail className="absolute right-4 top-3.5 text-gray-400" />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                  )}
                </div>

                {/* Phone */}
                <div className="relative">
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full border ${
                      errors.phone ? "border-red-500" : "border-gray-300"
                    } rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500`}
                  />
                  <FiPhoneCall className="absolute right-4 top-3.5 text-gray-400" />
                  {errors.phone && (
                    <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                  )}
                </div>

                {/* Subject */}
                <div className="relative">
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`w-full border ${
                      errors.subject ? "border-red-500" : "border-gray-300"
                    } rounded-lg px-4 py-3 text-gray-600 focus:outline-none focus:border-blue-500`}
                  >
                    <option value="" disabled>
                      Select Subject
                    </option>
                    <option>Web Design</option>
                    <option>Development</option>
                    <option>SEO</option>
                    <option>Support</option>
                  </select>
                  <MdOutlineSubject className="absolute right-4 top-3.5 text-gray-400" />
                  {errors.subject && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.subject}
                    </p>
                  )}
                </div>
              </div>

              {/* Message */}
              <div className="relative">
                <textarea
                  rows="5"
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full border ${
                    errors.message ? "border-red-500" : "border-gray-300"
                  } rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500`}
                ></textarea>
                <FiMessageSquare className="absolute right-4 top-4 text-gray-400" />
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                )}
              </div>

              {/* Button */}
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg flex items-center gap-2 transition-all duration-300 cursor-pointer"
              >
                Subscribe Now <FaPaperPlane />
              </button>
            </form>
          </div>
        </div>
      </section>
      <MapSection />
      <FAQSection />
      <ToastContainer />
    </>
  );
}
