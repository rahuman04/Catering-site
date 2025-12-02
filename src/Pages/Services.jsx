// src/pages/Services.jsx
import React from "react";
import { Link } from "react-router-dom";

const CARDS = [
  {
    id: 1,
    title: "Wedding Catering",
    desc: "Traditional & modern wedding menus with complete service.",
    img: './src/images/wedding.jpg',
  },
  {
    id: 2,
    title: "Corporate Events",
    desc: "Professional catering for conferences, meetings & office parties.",
    img: "./src/images/corporate img.jpg",
  },
  {
    id: 3,
    title: "Birthday Parties",
    desc: "Custom menus for birthdays, baby showers & family gatherings.",
    img: "./src/images/Birthday party.jpg",
  },
  {
    id: 4,
    title: "Live Counters",
    desc: "Dosa, chaat, pasta, BBQ & many more live food stations.",
    img: "https://in.pinterest.com/pin/173318285656782814/",
  },
  {
    id: 5,
    title: "Dessert Stations",
    desc: "Cakes, pastries, sweets & live dessert counters.",
    img: "/gallery2.jpg",
  },
  {
    id: 6,
    title: "Custom Menus",
    desc: "Special menus for diet needs, regional cuisines & themes.",
    img: "/gallery3.jpg",
  },
];



export default function Services() {
  return (
    <div className="w-full">

      {/* =============== HERO SECTION =============== */}
      <section className="relative w-full h-[350px] md:h-[450px] lg:h-[550px] mt-20">
        <img
          src="./src/images/service1.png"
          alt="Catering Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Hero Content */}
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-6xl mx-auto px-6 text-white">
            <h1 className="text-3xl md:text-5xl font-bold drop-shadow">
              Catering Services for Every Occasion
            </h1>
            <p className="mt-3 md:mt-4 text-sm md:text-lg max-w-2xl">
              Delicious food, beautiful presentation & professional service.
            </p>

            <div className="mt-6 flex gap-3">
              <Link to="/book" className="px-5 py-3 bg-amber-600 rounded-md hover:bg-amber-700">
                Book Now
              </Link>
              <a href="mailto:info@example.com" className="px-5 py-3 border rounded-md hover:bg-white/10">
                Request Quote
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =============== OUR SERVICES CARDS =============== */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-semibold text-center mb-8">Our Services</h2>

        {/* 2 rows × 3 columns grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {CARDS.map((card) => (
            <div
              key={card.id}
              className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-xl transition"
            >
              <div className="h-40">
                <img
                  src={card.img}
                  alt={card.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-4">
                <h3 className="text-xl font-semibold">{card.title}</h3>
                <p className="text-gray-600 text-sm mt-2">{card.desc}</p>

                <div className="mt-4 flex justify-between items-center">
                  <Link
                    to="/services"
                    className="text-amber-600 text-sm hover:underline"
                  >
                    Learn More
                  </Link>

                  <button className="px-3 py-1 bg-amber-600 text-white text-sm rounded-md hover:bg-amber-700">
                    Book
                  </button>
                </div>
              </div>
            </div>
          ))}

        </div>
      </section>

     
{/* ==================== FEEDBACK SECTION ==================== */}
<section className="w-full bg-pink-100 py-16">
  {/* Import luxury serif font + modern UI font */}
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600;700&family=Inter:wght@300;400;500;600&display=swap');

    .lux-serif { font-family: 'Cormorant Garamond', serif; }
    .ui-font { font-family: 'Inter', sans-serif; }

    @keyframes fadeSlide {
      from { opacity: 0; transform: translateY(14px); }
      to { opacity: 1; transform: translateY(0); }
    }
    .fade-slide { animation: fadeSlide 700ms ease forwards; }
  `}</style>

  <div className="max-w-5xl mx-auto px-6 ui-font">
    {/* Heading */}
    <div className="text-center">
      <h3 className="text-amber-700 font-semibold tracking-widest uppercase text-xs md:text-sm">
        Contact Us
      </h3>

      <h2
        className="lux-serif text-4xl md:text-5xl mt-2 text-gray-900 fade-slide"
        style={{
          fontWeight: 600,
          letterSpacing: "0.5px",
          lineHeight: "1.2",
        }}
      >
        Leave a Feedback or Ask a Question
      </h2>

      <p className="mt-4 text-gray-700 max-w-2xl mx-auto text-sm md:text-base">
        Share your thoughts, ask any doubts, or get quick support for your upcoming event.
      </p>
    </div>

    {/* Form */}
    <form className="mt-10 space-y-6" onSubmit={(e) => e.preventDefault()}>
      
      {/* 2 column fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Name */}
        <div>
          <label htmlFor="fb-name" className="text-sm text-gray-700 mb-1 block ui-font font-medium">
            Name
          </label>
          <input
            id="fb-name"
            name="name"
            type="text"
            required
            placeholder="Your Name"
            className="w-full px-4 py-3 rounded-md border border-gray-300 bg-white shadow-sm focus:ring-2 focus:ring-amber-300 focus:outline-none transition"
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="fb-email" className="text-sm text-gray-700 mb-1 block ui-font font-medium">
            Email Address
          </label>
          <input
            id="fb-email"
            name="email"
            type="email"
            required
            placeholder="you@example.com"
            className="w-full px-4 py-3 rounded-md border border-gray-300 bg-white shadow-sm focus:ring-2 focus:ring-amber-300 focus:outline-none transition"
          />
        </div>

        {/* City */}
        <div>
          <label htmlFor="fb-city" className="text-sm text-gray-700 mb-1 block ui-font font-medium">
            City
          </label>
          <input
            id="fb-city"
            name="city"
            type="text"
            placeholder="City"
            className="w-full px-4 py-3 rounded-md border border-gray-300 bg-white shadow-sm focus:ring-2 focus:ring-amber-300 focus:outline-none transition"
          />
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="fb-phone" className="text-sm text-gray-700 mb-1 block ui-font font-medium">
            Phone
          </label>
          <input
            id="fb-phone"
            name="phone"
            type="tel"
            placeholder="+91 98765 43210"
            className="w-full px-4 py-3 rounded-md border border-gray-300 bg-white shadow-sm focus:ring-2 focus:ring-amber-300 focus:outline-none transition"
          />
        </div>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="fb-message" className="text-sm text-gray-700 mb-1 block ui-font font-medium">
          Message
        </label>
        <textarea
          id="fb-message"
          name="message"
          required
          rows={6}
          placeholder="Write your feedback or question..."
          className="w-full px-4 py-3 rounded-md border border-gray-300 bg-white shadow-sm focus:ring-2 focus:ring-amber-300 focus:outline-none transition"
        />
      </div>

      {/* Submit button */}
      <div className="text-center mt-8">
        <button
          type="submit"
          className="inline-flex items-center gap-2 px-10 py-3 rounded-full text-white bg-gradient-to-r from-rose-600 to-amber-500 shadow-md hover:brightness-110 transform transition focus:ring-4 focus:ring-amber-200"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
          <span className="ui-font font-medium">Submit</span>
        </button>
      </div>

      {/* helper note */}
      <div className="mt-4 text-center text-xs text-gray-600 ui-font">
        We never share your information. Check our <a href="/privacy" className="underline">privacy policy</a>.
      </div>
    </form>
  </div>
</section>


  {/* ================= FOOTER SECTION ================= */}
<footer className="bg-gray-900 text-gray-300 py-12 mt-10">
  <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">

    {/* Brand + tagline */}
    <div>
      <h2 className="text-2xl font-bold text-white mb-3">Jack Cater</h2>
      <p className="text-gray-400">
        Premium Veg & Non-Veg Catering for Weddings, Corporate Events & Celebrations.
      </p>
    </div>

    {/* Quick Links */}
    <div>
      <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
      <ul className="space-y-2 text-gray-400">
        <li><a href="/" className="hover:text-white">Home</a></li>
        <li><a href="#services" className="hover:text-white">Services</a></li>
        <li><a href="#menu" className="hover:text-white">Menu</a></li>
        <li><a href="#about" className="hover:text-white">About Us</a></li>
        <li><a href="#contact" className="hover:text-white">Contact</a></li>
      </ul>
    </div>

    {/* Services */}
    <div>
      <h3 className="text-lg font-semibold text-white mb-4">Our Catering</h3>
      <ul className="space-y-2 text-gray-400">
        <li>Wedding Catering</li>
        <li>Corporate Events</li>
        <li>Birthday Parties</li>
        <li>Live Food Counters</li>
        <li>Private Celebrations</li>
      </ul>
    </div>

    {/* Contact Info */}
    <div>
      <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
      <ul className="space-y-2 text-gray-400">
        <li>📞 +91 98765 43210</li>
        <li>📧 jackcater@gmail.com</li>
        <li>📍 Chennai, Tamil Nadu</li>
      </ul>

      <div className="flex gap-4 mt-4">
        <a className="text-gray-400 hover:text-white text-xl"></a>
        <a className="text-gray-400 hover:text-white text-xl"> </a>
        <a className="text-gray-400 hover:text-white text-xl">  </a>
        <a className="text-gray-400 hover:text-white text-xl">  </a>
      </div>
    </div>
  </div>

  {/* Bottom small strip */}
  <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-500 text-sm">
    © {new Date().getFullYear()} Jack Cater. All Rights Reserved.
  </div>
</footer>



    </div>
  );
}
