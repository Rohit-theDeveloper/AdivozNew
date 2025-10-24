import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  EffectCoverflow,
  Pagination,
  Navigation,
  Autoplay,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import slide_image_1 from "../assets/slider1.avif";
import slide_image_2 from "../assets/slider2.avif";
import slide_image_3 from "../assets/slider3.avif";
import slide_image_4 from "../assets/slider4.avif";
import slide_image_5 from "../assets/slider5.avif";

export default function Slider() {
  const slides = [
    {
      img: slide_image_1,
      title: "Website Development",
      subtitle: "Frontend & Backend",
    },
    {
      img: slide_image_2,
      title: "WooCommerce",
      subtitle: "E-commerce Solutions",
    },
    {
      img: slide_image_3,
      title: "CRM Design",
      subtitle: "Customer Management",
    },
    {
      img: slide_image_4,
      title: "Web Design",
      subtitle: "UI/UX Focused",
    },
    {
      img: slide_image_5,
      title: "IT Support",
      subtitle: "24/7 Service",
    },
  ];

  const Buttons = [
    {
      name: "Development",
      id: 1,
    },
    {
      name: "Woo Commerece",
      id: 2,
    },
    {
      name: "CRM Design",
      id: 3,
    },
    {
      name: "Web Design",
      id: 4,
    },
    {
      name: "It Supports",
      id: 5,
    },
  ];
  return (
    <div className="md:mx-35 mx-5 my-5">
      {/* Outer margin for container */}
      <div
        className="
      case-study-header flex flex-col sm:flex-row sm:justify-between items-center mb-5 gap-4"
      >
        {/* left section */}
        <div>
          <span className="font-bold text-blue-600">Case Studies</span>
          <h2 className="text-3xl font-bold">
            Transforming Ideas into Innovations
          </h2>
        </div>

        {/* right section */}
        <div className="flex flex-wrap justify-center gap-2">
          {Buttons.map((btn, id) => (
            <button
              key={id}
              className="relative overflow-hidden rounded-2xl text-sm text-white px-4 py-2
        bg-blue-500
        cursor-pointer transition-all duration-500 ease-in-out
        before:absolute before:inset-0 before:bg-blue-700 before:-translate-x-full
        before:transition-transform before:duration-500 hover:before:translate-x-0
        hover:text-white hover:scale-105 z-10"
            >
              {/* Text stays above pseudo-element */}
              <span className="relative z-20 transition-colors duration-500">
                {btn.name}
              </span>
            </button>
          ))}
        </div>
      </div>
      <Swiper
        effect={"coverflow"} // Coverflow effect
        grabCursor={true} // Cursor changes to grab
        spaceBetween={0} // space between slides in px
        centeredSlides={true} // Center the active slide
        loop={true} // Loop slides infinitely
        slidesPerView={"3"} // Slides width adjusts automatically
        coverflowEffect={{
          rotate: 0, // Slide rotation
          stretch: 0, // Slide stretch
          depth: 300, // Depth between slides
          modifier: 2.5, // Effect intensity
        }}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }} // Pagination bullets
        navigation={true} // Arrows
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="relative h-[180px] md:h-[500px] sm:h-[150px]  rounded-xl transition-transform duration-300 ease-in-out
            " // Container height & background
        //  Slider container height is controlled here (change h-[...] values)
        // Individual slide width is controlled by slidesPerView prop and SwiperSlide width classes
      >
        {/* Slides */}
        {slides.map((slide, index) => (
          <SwiperSlide
            key={index}
            className=" flex justify-center  items-center  rounded-lg"
          >
            <img
              src={slide.img}
              alt={`slide-${index}`}
              className="w-full h-full rounded-2xl object-cover"
            />
            <div className="absolute bottom-5 left-5 text-white z-10 text-overlay transition-opacity duration-700">
              <h2 className=" text-[10px] sm:text-xl font-semibold drop-shadow-md">
                {slide.title}
              </h2>
              <p className=" text-[8px] sm:text-sm opacity-80">{slide.subtitle}</p>
            </div>
            <div className="absolute inset-0 bg-black/20 rounded-2xl"></div>
          </SwiperSlide>
        ))}

        {/* Pagination styling */}
        <div className="swiper-pagination !w-[15rem] bottom-1 relative"></div>

        {/* Navigation arrows */}
        <div className="slider-controler flex justify-center items-center relative bottom-8">
          <div className="swiper-button-prev w-14 h-14 rounded-full bg-white flex justify-center items-center drop-shadow-lg -translate-x-[42%]">
            <ion-icon
              name="arrow-back-outline"
              class="text-2xl text-gray-900"
            ></ion-icon>
          </div>
          <div className="swiper-button-next w-14 h-14 rounded-full bg-white flex justify-center items-center drop-shadow-lg translate-x-[42%]">
            <ion-icon
              name="arrow-forward-outline"
              class="text-2xl text-gray-900"
            ></ion-icon>
          </div>
        </div>

        <style>
          {`
  /* Hide text for all slides */
  .swiper-slide .text-overlay {
    opacity: 0;
    transition: opacity 0.6s ease;
  }

  /* Show only for active (center) slide */
  .swiper-slide-active .text-overlay {
    opacity: 1;
  }
`}
        </style>
      </Swiper>
    </div>
  );
}
