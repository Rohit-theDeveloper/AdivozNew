import React, { useState } from "react";
import {
  FiUser,
  FiMail,
  FiPhoneCall,
  FiMessageSquare,
} from "react-icons/fi";
import { MdOutlineSubject } from "react-icons/md";
import { FaPaperPlane } from "react-icons/fa";
import { toast } from "react-toastify";

export default function ContactForm({ onSuccess }) {
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
    setErrors({ ...errors, [name]: "" });
  };

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

    if (onSuccess) onSuccess(); // for closing modal in About page
  };

  return (
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
            <option>Search Engine Optimization (SEO)</option>
            <option>Pay-Per-Click Advertising (PPC) & SEM</option>
            <option>Social Media & Influencer Marketing</option>
            <option>Web Design & Development</option>
            <option>Content & Email Marketing</option>
            <option>Analytics & Data-Driven Strategy</option>
            <option>Video Marketing & Interactive Content</option>
            <option>Reputation & Online Review Management</option>
            <option>Others</option>
          </select>
          <MdOutlineSubject className="absolute right-4 top-3.5 text-gray-400" />
          {errors.subject && (
            <p className="text-red-500 text-sm mt-1">{errors.subject}</p>
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
        className="bg-[#004aac] hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg flex items-center gap-2 transition-all duration-300 cursor-pointer"
      >
        Contact Us <FaPaperPlane />
      </button>
    </form>
  );
}
