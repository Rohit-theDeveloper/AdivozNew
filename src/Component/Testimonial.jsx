import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    id: 1,
    name: "Anand Mohan",
    role: "Front-End Developer",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    text: "IT consulting  streamline operations, and align IT solutions with their goal. Here are some key services offered under IT consulting Assisting with cloud migration.",
  },
  {
    id: 2,
    name: "Rahul Jaishwal",
    role: "UI/UX Designer",
    image: "https://randomuser.me/api/portraits/women/45.jpg",
    text: "Great experience! The team provided top-notch design support and ensured our digital platform looked stunning and was easy to use. Highly recommend their services.",
  },
  {
    id: 3,
    name: "Gurav Taneja",
    role: "Project Manager",
    image: "https://randomuser.me/api/portraits/men/41.jpg",
    text: "The support and professionalism throughout the project were impressive. Their ability to understand business requirements and deliver on time was fantastic.",
  },
  {
    id: 4,
    name: "Akash Verma",
    role: "UI/UX Designer",
    image: "https://randomuser.me/api/portraits/women/45.jpg",
    text: "Great experience! The team provided top-notch design support and ensured our digital platform looked stunning and was easy to use. Highly recommend their services.",
  },
  {
    id: 5,
    name: "Saurav Singh",
    role: "Project Manager",
    image: "https://randomuser.me/api/portraits/men/41.jpg",
    text: "The support and professionalism throughout the project were impressive. Their ability to understand business requirements and deliver on time was fantastic.",
  },
];

const Testimonial = () => {
  return (
    <section className="bg-white py-20 relative ">
      <div className="container mx-auto px-6 md:px-16 text-center">
        {/* Heading */}
        <h4 className="text-blue-500 font-medium mb-2">Testimonial</h4>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
          What Client Say About us
        </h2>

        {/* Swiper Slider */}
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
         className="pb-20 overflow-hidden"

        >
          {testimonials.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="bg-gray-100 shadow-md border border-gray-100 rounded-2xl overflow-visible p-6 mx-2 flex flex-col items-start text-left relative hover:shadow-lg transition">
                {/* Profile */}
                <div className="flex items-center mb-10 ">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-12 h-12 rounded-full object-cover mr-3"
                  />
                  <div>
                    <h3 className="font-semibold text-gray-900">{item.name}</h3>
                    <p className="text-sm text-gray-500">{item.role}</p>
                  </div>
                </div>

                {/* Stars */}
                <div className="flex text-yellow-400 mb-3">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>

                {/* Text */}
                <p className="text-sm text-gray-600 mb-10">{item.text}</p>

                {/* Bottom Circular Icon */}
                <div className="absolute bottom-2 z-10 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-semibold shadow-md">
                  99
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonial;
