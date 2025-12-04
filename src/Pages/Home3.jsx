import React, { useRef, useState, useEffect } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Users,
  Star,
  Calendar,
  CheckCircle,
  Gift,
  Flame,
  Coffee,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Home() {
  const menuRef = useRef(null);
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  const testimonials = [
    {
      text: "They transformed our wedding into a feast of memories — flawless service and divine flavours.",
      author: "A. & M. Rao — Wedding",
    },
    {
      text: "Professional, punctual and the food was a talking point for days. Corporate event delivered perfectly.",
      author: "TechNova — Corporate Gala",
    },
    {
      text: "Live counters were an absolute hit at our anniversary — every guest raved about the presentation.",
      author: "S. Mehta — Anniversary",
    },
  ];

  useEffect(() => {
    const t = setInterval(() => {
      setTestimonialIndex((i) => (i + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(t);
  }, []);

  const scrollMenu = (dir = "right") => {
    if (!menuRef.current) return;
    const el = menuRef.current;
    const amount = el.clientWidth * 0.8;
    el.scrollBy({
      left: dir === "right" ? amount : -amount,
      behavior: "smooth",
    });
  };

  return (
    <main className="bg-[#fdfcfb] text-gray-800 leading-relaxed">

      {/* HERO */}
      <section className="relative h-screen min-h-[720px] flex items-center shadow-xl">
        {/* <img
          src="https://images.pexels.com/photos/587741/pexels-photo-587741.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Luxury catering hero"
          className="absolute inset-0 w-full h-full object-cover brightness-90"
        /> */}

        <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-white/50 to-white/90"></div>

        <div className="relative container mx-auto px-6 lg:px-20 z-10 grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 max-w-2xl">
            <p className="inline-block px-4 py-1.5 rounded-full bg-amber-200/30 text-amber-500 text-sm font-semibold tracking-wide shadow">
              Luxury Catering • Premium Events
            </p>

            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-gray-900">
              Crafting Unforgettable
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-yellow-400"> Culinary Experiences</span>
            </h1>

            <p className="text-gray-700 text-lg md:text-xl opacity-90 leading-relaxed">
              Bespoke menus • Live counters • Flawless service for weddings, corporate galas & elite private events.
            </p>

            <div className="flex gap-4 mt-6">
              <Link
                to="/services"
                className="px-6 py-3 rounded-lg bg-gradient-to-r from-amber-400 to-yellow-400 text-white font-semibold shadow-lg hover:shadow-yellow-300/30 transition"
              >
                Explore Services
              </Link>
              <Link
                to="/contact"
                className="px-6 py-3 rounded-lg border border-gray-300 text-gray-800 hover:bg-gray-100 transition"
              >
                Book Now
              </Link>
            </div>
            {/* 
            <div className="mt-8 flex flex-wrap gap-4">
              {[
                { label: "10+ Years", sub: "Excellence" },
                { label: "1000+", sub: "Events" },
                { label: "250+", sub: "Chefs" },
              ].map((s, i) => (
                <div
                  key={i}
                  className="bg-white p-5 rounded-xl border border-gray-200 shadow-md"
                >
                  <div className="text-3xl font-bold text-amber-500">{s.label}</div>
                  <p className="text-sm text-gray-500">{s.sub}</p>
                </div>
              ))}
            </div> */}
          </div>

          <div className="hidden lg:block">
            <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-200">
              <img
                src="https://i.pinimg.com/1200x/76/a4/1b/76a41be6b666cda5581b174744a98a4b.jpg"
                alt="Event setup"
                className="w-full h-[350px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* OUR STORY */}
      <section className="container mx-auto px-6 lg:px-20 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-200">
            <img
              src="https://i.pinimg.com/736x/11/19/02/111902f0ee420cd85d5b305ef279173d.jpg"
              alt="Our story"
              className="w-full h-120 object-cover"
            />
          </div>

          <div>
            <h2 className="text-4xl font-bold text-gray-900">Our Story</h2>
            <p className="mt-4 text-gray-700 leading-relaxed">
              A decade of passion, refinement, and culinary mastery —
              bringing premium catering to weddings, corporate events,
              and luxury private functions.
            </p>

            <div className="mt-6 grid grid-cols-2 gap-4">
              {[
                { icon: <CheckCircle size={20} />, title: "Hygiene First" },
                { icon: <Users size={20} />, title: "Expert Team" },
                { icon: <Star size={20} />, title: "Premium Ingredients" },
                { icon: <Calendar size={20} />, title: "Punctual" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 bg-white p-4 rounded-lg border border-gray-200 shadow-sm"
                >
                  <div className="p-2 bg-amber-100 rounded-md text-amber-500">{item.icon}</div>
                  <p className="text-gray-800 text-sm font-medium">{item.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* EVENT EXPERIENCES */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-20">
          <h3 className="text-amber-500 font-semibold">Event Experiences</h3>
          <h2 className="text-3xl font-bold text-gray-900 mt-2">We Cater to Every Luxurious Occasion</h2>

          <div className="mt-10 grid md:grid-cols-3 gap-8 text-center">
            {[
              { title: "Royal Weddings", img: "https://i.pinimg.com/1200x/b4/a6/8f/b4a68f32abef908087617565ce984204.jpg" },
              { title: "Corporate Event", img: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1200" },
              { title: "Birthday Parties", img: "https://i.pinimg.com/1200x/7b/c7/dd/7bc7dd20a6178ca0d0583e2f7f9888b3.jpg" },
            ].map((e, i) => (
              <div key={i} className="group relative rounded-xl overflow-hidden shadow-md border border-gray-200">
                <img src={e.img} alt={e.title} className="w-full h-56 object-cover group-hover:scale-105 transition duration-500" />
                <div className="p-4">
                  <h4 className="text-lg font-semibold text-amber-500">{e.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SIGNATURE MENUS */}
      <section className="py-20 container mx-auto px-6 lg:px-20">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-amber-500">Signature Menus</h3>
            <h2 className="text-3xl font-bold text-gray-900">Chef Crafted Collections</h2>
          </div>

          <div className="flex gap-3">
            <button onClick={() => scrollMenu("left")} className="p-3 rounded-md bg-white border border-gray-300 hover:bg-gray-100">
              <ArrowLeft />
            </button>
            <button onClick={() => scrollMenu("right")} className="p-3 rounded-md bg-white border border-gray-300 hover:bg-gray-100">
              <ArrowRight />
            </button>
          </div>
        </div>

        <div ref={menuRef} className="flex gap-6 overflow-x-auto no-scrollbar py-5 ">
          {[{ name: "Briyani", img: "https://i.pinimg.com/1200x/7e/64/20/7e64207ed671b182baed3bd853b4a150.jpg " },
          { name: "Fried Chicken", img: "https://i.pinimg.com/736x/6d/91/11/6d91117fef2f5891c399f841ba518371.jpg " },
          { name: "Mutton Sukka", img: "https://i.pinimg.com/736x/d2/1c/a9/d21ca9eb53f1140d699de212e33fdb7a.jpg " },
          { name: "Bread Halwa", img: " https://i.pinimg.com/736x/c3/86/f0/c386f0e6eb2e598deefdf4193fc4f485.jpg" },
          ].map((m, i) => (
            <div key={i} className="min-w-[320px] rounded-xl overflow-hidden shadow-md border border-gray-200 group relative text-center h-55 ">
              <img src={m.img} alt={m.name} className="w-full h-48 object-cover group-hover:scale-105 transition duration-500" />
              <div className="p-4">
                <p className="text-amber-500 font-semibold">{m.name}</p>

              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-20">
          <h3 className="text-amber-500">Our Process</h3>
          <h2 className="text-3xl font-bold text-gray-900">From Planning to Perfection</h2>

          <div className="mt-12 grid md:grid-cols-5 gap-6">
            {[
              { step: "01", title: "Consultation", desc: "Understand your vision." },
              { step: "02", title: "Menu Crafting", desc: "Tailored curated menus." },
              { step: "03", title: "Tasting", desc: "Approve your selections." },
              { step: "04", title: "Execution", desc: "Service & live cooking." },
              { step: "05", title: "Aftercare", desc: "Feedback & support." },
            ].map((p, i) => (
              <div key={i} className="p-6 rounded-xl bg-white border border-gray-200 shadow-md">
                <div className="text-amber-500 font-bold text-xl">{p.step}</div>
                <h4 className="mt-3 font-semibold text-lg text-gray-900">{p.title}</h4>
                <p className="mt-2 text-gray-600 text-sm">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SPECIAL HIGHLIGHTS */}
      <section className="py-20 container mx-auto px-6 lg:px-20">
        <div className="grid md:grid-cols-3 gap-10 py-5 ">
          {[
            { title: "Live BBQ Counters", img: "https://i.pinimg.com/736x/65/98/10/659810f2b9e8de538e5a654c7160ec83.jpg", icon: <Flame /> },
            { title: "Royal Buffet Setup", img: "https://i.pinimg.com/736x/99/91/c2/9991c20d1b47768922bcf8bd0e3c3acf.jpg", icon: <Gift /> },
            { title: "Dessert Paradise", img: "https://i.pinimg.com/1200x/9b/c7/fc/9bc7fc0e6f4b529ce7475f92831b6491.jpg", icon: <Coffee /> },
          ].map((h, i) => (
            <div key={i} className="relative rounded-2xl overflow-hidden shadow-md border border-gray-200 group ">
              <img src={h.img} alt={h.title} className="w-full h-72 object-cover group-hover:scale-105 transition duration-500 " />

              <div className="p-6 text-center">
                <div className="text-amber-600 flex items-center justify-center gap-3 font-bold text-xl">
                  {h.icon}
                  <span>{h.title}</span>
                </div>
              </div>


            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-20 text-center">
          <h3 className="text-amber-500">What Clients Say</h3>

          <div className="mt-10 max-w-3xl mx-auto relative">
            <div className="p-10 rounded-2xl bg-white border border-gray-200 shadow-md">
              <p className="italic text-gray-700 text-lg leading-relaxed">
                “{testimonials[testimonialIndex].text}”
              </p>
              <div className="mt-6 font-semibold text-amber-500 text-sm">
                {testimonials[testimonialIndex].author}
              </div>
            </div>

            <div className="flex gap-3 justify-center mt-6">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setTestimonialIndex(i)}
                  className={`w-4 h-4 rounded-full transition ${i === testimonialIndex ? "bg-amber-400 shadow-md" : "bg-gray-300"
                    }`}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="py-20 container mx-auto px-6 lg:px-20">
        <h3 className="text-amber-500">Event Gallery</h3>
        <h2 className="text-3xl font-bold mt-2 text-gray-900">Moments We’ve Catered</h2>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            "https://i.pinimg.com/1200x/c2/e0/a0/c2e0a0038c541165e3dc2ca2b15c5db9.jpg",
            "https://i.pinimg.com/736x/89/31/42/89314223a9db3612e392660171c2316d.jpg",
            "https://i.pinimg.com/1200x/99/ed/6a/99ed6a2254ea8521279242762b392b24.jpg",
            "https://i.pinimg.com/1200x/0f/18/c4/0f18c4d5c257ac87780552f3bcf21a41.jpg",
            "https://i.pinimg.com/736x/99/91/c2/9991c20d1b47768922bcf8bd0e3c3acf.jpg",
            "https://i.pinimg.com/736x/3b/c7/e5/3bc7e554810eeb021b4dce2c3854a287.jpg"
          ].map((src, i) => (
            <div key={i} className="rounded-xl overflow-hidden shadow-md border border-gray-200 group">
              <img
                src={src}
                alt="gallery"
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
              />
            </div>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 bg-gradient-to-r from-gray-100 via-gray-50 to-gray-100 border-t border-gray-200">
        <div className="container mx-auto px-6 lg:px-20 text-center">
          <h2 className="text-4xl font-extrabold text-gray-900">
            Your Event Deserves the Finest
          </h2>
          <p className="text-gray-700 mt-4 max-w-2xl mx-auto">
            Book our premium catering services today — crafted menus, expert chefs,
            and luxury event execution.
          </p>

          <div className="mt-10 flex items-center justify-center gap-4">
            <Link
              to="/contact"
              className="px-8 py-3 rounded-lg bg-gradient-to-r from-amber-400 to-yellow-400 text-white font-semibold shadow-lg hover:shadow-yellow-300/30 transition"
            >
              Book Now
            </Link>
            <Link
              to="/services"
              className="px-8 py-3 rounded-lg border border-gray-300 text-gray-800 hover:bg-gray-100 transition"
            >
              View Services
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
