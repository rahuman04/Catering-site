import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';


export default function About() {
  // Theme variables
  const themeStyle = {
    '--cream': '#F7EFE6',
    '--brown': '#6B4226',
    '--brown-600': '#5A3E36',
    '--accent': '#A57C52',
  };

  const galleryImages = [
    { src: 'https://i.pinimg.com/736x/12/1b/9f/121b9f4d28e4cfb2d6268b6f77aafa5e.jpg', alt: 'Mutton Biriyani' },
    { src: 'https://i.pinimg.com/736x/5c/a0/3a/5ca03a1d98fc96cab4be558904bc8357.jpg', alt: 'Chicken biriyani' },
    { src: 'https://i.pinimg.com/736x/a0/92/4d/a0924da750c9ef458be70bfaec61fa11.jpg', alt: 'Fried Chicken' },
    { src: 'https://i.pinimg.com/736x/c7/1e/ea/c71eea435b61a0362d6fde7e8df975a9.jpg', alt: 'Dosa' },
    { src: 'https://i.pinimg.com/736x/f2/e3/90/f2e3900d2893ff27d4b989b5271dd50e.jpg', alt: 'Idiyappam' },    
    { src: 'https://i.pinimg.com/736x/da/8f/69/da8f6942f6b71723a28ae58360941d6d.jpg', alt: 'Parotta' },
    { src: 'https://i.pinimg.com/736x/3a/81/b4/3a81b47416114c3ea3ef93d08ed4f584.jpg', alt: 'Bread Halwa' },
    { src: 'https://i.pinimg.com/1200x/fe/09/7c/fe097cd2d78a724220a0694d6c5bb73e.jpg', alt: 'Ice Cream' },
    { src: 'https://i.pinimg.com/736x/f6/80/74/f680742280fe42b290b0a5ce2798621c.jpg', alt: 'Gulab Jamun' },
  ];

  const services = [
    // { id: 1, title: 'Silver Package', price: '₹12,000', img: './src/images/silver.png', summary: 'Great for intimate gatherings (50-100 guests). Simple, delicious and budget-friendly.', items: ['3-course buffet', 'Vegetarian options', 'Standard cutlery & staff',] },
    // { id: 2, title: 'Gold Package', price: '₹25,000', img: './src/images/golden.png', summary: 'Perfect for weddings and corporate dinners. Includes live counters and decor basics.', items: ['4-course plated menu', 'Live counters', 'Decor basics', 'Experienced serving staff'] },
    // { id: 3, title: 'Platinum Package', price: '₹45,000', img: './src/images/premium.png', summary: 'Full-service premium offering with on-site chef, premium table settings and coordination.', items: ['Custom gourmet menu', 'Premium table settings', 'On-site chef & manager', 'Full event coordination'] },
  ];

  const team = [
    { id: 1, img: './src/images/chef2.jpg', name: 'Chef Jessie', role: 'Head Chef', bio: '15 years crafting authentic flavours & modern plating. Head of menu development and quality control.', socials: { mail: 'mailto:chef.ramesh@example.com', phone: 'tel:+911234567890' }, badge: 'Head Chef' },
    { id: 2, img: './src/images/chef1.jpg', name: 'Chef Rahul', role: 'Pastry Specialist', bio: 'Pastry chef with a flair for seasonal desserts and bespoke wedding cakes.', socials: { mail: 'mailto:chef.priya@example.com', phone: 'tel:+919876543210' }, badge: 'Pastry' },
    { id: 3, img: './src/images/chef3.jpg', name: 'Chef Mary', role: 'Event Coordinator', bio: 'Coordinates front-of-house, logistics and ensures flawless service on event day.', socials: { mail: 'mailto:arjun@example.com', phone: 'tel:+919112223334' }, badge: 'Coordinator' },
  ];

  const faqs = [
    { q: 'Do you offer vegetarian and vegan menus?', a: 'Yes — we craft vegetarian, vegan and gluten-free menus on request.' },
    { q: 'Can you cater for 100+ guests?', a: 'Absolutely. We regularly cater large weddings and corporate events — contact us for a custom quote.' },
    { q: 'Do you provide event staff and tableware?', a: 'Yes. Depending on the package, we provide serving staff, cutlery, and basic table settings. Premium packages include upgraded tableware and decor.' },
  ];


  /* ---------- Motion variants ---------- */
  const fadeInUp = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } } };
  const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.12 } } };
  const card = { hidden: { opacity: 0, y: 18 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } } };
  const float = { animate: { y: [0, -6, 0] }, transition: { duration: 4, repeat: Infinity } };
  const spring = { type: 'spring', stiffness: 280, damping: 22 };

  /* ---------- Reusable components (enhanced TeamMember) ---------- */
  function TeamMember({ member }) {
    return (
      <motion.article
        variants={card}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        whileHover={{ y: -8, scale: 1.02, rotateX: 4 }}
        transition={{ type: 'spring', stiffness: 240, damping: 18 }}
        className="bg-white rounded-2xl overflow-hidden shadow-lg focus-within:ring-2 focus-within:ring-[var(--accent)]"
        style={{ perspective: 800 }}
      >
        <div className="relative">
          <img src={member.img} alt={member.name} className="w-full h-64 object-cover" loading="lazy" />
          <div className="absolute top-4 right-4 bg-white/90 rounded-full px-3 py-1 text-sm font-semibold text-[var(--brown)] shadow">{member.badge}</div>
        </div>

        <div className="p-6">
          <h3 className="text-lg font-semibold text-[var(--brown)]">{member.name}</h3>
          <p className="text-sm text-gray-500 mb-3">{member.role}</p>
          <p className="text-sm text-gray-700 mb-4">{member.bio}</p>

          <div className="flex items-center gap-3">
            <a href={member.socials.mail} className="inline-flex items-center gap-2 px-3 py-2 rounded-md border border-gray-200 text-sm hover:bg-[var(--brown)] hover:text-white transition" aria-label={`Email ${member.name}`}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12h.01M8 12h.01M12 12h.01M21 12c0 4.418-4.03 8-9 8s-9-3.582-9-8 4.03-8 9-8 9 3.582 9 8z" /></svg>
              <span className="text-xs">Email</span>
            </a>

            <a href={member.socials.phone} className="inline-flex items-center gap-2 px-3 py-2 rounded-md border border-gray-200 text-sm hover:bg-[var(--accent)] hover:text-white transition" aria-label={`Call ${member.name}`}>
              {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5h2l2 7-2 7h2l1-3h6l1 3h2l-2-7 2-7H3z" /></svg> */}
              <span className="text-xs">Call</span>
            </a>

            <button className="ml-auto inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[var(--brown)] text-white text-sm font-semibold shadow hover:scale-[1.02] transition" aria-label={`View ${member.name} profile`}>
              View profile
            </button>
          </div>
        </div>
      </motion.article>
    );
  }

  function FeatureCard({ service }) {
    return (
      <motion.article variants={card} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} whileHover={{ scale: 1.03, y: -6 }} transition={spring} className="group bg-white rounded-2xl overflow-hidden shadow-md">
        <div className="relative h-48 overflow-hidden">
          <motion.img src={service.img} alt={service.title} className="w-full h-full object-cover" loading="lazy" whileHover={{ scale: 1.12 }} transition={{ duration: 0.6 }} />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" aria-hidden="true" />
          <div className="absolute left-4 bottom-4 text-white">
            <h4 className="text-lg font-semibold leading-tight">{service.title}</h4>
            <div className="text-sm opacity-90">Starting at <span className="font-bold">{service.price}</span></div>
          </div>
        </div>

        <div className="p-6">
          <p className="text-gray-700 text-sm">{service.summary}</p>
          <ul className="mt-3 grid grid-cols-1 gap-1 text-sm text-gray-600">
            {service.items.map((it, idx) => (
              <li key={idx} className="flex items-center gap-2"><span className="inline-block w-2 h-2 rounded-full bg-[var(--accent)] mt-1" />{it}</li>
            ))}
          </ul>

          <div className="mt-6 flex items-center gap-3">
            <motion.a href="/contact" aria-label={`Book ${service.title}`} whileHover={{ translateY: -4, boxShadow: '0 12px 30px rgba(0,0,0,0.12)' }} whileTap={{ scale: 0.97 }} transition={{ type: 'spring', stiffness: 320, damping: 24 }} className="inline-flex items-center gap-2 px-4 py-2 rounded-lg font-semibold text-white shadow-md bg-gradient-to-r from-[var(--brown)] to-[var(--brown-600)]">
              <span className="relative z-10">Book</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </motion.a>

            <motion.a href="/details" whileHover={{ backgroundColor: '#6B4226', color: '#fff' }} className="inline-flex items-center px-4 py-2 rounded-lg border border-[var(--brown-600)] text-[var(--brown)]">
              Details
            </motion.a>

            <div className="ml-auto text-sm text-gray-500">Free tasting on premium plans</div>
          </div>
        </div>
      </motion.article>
    );
  }

  /* ---------- Gallery & Testimonials & FAQ (unchanged except FAQ width tweak and small comments) ---------- */
  const ImageGallery = () => {
    const [open, setOpen] = React.useState(false);
    const [index, setIndex] = React.useState(0);
    const openAt = (i) => { setIndex(i); setOpen(true); document.body.style.overflow = 'hidden'; };
    const close = () => { setOpen(false); document.body.style.overflow = ''; };
    const next = () => setIndex((i) => (i + 1) % galleryImages.length);
    const prev = () => setIndex((i) => (i - 1 + galleryImages.length) % galleryImages.length);
    React.useEffect(() => { function onKey(e) { if (!open) return; if (e.key === 'Escape') close(); if (e.key === 'ArrowRight') next(); if (e.key === 'ArrowLeft') prev(); } window.addEventListener('keydown', onKey); return () => window.removeEventListener('keydown', onKey); }, [open]);

    return (
      <div className="mt-10">
        <motion.h3 variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="text-2xl font-semibold text-[var(--brown)] mb-4 text-center">Gallery</motion.h3>

        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.12 }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {galleryImages.map((img, i) => (
            <motion.button key={img.src} onClick={() => openAt(i)} variants={card} className="w-full block rounded-lg overflow-hidden shadow hover:shadow-lg transform hover:-translate-y-1 transition focus:outline-none focus:ring-2 focus:ring-[var(--accent)]" aria-label={`Open image ${i + 1}: ${img.alt}`}>
              <img src={img.src} alt={img.alt} className="w-full h-80 object-cover" loading="lazy" />
            </motion.button>
          ))}
        </motion.div>

        {open && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-6" role="dialog" aria-modal="true">
            <div className="absolute inset-0 bg-black/60" onClick={close} aria-hidden="true"></div>
            <div className="relative max-w-4xl w-full mx-auto">
              <img src={galleryImages[index].src} alt={galleryImages[index].alt} className="w-full h-[60vh] object-contain rounded-lg shadow-2xl bg-white" loading="eager" />
              <button onClick={close} className="absolute -top-3 -right-3 bg-white rounded-full p-2 shadow focus:outline-none focus:ring-2 focus:ring-[var(--accent)]" aria-label="Close gallery"><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[var(--brown)]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg></button>
              <button onClick={prev} className="absolute top-1/2 -left-3 transform -translate-y-1/2 bg-white rounded-full p-2 shadow focus:outline-none focus:ring-2 focus:ring-[var(--accent)]">‹</button>
              <button onClick={next} className="absolute top-1/2 -right-3 transform -translate-y-1/2 bg-white rounded-full p-2 shadow focus:outline-none focus:ring-2 focus:ring-[var(--accent)]">›</button>
              <div className="mt-2 text-center text-sm text-gray-200">{galleryImages[index].alt}</div>
            </div>
          </div>
        )}
      </div>
    );
  };

  const Testimonials = () => {
    const data = [
      { name: 'Anjali S.', text: 'The food and service were outstanding — guests kept asking for more!' },
      { name: 'Rohit M.', text: 'Professionally handled our corporate dinner. On time and delicious.' },
      { name: 'Meera & Sameer', text: 'Wedding catering that felt personal and luxurious. Highly recommend.' },
    ];

    const [i, setI] = React.useState(0);
    React.useEffect(() => { const t = setInterval(() => setI((s) => (s + 1) % data.length), 4500); return () => clearInterval(t); }, []);

    return (
      <div className="mt-10">
        <motion.h3 variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="text-2xl font-semibold text-[var(--brown)] mb-4 text-center">What clients say</motion.h3>
        <div className="relative bg-white p-8 rounded-2xl shadow-md overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div key={i} initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.55 }} className="text-center">
              <p className="text-gray-700 italic">“{data[i].text}”</p>
              <div className="mt-4 font-semibold text-[var(--brown)]">— {data[i].name}</div>
            </motion.div>
          </AnimatePresence>

          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
            {data.map((_, idx) => (
              <button key={idx} onClick={() => setI(idx)} className={`w-2 h-2 rounded-full ${i === idx ? 'bg-[var(--brown)]' : 'bg-gray-300'} focus:outline-none focus:ring-2 focus:ring-[var(--accent)]`} aria-label={`Show testimonial ${idx + 1}`} />
            ))}
          </div>
        </div>
      </div>
    );
  };

  // FAQ: made the text width narrower for easier reading and added small comments
  const FAQ = () => {
    const [openIdx, setOpenIdx] = React.useState(null);

    return (
      <div className="mt-10">
        <motion.h3 variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="text-2xl font-semibold text-[var(--brown)] mb-4 text-center">Frequently asked questions</motion.h3>

        {/* Limit the FAQ column width for better readability (narrower text) */}
        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.12 }} className="space-y-3 max-w-2xl mx-auto">
          {faqs.map((f, idx) => (
            <motion.div key={idx} variants={fadeInUp} className="bg-white rounded-lg shadow p-4">
              {/* question button */}
              <button
                className="w-full text-left flex justify-between items-center focus:outline-none"
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                aria-expanded={openIdx === idx}
                aria-controls={`faq-${idx}`}
              >
                <span className="font-medium text-[var(--brown)]">{f.q}</span>
                <span className="text-gray-400">{openIdx === idx ? '−' : '+'}</span>
              </button>

              {/* answer area — additionally limit answer width (max-w-prose) for comfortable line length */}
              {openIdx === idx && (
                <div id={`faq-${idx}`} className="mt-3 text-gray-600 max-w-prose">
                  {f.a}
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    );
  };

  /* ---------- Enhanced CTA for 'Planning an event' (front-end only) ---------- */
  function EventCTA() {
    return (
      <motion.div initial={{ scale: 0.98 }} animate={{ scale: 1 }} transition={{ duration: 0.45, ease: 'easeOut' }} className="mt-16 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-4 bg-[var(--brown)] text-white">
        <div>
          <div className="text-lg font-semibold">Planning an event?</div>
          <div className="text-sm opacity-90">Contact us for a custom tasting, menu walkthrough and quote.</div>
          <div className="mt-2 flex items-center gap-3">
            <span className="inline-block bg-white/10 px-3 py-1 rounded-full text-xs">Free tasting on Platinum</span>
            <span className="inline-block bg-white/10 px-3 py-1 rounded-full text-xs">100+ events served</span>
          </div>
        </div>

        <div className="flex gap-3 items-center">
          <motion.a href="/contact" whileHover={{ translateY: -6 }} transition={{ type: 'spring', stiffness: 300 }} className="inline-block px-6 py-3 rounded-lg font-semibold bg-[var(--accent)] text-white shadow-lg" aria-label="Get a Quote">Get a Quote</motion.a>

          <motion.a href="/tasting" whileHover={{ translateY: -4 }} transition={{ type: 'spring', stiffness: 300 }} className="inline-block px-5 py-3 rounded-lg font-medium bg-white text-[var(--brown)]" aria-label="Schedule a tasting">Schedule Tasting</motion.a>

          <a href="tel:+911234567890" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-white/20 text-sm hover:bg-white/10 transition" aria-label="Call us">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5h2l2 7-2 7h2l1-3h6l1 3h2l-2-7 2-7H3z" /></svg>
            +91 12345 67890
          </a>
        </div>
      </motion.div>
    );
  }

  return (
    <section style={themeStyle} className="max-w-full mx-auto px-6 py-20 bg-[var(--cream)]">
      <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="grid md:grid-cols-2 gap-12 items-center rounded-3xl p-8 md:p-12" style={{ background: 'linear-gradient(90deg, rgba(247,239,230,1) 0%, rgba(255,255,255,1) 100%)' }}>
        <div>
          <motion.h1 variants={fadeInUp} className="text-4xl md:text-5xl font-extrabold leading-tight mb-6" style={{ color: 'var(--brown)' }}>
            About <span className="text-[var(--accent)]">Our Catering</span>
          </motion.h1>

          <motion.p variants={fadeInUp} className="text-gray-700 leading-relaxed mb-4 text-lg">We're a passionate, family-led catering team focused on warm hospitality and exceptional food. We specialise in handcrafted dishes, seasonal menus, and elegant presentation that fit weddings, corporate gatherings and private celebrations.</motion.p>

          <motion.p variants={fadeInUp} className="text-gray-700 leading-relaxed mb-6">We source fresh local ingredients, respect culinary traditions, and bring a contemporary touch to every plate — all served with a friendly smile.</motion.p>

          <motion.div variants={fadeInUp} className="flex flex-wrap gap-4 items-center">
            <motion.a href="/menu" whileHover={{ translateY: -4 }} transition={{ type: 'spring', stiffness: 320 }} className="group inline-flex items-center gap-3 px-6 py-3 rounded-xl font-semibold shadow transition transform focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-2" style={{ backgroundColor: 'var(--brown)', color: '#fff' }} aria-label="View our menu">
              <span className="relative z-10">View Menu</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transform transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ color: '#fff' }}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </motion.a>

            <motion.a href="/contact" whileHover={{ translateY: -3 }} transition={{ type: 'spring', stiffness: 300 }} className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition border focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-2 active:scale-95" style={{ borderColor: 'var(--brown-600)', color: 'var(--brown)' }} aria-label="Contact us">Book an Event</motion.a>
          </motion.div>

          <motion.div variants={fadeInUp} className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <motion.div {...float} className="flex items-start gap-3"><div className="p-2 rounded-md bg-[rgba(106,64,42,0.08)] text-[var(--brown)]">🍽️</div><div><div className="text-sm font-semibold text-[var(--brown-600)]">Custom Menus</div><div className="text-xs text-gray-600">Cuisine tailored to your event</div></div></motion.div>
            <motion.div {...float} transition={{ duration: 4, repeat: Infinity, delay: 0.8 }} className="flex items-start gap-3"><div className="p-2 rounded-md bg-[rgba(106,64,42,0.08)] text-[var(--brown)]">🧑‍🍳</div><div><div className="text-sm font-semibold text-[var(--brown-600)]">Experienced Chefs</div><div className="text-xs text-gray-600">Professional, creative team</div></div></motion.div>
            <motion.div {...float} transition={{ duration: 4, repeat: Infinity, delay: 1.6 }} className="flex items-start gap-3"><div className="p-2 rounded-md bg-[rgba(106,64,42,0.08)] text-[var(--brown)]">⏱️</div><div><div className="text-sm font-semibold text-[var(--brown-600)]">On-Time Service</div><div className="text-xs text-gray-600">We respect your schedule</div></div></motion.div>
          </motion.div>
        </div>

        <motion.div variants={fadeInUp} className="relative"><div className="rounded-2xl shadow-xl overflow-hidden ring-1 ring-[var(--brown)]"><img src="https://i.pinimg.com/1200x/73/f8/a9/73f8a962194665f8ff4a72d0267f0fff.jpg" alt="Buffet and plated dishes from our catering" className="w-full h-96 object-cover" loading="lazy" /></div>
          <div className="absolute -bottom-6 left-6 bg-white rounded-2xl p-4 shadow-lg flex items-center gap-4 ring-1" style={{ borderColor: 'rgba(106,64,42,0.06)' }}>
            <div><div className="text-sm text-gray-500">Since</div><div className="text-lg font-semibold text-[var(--brown)]">2014</div></div>
            <div className="border-l h-8" />
            <div className="text-sm text-gray-500">Avg. rating</div>
            <div className="text-[var(--accent)] font-bold">4.8 ★</div>
          </div>
        </motion.div>
      </motion.div>

      {/* <div className="mt-16"><h2 className="text-3xl font-bold text-[var(--brown)] mb-6 text-center">Our Packages</h2>
        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.12 }} className="grid md:grid-cols-3 gap-6">
          {services.map(s => (<FeatureCard key={s.id} service={s} />))}
        </motion.div>
      </div> */}

      <div className="mt-16"><Testimonials /></div>

      <div className="mt-12"><ImageGallery /><p className="text-sm text-gray-600 mt-4">Tip: Click any image to view larger and navigate the gallery.</p></div>

      <div className="mt-12"><FAQ /></div>

      <div className="mt-20">
        <h2 className="text-3xl font-bold text-center mb-8 text-[var(--brown)]">Meet Our Team</h2>
        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.12 }} className="grid md:grid-cols-3 gap-8">
          {team.map(m => (<TeamMember key={m.id} member={m} />))}
        </motion.div>
        <p className="text-center text-gray-600 mt-6">Our team is trained in hygiene standards and customer service to make every event run smoothly.</p>
      </div>

      <EventCTA />
    </section>
  );
}
