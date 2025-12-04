import React from "react";
import { MapPin, Mail, Phone } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <div className="w-full min-h-screen bg-white mt-20">
      
      {/* HERO SECTION */}
      <section className="bg-gray-100 py-20 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-serif font-bold text-gray-800"
        >
          Contact <span className="text-gray-700">Jack Catering</span>
        </motion.h1>

        <p className="text-gray-600 mt-3 text-lg">
          We are here to make your events delicious & unforgettable.
        </p>
      </section>

      {/* GET IN TOUCH SECTION */}
      <div className="w-full flex justify-center py-16">
        <div className="w-[90%] md:w-[94.5%] border border-gray-200 p-10 bg-white rounded-xl shadow-sm">
          <div className="text-center">
            <p className="text-sm tracking-widest text-gray-500 font-medium">
              ——— CONTACT US ———
            </p>

            <h2 className="text-4xl font-serif font-semibold mt-3 text-gray-800">
              Get In Touch For More <br /> Info
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-10 mt-14 text-center">
            
            {/* Location */}
            <div className="flex flex-col items-center">
              <MapPin className="text-gray-700" size={50} />
              <h3 className="text-lg font-semibold mt-3 text-gray-800">
                Location
              </h3>
              <p className="mt-2 text-gray-600 leading-relaxed">
                No.08, Jack Layout, 8th Street, Kadayanallur, 
                Tenkasi – 627 008
                
              </p>
            </div>

            {/* Email */}
            <div className="flex flex-col items-center">
              <Mail className="text-gray-700" size={50} />
              <h3 className="text-lg font-semibold mt-3 text-gray-800">
                Email Address
              </h3>
              <p className="mt-2 text-gray-600">jack08@gmail.com</p>
            </div>

            {/* Phone */}
            <div className="flex flex-col items-center">
              <Phone className="text-gray-700" size={50} />
              <h3 className="text-lg font-semibold mt-3 text-gray-800">
                Contact Us
              </h3>
              <p className="mt-2 text-gray-600">
                Mobile: +91 6381852222 <br />
                Phone: +91 8807113030
              </p>
            </div>

          </div>
        </div>
      </div>

      {/* FORM + IMAGE SECTION */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className="grid md:grid-cols-2 gap-10 items-center">

          {/* CONTACT FORM */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white border border-gray-200 shadow-sm p-10 rounded-2xl"
          >
            <h2 className="text-3xl font-serif font-semibold text-gray-800 text-center">
              Send Us a Message
            </h2>

            <form className="grid md:grid-cols-2 gap-8 mt-10">
              <input
                type="text"
                placeholder="Your Name"
                className="p-3 border border-gray-300 rounded-lg focus:outline-gray-700"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="p-3 border border-gray-300 rounded-lg focus:outline-gray-700"
              />

              <input
                type="text"
                placeholder="Event Type (Wedding / Corporate / Birthday...)"
                className="p-3 border border-gray-300 rounded-lg focus:outline-gray-700 col-span-2"
              />

              <textarea
                rows="5"
                placeholder="Message"
                className="p-3 border border-gray-300 rounded-lg focus:outline-gray-700 col-span-2"
              ></textarea>

              <button className="col-span-2 mt-4 bg-gray-800 hover:bg-black text-white py-3 rounded-lg text-lg font-medium transition">
                Submit Message
              </button>
            </form>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <img
              src="https://i.pinimg.com/736x/08/62/b3/0862b32cc447f03f3c1b033fc32be9d9.jpg"
              alt="Contact illustration"
              className="w-full rounded-xl shadow-md object-cover h-[560px]"
            />
          </motion.div>

        </div>
      </section>

      {/* GOOGLE MAP */}
      <section className="w-full mt-5">
        <h2 className="text-3xl font-serif font-semibold text-gray-800 text-center mb-6">
          Find Us on Google Map
        </h2>

        <div className="w-[80%] md:w-[80%] mx-auto h-[420px] rounded-xl overflow-hidden shadow-md border border-gray-200">
          <iframe
            title="Google Map"
            className="w-full h-full"
            loading="lazy"
            allowFullScreen=""
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31098.564!2d80.2209!3d13.0827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265da8b9d9f1b%3A0x5b6be9c6c2c1f1e6!2sChennai!5e0!3m2!1sen!2sin!4v1705123456789"
          ></iframe>
        </div>
      </section>
    </div>
  );
}
