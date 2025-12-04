import React, { useState } from "react";

export default function Menu() {
  const menuData = [
    // {
    //   title: "Biryani Varieties",
    //   items: [
    //     {
    //       name: "Chicken Biryani",
    //       img: "https://i.pinimg.com/736x/a0/92/4d/a0924da750c9ef458be70bfaec61fa11.jpg",
    //     },
    //     {
    //       name: "Mutton Biryani",
    //       img: "https://i.pinimg.com/736x/12/1b/9f/121b9f4d28e4cfb2d6268b6f77aafa5e.jpg",
    //     },
    //     {
    //       name: "Hyderabadi Biryani",
    //       img: "https://i.pinimg.com/736x/fe/7b/62/fe7b620c3653a2d8746dc55848b85c17.jpg",
    //     },
    //     {
    //       name: "Egg Biryani",
    //       img: "https://i.pinimg.com/1200x/83/83/4f/83834fa8f14a8dbaf2bbb0c450086e82.jpg",
    //     },
    //     {
    //       name: "Veg Biryani",
    //       img: "https://i.pinimg.com/736x/95/10/6f/95106f80ee809092395e1bee8a5af168.jpg",
    //     },
    //     {
    //       name: "Prawn Biryani",
    //       img: "https://i.pinimg.com/1200x/ba/98/bf/ba98bf6224a2d5304b0b8c231e410c0c.jpg",
    //     },
    //   ],
    // },

    // {
    //   title: "Welcome Drinks",
    //   items: [
    //     {
    //       name: "Fresh Lime Juice",
    //       img: "https://i.pinimg.com/1200x/30/5e/9e/305e9eaf8ef7a7a76abe77ed0dcba92b.jpg",
    //     },
    //     {
    //       name: "Mint Cooler",
    //       img: "https://i.pinimg.com/1200x/58/10/dc/5810dc90a00aec62435fa5d5354a5556.jpg",
    //     },
    //     {
    //       name: "Rose Milk",
    //       img: "https://i.pinimg.com/1200x/44/4f/be/444fbe37454623054fa7754e2b203b80.jpg",
    //     },
    //     {
    //       name: "Badam Milk",
    //       img: "https://i.pinimg.com/1200x/08/36/22/083622081f732246f7383ad4c296cf18.jpg",
    //     },
    //     {
    //       name: "Watermelon Juice",
    //       img: "https://i.pinimg.com/736x/e4/7a/70/e47a705d102623adcf6046ee369b6176.jpg",
    //     },
    //     {
    //       name: "Blue Lagoon",
    //       img: "https://i.pinimg.com/1200x/4b/74/6a/4b746a96f05142ba6add60d1e43c6d85.jpg",
    //     },
    //   ],
    // },

    // {
    //   title: "Chicken Varieties",
    //   items: [
    //     {
    //       name: "Chicken 65",
    //       img: "https://i.pinimg.com/1200x/83/68/c6/8368c6ace8cedfab5325f9abde653212.jpg",
    //     },
    //     {
    //       name: "Chicken Lollipop",
    //       img: "https://i.pinimg.com/736x/d7/26/e5/d726e555eafa975796d75891a80c0140.jpg",
    //     },
    //     {
    //       name: "Pepper Chicken",
    //       img: "https://i.pinimg.com/736x/09/e1/e8/09e1e81340d3bbe5609c0786b95ca523.jpg",
    //     },
    //     {
    //       name: "Chicken Tikka",
    //       img: "https://i.pinimg.com/736x/da/de/df/dadedfa8d9dad109212492f4ed5e528c.jpg",
    //     },
    //     {
    //       name: "Chicken Fry",
    //       img: "https://i.pinimg.com/736x/5c/a0/3a/5ca03a1d98fc96cab4be558904bc8357.jpg",
    //     },
    //     {
    //       name: "Grilled Chicken",
    //       img: "https://i.pinimg.com/1200x/54/53/25/545325774aae8aed95b172a1430118bd.jpg",
    //     },
    //   ],
    // },

    {
      title: "Tiffin Varieties",
      items: [
        {
          name: " Kesari ",
          img: "https://i.pinimg.com/1200x/d1/d3/d7/d1d3d7fe9de2b785034f31f507ac60c5.jpg",
        },
        {
          name: " Idly Sambar",
          img: "https://i.pinimg.com/1200x/d5/cd/da/d5cdda22f2061de591b048b67bbf0e67.jpg",
        },
        {
          name: " Poori ",
          img: "https://i.pinimg.com/1200x/03/f2/8c/03f28ce6a7f4fd09a70ecd0a1ebe09c8.jpg",
        },
        {
          name: " Pongal",
          img: "https://i.pinimg.com/1200x/f9/af/ba/f9afbac6a0cb4618992ed85db6f93724.jpg",
        },
        {
          name: " Masala Dosa ",
          img: "https://i.pinimg.com/736x/c7/1e/ea/c71eea435b61a0362d6fde7e8df975a9.jpg",
        },
        {
          name: " Dosa ",
          img: "https://i.pinimg.com/736x/2c/7f/fa/2c7ffa24ca5951d194ee1d398d164a4e.jpg",
        },
        {
          name: " Vadai ",
          img: "https://i.pinimg.com/1200x/92/7f/ac/927fac072e143438b670be4a5bff01b6.jpg ",
        },
        {
          name: " Coffee ",
          img: " https://i.pinimg.com/1200x/b3/2b/19/b32b19517b778f20435dd5a071ee7ebd.jpg",
        },
        {
          name: " Tea ",
          img: "https://i.pinimg.com/1200x/94/f8/1d/94f81d047579093d88f998d57d28f249.jpg",
        },
      ],
    },
    {
      title: "Lunch Varieties",
      items: [
        {
          name: " Bread Halwa  ",
          img: " https://i.pinimg.com/736x/3a/81/b4/3a81b47416114c3ea3ef93d08ed4f584.jpg ",
        },
        {
          name: "Chicken Biryani",
          img: "https://i.pinimg.com/736x/a0/92/4d/a0924da750c9ef458be70bfaec61fa11.jpg",
        },
        {
          name: " Mutton briyani ",
          img: "https://i.pinimg.com/736x/12/1b/9f/121b9f4d28e4cfb2d6268b6f77aafa5e.jpg",
        },
        {
          name: " Fish briyani ",
          img: " https://i.pinimg.com/1200x/ba/98/bf/ba98bf6224a2d5304b0b8c231e410c0c.jpg ",
        },
        {
          name: " White rice ",
          img: " https://i.pinimg.com/736x/5d/7a/79/5d7a7949f43f4165b3c24fa8d163def4.jpg ",
        },
        {
          name: " Chicken 65 ",
          img: " https://i.pinimg.com/1200x/83/68/c6/8368c6ace8cedfab5325f9abde653212.jpg ",
        },
        {
          name: " Pepper Chicken ",
          img: " https://i.pinimg.com/736x/09/e1/e8/09e1e81340d3bbe5609c0786b95ca523.jpg ",
        },
        {
          name: " Fried chicken ",
          img: " https://i.pinimg.com/736x/5c/a0/3a/5ca03a1d98fc96cab4be558904bc8357.jpg ",
        },
        {
          name: " Veg briyani ",
          img: " https://i.pinimg.com/736x/95/10/6f/95106f80ee809092395e1bee8a5af168.jpg ",
        },
        {
          name: " Egg ",
          img: " https://i.pinimg.com/736x/7d/b7/ef/7db7ef08ace00c2580bc11112ddac1b4.jpg ",
        },
        {
          name: " Fish fry ",
          img: " https://i.pinimg.com/736x/50/7a/27/507a27c36c725030bb80fbc909a6b12a.jpg ",
        },
        {
          name: " Gravy ",
          img: "https://i.pinimg.com/1200x/01/fa/b6/01fab647f1b4b76d9b03b8bc466db4fc.jpg",
        },
      ],
    },
    {
      title: "Dinner Varieties",
      items: [
        {
          name: " Parotta",
          img: "https://i.pinimg.com/736x/da/8f/69/da8f6942f6b71723a28ae58360941d6d.jpg",
        },
        {
          name: " Idiyappam ",
          img: " https://i.pinimg.com/736x/f2/e3/90/f2e3900d2893ff27d4b989b5271dd50e.jpg",
        },
        {
          name: " Dosai ",
          img: "https://i.pinimg.com/736x/2c/7f/fa/2c7ffa24ca5951d194ee1d398d164a4e.jpg ",
        },
        {
          name: " chicken 65 ",
          img: "https://i.pinimg.com/736x/39/d8/18/39d818f707c48e044c5ea1175aec3651.jpg ",
        },
        {
          name: " Gravy ",
          img: " ",
        },
        {
          name: " Chappatti ",
          img: " https://i.pinimg.com/736x/f2/40/36/f24036984da433fa95b7a9f1ad3ab541.jpg",
        },
        {
          name: " Panner butter masala ",
          img: "https://i.pinimg.com/736x/70/f1/ba/70f1bab59948b2d82d6ce86ca7b0ae5d.jpg ",
        },
        {
          name: " Chicken kotthu parotta ",
          img: "https://i.pinimg.com/1200x/ff/d0/c3/ffd0c31277115e1a93b678516092fce6.jpg",
        },
        {
          name: " Green chicken ",
          img: " https://i.pinimg.com/736x/09/e1/e8/09e1e81340d3bbe5609c0786b95ca523.jpg",
        },
        {
          name: " Mutton Gravy ",
          img: " https://i.pinimg.com/736x/45/cc/cb/45cccb962317ee614674469f0a8760c7.jpg",
        },
        {
          name: " Badam milk ",
          img: " https://i.pinimg.com/1200x/b2/ef/75/b2ef75d7b22a8d0e0873e2be1d17c57f.jpg",
        },
      ],
    },

    {
      title: "Dessert Varieties",
      items: [
        {
          name: "Gulab Jamun",
          img: "https://i.pinimg.com/736x/f6/80/74/f680742280fe42b290b0a5ce2798621c.jpg",
        },
        {
          name: "Ice Cream",
          img: "https://i.pinimg.com/1200x/fe/09/7c/fe097cd2d78a724220a0694d6c5bb73e.jpg",
        },
        {
          name: "Fruit Salad",
          img: "https://i.pinimg.com/1200x/cf/41/0f/cf410ff64f3e131d6236f3d5c7b8654b.jpg",
        },
        {
          name: "Payasam",
          img: "https://i.pinimg.com/1200x/15/e6/60/15e660a6107e83a06801b0cc4031e561.jpg",
        },
        {
          name: "Falooda",
          img: "https://i.pinimg.com/736x/70/b4/f6/70b4f68a454ab475953faf3c4d1a9a09.jpg",
        },
        {
          name: "Jigarthanda",
          img: "https://i.pinimg.com/736x/db/5a/05/db5a05602f209de39dba2b5864718bfc.jpg",
        },
      ],
    },


  ];

  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");

  const categories = ["All", ...menuData.map((c) => c.title)];

  const filteredItems = () => {
    let items =
      activeCategory === "All"
        ? menuData.flatMap((c) => c.items)
        : menuData.find((c) => c.title === activeCategory)?.items || [];

    return items.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase())
    );
  };

  return (
    <>
      {/* ⭐ TOP SMALL BANNER */}
      <div className="relative h-40 w-full mt-20">
        <img
          src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092"
          alt="Menu Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#4A3F35]/60 flex items-center justify-center">
          <h1 className="text-[#F6F1E9] text-4xl font-bold drop-shadow">
            Our Delicious Menu
          </h1>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="py-16 px-6 bg-[#F6F1E9] min-h-screen">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-10 text-[#4A3F35]">
          Explore Varieties
        </h1>

        {/* Search Bar */}
        <div className="max-w-3xl mx-auto mb-8">
          <input
            type="text"
            placeholder="Search for Biryani, Drinks, Desserts..."
            className="w-full p-4 rounded-xl shadow-md border border-[#C7B8A8] bg-white text-[#4A3F35] focus:ring-2 focus:ring-[#A67F5B] outline-none"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* Category Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat, i) => (
            <button
              key={i}
              onClick={() => setActiveCategory(cat)}
              className={`
                px-5 py-2 rounded-full text-sm font-medium transition shadow 
                ${activeCategory === cat
                  ? "bg-[#A67F5B] text-white shadow-lg scale-105"
                  : "bg-white text-[#4A3F35] border border-[#D6C4B4] hover:bg-[#E8DBCC]"
                }
              `}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Items Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {filteredItems().map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md border border-[#E2D5C8] overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition"
            >
              <img
                src={item.img}
                alt={item.name}
                className="h-72 w-full object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lg text-[#4A3F35]">
                  {item.name}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredItems().length === 0 && (
          <p className="text-center text-lg text-[#7A6F66] mt-10">
            No items found.
          </p>
        )}
      </div>

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
              Whether it's feedback or a question for your upcoming event, we’re
              happy to help.
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
                <label className="text-sm font-medium text-[#854d41]">
                  Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="Your Name"
                  className="mt-2 w-full px-4 py-3 rounded-lg border border-[#f2cbbf] bg-peach-50 focus:ring-2 focus:ring-[#f8b9a0] focus:outline-none"
                />
              </div>

              {/* Email */}
              <div>
                <label className="text-sm font-medium text-[#854d41]">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  placeholder="you@example.com"
                  className="mt-2 w-full px-4 py-3 rounded-lg border border-[#f2cbbf] bg-peach-50 focus:ring-2 focus:ring-[#f8b9a0]"
                />
              </div>

              {/* City */}
              <div>
                <label className="text-sm font-medium text-[#854d41]">
                  City
                </label>
                <input
                  type="text"
                  placeholder="City"
                  className="mt-2 w-full px-4 py-3 rounded-lg border border-[#f2cbbf] bg-peach-50 focus:ring-2 focus:ring-[#f8b9a0]"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="text-sm font-medium text-[#854d41]">
                  Phone
                </label>
                <input
                  type="tel"
                  placeholder="+91 98765 43210"
                  className="mt-2 w-full px-4 py-3 rounded-lg border border-[#f2cbbf] bg-peach-50 focus:ring-2 focus:ring-[#f8b9a0]"
                />
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="text-sm font-medium text-[#854d41]">
                Message
              </label>
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
              </a>
              .
            </p>
          </form>
        </div>
      </section>

      <footer className="relative bg-black text-gray-300 py-20 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10 grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div>
            <div className="flex flex-col items-center text-center">
              <img src="./src/images/logo white.jpg" className="w-24 h-24 mb-4 rounded-full" />

              <p className="text-slate-300 max-w-xs">
                Let Jack Cater transform your special occasion into a masterpiece with our professional touch.
              </p>
            </div>


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
          © 2024 Jack Cater | All Rights Reserved | Designed by Olivegrapes
        </div>
      </footer>
    </>
  );
}
