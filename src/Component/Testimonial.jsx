import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    id: 1,
    name: "Patricia",
    role: "Front-End Developer",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    text: "The support and professionalism they offer during our projects were commendable. They were ready to listen to the objectives of the project and delivered the projects on time. ",
  },
  {
    id: 2,
    name: "James ",
    role: "Tech Startup Founder",
    image: "https://randomuser.me/api/portraits/women/45.jpg",
    text: "Our website traffic has nearly doubled since we started working with Adivoz. Their SEO strategies are quite impressive, and they always explain things clearly. Highly recommend for anyone looking to boost their online visibility.",
  },
  {
    id: 3,
    name: "Sophia ",
    role: "E-commerce Manager",
    image: "https://randomuser.me/api/portraits/men/41.jpg",
    text: "It’s been 2 years since we joined hands with Adivoz. Their team marketed our products in the most creative way. They come up with ideas and make plans for success while they are serving. Some of their creative ideas helped us with campaigns that actually worked wonders. Overall, we couldn’t ask for a better digital partner!",
  },
  {
    id: 4,
    name: "Annie",
    role: "Unknown",
    image: "https://randomuser.me/api/portraits/women/45.jpg",
    text: "I started a small business of jewellery. Adivoz completely changed my social media presence. Their campaigns are creative, engaging, and focused on achievements. I have seen a noticeable spike in followers and customer engagement in just a few months!",
  },
  {
    id: 5,
    name: "Rohan M. ",
    role: "Online Retail Business Owner",
    image: "https://randomuser.me/api/portraits/men/41.jpg",
    text: "The results speak for themselves. Our paid campaigns and email marketing efforts are finally bringing measurable ROI. Thanks to Adivoz, they know how to turn strategies into real revenue.",
  },
  {
    id: 6,
    name: "Mathew",
    role: "Fashion Brand Owner",
    image: "https://randomuser.me/api/portraits/men/41.jpg",
    text: "We recently worked with Adivoz, and they completely transformed our social media page. Their campaigns and strategic posts turn out amazing, all because of their team of creative thinkers. In just a few months, our business will start to boom with increased visibility of our brand on social media platforms. ",
  }
];

const Testimonial = () => {
  return (
    <section className="bg-white py-20 relative ">
      <div className="container mx-auto px-6 md:px-16 text-center">
        {/* Heading */}
        <h4 className="text-blue-500 font-medium mb-2">Testimonial</h4>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
        What Clients Say About Us?
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
              <div className="bg-gray-100 shadow-md border border-gray-100 rounded-2xl overflow-visible p-6 mx-2 flex flex-col items-start text-left relative hover:shadow-lg transition h-[350px] ">
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
                <p className="text-sm text-gray-600 mb-10 text-left">{item.text}</p>

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
