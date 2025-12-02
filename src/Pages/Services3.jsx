import React from "react";
import { motion } from "framer-motion";

const fadeUp = {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0 },
};

const services = [
    {
        title: "Wedding Catering",
        desc: "Traditional & modern wedding menus with full-service buffet, plated service or live counters.",
        points: [
            "Custom veg & non-veg menus",
            "Full service staff & servers",
            "Live counters (dosa, chaat, BBQ, etc.)",
            "Hygienic, professional kitchen & trained culinary team",
            "Welcome drinks, mocktails & premium desserts",
            "Designer serving ware & beautifully styled counters",


        ],
        img: "https://i.pinimg.com/1200x/f3/f5/ed/f3f5edf12d5a40e22b2c1d87775ac22b.jpg",
    },
    {
        title: "Corporate Events",
        desc: "Professional catering for conferences, meetings, product launches and office parties.",
        points: [
            "Neat presentation & hygiene",
            "On-time delivery & setup",
            "Breakfast, lunch, hi-tea options",
            "Dedicated corporate catering coordinator",
            "Customizable menus to suit event type & timing",
            "Bulk order & large-group handling",
            "Multi-cuisine buffets and live counters",
        ],
        img: "https://i.pinimg.com/1200x/ff/07/66/ff07663edd84e545b2d69e46ced20563.jpg",
    },

    {
        title: "Retirement Party",
        desc: "Dosa, chaat, pasta, BBQ and more, cooked live on-site for a fun experience.",
        points: [
            "Multiple live stations",
            "Skilled chefs & grill masters",
            "Perfect for outdoor events",
            "Fresh, made-to-order dishes served hot",
            "Veg, non-veg & custom menu combinations",
            "Full setup including counters, equipment & service staff"
        ],
        img: "https://i.pinimg.com/736x/18/e1/6c/18e16c22f43e7da34b494bf6972bd076.jpg",
    },
    {
        title: "Engagement Ceremony",
        desc: "Traditional & modern wedding menus with full-service buffet, plated service or live counters.",
        points: [
            "Custom veg & non-veg menus",
            "Full service staff & servers",
            "Live counters (dosa, chaat, BBQ, etc.)",
            "Hygienic, professional kitchen & trained culinary team",
            "Beautifully decorated buffet & plating presentation",
            "Premium dessert setup for a classy finish",
            "Dedicated event coordinator for smooth flow",
            "Complete setup & cleanup handled end-to-end",

        ],
        img: "https://i.pinimg.com/1200x/21/9b/1e/219b1e744622ee859835f161b432b63a.jpg",
    },
    {
        title: "Birthday Function",
        desc: "Professional catering for conferences, meetings, product launches and office parties.",
        points: [
            "Neat presentation & hygiene",
            "On-time delivery & setup",
            "Breakfast, lunch, hi-tea options",
            "Custom birthday menus for kids & adults",
            "Full service staff & dedicated event coordinator",
            "Multi-cuisine buffets and live counters",
            "Complete setup, serving & cleanup handled end-to-end",
        ],
        img: "https://i.pinimg.com/1200x/a7/50/dc/a750dc5c1e3784a1aa66b88d1f6d7be9.jpg",
    },
    {
        title: "Housewarming Event",
        desc: "From kids’ birthdays to baby showers and anniversaries, we handle everything end-to-end.",
        points: [
            "Theme-based menus",
            "Snacks, starters & mains",
            "Live counters & dessert tables",
            "Full service staff & dedicated event coordinator",
            "Theme-based menus (South Indian, North Indian, Fusion, Traditional)",
            "Pure veg, non-veg & custom family menus",
            "Trained staff for serving & guest assistance",
            "Complete setup, serving & cleanup handled end-to-end",
        ],
        img: "https://i.pinimg.com/736x/53/00/5a/53005aeebe6d33753dffae8fa4102953.jpg",
    },
];



export default function Services() {
    return (
        <div className="min-h-screen bg-slate-50 mt-20">
            {/* ================= TOP HERO: HALF-HEIGHT IMAGE ================= */}
            <section className="relative h-[50vh] min-h-[320px] w-full overflow-hidden">
                {/* Background Image */}
                <img
                    src="https://i.pinimg.com/1200x/0e/80/d0/0e80d062b67f16f25fb3e455700ea545.jpg"
                    alt="Catering setup"
                    className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40" />

                {/* Hero Content */}
                <div className="relative z-10 max-w-6xl mx-auto h-full px-6 flex flex-col justify-center text-center items-center">
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        animate="visible"
                        transition={{ duration: 0.5 }}

                    >

                    </motion.div>

                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        animate="visible"
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="mt-4 max-w-3xl"
                    >
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white ">
                            Catering services for{" "}
                            <span className="text-emerald-300">every occasion</span>
                        </h1>

                    </motion.div>

                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        animate="visible"
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="mt-5 flex flex-wrap items-center gap-3 text-xs sm:text-sm"
                    >
                        <span className="inline-flex items-center gap-1 rounded-full bg-emerald-600 px-3 py-1 text-white font-medium">
                            ● Veg Catering
                        </span>
                        <span className="inline-flex items-center gap-1 rounded-full bg-amber-600 px-3 py-1 text-white font-medium">
                            ● Non-Veg Catering
                        </span>

                    </motion.div>

                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        animate="visible"
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="mt-6 flex flex-wrap gap-3"
                    >
                        <a
                            href="#services"
                            className="inline-flex items-center justify-center rounded-lg px-5 py-2.5 text-sm font-semibold bg-emerald-500 text-white shadow-sm hover:bg-emerald-600 transition"
                        >
                            View Services
                        </a>
                        <a
                            href="#feedback"
                            className="inline-flex items-center justify-center rounded-lg px-5 py-2.5 text-sm font-semibold border border-white/70 text-white bg-transparent hover:bg-white/10 transition"
                        >
                            Give Feedback
                        </a>
                    </motion.div>
                </div>
            </section>

            {/* ================= OUR SERVICES (EQUAL CARDS, ALT IMAGE SIDES) ================= */}
            <section id="services" className="py-12 sm:py-16">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="flex justify-center mb-8">
                        <div className="text-center max-w-xl">
                            <p className="text-xs font-semibold uppercase tracking-wide text-emerald-600 ">
                                Our Services
                            </p>
                            <h2 className="mt-1 text-2xl sm:text-3xl font-bold text-slate-900">
                                What we cater for
                            </h2>
                            <p className="mt-2 text-sm text-slate-500 max-w-xl">
                                Tell us the occasion and guest count — we’ll suggest the best
                                menu and service style for your event.
                            </p>
                        </div>
                    </div>

                    <div className="grid gap-6 md:grid-cols-1 items-stretch">
                        {services.map((service, idx) => (
                            <motion.article
                                key={service.title}
                                variants={fadeUp}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ duration: 0.4 }}
                                className={`group h-[420px] rounded-2xl bg-white shadow-sm hover:shadow-lg border border-slate-100 overflow-hidden flex flex-col md:flex-row md:items-stretch ${idx % 2 === 0 ? "md:flex-row-reverse" : ""
                                    }`}
                            >
                                {/* IMAGE (50%) */}
                                <div className="md:w-1/2 relative overflow-hidden">
                                    <div className="h-56 md:h-full">
                                        <img
                                            src={service.img}
                                            alt={service.title}
                                            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                            loading="lazy"
                                        />
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent pointer-events-none" />
                                    <div className="absolute bottom-3 left-3">

                                    </div>
                                </div>

                                {/* CONTENT (50%) */}
                                <div className="md:w-1/2 p-5 sm:p-6 flex flex-col justify-between">
                                    <div>
                                        <h3 className="text-lg sm:text-xl font-semibold text-slate-900">
                                            {service.title}
                                        </h3>
                                        <p className="mt-2 text-sm text-slate-600">
                                            {service.desc}
                                        </p>
                                        <ul className="mt-3 space-y-1.5 text-sm text-slate-600">
                                            {service.points.map((point) => (
                                                <li key={point} className="flex gap-2">
                                                    <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-emerald-500 flex-shrink-0" />
                                                    <span>{point}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                </div>
                            </motion.article>
                        ))}
                    </div>
                </div>
            </section>


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
                            Whether it's feedback or a question for your upcoming event, we’re happy to help.
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
                                <label className="text-sm font-medium text-[#854d41]">Name</label>
                                <input
                                    type="text"
                                    required
                                    placeholder="Your Name"
                                    className="mt-2 w-full px-4 py-3 rounded-lg border border-[#f2cbbf] bg-peach-50 focus:ring-2 focus:ring-[#f8b9a0] focus:outline-none"
                                />
                            </div>

                            {/* Email */}
                            <div>
                                <label className="text-sm font-medium text-[#854d41]">Email Address</label>
                                <input
                                    type="email"
                                    required
                                    placeholder="you@example.com"
                                    className="mt-2 w-full px-4 py-3 rounded-lg border border-[#f2cbbf] bg-peach-50 focus:ring-2 focus:ring-[#f8b9a0]"
                                />
                            </div>

                            {/* City */}
                            <div>
                                <label className="text-sm font-medium text-[#854d41]">City</label>
                                <input
                                    type="text"
                                    placeholder="City"
                                    className="mt-2 w-full px-4 py-3 rounded-lg border border-[#f2cbbf] bg-peach-50 focus:ring-2 focus:ring-[#f8b9a0]"
                                />
                            </div>

                            {/* Phone */}
                            <div>
                                <label className="text-sm font-medium text-[#854d41]">Phone</label>
                                <input
                                    type="tel"
                                    placeholder="+91 98765 43210"
                                    className="mt-2 w-full px-4 py-3 rounded-lg border border-[#f2cbbf] bg-peach-50 focus:ring-2 focus:ring-[#f8b9a0]"
                                />
                            </div>
                        </div>

                        {/* Message */}
                        <div>
                            <label className="text-sm font-medium text-[#854d41]">Message</label>
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
                            </a>.
                        </p>
                    </form>
                </div>
            </section>


            {/* ================== TESTIMONIALS SECTION ================== */}
            <section className="py-16 bg-white">
                <div className="max-w-6xl mx-auto px-6">

                    {/* Section Heading */}
                    <div className="text-center mb-12">
                        <p className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.20em] uppercase text-rose-600">
                            <span className="h-px w-6 bg-rose-400" /> Testimonials <span className="h-px w-6 bg-rose-400" />
                        </p>
                        <h2 className="text-3xl md:text-4xl lux-serif text-gray-900">What People Say</h2>
                        <p className="text-gray-500 max-w-xl mx-auto mt-2">Real feedback from our recent events.</p>
                    </div>

                    {/* Testimonials Grid */}
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
                                “The food and service at our wedding were absolutely outstanding! Guests loved every dish.”
                            </p>
                        </div>

                        {/* Card 2 */}
                        <div className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
                            <div className="flex items-center gap-4 mb-4">
                                <img
                                    src="https://randomuser.me/api/portraits/men/32.jpg"
                                    alt="Rohit"
                                    className="w-12 h-12 rounded-full object-cover"
                                />
                                <div>
                                    <p className="font-semibold text-gray-800">Rohit Sharma</p>
                                    <p className="text-gray-400 text-sm">Corporate Lunch</p>
                                </div>
                            </div>
                            <p className="text-gray-700 leading-relaxed">
                                “Professional setup, delicious food, and on-time delivery. Our office team was seriously impressed.”
                            </p>
                        </div>

                        {/* Card 3 */}
                        <div className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
                            <div className="flex items-center gap-4 mb-4">
                                <img
                                    src="https://randomuser.me/api/portraits/women/68.jpg"
                                    alt="Leena"
                                    className="w-12 h-12 rounded-full object-cover"
                                />
                                <div>
                                    <p className="font-semibold text-gray-800">Leena Mathew</p>
                                    <p className="text-gray-400 text-sm">Birthday Event</p>
                                </div>
                            </div>
                            <p className="text-gray-700 leading-relaxed">
                                “Their presentation and taste were top-notch. Kids and adults both loved the live counters!”
                            </p>
                        </div>

                    </div>
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
