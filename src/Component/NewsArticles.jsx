import React from "react";

const articles = [
  {
    id: 1,
    image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg",
    title: "End-to-end marketing operations handled for the client",
    date: "June 10, 2025",
    readTime: "5 min read",
  },
  {
    id: 2,
    image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg",
    title: "The impact of AI and Machine Learning in Digital Marketing",
    date: "Nov 12, 2025",
    readTime: "7 min read",
  },
  {
    id: 3,
    image: "https://images.pexels.com/photos/3184301/pexels-photo-3184301.jpeg",
    title: "Top 7 Digital Marketing Solutions Every Business Needs",
    date: "July 05, 2025",
    readTime: "6 min read",
  },
];

const NewsArticles = () => {
  return (
    <section className="relative bg-white py-20 overflow-hidden sm:mx-5  lg:mx-10 mx-5">
      {/* Background subtle shapes */}
      <div className="absolute top-10 left-10 w-16 h-16 border border-gray-200 rotate-45 opacity-30"></div>
      <div className="absolute bottom-10 right-10 w-20 h-10 border-t-4 border-r-4 border-blue-500 rounded-tr-lg"></div>

      <div className="container mx-auto px-6 md:px-16 relative z-10">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
          <div>
            <h5 className="text-blue-500 font-medium mb-1">Blog and Article</h5>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              News & Articles
            </h2>
          </div>

          <button
            className="relative overflow-hidden border border-gray-300 text-gray-700 px-5 py-2 rounded-lg flex items-center gap-2 transition-all duration-500
                        before:absolute before:inset-0 before:bg-blue-600 before:translate-x-[-100%] before:transition-transform before:duration-300 hover:before:translate-x-0
                        hover:text-white hover:border-blue-600 z-10"
                    >
            <span className="relative z-20">See More Articles →</span>
          </button>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition overflow-hidden"
            >
              {/* Image */}
              <div className="w-full h-60 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Content */}
              <div className="p-6 text-left">
                <div className="text-sm text-gray-400 mb-2 flex items-center justify-between">
                  <span>{item.date}</span>
                  <span>• {item.readTime}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  {item.title}
                </h3>
                <button className="text-sm font-medium text-blue-600 border border-blue-600 hover:bg-blue-600 hover:text-white transition px-4 py-2 rounded-lg">
                  Read More →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsArticles;
