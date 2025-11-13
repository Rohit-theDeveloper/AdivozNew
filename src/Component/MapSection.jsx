import { FaMapMarkerAlt } from "react-icons/fa";

export default function MapSection() {
  return (
    <section className="relative w-full mt-15 mb-15 px-10 overflow-hidden">
      <div className="max-w-7xl mx-35 rounded-2xl overflow-hidden shadow-lg">
        {/* Google Map Embed */}
        <div className="w-full h-[450px] relative overflow-hidden">
          <iframe
            title="Office Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2518.636524489633!2d-114.15320452306473!3d51.17428773911859!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53717b8a9e7ac39d%3A0x93b9639492902a18!2s33%20Nolan%20Hill%20Blvd%20NW%2C%20Calgary%2C%20AB%20T3R%200S5%2C%20Canada!5e0!3m2!1sen!2sin!4v1731491000000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{
              border: 0,
              overflow: "hidden",
            }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>

          {/* Blinking Location Icon */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="relative">
              <FaMapMarkerAlt className="text-gray-600 text-4xl animate-bounce" />
              <span className="absolute top-1/2 left-1/2 w-6 h-6 bg-gray-500 rounded-full opacity-60 animate-ping -translate-x-1/2 -translate-y-1/2"></span>
            </div>
          </div>
        </div>
      </div>

      {/* Hide scrollbar globally for this section */}
      <style jsx>{`
        section::-webkit-scrollbar {
          display: none;
        }
        section {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
