import React, { useState } from "react";
import { motion } from "framer-motion";
import { useParams, useNavigate } from "react-router-dom";
import {
  FiArrowLeft,
  FiPhone,
  FiCalendar,
  FiMessageSquare,
} from "react-icons/fi";

// Data imports
import { categoryIcons, products } from "../../constants/productData";
import { testimonials, faqs, benefits } from "../../constants/contentData";

const ProductsPage = () => {
  const { category } = useParams();
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState(category || "All");
  const [activeFAQ, setActiveFAQ] = useState(null);

  // Path to category mapping
  const pathToCategoryMap = {
    "upvc-french-doors": "uPVC French Doors",
    "aluminum-french-doors": "Aluminum French Doors",
    "sliding-folding-doors": "Sliding & Folding Doors",
    "custom-designs": "Custom Design Options",
  };

  // Set initial filter based on URL
  React.useEffect(() => {
    if (category && pathToCategoryMap[category]) {
      setActiveFilter(pathToCategoryMap[category]);
    }
  }, [category]);

  // Filter products
  const filteredProducts =
    activeFilter === "All"
      ? products
      : products.filter((product) => product.category === activeFilter);

  // Toggle FAQ
  const toggleFAQ = (index) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  return (
    <section className="bg-white mt-20">
      {/* Main Product Section */}
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        <Breadcrumbs
          category={category}
          navigate={navigate}
          pathToCategoryMap={pathToCategoryMap}
        />

        {/* Category Header */}
        <CategoryHeader
          category={category}
          activeFilter={activeFilter}
          pathToCategoryMap={pathToCategoryMap}
        />

        {/* Category Filters (for All Products) */}
        {!category && (
          <CategoryFilters
            pathToCategoryMap={pathToCategoryMap}
            activeFilter={activeFilter}
            navigate={navigate}
          />
        )}

        {/* Category Benefits */}
        {category && (
          <CategoryBenefits category={activeFilter} benefits={benefits} />
        )}

        {/* Product Grid */}
        <ProductGrid
          filteredProducts={filteredProducts}
          categoryIcons={categoryIcons}
        />

        {/* Common: Why Choose Us Section */}
        <WhyChooseUs />

        {/* Common: Testimonials */}
        <TestimonialsSection testimonials={testimonials} />

        {/* Common: FAQ */}
        <FAQSection faqs={faqs} activeFAQ={activeFAQ} toggleFAQ={toggleFAQ} />

        {/* Common: CTA */}
        <CTASection />
      </div>
    </section>
  );
};

// Component: Breadcrumbs
const Breadcrumbs = ({ category, navigate, pathToCategoryMap }) => (
  <div className="flex items-center mb-6">
    <button
      onClick={() => navigate(-1)}
      className="flex items-center text-yellow-600 hover:text-yellow-700 mr-4"
    >
      <FiArrowLeft className="mr-1" /> Back
    </button>
    <nav className="text-sm text-gray-600">
      <span
        className="hover:text-yellow-600 cursor-pointer"
        onClick={() => navigate("/")}
      >
        Home
      </span>
      <span className="mx-2">/</span>
      <span
        className="hover:text-yellow-600 cursor-pointer"
        onClick={() => navigate("/products")}
      >
        Products
      </span>
      {category && (
        <>
          <span className="mx-2">/</span>
          <span className="text-yellow-600 capitalize">
            {category.replace(/-/g, " ")}
          </span>
        </>
      )}
    </nav>
  </div>
);
// Component: Category Header
const CategoryHeader = ({ category, activeFilter, pathToCategoryMap }) => {
  // Safely get the category name
  const categoryName = category
    ? pathToCategoryMap[category] || "Products"
    : "Premium Door Solutions";

  // Safely get the description
  const description = getCategoryDescription(activeFilter || categoryName);

  // Safely get the stats text
  const statsText = category
    ? `Browse our ${categoryName.toLowerCase()} collection - ${getCategoryStats(
        activeFilter || categoryName
      )} products available`
    : "Trusted by 5000+ homeowners across India since 2010";

  return (
    <motion.div
      className="text-left mb-12"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-4xl font-bold text-gray-800 mb-3">{categoryName}</h2>
      <motion.div
        className="h-1 w-16 bg-yellow-500 mb-6"
        initial={{ width: 0 }}
        animate={{ width: "4rem" }}
        transition={{ duration: 0.5, delay: 0.3 }}
      />
      <p className="text-gray-600 max-w-2xl mb-4">{description}</p>
      <p className="text-gray-500 text-sm">{statsText}</p>
    </motion.div>
  );
};

// Component: Category Filters
const CategoryFilters = ({ pathToCategoryMap, activeFilter, navigate }) => (
  <motion.div
    className="flex flex-wrap gap-3 mb-10"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.4 }}
  >
    {Object.keys(pathToCategoryMap).map((path) => {
      const cat = pathToCategoryMap[path];
      return (
        <button
          key={path}
          onClick={() => navigate(`/products/${path}`)}
          className={`px-4 py-2 rounded-full transition-all ${
            activeFilter === cat
              ? "bg-yellow-500 text-white shadow-md"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
        >
          {cat}
        </button>
      );
    })}
    <button
      onClick={() => {
        setActiveFilter("All");
        navigate("/products");
      }}
      className={`px-4 py-2 rounded-full transition-all ${
        activeFilter === "All"
          ? "bg-yellow-500 text-white shadow-md"
          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
      }`}
    >
      View All
    </button>
  </motion.div>
);

// Component: Category Benefits
const CategoryBenefits = ({ category, benefits }) => (
  <div className="mb-12 bg-gray-50 p-6 rounded-lg">
    <h3 className="text-xl font-semibold mb-4 text-gray-800">
      Why Choose Our {category}?
    </h3>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {(benefits[category] || benefits.default).map((benefit, index) => (
        <div key={index} className="flex items-start">
          <div className="text-yellow-500 mr-3 mt-1">✓</div>
          <div>
            <h4 className="font-medium text-gray-800">{benefit.title}</h4>
            <p className="text-gray-600 text-sm">{benefit.description}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

// Component: Product Grid
const ProductGrid = ({ filteredProducts, categoryIcons }) => (
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
      <ProductCard
        key={product.id}
        product={product}
        categoryIcons={categoryIcons}
      />
    ))}
  </motion.div>
);

// Component: Product Card
const ProductCard = ({ product, categoryIcons }) => (
  <motion.div
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
        <span className="text-lg">{categoryIcons[product.category]}</span>
        <span className="text-sm font-medium text-yellow-600">
          {product.category}
        </span>
      </div>
      <h3 className="text-xl font-bold text-gray-800 mb-2">{product.title}</h3>
      <p className="text-gray-600 mb-4">{product.description}</p>
      <button className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-medium py-2 px-4 rounded-lg transition">
        Enquire Now
      </button>
    </div>
  </motion.div>
);

// Component: Why Choose Us
const WhyChooseUs = () => (
  <div className="mt-16">
    <h3 className="text-2xl font-bold text-center mb-8 text-gray-800">
      Why Choose Ishani Enterprises?
    </h3>
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      {[
        {
          icon: "🏭",
          title: "15+ Years Experience",
          desc: "Trusted manufacturer since 2008",
        },
        {
          icon: "🛡️",
          title: "Premium Materials",
          desc: "Using only certified raw materials",
        },
        {
          icon: "👷",
          title: "Expert Installation",
          desc: "Trained professionals for perfect fitting",
        },
        {
          icon: "📝",
          title: "5-10 Year Warranty",
          desc: "Comprehensive coverage on all products",
        },
      ].map((item, index) => (
        <div key={index} className="text-center p-4">
          <div className="text-4xl mb-3">{item.icon}</div>
          <h4 className="font-semibold text-lg mb-1">{item.title}</h4>
          <p className="text-gray-600 text-sm">{item.desc}</p>
        </div>
      ))}
    </div>
  </div>
);

// Component: Testimonials
const TestimonialsSection = ({ testimonials }) => (
  <div className="mt-16">
    <h3 className="text-2xl font-bold text-center mb-8 text-gray-800">
      What Our Customers Say
    </h3>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {testimonials.map((testimonial, index) => (
        <div key={index} className="bg-gray-50 p-6 rounded-lg">
          <div className="flex items-center mb-4">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="text-yellow-500 text-2xl mr-1">
                ★
              </div>
            ))}
          </div>
          <p className="text-gray-600 mb-4 italic">"{testimonial.quote}"</p>
          <div className="flex items-center">
            <div className="font-medium text-gray-800">{testimonial.name}</div>
            <div className="mx-2 text-gray-400">•</div>
            <div className="text-gray-500 text-sm">{testimonial.location}</div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

// Component: FAQ
const FAQSection = ({ faqs, activeFAQ, toggleFAQ }) => (
  <div className="mt-16 border-t pt-12">
    <h3 className="text-2xl font-bold text-center mb-8 text-gray-800">
      Frequently Asked Questions
    </h3>
    <div className="max-w-3xl mx-auto space-y-4">
      {faqs.map((faq, index) => (
        <div key={index} className="border-b pb-4">
          <button
            className="flex justify-between items-center w-full text-left font-medium text-gray-800"
            onClick={() => toggleFAQ(index)}
          >
            <span>{faq.question}</span>
            <span className="text-xl">{activeFAQ === index ? "−" : "+"}</span>
          </button>
          {activeFAQ === index && (
            <div className="mt-2 text-gray-600">{faq.answer}</div>
          )}
        </div>
      ))}
    </div>
  </div>
);

// Component: CTA
const CTASection = () => (
  <div className="mt-16 bg-yellow-50 rounded-xl p-8 text-center">
    <h3 className="text-2xl font-bold text-gray-800 mb-4">
      Ready to Transform Your Space?
    </h3>
    <p className="text-gray-600 max-w-2xl mx-auto mb-6">
      Get expert advice and a free quote for your project today.
    </p>
    <div className="flex flex-col sm:flex-row justify-center gap-4">
      <button className="flex items-center justify-center bg-yellow-500 hover:bg-yellow-600 text-white font-medium py-3 px-6 rounded-lg transition">
        <FiPhone className="mr-2" /> Call Now
      </button>
      <button className="flex items-center justify-center border border-yellow-500 text-yellow-600 hover:bg-yellow-50 font-medium py-3 px-6 rounded-lg transition">
        <FiMessageSquare className="mr-2" /> WhatsApp Us
      </button>
      <button className="flex items-center justify-center border border-yellow-500 text-yellow-600 hover:bg-yellow-50 font-medium py-3 px-6 rounded-lg transition">
        <FiCalendar className="mr-2" /> Book Consultation
      </button>
    </div>
  </div>
);

// Helper functions
function getCategoryDescription(category) {
  const descriptions = {
    All: "Explore our complete range of premium doors, windows, and security solutions",
    "uPVC French Doors":
      "Energy-efficient uPVC French doors with superior insulation",
    "Aluminum French Doors": "Durable and sleek aluminum French doors",
    "Sliding & Folding Doors": "Space-saving sliding and folding door systems",
    "Custom Design Options": "Bespoke door and window solutions",
  };
  return descriptions[category] || "Premium quality products for Indian homes";
}

function getCategoryStats(category) {
  const stats = {
    "uPVC French Doors": "6 premium",
    "Aluminum French Doors": "5 durable",
    "Sliding & Folding Doors": "5 space-saving",
    "Custom Design Options": "4 bespoke",
  };
  return stats[category] || "multiple";
}

export default ProductsPage;
