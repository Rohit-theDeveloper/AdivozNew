import React, { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";

export default function SearchModal({ isOpen, onClose }) {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (isOpen) setTimeout(() => setAnimate(true), 10);
    else setAnimate(false);
  }, [isOpen]);
  if (!isOpen) return null;
  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
        <div
          className={`relative rounded-2xl shadow-2xl w-full max-w-xl 
      ${
        animate
          ? "translate-y-0 opacity-100 scale-100 duration-300"
          : "-translate-y-10 opacity-0 scale-95"
      }
    `}
        >
          {/* Close Button */}
          <button
            className="absolute top-[-350px] right-[20px] sm:right-10 sm:top-[-100px] lg:top-[-250px] lg:right-[-200px] w-15 h-15 flex items-center justify-center rounded-full bg-black/7 transition-all sm:hover:rotate-360 sm:hover:border-white hover:bg-white hover:text-gray-700 text-blue-500 text-2xl font-bold border border-blue-500 cursor-pointer"
            onClick={onClose} // Your function to close modal
          >
            &times;
          </button>

          {/* Search Box */}
          <div className="flex items-center  rounded-full px-4 py-3 w-full cursor-pointer border border-blue-800 bg-black">
            
            <input
              type="text"
              placeholder="What Are You Looking For ?"
              className="flex-1 outline-none text-white text-lg "
            />
            <CiSearch className="text-gray-100 text-2xl mr-3 font-bold hover:scale-110"  />
          </div>
        </div>
      </div>
    </>
  );
}
