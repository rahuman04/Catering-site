import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, Utensils, Cake, Wine, Users, ChevronDown } from "lucide-react";

export default function HomeHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [faqOpen, setFaqOpen] = useState(null);

  const toggleFAQ = (index) => setFaqOpen(faqOpen === index ? null : index);

  return (
    <>
      {/* HERO SECTION */}
      <section
        className="relative h-[90vh] bg-cover bg-center flex items-center justify-center text-center px-6"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&w=1600&q=90')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>

        <div className="relative z-10 text-cream-100 max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 tracking-wide drop-shadow-xl text-[#F5E9D3]">
            Exquisite Catering for Every Occasion
          </h1>
          <p className="text-lg md:text-xl mb-6 text-[#f3e9d2] opacity-90">
            Premium dishes, seamless service, and unforgettable experiences.
          </p>

          <div className="space-x-4">
            <Link
              to="/menu"
              className="bg-[#B77E47] text-white px-8 py-3 rounded-full font-bold shadow-lg hover:bg-[#A36D39] transition-transform hover:scale-105"
            >
              Explore Menu
            </Link>
            <Link
              to="/quote"
              className="border-2 border-cream-200 px-8 py-3 rounded-full font-bold hover:bg-cream-200 hover:text-black transition-transform hover:scale-105 text-cream-100"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="py-20 px-6 bg-[#FAF5EE] text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-3 text-[#5C3D2E]">
          Our Special Services
        </h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          From grand celebrations to intimate gatherings — we cater to all.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: <Utensils size={40} />, title: "Event Catering" },
            { icon: <Cake size={40} />, title: "Wedding Services" },
            { icon: <Wine size={40} />, title: "Corporate Catering" },
          ].map((item, idx) => (
            <div
              key={idx}
              className="p-8 bg-[#FFF9F2] rounded-2xl shadow-md border border-[#E6D8C4] hover:shadow-xl hover:-translate-y-2 transition-all"
            >
              <div className="text-[#B77E47] mb-4 flex justify-center">
                {item.icon}
              </div>
              <h3 className="font-semibold text-xl mb-2 text-[#4A2E21]">
                {item.title}
              </h3>
              <p className="text-gray-600">
                High-quality service and unforgettable dishes made by professionals.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* STATISTICS */}
      <section className="py-20 bg-gradient-to-r from-[#E7D2B7] via-[#D9C2A4] to-[#C9AC8F] text-[#4A2E21] px-6 text-center">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { num: "500+", label: "Events Served" },
            { num: "120+", label: "Wedding Caterings" },
            { num: "50+", label: "Corporate Clients" },
            { num: "4.9★", label: "Customer Rating" },
          ].map((stat, idx) => (
            <div key={idx} className="text-center">
              <h3 className="text-4xl font-extrabold text-[#4A2E21]">
                {stat.num}
              </h3>
              <p className="text-sm mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* GALLERY */}
      <section className="py-20 px-6 bg-[#FAF5EE]">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-[#4A2E21]">
          Delicious Moments Gallery
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((n) => (
            <div
              key={n}
              className="rounded-xl overflow-hidden shadow-md hover:scale-[1.02] transition border border-[#E3D4C1]"
            >
              <img
                src={`../images/cat_img${n}.jpg`}
                className="w-full h-64 object-cover"
                alt=""
              />
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 px-6 bg-[#FDF9F3] text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#4A2E21]">
          What Our Clients Say
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              name: "Sarah Williams",
              text: "CaterEase made our wedding unforgettable. Stunning dishes and perfect service!",
            },
            {
              name: "James Patel",
              text: "Professional team! Our corporate event was a huge success.",
            },
            {
              name: "Aisha Khan",
              text: "The dessert platter stole the show. Beautifully presented!",
            },
          ].map((t, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-3xl shadow-lg hover:shadow-xl border border-[#E6D8C4] transition"
            >
              <p className="text-gray-700 italic mb-4">“{t.text}”</p>
              <h4 className="font-semibold text-[#4A2E21]">{t.name}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 bg-[#FAF5EE]">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-[#4A2E21]">
          Frequently Asked Questions
        </h2>

        <div className="max-w-3xl mx-auto">
          {[
            "Do you provide vegetarian options?",
            "How early should I book your catering service?",
            "Do you offer live cooking counters?",
            "Can you handle large corporate events?",
          ].map((q, index) => (
            <div
              key={index}
              className="border-b border-[#D8C5AB] py-4 cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-[#4A2E21]">{q}</h3>
                <ChevronDown
                  className={`transition-transform ${
                    faqOpen === index ? "rotate-180" : ""
                  } text-[#4A2E21]`}
                />
              </div>

              {faqOpen === index && (
                <p className="mt-3 text-gray-600">
                  Yes! We offer multiple custom options based on your needs.
                </p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* NEW SECTION — Brown/Cream THEMED IMPROVED */}
      {/* WHY CHOOSE US */}
      <section className="py-20 px-6 bg-[#FDF9F3]">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#4A2E21]">
          Why Choose Us?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: "Premium Quality",
              text: "We use only fresh, high-grade ingredients.",
            },
            {
              title: "Experienced Team",
              text: "Professional chefs & trained staff.",
            },
            {
              title: "Affordable Packages",
              text: "Best price for every event size.",
            },
            {
              title: "On-Time Service",
              text: "We deliver excellence with punctuality.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="p-8 bg-white shadow-md border border-[#E6D8C4] rounded-2xl hover:shadow-xl transition"
            >
              <h3 className="font-bold text-xl mb-2 text-[#4A2E21]">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* POPULAR PACKAGES */}
      <section className="py-20 px-6 bg-[#FAF5EE]">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-[#4A2E21]">
          Popular Packages
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            { price: "₹499 / Plate", items: "Veg Menu – 12 Items" },
            { price: "₹699 / Plate", items: "Deluxe Veg / Non-Veg – 16 Items" },
            { price: "₹999 / Plate", items: "Premium Grand Menu – 20+ Items" },
          ].map((p, i) => (
            <div
              key={i}
              className="p-8 bg-white shadow-md rounded-2xl border border-[#E6D8C4] hover:shadow-xl transition"
            >
              <h3 className="text-2xl font-bold mb-4 text-[#B77E47]">{p.price}</h3>
              <p className="text-gray-700 mb-4">{p.items}</p>

              <button className="bg-[#B77E47] w-full py-3 rounded-xl text-white font-bold hover:bg-[#A36D39] transition">
                View Details
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* CHEF TEAM */}
      <section className="py-20 px-6 bg-[#FDF9F3]">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#4A2E21]">
          Meet Our Expert Chefs
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            {
              img: "../images/chefkhan.png",
              name: "Chef Khan",
              role: "Head Chef",
            },
            {
              img: "../images/chefrose.png",
              name: "Chef Rose",
              role: "Pastry Specialist",
            },
            {
              img: "../images/chefishaan.png",
              name: "Chef Ishaan",
              role: "Live Counter Expert",
            },
          ].map((c, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-3xl shadow-md border border-[#E6D8C4] hover:shadow-xl transition text-center"
            >
              <img
                src={c.img}
                className="w-48 h-48 mx-auto rounded-full object-cover mb-4"
                alt=""
              />
              <h3 className="font-bold text-xl text-[#4A2E21]">{c.name}</h3>
              <p className="text-gray-600">{c.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SIGNATURE DISHES */}
      <section className="py-20 px-6 bg-[#FAF5EE]">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-[#4A2E21]">
          Our Signature Dishes
        </h2>

        <div className="relative max-w-6xl mx-auto">
          <button
            onClick={() =>
              document
                .getElementById("dishesContainer")
                .scrollBy({ left: -300, behavior: "smooth" })
            }
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-md border border-[#D8C5AB] hover:bg-[#F4E8D7] transition"
          >
            &larr;
          </button>

          <div
            id="dishesContainer"
            className="flex space-x-6 overflow-x-auto no-scrollbar px-4 scroll-smooth"
          >
            {[1, 2, 3, 4, 5].map((n) => (
              <div
                key={n}
                className="min-w-[250px] rounded-xl overflow-hidden shadow-md bg-white border border-[#E6D8C4]"
              >
                <img
                  src={`../images/dishes${n}.png`}
                  alt=""
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-[#4A2E21]">
                    Signature Dish {n}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={() =>
              document
                .getElementById("dishesContainer")
                .scrollBy({ left: 300, behavior: "smooth" })
            }
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-md border border-[#D8C5AB] hover:bg-[#F4E8D7] transition"
          >
            &rarr;
          </button>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-20 px-6 bg-[#FDF9F3]">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#4A2E21]">
          How It Works
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 max-w-6xl mx-auto">
          {[
            { step: "1", title: "Contact Us" },
            { step: "2", title: "Choose Menu" },
            { step: "3", title: "We Prepare & Deliver" },
            { step: "4", title: "Enjoy Your Event!" },
          ].map((s, i) => (
            <div
              key={i}
              className="text-center p-6 bg-white rounded-2xl shadow-md border border-[#E6D8C4]"
            >
              <div className="text-4xl font-bold text-[#B77E47] mb-4">
                {s.step}
              </div>
              <h3 className="font-semibold text-xl text-[#4A2E21]">
                {s.title}
              </h3>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center text-white bg-gradient-to-r from-[#B77E47] via-[#8D5A34] to-[#5B3A27] px-6">
        <h2 className="text-4xl font-bold mb-4">Ready to Make Your Event Special?</h2>
        <p className="mb-6 text-[#FDEED4]">
          Let’s create a memorable dining experience together.
        </p>

        <Link
          to="/quote"
          className="bg-[#FAF3E3] text-[#4A2E21] px-10 py-4 rounded-full font-bold shadow-xl hover:bg-white transition-transform hover:scale-105"
        >
          Get a Quote
        </Link>
      </section>

      {/* FOOTER */}
<footer className="bg-[#F6F1E9] text-[#4A3F35] py-12 px-6 shadow-inner">
  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">

    {/* Brand */}
    <div>
      <h3 className="font-bold text-xl mb-3 text-[#3A3028]">Jack Cater</h3>
      <p className="text-[#6E6258]">
        Your trusted partner for premium catering services.
      </p>
    </div>

    {/* Links */}
    <div>
      <h3 className="font-bold text-xl mb-3 text-[#3A3028]">Quick Links</h3>
      <ul className="space-y-2">
        <li>
          <Link className="hover:text-[#A67F5B] transition" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="hover:text-[#A67F5B] transition" to="/menu">
            Menu
          </Link>
        </li>
        <li>
          <Link className="hover:text-[#A67F5B] transition" to="/quote">
            Get Quote
          </Link>
        </li>
      </ul>
    </div>

    {/* Social */}
    <div>
      <h3 className="font-bold text-xl mb-3 text-[#3A3028]">Follow Us</h3>
      <p className="text-[#6E6258]">Instagram • Facebook • Twitter</p>
    </div>

  </div>

  <p className="text-center mt-10 text-sm text-[#8F8176]">
    © {new Date().getFullYear()} CaterEase. All rights reserved.
  </p>
</footer>

    </>
  );
}
