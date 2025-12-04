import React from "react";
import { motion } from "framer-motion";

export default function Home2() {
  return (
    <main className="space-y-24">
      {/* ================= HERO SECTION ================= */}
      <section className="relative h-[70vh] w-full overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 mt-20">
          <img
            src="https://images.unsplash.com/photo-1543353071-10c8ba85a904?q=80"
            alt="Catering Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto h-full flex flex-col justify-center px-6">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-green-300 text-sm uppercase tracking-wider mb-2"
          >
            {/* optional small tagline */}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white text-4xl md:text-6xl font-bold leading-tight pt-20"
          >
            Making Every Event
            <br />
            Unforgettable
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-gray-200 mt-4 max-w-xl "
          >
            From weddings to corporate gatherings, we serve delicious, hygienic
            & beautifully presented dishes tailored for your event.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="mt-6 flex gap-4 "
          >
            <button className="px-6 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition ">
              View Menu
            </button>

            <button className="px-6 py-3 bg-white text-gray-900 rounded-lg font-semibold hover:bg-gray-200 transition">
              Book Now
            </button>
          </motion.div>
        </div>
      </section>

      {/* ================= ABOUT INTRO SECTION ================= */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col-reverse md:flex-row items-center gap-10">
            {/* Left: intro text */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="w-full md:w-1/2"
            >
              <p className="text-sm uppercase text-green-600 mb-2">About Cater</p>
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                Local flavors, professional service — made memorable
              </h3>
              <p className="text-gray-600 mb-6">
                Jack Cater brings decades of culinary experience to every event.
                From custom veg menus to rich non-veg platters, our team handles
                everything — tasting, presentation, service & coordination.
              </p>

              <div className="flex gap-3">
                <a className="px-5 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition">
                  Our Services
                </a>
                <a className="px-5 py-3 border border-green-600 text-green-600 rounded-lg hover:bg-green-50 transition">
                  Request Quote
                </a>
              </div>
            </motion.div>

            {/* Right image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="w-full md:w-1/2 flex justify-center"
            >
              <div className="w-full max-w-md rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200"
                  alt="About catering"
                  className="w-full h-80 object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= SERVICES SECTION ================= */}
      <section id="services" className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-10">
            <p className="text-sm uppercase text-green-600">What we do</p>
            <h2 className="text-3xl font-bold">Our Services</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Weddings",
                img: "https://i.pinimg.com/1200x/47/6d/db/476ddbbaf91065f93ad0f6888e50e9dc.jpg",
              },
              {
                title: "Corporate Events",
                img: "https://i.pinimg.com/1200x/00/79/00/0079002d1addab268de713d3faab68e9.jpg",
              },
              {
                title: "Live Counters",
                img: "https://i.pinimg.com/1200x/73/f8/a9/73f8a962194665f8ff4a72d0267f0fff.jpg",
              },
              {
                title: "Private Parties",
                img: "https://i.pinimg.com/1200x/7c/e4/bc/7ce4bc8e2ac775552fb66cec24547dd5.jpg",
              },
            ].map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="relative rounded-xl overflow-hidden shadow-lg"
              >
                <img src={s.img} alt={s.title} className="w-full h-52 object-cover" />
                <div className="absolute inset-0 bg-black/40" />
                <h4 className="absolute bottom-4 left-4 text-xl font-semibold text-white">
                  {s.title}
                </h4>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PEOPLE CHOOSE US / TESTIMONIALS ================= */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12 text-center">
            <p className="text-green-600 font-semibold tracking-wide uppercase text-sm">
              Testimonials
            </p>
            <h2 className="text-4xl font-bold mt-2">
              What People Say About <span className="text-green-700">Cater</span>
            </h2>
            <p className="text-gray-500 mt-3">
              We take pride in delivering delicious food & flawless service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <div className="flex items-center gap-4 mb-4">
                <img
                  src="https://randomuser.me/api/portraits/women/45.jpg"
                  alt="Priya"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-gray-800">Priya & Arjun</p>
                  <p className="text-gray-400 text-sm">Wedding Catering</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">
                “The food and service at our wedding were absolutely outstanding!
                Guests loved every dish.”
              </p>
            </div>

            {/* Card 2 */}
            <div className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <div className="flex items-center gap-4 mb-4">
                <img
                  src="https://randomuser.me/api/portraits/men/32.jpg"
                  alt="Rahul"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-gray-800">Rahul</p>
                  <p className="text-gray-400 text-sm">Corporate Event</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">
                “Our corporate event was perfectly handled with timely service.
                Highly professional team!”
              </p>
            </div>

            {/* Card 3 */}
            <div className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <div className="flex items-center gap-4 mb-4">
                <img
                  src="https://randomuser.me/api/portraits/men/12.jpg"
                  alt="Suresh"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-gray-800">Suresh Family</p>
                  <p className="text-gray-400 text-sm">Birthday Catering</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">
                “The birthday party catering was superb! Everyone appreciated
                the flavours and presentation.”
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE US SECTION ================= */}
      <section
        className="relative py-20 bg-gradient-to-b from-white to-gray-50 overflow-hidden"
        aria-labelledby="why-choose-heading"
      >
        {/* Decorative subtle pattern */}
        <svg
          className="pointer-events-none absolute right-0 top-0 opacity-5 w-64 h-64 translate-x-1/4 -translate-y-1/4"
          aria-hidden
          viewBox="0 0 100 100"
        >
          <defs>
            <linearGradient id="g" x1="0" x2="1">
              <stop offset="0" stopColor="#10B981" stopOpacity="0.12" />
              <stop offset="1" stopColor="#34D399" stopOpacity="0.06" />
            </linearGradient>
          </defs>
          <circle cx="50" cy="50" r="48" fill="url(#g)" />
        </svg>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="mb-12 text-center">
            <p className="inline-flex items-center text-sm uppercase text-green-600 font-semibold gap-2">
              <span className="inline-block w-8 h-8 rounded-full bg-gradient-to-br from-green-600 to-emerald-400 text-white flex items-center justify-center shadow">
                ✓
              </span>
              Why Choose Us
            </p>

            <h2 id="why-choose-heading" className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900">
              Reliable Catering for Every Occasion
            </h2>

            <p className="mt-3 text-gray-600 max-w-xl mx-auto">
              Professional team, hygienic food preparation, and timely service — all tailored for your event.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Feature 1 */}
            <article className="group p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition-transform hover:-translate-y-1">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-emerald-50 flex items-center justify-center text-green-600">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24">
                    <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Hygienic Foods</h3>
                  <p className="mt-2 text-sm text-gray-600">Clean kitchens, daily checks, and food safety standards.</p>
                </div>
              </div>
            </article>

            {/* Feature 2 */}
            <article className="group p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition-transform hover:-translate-y-1">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-emerald-50 flex items-center justify-center text-green-600">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24">
                    <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                  </svg>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Custom Menu</h3>
                  <p className="mt-2 text-sm text-gray-600">Choose from a wide variety of dishes based on your event.</p>
                </div>
              </div>
            </article>

            {/* Feature 3 */}
            <article className="group p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition-transform hover:-translate-y-1">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-emerald-50 flex items-center justify-center text-green-600">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M12 7v5l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-800">On-Time Delivery</h3>
                  <p className="mt-2 text-sm text-gray-600">Punctual setup and smooth service for every event.</p>
                </div>
              </div>
            </article>

            {/* Feature 4 */}
            <article className="group p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition-transform hover:-translate-y-1">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-emerald-50 flex items-center justify-center text-green-600">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24">
                    <path d="M8 14s1-4 4-4 4 4 4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    <path d="M3 21h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Skilled Chefs</h3>
                  <p className="mt-2 text-sm text-gray-600">Expert preparation, great taste, and beautiful presentation.</p>
                </div>
              </div>
            </article>
          </div>

          {/* Footer CTA */}
          <div className="mt-14 text-center">
            <a
              href="#book"
              className="inline-flex items-center gap-3 px-7 py-3 rounded-full bg-gradient-to-r from-green-600 to-emerald-500 text-white font-semibold shadow-lg hover:brightness-105"
            >
              Book a tasting
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </a>

            <p className="mt-3 text-sm text-gray-500">
              Prefer a custom quote?{" "}
              <a href="#contact" className="text-green-700 font-medium hover:underline">
                Contact us
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* ================= FINAL 4 CARDS ROW ================= */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Card 1: Years */}
            <div className="relative rounded-xl overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80"
                alt="Years"
                className="w-full h-56 object-cover"
              />
              <div className="absolute inset-0 bg-black/40" />
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-2xl font-bold">25+ Years of Excellence</h3>
                <p className="text-white/90">A legacy of quality catering service.</p>
              </div>
            </div>

            {/* Card 2: Menu Options */}
            <div className="relative rounded-xl overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1543353071-10c8ba85a904?q=80"
                alt="Menu Options"
                className="w-full h-56 object-cover"
              />
              <div className="absolute inset-0 bg-black/40" />
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-2xl font-bold">250+ Menu Options</h3>
                <p className="text-white/90">From traditional to premium dishes.</p>
              </div>
            </div>

            {/* Card 3: Staff */}
            <div className="relative rounded-xl overflow-hidden shadow-lg">
              <img
                src="https://i.pinimg.com/736x/35/05/52/350552b4acda9b96d96aa00d58820826.jpg"
                alt="Staff"
                className="w-full h-56 object-cover"
              />
              <div className="absolute inset-0 bg-black/40" />
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-2xl font-bold">340+ Professional Staff</h3>
                <p className="text-white/90">Experienced chefs & service teams.</p>
              </div>
            </div>

            {/* Card 4: Experience */}
            <div className="relative rounded-xl overflow-hidden shadow-lg">
              <img
                src="https://i.pinimg.com/736x/35/a7/03/35a703e933476a27249efddf14fcba9c.jpg"
                alt="Experience"
                className="w-full h-56 object-cover"
              />
              <div className="absolute inset-0 bg-black/40" />
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-2xl font-bold">120k+ Happy Foodies</h3>
                <p className="text-white/90">Years of crafting flavours & events.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
