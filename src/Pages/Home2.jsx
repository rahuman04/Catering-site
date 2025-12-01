import React from "react";
import { motion } from "framer-motion";

export default function Home() {
  const eventTypes = [
    "Weddings",
    "Birthday Parties",
    "Corporate Events",
    "Housewarming",
    "Engagement",
    "Outdoor Catering",
  ];

   

  const steps = [
    { title: "Enquire", desc: "Tell us your date, guests and vision. We reply with options.", icon: "1" },
    { title: "Plan & Taste", desc: "Menu tasting and final quotation. Customize every detail.", icon: "2" },
    { title: "Celebrate", desc: "We arrive early, execute the plan and make your event effortless.", icon: "3" },
  ];

  const reasons = [
    { title: "Reliability", desc: "Punctual teams with proven delivery track records." },
    { title: "Hygiene & Quality", desc: "Strict food safety and premium ingredients." },
    { title: "Flexible Pricing", desc: "Packages that scale from small family events to large weddings." },
    { title: "Expert Chefs", desc: "Regional & international cuisine handled by pros." },
  ];

  const reviews = [
    {
      name: "Aisha Khan",
      role: "Bride",
      rating: 5,
      location: "Mumbai",
      avatar:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&q=80&w=200",
      text: "They made our day magical — food, timing and presentation were flawless. Every guest kept asking for more!",
      date: "Sept 12, 2025",
      guests: 180,
    },
    {
      name: "Rohit Sharma",
      role: "Office Manager",
      rating: 5,
      location: "Bengaluru",
      avatar:
        "https://images.unsplash.com/photo-1545996124-1f34f4b1a0d7?auto=format&q=80&w=200",
      text: "Professional, punctual and delicious. Our corporate lunch was a hit. Highly recommend for events.",
      date: "Oct 3, 2025",
      guests: 85,
    },
    {
      name: "Leena Mathew",
      role: "Party Host",
      rating: 5,
      location: "Chennai",
      avatar:
        "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?auto=format&q=80&w=200",
      text: "Stunning flavors and beautiful plating — guests loved the desserts especially. Will book again!",
      date: "Aug 28, 2025",
      guests: 60,
    },
  ];

  const scrollRef = React.useRef(null);
  const [activeIndex, setActiveIndex] = React.useState(1);

  const handleScroll = React.useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    const wrapper = el.firstElementChild;
    if (!wrapper) return;
    const children = Array.from(wrapper.children);
    const center = el.scrollLeft + el.offsetWidth / 2;
    let best = 0;
    let bestDist = Infinity;
    children.forEach((c, i) => {
      const cCenter = c.offsetLeft + c.offsetWidth / 2;
      const dist = Math.abs(center - cCenter);
      if (dist < bestDist) {
        bestDist = dist;
        best = i;
      }
    });
    setActiveIndex(best);
  }, []);

  React.useEffect(() => {
    handleScroll();
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    return () => {
      el.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [handleScroll]);

  function SectionHeader({ eyebrow, title, desc, align = "center" }) {
    // align: 'center' | 'left' — but titles are centered by default per request
    const alignClass = align === "left" ? "md:text-left" : "text-center";
    return (
      <div className={`mb-6 ${alignClass}`}>
        {eyebrow && (
          <div className="text-sm font-semibold uppercase tracking-wide text-green-700 select-none" aria-hidden>
            {eyebrow}
          </div>
        )}

        <motion.h2
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="text-3xl md:text-4xl font-extrabold leading-tight"
          style={{ wordBreak: 'keep-all' }}
        >
          <span className="block">{title}</span>
        </motion.h2>

        {/* Decorative centered underline */}
        <div className="flex items-center justify-center mt-3">
          <span className="w-20 h-1 rounded-full bg-gradient-to-r from-green-500 to-yellow-400 shadow-sm" aria-hidden></span>
        </div>

        {desc && <p className="text-gray-600 mt-3 max-w-2xl mx-auto">{desc}</p>}
      </div>
    );
  }

  return (
    <div className="bg-white text-gray-800 font-inter">
      {/* HERO unchanged but improved contrast for title */}
      <section className="relative w-full h-[360px] md:h-[460px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&q=80&w=1600"
          alt="Catering Food"
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/42"></div>

        <div className="relative z-20 max-w-7xl mx-auto h-full flex items-center justify-center px-6">
          <div className="max-w-xl text-white/95 text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight drop-shadow-lg">Fresh, Delicious & Professional Catering</h1>
            <p className="mt-4 text-lg text-white/85">Perfect for weddings, birthdays, corporate meetings & daily catering needs.</p>

            <div className="mt-6 flex items-center justify-center gap-4">
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-xl font-semibold shadow-lg">Book Catering</button>
              <a href="#contact" className="inline-block border border-white/70 bg-transparent hover:bg-white/20 text-white px-5 py-3 rounded-xl font-semibold shadow-lg transition duration-200 backdrop-blur-sm">Contact Us</a>
            </div>

          </div>
        </div>
      </section>

      {/* EVENT TYPES */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            eyebrow="Our Services"
            title="Event Types We Serve"
            desc="Flexible menus & service for every occasion."
          />

          <div ref={scrollRef} className="overflow-x-auto no-scrollbar py-4" onScroll={() => handleScroll()} role="region" aria-label="Event types carousel">
            <div className="flex gap-6 px-4 snap-x snap-mandatory">
              {eventTypes.map((event, idx) => (
                <motion.div
                  key={event}
                  whileHover={{ scale: 1.02 }}
                  className={`snap-center flex-shrink-0 bg-white rounded-lg p-5 min-w-[260px] md:min-w-[320px] lg:min-w-[360px] transition-all duration-300 ease-in-out ${
                    activeIndex === idx ? "shadow-lg scale-100 filter-none opacity-100" : "shadow-md scale-95 blur-sm opacity-60"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                      <img
                        src={`https://images.unsplash.com/320x320/?food,party&${encodeURIComponent(event)}`}
                        alt={event}
                        loading="lazy"
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="flex-1">
                      <h3 className="font-semibold text-lg">{event}</h3>
                      <p className="text-sm text-gray-500 mt-1">Custom menus, staff & setup for {event.toLowerCase()}.</p>

                      <div className="mt-4">
                        <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md transition">Enquire</button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <p className="text-sm text-gray-500 mt-3">Scroll horizontally — three medium cards fit on wide screens. Center card is highlighted; side cards are visually softened.</p>
        </div>
      </section>

      {/* SERVICES - show only 3 cards */}
      

      {/* HOW IT WORKS */}
      <section className="py-12 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <SectionHeader title="How It Works" desc="A simple three-step process to book and enjoy." />

          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {steps.map((st, i) => (
              <motion.div key={st.title} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }} className="bg-white rounded-2xl p-6 shadow flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-green-600 text-white flex items-center justify-center font-semibold text-xl">{st.icon}</div>
                <h4 className="mt-4 font-semibold text-lg">{st.title}</h4>
                <p className="text-sm text-gray-600 mt-2">{st.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-12 px-6 bg-gradient-to-r from-green-50 to-white">
        <div className="max-w-6xl mx-auto">
          <SectionHeader eyebrow="Trusted by hundreds" title="Why Choose Us" desc="Real reasons clients pick our catering services." />

          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div>
              <p className="text-gray-700">We combine experienced staff, premium ingredients and professional service to deliver flawless events — every time. Below are the things our clients notice first.</p>

              <div className="mt-6 grid sm:grid-cols-2 gap-4">
                {reasons.map((r) => (
                  <div key={r.title} className="flex items-start gap-4 bg-white rounded-lg p-4 shadow-sm">
                    <div className="w-12 h-12 rounded-full bg-green-700 text-white flex items-center justify-center font-semibold">✓</div>
                    <div>
                      <div className="font-semibold">{r.title}</div>
                      <div className="text-sm text-gray-600">{r.desc}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex items-center gap-4">
                <div className="bg-white rounded-lg p-4 shadow flex flex-col items-center">
                  <div className="text-2xl font-bold">+1200</div>
                  <div className="text-sm text-gray-600">Events served</div>
                </div>

                <div className="bg-white rounded-lg p-4 shadow flex flex-col items-center">
                  <div className="text-2xl font-bold">4.9★</div>
                  <div className="text-sm text-gray-600">Average rating</div>
                </div>

                <div className="ml-auto">
                  <button className="bg-green-700 hover:bg-green-800 text-white px-5 py-3 rounded-xl font-semibold shadow">Get a Quote</button>
                </div>
              </div>
            </div>

            <div className="hidden md:block">
              <img src="https://images.unsplash.com/photo-1541542684-5f4b2b7b0a6f?auto=format&q=80&w=900" alt="why choose us" loading="lazy" className="rounded-xl shadow-lg w-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* CUSTOMER REVIEWS */}
      <section className="py-16 bg-white px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-orange-600 text-center">What Customers Say</h2>
          <p className="text-gray-600 text-center mt-2">Real feedback from real events.</p>

          <div className="mt-10">
            <div className="overflow-x-auto no-scrollbar py-2">
              <div className="flex gap-6 px-2 md:grid md:grid-cols-3 md:gap-6 md:px-0">
                {reviews.map((r, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.08 }}
                    className="min-w-[320px] md:min-w-0 bg-gradient-to-b from-white to-gray-50 rounded-2xl p-6 shadow-md"
                  >
                    <div className="flex items-center gap-4">
                      <img src={r.avatar} alt={r.name} loading="lazy" className="w-14 h-14 rounded-full object-cover" />
                      <div>
                        <div className="font-semibold">{r.name} <span className="text-sm text-gray-500">— {r.role}</span></div>
                        <div className="text-sm text-gray-500">{r.location} • <span className="font-medium">{r.date}</span></div>
                      </div>
                    </div>

                    <div className="mt-4 text-yellow-500 text-lg">{Array(r.rating).fill("★").join("")}</div>

                    <p className="mt-4 text-gray-700">“{r.text}”</p>

                    <div className="mt-4 flex items-center justify-between text-sm text-gray-500">
                      <div>Guests: <span className="font-medium">{r.guests}</span></div>
                      <div className="font-medium text-green-700">Verified</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <p className="text-sm text-gray-500 mt-4">Showcasing recent, verified reviews — swipe on mobile or view the three-column grid on desktop.</p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="contact" className="py-10 bg-green-700 text-white text-center">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-xl font-semibold">Contact Us</h3>
          <p className="mt-2">📞 +91 98765 43210 | ✉️ info@yourcatering.com</p>
          <p className="text-sm mt-4 opacity-80">© 2025 Your Catering Company. All Rights Reserved.</p>
        </div>
      </footer>

      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
}
