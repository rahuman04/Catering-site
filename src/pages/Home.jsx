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
            "url('https://i.pinimg.com/1200x/0b/bb/e8/0bbbe8435a1373f6564377a6059cb710.jpg",
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
                High-quality service and unforgettable dishes made by
                professionals.
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
      {/* <section className="py-20 px-6 bg-[#FDF9F3]">
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
      </section> */}

      {/* CHEF TEAM */}
      <section className="py-20 px-6 bg-[#FDF9F3]">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#4A2E21]">
          Meet Our Expert Chefs
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            {
              img: "https://i.pinimg.com/1200x/8f/ec/b6/8fecb6005da0fbad50b4a59d0a211188.jpg",
              name: "Chef Jungkook",
              role: "Head Chef",
            },
            {
              img: "https://i.pinimg.com/736x/75/ce/3f/75ce3f1d2a485b394bdfe6b0aa148214.jpg",
              name: "Chef Tonglin",
              role: "Pastry Specialist",
            },
            {
              img: "https://i.pinimg.com/1200x/90/fc/ce/90fccecc2c82fc0f60185e18abe9a4a7.jpg",
              name: "Chef Jimin",
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
          {/* LEFT BUTTON */}
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

          {/* DISHES LIST */}
          <div
            id="dishesContainer"
            className="flex space-x-6 overflow-x-auto no-scrollbar px-4 scroll-smooth"
          >
            {[
              { name: "Kesari", img: "https://i.pinimg.com/1200x/d1/d3/d7/d1d3d7fe9de2b785034f31f507ac60c5.jpg" },
              { name: "Mutton Briyani", img: "https://png.pngtree.com/thumb_back/fh260/background/20240328/pngtree-mutton-biryani-meal-in-a-plate-on-table-image_15645442.jpg" },
              { name: "Bread Halwa", img: "https://i.pinimg.com/736x/3a/81/b4/3a81b47416114c3ea3ef93d08ed4f584.jpg" },
              { name: "Chicken Biryani", img: "https://i.pinimg.com/736x/f6/8c/d6/f68cd6438a5472e2dc6a82684df54abd.jpg" },
              { name: "Fried Chicken", img: "https://i.pinimg.com/736x/5c/a0/3a/5ca03a1d98fc96cab4be558904bc8357.jpg" },
              { name: "Parotta", img: "https://i.pinimg.com/736x/da/8f/69/da8f6942f6b71723a28ae58360941d6d.jpg" },
              { name: "Chicken Koththu", img: "https://i.pinimg.com/1200x/ff/d0/c3/ffd0c31277115e1a93b678516092fce6.jpg" },
              { name: "Masala Dosa", img: "https://i.pinimg.com/736x/c7/1e/ea/c71eea435b61a0362d6fde7e8df975a9.jpg" },

            ].map((dish, index) => (
              <div
                key={index}
                className="min-w-[250px] rounded-xl overflow-hidden shadow-md bg-white border border-[#E6D8C4]"
              >
                <img
                  src={dish.img}
                  alt={dish.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-[#4A2E21]">{dish.name}</h3>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT BUTTON */}
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
        <h2 className="text-4xl font-bold mb-4">
          Ready to Make Your Event Special?
        </h2>
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
    </>
  );
}
