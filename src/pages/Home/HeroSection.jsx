import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const HeroSection = () => {
  const dummyHeroContent = [
    {
      image_url:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1400&q=80",
      title: "Welcome to Ishani Enterprises",
      description: "Empowering businesses with exceptional solutions.",
    },
    {
      image_url:
        "https://images.unsplash.com/photo-1581092580504-4c4c8c4d6f7e?auto=format&fit=crop&w=1400&q=80",
      title: "Quality & Commitment",
      description:
        "Delivering trusted services with professionalism and integrity.",
    },
    {
      image_url:
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1400&q=80",
      title: "Your Partner in Progress",
      description: "We aim to grow together through innovation and dedication.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % dummyHeroContent.length);
  };

  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + dummyHeroContent.length) % dummyHeroContent.length
    );
  };

  const { image_url, title, description } = dummyHeroContent[currentIndex];

  return (
    <>
      {/* Hero Section */}
      <div className="relative w-full h-[600px] md:h-[700px] flex items-center justify-center text-white overflow-hidden shadow-xl">
        {/* Background */}
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center before:content-[''] before:absolute before:inset-0 before:bg-black/60 transition-opacity duration-1000"
          style={{ backgroundImage: `url(${image_url})` }}
        ></div>

        {/* Navigation */}
        <button
          onClick={prevImage}
          className="hidden md:flex absolute left-4 md:left-10 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 hover:bg-opacity-75 p-3 rounded-full z-10"
        >
          <ChevronLeft className="text-white w-6 h-6" />
        </button>
        <button
          onClick={nextImage}
          className="hidden md:flex absolute right-4 md:right-10 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 hover:bg-opacity-75 p-3 rounded-full z-10"
        >
          <ChevronRight className="text-white w-6 h-6" />
        </button>

        {/* Text Content */}
        <motion.div
          className="relative z-10 text-center max-w-4xl mx-auto px-4"
          key={title}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold">
            {title}
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-300">{description}</p>
        </motion.div>
      </div>

      {/* CTA Section */}
      <div className="relative z-20 -mt-24 px-4 w-full">
        <div className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8 md:p-12 mx-auto w-full max-w-6xl border border-gray-100 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-yellow-500 mb-4">
            Ishani Enterprises
          </h2>
          <p className="text-gray-700 mb-6 text-sm sm:text-base">
            With a focus on innovation, quality, and reliability, Ishani
            Enterprises offers tailored solutions that drive progress and
            empower businesses to thrive in a competitive world.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-yellow-500 text-white px-6 py-3 rounded-full hover:bg-yellow-600 transition font-semibold w-full sm:w-auto">
              View Services
            </button>
            <button className="bg-gray-800 text-white px-6 py-3 rounded-full hover:bg-gray-900 transition font-semibold w-full sm:w-auto">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
