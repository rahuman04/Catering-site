import React from "react";
import { motion } from "framer-motion";
import { PhoneCall, ChevronRight } from "lucide-react";

// ---------- SERVICES LIST ----------
const services = [
  {
    title: "Wedding Function",
    img: "https://i.pinimg.com/736x/07/62/1a/07621a921ac049c538aed4beec1b63dc.jpg",
  },
  {
    title: "Corporate Events",
    img: "https://i.pinimg.com/1200x/37/e3/f8/37e3f80f34e342bde69b11eca4ca0efb.jpg",
  },
  {
    title: "Festival",
    img: "https://i.pinimg.com/736x/16/49/b8/1649b845c47695dc2041946d41859e87.jpg",
  },
  {
    title: "Birthday Party",
    img: "https://i.pinimg.com/736x/0d/dd/a5/0ddda5aa6de653ca7515a751e6285fa4.jpg",
  },
  {
    title: "School & College Events",
    img: "https://i.pinimg.com/736x/56/c6/87/56c68777ac6cef404471d6dc641ded75.jpg",
  },
  {
    title: "Retirement Function",
    img: "https://i.pinimg.com/1200x/44/a4/88/44a488a5d5bf88b97b7a7d316abc57a9.jpg",
  },
  {
    title: "Engagement Ceremony",
    img: "https://i.pinimg.com/1200x/ab/3b/c8/ab3bc86627524a5f21ab3d0ecd9409ef.jpg",
  },
  {
    title: "Puberty Ceremony",
    img: "https://i.pinimg.com/1200x/32/9e/c9/329ec96f799fdd66a7d4794bd732c228.jpg",
  },
  {
    title: "Housewarming Ceremony",
    img: "https://i.pinimg.com/736x/1d/f7/79/1df7797c140b27c092f1a9a59b4aa134.jpg",
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 via-white to-yellow-100">
      {/* HERO SECTION */}
      <section
        className="h-[60vh] w-full relative flex items-center justify-center mt-20 overflow-hidden rounded-b-3xl shadow-xl bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://i.pinimg.com/1200x/89/dc/24/89dc248b05687313cfea36eb509ac5e7.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center text-white px-6"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold drop-shadow-lg mb-4 text-yellow-400">
            Premium Catering Services
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto ">
            Elegant • Professional • Unforgettable
          </p>
        </motion.div>
      </section>

      {/* SECTION TITLE */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-5xl md:text-6xl font-extrabold text-center mt-10 mb-4 text-gray-900 tracking-tight drop-shadow-sm"
      >
        Our Premium Services
      </motion.h2>

      <p className="text-center text-gray-600 mb-16 text-lg max-w-2xl mx-auto">
        Crafted with excellence — Unforgettable catering for every occasion
      </p>

      {/* SERVICES GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 container mx-auto px-6">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl transition duration-500 border border-yellow-200 overflow-hidden relative"
          >
            <div className="h-64 overflow-hidden relative rounded-[5px]">
              <img
                src={service.img}
                alt={service.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 brightness-110 rounded-[5px]"
              />

              <div className="absolute inset-0 rounded-[5px] bg-gradient-to-t from-black/40 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>
            </div>

            <div className="p-8 text-center">
              <h3 className="text-2xl font-bold text-gray-900 group-hover:text-yellow-600 transition duration-300">
                {service.title}
              </h3>
            </div>
          </motion.div>
        ))}
      </div>

      {/* CTA BUTTON */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="text-center mt-20"
      >
        <a
          href="/contact"
          className="px-10 py-4 bg-yellow-500 hover:bg-yellow-600 text-white text-lg font-semibold rounded-full shadow-lg transition duration-300 hover:shadow-xl"
        >
          Book Your Event Now
        </a>
      </motion.div>

      {/* CONTACT / FEEDBACK SECTION – PEACH WEDDING THEME */}

      <section className="w-full py-20 mt-20 bg-gradient-to-b from-[#ffe9e1] via-[#fff3ed] to-[#ffffff] relative overflow-hidden">
        {/* Soft Glow Orbs */}
        <div className="absolute inset-0">
          <div className="absolute w-72 h-72 bg-pink-200/50 blur-3xl rounded-full -top-10 left-10"></div>
          <div className="absolute w-72 h-72 bg-amber-200/40 blur-3xl rounded-full bottom-0 right-0"></div>
        </div>

        {/* Fonts + Animation */}
        <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;600;700&family=Inter:wght@300;400;500;600&display=swap');

    .wedding-serif { font-family: 'Playfair Display', serif; }
    .ui-font { font-family: 'Inter', sans-serif; }

    @keyframes softFade {
      from { opacity: 0; transform: translateY(18px); }
      to { opacity: 1; transform: translateY(0); }
    }
    .fade-soft { animation: softFade .8s ease forwards; }
  `}</style>

        <div className="max-w-5xl mx-auto px-6 ui-font relative z-[2] fade-soft">
          {/* Heading */}
          <div className="text-center">
            <h3 className="text-amber-600 tracking-widest uppercase text-xs md:text-sm font-medium">
              Contact Us
            </h3>

            <h2 className="wedding-serif text-4xl md:text-5xl mt-2 text-[#7b4b45] font-semibold">
              We’d Love to Hear From You
            </h2>

            <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
              Whether it's feedback or a question for your upcoming event, we’re
              happy to help.
            </p>
          </div>

          {/* Form Card */}
          <form
            className="mt-12 bg-white/80 backdrop-blur-xl rounded-2xl shadow-[0_8px_30px_rgba(255,185,160,0.25)] border border-[#f8d8cc] p-10 space-y-8"
            onSubmit={(e) => e.preventDefault()}
          >
            {/* 2 Column Inputs */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Name */}
              <div>
                <label className="text-sm font-medium text-[#854d41]">
                  Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="Your Name"
                  className="mt-2 w-full px-4 py-3 rounded-lg border border-[#f2cbbf] bg-peach-50 focus:ring-2 focus:ring-[#f8b9a0] focus:outline-none"
                />
              </div>

              {/* Email */}
              <div>
                <label className="text-sm font-medium text-[#854d41]">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  placeholder="you@example.com"
                  className="mt-2 w-full px-4 py-3 rounded-lg border border-[#f2cbbf] bg-peach-50 focus:ring-2 focus:ring-[#f8b9a0]"
                />
              </div>

              {/* City */}
              <div>
                <label className="text-sm font-medium text-[#854d41]">
                  City
                </label>
                <input
                  type="text"
                  placeholder="City"
                  className="mt-2 w-full px-4 py-3 rounded-lg border border-[#f2cbbf] bg-peach-50 focus:ring-2 focus:ring-[#f8b9a0]"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="text-sm font-medium text-[#854d41]">
                  Phone
                </label>
                <input
                  type="tel"
                  placeholder="+91 98765 43210"
                  className="mt-2 w-full px-4 py-3 rounded-lg border border-[#f2cbbf] bg-peach-50 focus:ring-2 focus:ring-[#f8b9a0]"
                />
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="text-sm font-medium text-[#854d41]">
                Message
              </label>
              <textarea
                rows={6}
                required
                placeholder="Write your message..."
                className="mt-2 w-full px-4 py-3 rounded-lg border border-[#f2cbbf] bg-peach-50 focus:ring-2 focus:ring-[#f8b9a0]"
              />
            </div>

            {/* Submit Button */}
            <div className="text-center mt-6">
              <button
                type="submit"
                className="px-10 py-3 bg-gradient-to-r from-[#ffb59c] to-[#ff9c85] text-[#7b4b45] font-medium rounded-full shadow-lg hover:brightness-110 transition"
              >
                Submit
              </button>
            </div>

            {/* Helper Note */}
            <p className="text-center text-xs text-[#9b6860]">
              Your data is safe with us. Read our{" "}
              <a href="/privacy" className="underline text-amber-600">
                privacy policy
              </a>
              .
            </p>
          </form>
        </div>
      </section>

      {/* WHATSAPP BUTTON */}
      <a
        href="https://wa.me/919876543210"
        target="_blank"
        className="fixed bottom-6 right-6 bg-green-500 text-white w-16 h-16 rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition z-50"
      >
        <PhoneCall size={32} />
      </a>
    </div>
  );
}
