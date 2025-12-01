import React from "react";
import { useState, useRef } from "react";
import FAQSection from "../Component/FAQSection";
import {
  FiPhoneCall,
  FiMail,
  FiMapPin,
  FiUser,
  FiMessageSquare,
} from "react-icons/fi";
import { MdOutlineSubject } from "react-icons/md";
import { FaPaperPlane } from "react-icons/fa";
import MapSection from "../Component/MapSection";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useAOS from "../hooks/useAOS";
import banner from "../assets/banner.jpg";
import { Link } from "react-router-dom";
import ContactForm from "../Component/ContactForm";
export default function Contact() {
  useAOS();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData({ ...formData, [name]: value });
  //   setErrors({ ...errors, [name]: "" }); // clear error on typing
  // };

  // // handle submit
  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   const newErrors = {};
  //   if (!formData.name.trim()) newErrors.name = "Please enter your name.";
  //   if (!formData.email.trim()) newErrors.email = "Please enter your email.";
  //   if (!formData.phone.trim())
  //     newErrors.phone = "Please enter your phone number.";
  //   if (!formData.subject.trim())
  //     newErrors.subject = "Please select a subject.";
  //   if (!formData.message.trim())
  //     newErrors.message = "Please write your message.";

  //   if (Object.keys(newErrors).length > 0) {
  //     setErrors(newErrors);
  //     return;
  //   }

  //   // If validation passes
  //   toast.success("Form submitted successfully!", {
  //     position: "top-right",
  //     autoClose: 3000,
  //     hideProgressBar: false,
  //     closeOnClick: true,
  //     pauseOnHover: true,
  //     draggable: true,
  //     theme: "colored",
  //   });

  //   setFormData({
  //     name: "",
  //     email: "",
  //     phone: "",
  //     subject: "",
  //     message: "",
  //   });
  // };

  const formRef = useRef(null);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <section className="relative overflow-hidden rounded-2xl mx-10 my-8 ">
        {/* Background Image */}
        <div
          ref={formRef}
          data-aos="zoom-in"
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
            data-aos="fade-down"
            className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4"
          >
            Contact Us
          </h1>

          <nav data-aos="fade-up" className="text-sm sm:text-base flex gap-2">
            <Link
              to="/"
              className="text-gray-300 hover:text-white transition-colors font-medium text-xl"
            >
              Home
            </Link>
            <span className="text-gray-400">»</span>
            <span className="text-white font-medium text-xl cursor-pointer">
              Contact Us
            </span>
          </nav>
        </div>
      </section>

      <section className="w-full bg-gray-50 py-10 px-6 overflow-hidden">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.6fr]  gap-10 items-start">
          {/* Left Section - Contact Info */}
          <div
            data-aos="fade-right"
            className="bg-gray-200 rounded-2xl shadow-md p-10 flex flex-col flex-basis-100px "
          >
            <h4 className="text-blue-600 font-semibold mb-2">Work With Us</h4>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Contact Information
            </h2>
            <p className="text-gray-600 mb-8">
              Thank you for your interest in Adivoz. We're excited
              to hear from you and discus.
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
          <div
            data-aos="fade-left"
            className="bg-gray-100 rounded-2xl shadow-md p-10"
          >
              <ContactForm />
          </div>
        </div>
      </section>
      <MapSection />
      <FAQSection onAskClick={scrollToForm} />
      <ToastContainer />
    </>
  );
}
