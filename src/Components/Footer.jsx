import React from "react";

export default function Footer(){
  return (
<footer className="relative bg-black text-gray-300 py-20 overflow-hidden mt-20">
        <div className="container mx-auto px-6 relative z-10 grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div>
            <img
              src="https://i.pinimg.com/736x/46/cc/86/46cc8668aac2f38c31cfb3501b02798a.jpg"
              alt="Jack Cater Logo"
              className="w-50 mb-6 drop-shadow-lg"
            />
            <p className="leading-relaxed text-gray-400 max-w-xs">
              Let Jack Cater transform your special occasion into a masterpiece
              with our professional touch.
            </p>

            {/* Social Icons */}
            <div className="flex gap-5 text-2xl mt-7 text-gray-400">
              <a
                href="#"
                className="hover:text-yellow-400 transition-all hover:scale-110"
              ></a>
              <a
                href="#"
                className="hover:text-yellow-400 transition-all hover:scale-110"
              ></a>
              <a
                href="#"
                className="hover:text-yellow-400 transition-all hover:scale-110"
              ></a>
              <a
                href="#"
                className="hover:text-yellow-400 transition-all hover:scale-110"
              ></a>
            </div>
          </div>

          {/* Our Services */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-6 border-b border-gray-700 pb-2">
              Our Services
            </h3>
            <ul className="space-y-3 text-gray-400">
              <li className="hover:text-yellow-400 transition">
                ➡️ Wedding Event
              </li>
              <li className="hover:text-yellow-400 transition">
                ➡️ Engagement
              </li>
              <li className="hover:text-yellow-400 transition">
                ➡️ Birthday Party
              </li>
              <li className="hover:text-yellow-400 transition">
                ➡️ House Warming
              </li>
              <li className="hover:text-yellow-400 transition">
                ➡️ Mehndi Function
              </li>
              <li className="hover:text-yellow-400 transition">
                ➡️ Corporate Events
              </li>
              <li className="hover:text-yellow-400 transition">
                ➡️ Retirement Function
              </li>
            </ul>
          </div>

          {/* Contact Now */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-6 border-b border-gray-700 pb-2">
              Contact Now
            </h3>
            <p className="text-gray-400 mb-3">
              📍 No.8/0828S, Melapalayam , Palayankottai , Junction , Tenkasi ,
              Tirunelveli.
            </p>
            <p className="text-gray-400 mb-2">📞 +91 638185222</p>
            <p className="text-gray-400 mb-4">📞 +91 8807113030</p>
            <p className="text-gray-400">📧 jack@gmail.com</p>
          </div>

          {/* Extra Quick Links */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-6 border-b border-gray-700 pb-2">
              Quick Links
            </h3>
            <ul className="space-y-3 text-gray-400">
              <li>
                <a href="/" className="hover:text-yellow-400 transition">
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  className="hover:text-yellow-400 transition"
                >
                  Services
                </a>
              </li>
              <li>
                <a href="/menu" className="hover:text-yellow-400 transition">
                  Menu
                </a>
              </li>
              <li>
                <a href="/gallery" className="hover:text-yellow-400 transition">
                  About
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-yellow-400 transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="text-center text-gray-500 mt-16 border-t border-gray-800 pt-6 text-sm relative z-10">
          © 2020 Jack Cater | All Rights Reserved | Designed by 
        </div>
      </footer>
  );
}
