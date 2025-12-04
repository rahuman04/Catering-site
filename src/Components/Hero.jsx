import React from "react";
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section className="relative bg-[#F3E8DF] py-20 md:py-32">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center">
        {/* Left Text */}
        <div className="md:w-1/2 space-y-5">
          <h1 className="text-5xl md:text-6xl font-serif text-[#5C4033] font-bold leading-tight">
            Premium Catering for Every Occasion
          </h1>

          <p className="text-lg text-[#6D5446]">
            We serve delicious food prepared with passion, delivered with
            excellence, and designed to make your event unforgettable.
          </p>

          <div className="space-x-4 pt-4">
            <Link
              to="/menu"
              className="bg-[#5C4033] text-white px-6 py-3 rounded-xl shadow-md hover:bg-[#3b2c23] transition-all"
            >
              Explore Menu
            </Link>

            <Link
              to="/contact"
              className="border border-[#5C4033] text-[#5C4033] px-6 py-3 rounded-xl hover:bg-[#EAD5C4] transition-all"
            >
              Contact Us
            </Link>
          </div>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2 mt-12 md:mt-0 flex justify-center">
          <img
            src="https://i.pinimg.com/1200x/af/2a/a2/af2aa2c7f252116a190943470e30b395.jpg"
            alt="Catering Food"
            className="rounded-3xl shadow-xl w-11/12 md:w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
