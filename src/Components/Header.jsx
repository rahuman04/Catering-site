import React, { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";

export default function Header() {
  const [openMobile, setOpenMobile] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [dark, setDark] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  const menuItems = [
    {
      name: "Home",
      dropdown: [
        { name: "Home 1", link: "/" },
        { name: "Home 2", link: "/home2" },
        { name: "Home 3", link: "/home3" },
      ],
    },

    { name: "Menu", link: "/menu" },

    {
      name: "Services",
      dropdown: [
        { name: "Services", link: "/services" },
        { name: "Services 2", link: "/services2" },
        { name: "Services 3", link: "/services3" },
      ],
    },

    { name: "About", link: "/about" },
    { name: "Contact", link: "/contact" },
  ];

  return (
    <header
      className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 backdrop-blur-lg ${
        scrolled
          ? "bg-white/90 dark:bg-black/80 shadow-md py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6">
        <h1
          className={`text-3xl font-extrabold transition-all duration-300 ${
            scrolled ? "text-orange-700 scale-95" : "text-orange-800"
          } dark:text-orange-400`}
        >
          Jack<span className="text-gray-900 dark:text-gray-100"> Cater</span>
        </h1>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-10">
          {menuItems.map((item, idx) => (
            <div key={idx} className="relative group">
              {!item.dropdown && (
                <a
                  href={item.link}
                  className="relative text-lg text-gray-800 dark:text-gray-200 font-medium hover:text-orange-600"
                >
                  {item.name}
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-orange-600 transition-all duration-300 group-hover:w-full"></span>
                </a>
              )}

              {item.dropdown && (
                <button
                  className="flex items-center gap-1 text-lg font-medium text-gray-800 dark:text-gray-200 hover:text-orange-600"
                  onClick={() =>
                    setOpenDropdown(openDropdown === idx ? null : idx)
                  }
                >
                  {item.name}
                  <ChevronDown size={18} />
                </button>
              )}

              {item.dropdown && openDropdown === idx && (
                <div className="absolute left-0 mt-2 w-44 bg-white dark:bg-neutral-900 shadow-lg rounded-lg py-2 border border-gray-200 dark:border-gray-700 animate-fade-down">
                  {item.dropdown.map((d, dIdx) => (
                    <a
                      key={dIdx}
                      className="block px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-orange-100 dark:hover:bg-neutral-800"
                      href={d.link}
                    >
                      {d.name}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}

          <a
            href="#"
            className="px-5 py-2 bg-orange-700 text-white rounded-xl font-semibold hover:bg-orange-800 shadow-md transition"
          >
            Book Now
          </a>

          <button
            onClick={() => setDark(!dark)}
            className="ml-4 text-xl text-gray-800 dark:text-gray-200"
          >
            {dark ? "🌙" : "☀️"}
          </button>
        </nav>

        <button
          className="md:hidden text-3xl text-gray-900 dark:text-gray-200"
          onClick={() => setOpenMobile(!openMobile)}
        >
          ☰
        </button>
      </div>

      {openMobile && (
        <div className="md:hidden bg-white/95 dark:bg-black/90 shadow-xl py-4">
          <ul className="flex flex-col gap-5 px-6 text-lg">
            {menuItems.map((item, idx) => (
              <div key={idx}>
                <button
                  className="w-full text-left flex justify-between items-center text-gray-900 dark:text-gray-200"
                  onClick={() =>
                    setOpenDropdown(openDropdown === idx ? null : idx)
                  }
                >
                  {item.name}
                  {item.dropdown && <ChevronDown size={18} />}
                </button>

                {item.dropdown && openDropdown === idx && (
                  <div className="ml-4 mt-2 flex flex-col gap-2">
                    {item.dropdown.map((child, cidx) => (
                      <a
                        key={cidx}
                        href={child.link}
                        className="text-gray-700 dark:text-gray-300 hover:text-orange-600"
                      >
                        {child.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <a
              href="#"
              className="px-5 py-2 bg-orange-700 text-white rounded-xl text-center font-semibold"
            >
              Book Now
            </a>

            <button
              onClick={() => setDark(!dark)}
              className="text-xl text-gray-900 dark:text-gray-200"
            >
              {dark ? "🌙 Dark" : "☀️ Light"}
            </button>
          </ul>
        </div>
      )}
    </header>
  );
}
