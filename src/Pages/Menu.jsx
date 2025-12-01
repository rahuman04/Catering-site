import React, { useState } from "react";

export default function Menu() {
  const menuData = [
    {
      title: "Welcome Drinks",
      items: [
        { name: "Fresh Lime Juice", img: "https://i.pinimg.com/1200x/30/5e/9e/305e9eaf8ef7a7a76abe77ed0dcba92b.jpg" },
        { name: "Mint Cooler", img: "https://i.pinimg.com/1200x/58/10/dc/5810dc90a00aec62435fa5d5354a5556.jpg" },
        { name: "Rose Milk", img: "https://i.pinimg.com/1200x/44/4f/be/444fbe37454623054fa7754e2b203b80.jpg" },
        { name: "Badam Milk", img: "https://i.pinimg.com/1200x/08/36/22/083622081f732246f7383ad4c296cf18.jpg" },
        { name: "Watermelon Juice", img: "https://i.pinimg.com/736x/e4/7a/70/e47a705d102623adcf6046ee369b6176.jpg" },
        { name: "Blue Lagoon", img: "https://i.pinimg.com/1200x/4b/74/6a/4b746a96f05142ba6add60d1e43c6d85.jpg" },
      ],
    },
    {
      title: "Biryani Varieties",
      items: [
        { name: "Chicken Biryani", img: "https://i.pinimg.com/736x/a0/92/4d/a0924da750c9ef458be70bfaec61fa11.jpg" },
        { name: "Mutton Biryani", img: "https://i.pinimg.com/736x/12/1b/9f/121b9f4d28e4cfb2d6268b6f77aafa5e.jpg" },
        { name: "Hyderabadi Biryani", img: "https://i.pinimg.com/736x/fe/7b/62/fe7b620c3653a2d8746dc55848b85c17.jpg" },
        { name: "Egg Biryani", img: "https://i.pinimg.com/1200x/83/83/4f/83834fa8f14a8dbaf2bbb0c450086e82.jpg" },
        { name: "Veg Biryani", img: "https://i.pinimg.com/736x/95/10/6f/95106f80ee809092395e1bee8a5af168.jpg" },
        { name: "Prawn Biryani", img: "https://i.pinimg.com/1200x/ba/98/bf/ba98bf6224a2d5304b0b8c231e410c0c.jpg" },
      ],
    },
    {
      title: "Chicken Varieties",
      items: [
        { name: "Chicken 65", img: "https://i.pinimg.com/1200x/83/68/c6/8368c6ace8cedfab5325f9abde653212.jpg" },
        { name: "Chicken Lollipop", img: "https://i.pinimg.com/736x/d7/26/e5/d726e555eafa975796d75891a80c0140.jpg" },
        { name: "Pepper Chicken", img: "https://i.pinimg.com/736x/09/e1/e8/09e1e81340d3bbe5609c0786b95ca523.jpg" },
        { name: "Chicken Tikka", img: "https://i.pinimg.com/736x/da/de/df/dadedfa8d9dad109212492f4ed5e528c.jpg" },
        { name: "Chicken Fry", img: "https://i.pinimg.com/736x/5c/a0/3a/5ca03a1d98fc96cab4be558904bc8357.jpg" },
        { name: "Grilled Chicken", img: "https://i.pinimg.com/1200x/54/53/25/545325774aae8aed95b172a1430118bd.jpg" },
      ],
    },
    {
      title: "Dessert Varieties",
      items: [
        { name: "Gulab Jamun", img: "https://i.pinimg.com/1200x/9c/a9/22/9ca922abaf17015f82a039bdb29753d3.jpg" },
        { name: "Rasmalai", img: "https://i.pinimg.com/736x/dc/63/70/dc6370adc4f21c529c87bc1390e73c17.jpg" },
        { name: "Ice Cream", img: "https://i.pinimg.com/1200x/fe/09/7c/fe097cd2d78a724220a0694d6c5bb73e.jpg" },
        { name: "Fruit Salad", img: "https://i.pinimg.com/736x/00/0f/f5/000ff5964292bfd9cb0ac0059d94244c.jpg" },
        { name: "Payasam", img: "https://i.pinimg.com/736x/79/6f/f1/796ff12199b9bceb12ee4cbe24ceb78f.jpg" },
        { name: "Falooda", img: "https://i.pinimg.com/736x/70/b4/f6/70b4f68a454ab475953faf3c4d1a9a09.jpg" },
      ],
    },
  ];

  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");

  const categories = ["All", ...menuData.map((c) => c.title)];

  const filteredItems = () => {
    let items = activeCategory === "All"
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
    </>
  );
}
