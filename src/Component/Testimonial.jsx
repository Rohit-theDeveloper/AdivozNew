import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import useAOS from "../hooks/useAOS";
import FeedbackIcon from "../assets/feedback-icon.svg";

const testimonials = [
  {
    id: 1,
    name: "Patricia R.",
    role: "Front-End Developer",
    image: "https://randomuser.me/api/portraits/women/32.jpg",
    text: "The professionalism and support Adivoz provided throughout our project were exceptional. They listened carefully to our objectives and delivered everything on time. Truly reliable and easy to collaborate with."
  },
  {
    id: 2,
    name: "James K.",
    role: "Tech Startup Founder",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
    text: "Our website traffic has nearly doubled since partnering with Adivoz. Their SEO approach is clear, strategic, and effective. They always explain things in a simple way, which makes decision-making easier. Highly recommended!"
  },
  {
    id: 3,
    name: "Sophia L.",
    role: "E-commerce Manager",
    image: "https://randomuser.me/api/portraits/women/41.jpg",
    text: "We’ve been working with Adivoz for over two years now, and the experience has been outstanding. Their team brings creative ideas and strategic planning that have helped several of our campaigns perform beyond expectations."
  },
  {
    id: 4,
    name: "Annie M.",
    role: "Jewellery Business Owner",
    image: "https://randomuser.me/api/portraits/women/45.jpg",
    text: "I run a small jewellery business, and Adivoz transformed our social media presence completely. Their content ideas are fresh and engaging, and within a few months, we saw major growth in followers and customer engagement."
  },
  {
    id: 5,
    name: "Rohan M.",
    role: "Online Retail Business Owner",
    image: "https://randomuser.me/api/portraits/men/41.jpg",
    text: "The results speak for themselves. Our paid ads and email campaigns are finally generating consistent ROI. Adivoz really understands how to convert strategy into real revenue. Super impressed with their expertise."
  },
  {
    id: 6,
    name: "Mathew D.",
    role: "Fashion Brand Owner",
    image: "https://randomuser.me/api/portraits/men/52.jpg",
    text: "Working with Adivoz has been a game changer. They helped reshape our fashion brand’s social media identity with stunning creatives and smart posting strategies. Our brand visibility has grown rapidly in just a few months."
  },
  {
  id: 7,
  name: "Mehul S.",
  role: "Restaurant Owner",
  image: "https://randomuser.me/api/portraits/men/23.jpg",
  text: "Adivoz helped us redesign our website and manage our social media promotions. We saw a clear jump in reservations and online orders within weeks. Their team understands the food industry really well and creates content that connects with customers."
},
{
  id: 8,
  name: "Alicia Gomez",
  role: "Real Estate Consultant",
  image: "https://randomuser.me/api/portraits/women/67.jpg",
  text: "Their lead generation campaigns have been a huge asset for my real estate business. The quality of leads improved and my closing rate increased. Adivoz gives detailed insights that help me plan my marketing every month."
},
{
  id: 9,
  name: "Arjun Verma",
  role: "Fitness Trainer & Coach",
  image: "https://randomuser.me/api/portraits/men/56.jpg",
  text: "Before Adivoz, my Instagram barely reached anyone. Their content planning and ad strategy helped me gain real, engaging followers and more clients for my fitness programs. They truly understand branding for personal coaches."
},
{
  id: 10,
  name: "Natasha P.",
  role: "Event Planner",
  image: "https://randomuser.me/api/portraits/women/29.jpg",
  text: "Adivoz revamped our social media aesthetics and helped us run targeted ads. We noticed an immediate increase in inquiries for weddings and corporate events. Their creativity and responsiveness make them amazing to work with."
}
];

const Testimonial = () => {
  useAOS();
  return (
    <section className="bg-white py-10 relative ">
      <div className="container mx-auto px-6 md:px-16 text-center">
        {/* Heading */}
        <h4 data-aos="zoom-in" className="text-blue-600 font-semibold mb-2">
          Testimonial
        </h4>
        <h2
          data-aos="zoom-in"
          className="text-3xl md:text-4xl font-bold text-gray-900 mb-12"
        >
          What Clients Say About Us?
        </h2>

        {/* Swiper Slider */}
        <div className="relative"></div>
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
          className="pb-20  !h-auto  testimonial-swiper"
        >
          {testimonials.map((item) => (
            <SwiperSlide key={item.id}>
              <div
                data-aos="fade-left"
                className=" testimonial-card bg-gray-100 group border border-gray-100 rounded-2xl overflow-y-visible p-6 mx-2 flex flex-col items-start text-left relative hover:shadow-lg transition  h-auto cursor-pointer"
              >
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
                <div className="flex text-yellow-400 mb-2">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>

                {/* Text */}
                <p className="text-sm text-gray-600 mb-10 text-left line-clamp-4">
                  {item.text}
                </p>

                {/* Bottom Circular Icon */}
                <div className="absolute bottom-[-15px] z-100 left-1/2 transform -translate-x-1/2 bg-[#004aac]  w-10 h-10 rounded-full flex items-center justify-center font-semibold">
                  <img
                    src={FeedbackIcon}
                    alt="Feedback Icon"
                    className="w-6 h-6 filter invert" 
                  />
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
