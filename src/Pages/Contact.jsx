import React, { useEffect, useRef, useState } from "react";



export default function EnhancedContactPage() {
    const FORM_ENDPOINT = "https://formspree.io/f/your-form-id"; // <- replace with your endpoint

    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        address: "",
        date: "",
        eventType: "",
        guests: "",
        message: "",
        _honey: "", // honeypot
    });

    const [status, setStatus] = useState({ loading: false, ok: null, message: "" });
    const formRef = useRef(null);
    const heroCtaRef = useRef(null);

    useEffect(() => {
        // set minimum date for date input to today
        const today = new Date().toISOString().split("T")[0];
        const dateInput = formRef.current?.querySelector("input[name=date]");
        if (dateInput) dateInput.setAttribute("min", today);
    }, []);

    function handleChange(e) {
        const { name, value } = e.target;
        setForm((s) => ({ ...s, [name]: value }));
    }

    function validate() {
        if (!form.name.trim()) return "Please enter your name.";
        if (!form.email.trim()) return "Please enter your email.";
        // basic email pattern
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) return "Please enter a valid email.";
        if (form.phone && !/^[+0-9()\s-]{6,20}$/.test(form.phone)) return "Please enter a valid phone number.";
        return null;
    }

    async function handleSubmit(e) {
        e.preventDefault();
        const clientErr = validate();
        if (clientErr) {
            setStatus({ loading: false, ok: false, message: clientErr });
            return;
        }

        // honeypot check (should be empty)
        if (form._honey) {
            setStatus({ loading: false, ok: false, message: "Spam detected." });
            return;
        }

        setStatus({ loading: true, ok: null, message: "Sending..." });

        try {
            const payload = { ...form };
            // don't send honeypot field to server, remove _honey
            delete payload._honey;

            const res = await fetch(FORM_ENDPOINT, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });

            if (res.ok) {
                setStatus({ loading: false, ok: true, message: "Thanks — we received your request!" });
                setForm({ name: "", email: "", phone: "", address: "", date: "", eventType: "", guests: "", message: "", _honey: "" });
            } else {
                const text = await res.text();
                setStatus({ loading: false, ok: false, message: `Server error: ${res.status} ${text}` });
            }
        } catch (err) {
            setStatus({ loading: false, ok: false, message: `Network error: ${err.message}` });
        }
    }

    return (
        <div className="min-h-screen bg-gray-50 text-gray-800 flex flex-col">
            {/* HERO */}
            {/* INFO CARDS (Office / Email / Contact) */}


            <header>
                <div className="relative w-full h-[60vh] md:h-[50vh] overflow-hidden mt-20">
                    <img
                        src="https://i.pinimg.com/736x/33/66/0c/33660c87c3027e8cfccb38da49f51633.jpg"
                        alt="Catering hero"
                        className="absolute inset-0 w-full h-full object-cover"
                    />

                    <div className="absolute inset-0 bg-black/35 flex items-center">
                        <div className="max-w-6xl mx-auto px-6 text-white">
                            <h1 className="text-3xl md:text-5xl font-bold leading-tight">Delicious food, memorable events</h1>
                            <p className="mt-4 text-lg md:text-xl max-w-2xl">From intimate dinners to large weddings — custom menus, professional service and on-time delivery.</p>

                        </div>
                    </div>
                </div>
            </header>



            <section className="w-full bg-white py-12">

  {/* FLEX ROW — 3 CARDS SIDE BY SIDE */}
  <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">

    <h2 className="text-2xl font-bold mb-8 col-span-3 text-center ">Contact Information</h2>

    {/*  Location Card */}
    <div className="bg-white rounded-2xl shadow-md p-8 flex flex-col items-center 
                    transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:scale-[1.02]">
      
      <div className="w-16 h-16 rounded-full bg-orange-50 flex items-center justify-center">
        <img src="https://cdn-icons-png.flaticon.com/128/1483/1483285.png" 
             className="w-10 h-10" />
      </div>

      <h3 className="mt-4 text-lg font-semibold">Office Location</h3>

      <p className="text-gray-600 text-center mt-2">
        12 B/7, Ambai Road,<br />
        Near Bharat Petroleum,<br />
        Melapalayam, Tirunelveli-05.
      </p>
    </div>

    {/*  Email Card */}
    <div className="bg-white rounded-2xl shadow-md p-8 flex flex-col items-center
                    transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:scale-[1.02]">

      <div className="w-16 h-16 rounded-full bg-yellow-50 flex items-center justify-center">
        <img src="https://cdn-icons-png.flaticon.com/128/542/542689.png" 
             className="w-8 h-8" />
      </div>

      <h3 className="mt-4 text-lg font-semibold">Email ID</h3>
      <p className="text-gray-600 mt-2">Jackcater@gmail.com</p>
    </div>

    {/* Contact Card */}
    <div className="bg-white rounded-2xl shadow-md p-8 flex flex-col items-center
                    transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:scale-[1.02]">

      <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center">
        <img src="https://cdn-icons-png.flaticon.com/128/9674/9674456.png" 
             className="w-8 h-8" />
      </div>

      <h3 className="mt-4 text-lg font-semibold">Contact</h3>
      <p className="text-gray-600 mt-2">+91 123-456-8768</p>
    </div>

  </div>
</section>

            {/* CONTACT SECTION */}
            <main className="w-full">
                <section id="contact" className="max-w-7xl mx-auto px-6 py-12">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                        {/* Left: Form */}
                        <div className="lg:col-span-7">
                            <div className="bg-white rounded-2xl shadow-lg p-6 md:p-10">
                                <h2 className="text-2xl font-bold mb-2 text-center">Contact us </h2>
                                <p className="text-sm text-gray-600 mb-6 text-center">Tell us about your event and we'll prepare a customised proposal including a sample menu and pricing.</p>

                                {/* Status messages */}
                                {status.message && (
                                    <div
                                        role="status"
                                        aria-live="polite"
                                        className={`mb-4 p-3 rounded-md text-sm ${status.ok === true ? "bg-emerald-50 border border-emerald-200 text-emerald-800" : "bg-rose-50 border border-rose-200 text-rose-800"
                                            }`}
                                    >
                                        {status.loading ? (
                                            <span className="inline-flex items-center gap-2">
                                                <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                                                    <path className="opacity-75" d="M4 12a8 8 0 018-8v8z" fill="currentColor" />
                                                </svg>
                                                {status.message}
                                            </span>
                                        ) : (
                                            <span>{status.message}</span>
                                        )}
                                    </div>
                                )}

                                <form ref={formRef} onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4" noValidate>
                                    <label className="sr-only" htmlFor="name">Full name</label>
                                    <input
                                        id="name"
                                        name="name"
                                        value={form.name}
                                        onChange={handleChange}
                                        required
                                        placeholder="Full name"
                                        className="w-full border rounded-lg px-4 py-3"
                                    />

                                    <label className="sr-only" htmlFor="email">Email</label>
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        value={form.email}
                                        onChange={handleChange}
                                        required
                                        placeholder="Email address"
                                        className="w-full border rounded-lg px-4 py-3"
                                    />

                                    <label className="sr-only" htmlFor="phone">Phone</label>
                                    <input
                                        id="phone"
                                        name="phone"
                                        type="tel"
                                        value={form.phone}
                                        onChange={handleChange}
                                        placeholder="Phone number"
                                        className="w-full border rounded-lg px-4 py-3"
                                    />

                                    <label className="sr-only" htmlFor="guests">Guest count</label>
                                    <input
                                        id="guests"
                                        name="guests"
                                        type="number"
                                        min="1"
                                        value={form.guests}
                                        onChange={handleChange}
                                        placeholder="Approx. guests"
                                        className="w-full border rounded-lg px-4 py-3"
                                    />

                                    <label className="sr-only" htmlFor="address">Address</label>
                                    <input
                                        id="address"
                                        name="address"
                                        value={form.address}
                                        onChange={handleChange}
                                        placeholder="Venue / address"
                                        className="w-full border rounded-lg px-4 py-3 md:col-span-2"
                                    />

                                    <div>
                                        <label className="sr-only" htmlFor="date">Event date</label>
                                        <input
                                            id="date"
                                            name="date"
                                            type="date"
                                            value={form.date}
                                            onChange={handleChange}
                                            className="w-full border rounded-lg px-4 py-3"
                                        />
                                    </div>

                                    <div>
                                        <label className="sr-only" htmlFor="eventType">Event type</label>
                                        <select
                                            id="eventType"
                                            name="eventType"
                                            value={form.eventType}
                                            onChange={handleChange}
                                            className="w-full border rounded-lg px-4 py-3"
                                        >
                                            <option value="">Select event type</option>
                                            <option value="wedding">Wedding</option>
                                            <option value="birthday">Birthday</option>
                                            <option value="corporate">Corporate</option>
                                            <option value="private">Private / Other</option>
                                        </select>
                                    </div>

                                    <label className="sr-only" htmlFor="message">Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={4}
                                        value={form.message}
                                        onChange={handleChange}
                                        placeholder="Message / dietary requests"
                                        className="md:col-span-2 w-full border rounded-lg px-4 py-3"
                                    />

                                </form>

                                <div className="mt-6 text-xs text-gray-400">
                                    By submitting you agree to our terms & privacy. We'll only use your data to contact you about this enquiry.
                                </div>
                            </div>
                        </div>

                        {/* Right: Image + contact details */}
                        <aside className="lg:col-span-5">
                            <div className="rounded-2xl overflow-hidden shadow-lg bg-white ">
                                <img
                                    src="https://i.pinimg.com/736x/7a/c9/2d/7ac92d968d158abf37983508de70ec8d.jpg"
                                    alt="Catering sample"
                                    className="w-full h-85 object-cover"
                                />

                            </div>

                        </aside>
                    </div>
                </section>

                {/* FULL-WIDTH MAP SECTION */}
                <section className="w-full bg-white border-t">
                    <div className="max-w-7xl mx-auto px-6 py-10">
                        <h3 className="text-2xl font-bold mb-4">Find Us on Map</h3>
                        <div className="w-full h-80 rounded-xl overflow-hidden border">
                            <iframe
                                title="big-map"
                                src="https://www.google.com/maps/embed?pb=!1m18..."
                                className="w-full h-full"
                                loading="lazy"
                            />
                        </div>
                    </div>
                </section>
            </main>

           
        </div>
    );
}
