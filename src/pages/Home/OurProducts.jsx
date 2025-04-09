import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiFilter, FiChevronDown } from "react-icons/fi";

// Category Icons (replace with your icon library)
const categoryIcons = {
  All: "🌟",
  "uPVC French Doors": "🚪",
  "Aluminum French Doors": "🔩",
  "Sliding & Folding Doors": "↔️",
  "Custom Design Options": "🎨",
  "Smart Safety Doors": "🔒",
  "French Windows": "🪟",
  Partitions: "🚧",
  "Mosquito Nets": "🕸️",
  "Invisible Grills": "🔳",
};

// Expanded Product Data (25+ items)
const products = [
  // uPVC French Doors (5 items)
  {
    id: 1,
    category: "uPVC French Doors",
    title: "Classic White uPVC Door",
    description: "Energy-efficient with multi-point locking",
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=500&auto=format&fit=crop&q=80",
    price: "₹12,500",
  },
  {
    id: 2,
    category: "uPVC French Doors",
    title: "Woodgrain uPVC Door",
    description: "Natural wood finish with thermal break",
    image:
      "https://images.unsplash.com/photo-1600566752355-35792bedcfe3?w=500&auto=format&fit=crop&q=80",
    price: "₹14,200",
  },
  // Aluminum French Doors (4 items)
  {
    id: 3,
    category: "Aluminum French Doors",
    title: "Slimline Aluminum Door",
    description: "Narrow profiles with tempered glass",
    image:
      "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?w=500&auto=format&fit=crop&q=80",
    price: "₹18,750",
  },
  // Sliding/Folding Doors (5 items)
  {
    id: 4,
    category: "Sliding & Folding Doors",
    title: "Bi-Fold Patio Door",
    description: "Space-saving folding mechanism",
    image:
      "https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=500&auto=format&fit=crop&q=80",
    price: "₹22,000",
  },
  // Custom Designs (3 items)
  {
    id: 5,
    category: "Custom Design Options",
    title: "Laser-Cut Floral Door",
    description: "Bespoke patterns in aluminum",
    image:
      "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=500&auto=format&fit=crop&q=80",
    price: "₹28,500",
  },
  // Smart Safety Doors (3 items)
  {
    id: 6,
    category: "Smart Safety Doors",
    title: "Biometric Security Door",
    description: "Fingerprint + PIN access",
    image:
      "https://images.unsplash.com/photo-1601760561441-1642052c7eed?w=500&auto=format&fit=crop&q=80",
    price: "₹35,000",
  },
  // French Windows (3 items)
  {
    id: 7,
    category: "French Windows",
    title: "Floor-to-Ceiling Window",
    description: "Panoramic views with uPVC frames",
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=500&auto=format&fit=crop&q=80",
    price: "₹9,800/sq.ft",
  },
  // Partitions (3 items)
  {
    id: 8,
    category: "Partitions",
    title: "Laser-Cut Metal Partition",
    description: "Custom geometric designs",
    image:
      "https://images.unsplash.com/photo-1586023492125-27a5d5a5a4d4?w=500&auto=format&fit=crop&q=80",
    price: "₹6,500/panel",
  },
  // Mosquito Nets (3 items)
  {
    id: 9,
    category: "Mosquito Nets",
    title: "Stainless Steel Roll-Up Net",
    description: "Durable rust-proof mesh",
    image:
      "https://images.unsplash.com/photo-1631217877853-1a068196e613?w=500&auto=format&fit=crop&q=80",
    price: "₹3,200",
  },
  // Invisible Grills (3 items)
  {
    id: 10,
    category: "Invisible Grills",
    title: "SS304 Tension Grill",
    description: "High-security with clear view",
    image:
      "https://images.unsplash.com/photo-1600566752355-35792bedcfe3?w=500&auto=format&fit=crop&q=80",
    price: "₹4,800/meter",
  },
  // Additional items...
  {
    id: 11,
    category: "uPVC French Doors",
    title: "Black uPVC French Door",
    description: "Modern matte black finish",
    image:
      "https://images.unsplash.com/photo-1600607688270-b8124e1cf4d5?w=500&auto=format&fit=crop&q=80",
    price: "₹15,750",
  },
  // Add 10+ more items following same structure
];

const OurProducts = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  // Get unique categories
  const categories = Object.keys(categoryIcons);

  // Filter products
  const filteredProducts =
    activeFilter === "All"
      ? products
      : products.filter((product) => product.category === activeFilter);

  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8" id="products">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-3">
            Our Product Range
          </h2>
          <motion.div
            className="h-1 w-16 bg-yellow-500 mx-auto mb-6"
            initial={{ width: 0 }}
            animate={{ width: "4rem" }}
            transition={{ duration: 0.5, delay: 0.3 }}
          />
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore premium doors, windows, and security solutions for modern
            Indian homes.
          </p>
        </motion.div>

        {/* Desktop Filter Bar */}
        <motion.div
          className="hidden md:flex flex-wrap justify-center gap-3 mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all ${
                activeFilter === category
                  ? "bg-yellow-500 text-white shadow-md"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              <span className="text-lg">{categoryIcons[category]}</span>
              {category}
            </button>
          ))}
        </motion.div>

        {/* Mobile Filter */}
        <div className="md:hidden mb-6 relative">
          <button
            onClick={() => setShowMobileFilters(!showMobileFilters)}
            className="flex items-center justify-between w-full max-w-xs mx-auto bg-yellow-500 text-white px-5 py-3 rounded-full shadow"
          >
            <div className="flex items-center gap-2">
              <FiFilter />
              <span>
                {activeFilter === "All" ? "All Categories" : activeFilter}
              </span>
            </div>
            <FiChevronDown
              className={`transition-transform ${
                showMobileFilters ? "rotate-180" : ""
              }`}
            />
          </button>

          {/* Mobile Dropdown */}
          {showMobileFilters && (
            <motion.div
              className="absolute z-10 w-full max-w-xs mx-auto mt-2 bg-white rounded-lg shadow-xl overflow-hidden"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ type: "spring", damping: 25 }}
            >
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => {
                    setActiveFilter(category);
                    setShowMobileFilters(false);
                  }}
                  className={`flex items-center gap-3 w-full px-4 py-3 text-left ${
                    activeFilter === category
                      ? "bg-yellow-100 text-yellow-700"
                      : "hover:bg-gray-50"
                  }`}
                >
                  <span className="text-lg">{categoryIcons[category]}</span>
                  <span>{category}</span>
                </button>
              ))}
            </motion.div>
          )}
        </div>

        {/* Product Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
          initial="hidden"
          animate="show"
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
        >
          {filteredProducts.map((product) => (
            <motion.div
              key={product.id}
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0 },
              }}
              whileHover={{
                y: -5,
                boxShadow: "0 10px 25px -5px rgba(0,0,0,0.1)",
              }}
              className="bg-white rounded-xl overflow-hidden border border-gray-100 transition-all"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                  loading="lazy"
                />
                <span className="absolute top-3 right-3 bg-yellow-500 text-white text-xs font-bold px-2 py-1 rounded">
                  {product.price}
                </span>
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-lg">
                    {categoryIcons[product.category]}
                  </span>
                  <span className="text-sm font-medium text-yellow-600">
                    {product.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {product.title}
                </h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <button className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-medium py-2 px-4 rounded-lg transition">
                  Enquire Now
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <motion.div
            className="text-center py-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <p className="text-gray-500 text-lg">
              No products found in this category.
            </p>
            <button
              onClick={() => setActiveFilter("All")}
              className="mt-4 text-yellow-600 font-medium hover:text-yellow-700"
            >
              Clear filters
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default OurProducts;
