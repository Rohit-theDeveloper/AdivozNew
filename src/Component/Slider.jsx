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

import slide_image_1 from "../assets/img1.jpg";
import slide_image_2 from "../assets/img2.jpg";
import slide_image_3 from "../assets/img3.jpg";
import slide_image_4 from "../assets/img4.jpg";
import slide_image_5 from "../assets/img5.jpg";

export default function Slider() {

    const Buttons = [
        {
            name : "Development",
            id : 1
        },
          {
            name : "Woo Commerece",
            id : 2
        },
          {
            name : "CRM Design",
            id : 3
        },
          {
            name : "Web Design",
            id : 4
        },
          {
            name : "It Supports",
            id : 5
        }, 
    ]
  return (
    <div className="md:mx-35 mx-5 my-5">
      {/* Outer margin for container */}
      <div className="
      case-study-header flex flex-col sm:flex-row sm:justify-between items-center mb-5 gap-4">
        {/* left section */}
        <div>
          <span className="font-bold text-blue-600">Case Studies</span>
          <h2 className="text-3xl font-bold">Transforming Ideas into Innovations</h2>
        </div>


        {/* right section */}
        <div className="flex flex-wrap justify-center gap-2">
          {Buttons.map((btn, id) => (
             <button key = {id} className="border-gray-1 bg-gray-500 font-sm  rounded-2xl text-sm  text-white px-4 py-2 bg-gradient-to-t from-blue-300 to-gray-400 cursor-pointer hover:from-blue-500 hover:to-blue-700
             transition-all duration-800 ease-in-out"> 
                 {btn.name}
           </button>
          )  
          )}
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
        modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
        className="relative h-[180px] md:h-[500px] sm:h-[150px]  rounded-xl transition-transform duration-300 ease-in-out
             bg-gray-100" // Container height & background
        //  Slider container height is controlled here (change h-[...] values)
        // Individual slide width is controlled by slidesPerView prop and SwiperSlide width classes
      >
        {/* Slides */}
        {[
          slide_image_1,
          slide_image_2,
          slide_image_3,
          slide_image_4,
          slide_image_5,
        ].map((img, index) => (
          <SwiperSlide
            key={index}
            className=" flex justify-center  items-center bg-green-600  rounded-lg"
          >
            <img
              src={img}
              alt={`slide-${index}`}
              className="w-full h-full rounded-2xl object-cover"
            />
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
      </Swiper>
    </div>
  );
}
