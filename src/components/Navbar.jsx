import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { navlogo } from "../../public/assets";
import ContentWrapper from "./ContentWrapper/ContentWrapper";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hideTopBar, setHideTopBar] = useState(false);
  const [mobileMargin, setMobileMargin] = useState(120);

  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setHideTopBar(true);
        setMobileMargin(70);
      } else {
        setHideTopBar(false);
        setMobileMargin(120);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="text-white relative z-[100]">
      {/* Top Bar - Animated Disappearance on Scroll */}
      <div
        className={`bg-gradient-to-r  from-yellow-600 to-yellow-400 text-gray-200 flex flex-wrap justify-between items-center px-4 md:px-10 text-sm transition-transform duration-500 ${
          hideTopBar ? "-translate-y-full" : "translate-y-0"
        } fixed top-0 left-0 w-full z-[100]`}
      >
        <ContentWrapper>
          <div className="flex space-x-4">
            <a
              href="mailto:ishanient@gmail.com
"
              className="hover:underline"
            >
              ishanient@gmail.com
            </a>
            <span className="hidden md:block mx-2">|</span>
            <a href="tel:9403455280" className="hover:underline">
              +91 94222 55572
            </a>
          </div>
        </ContentWrapper>
      </div>

      {/* Main Navbar */}
      <nav className="z-[90]">
        <div
          style={{ top: hideTopBar ? "0" : "40px" }}
          className="pt-4 left-0 w-full  text-gray-500 shadow-md px-4 md:px-10 flex justify-between items-center transition-all duration-500 z-[90]"
        >
          <div
            className="flex items-center space-x-4 cursor-pointer max-w-[1440px] z-[90]"
            onClick={() => navigate(`/`)}
          >
            <ContentWrapper>
              <div className="p-2 rounded-full md:mx-10">
                <img
                  className="h-12 md:h-10 object-cover  active:scale-95"
                  src={navlogo}
                  alt="Envocare"
                />
              </div>
            </ContentWrapper>
          </div>
          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex space-x-8 text-md font-semibold mr-10 z-[90]">
            {[
              "HOME",
              "ABOUT US",
              "SERVICES",
              "PROJECTS",
              "BLOG",
              "CONTACT US",
            ].map((item, index) => (
              <button
                key={index}
                onClick={() =>
                  navigate(`/${item.toLowerCase().replace(" ", "")}`)
                }
                className="hover:text-green-900 cursor-pointer transition duration-300"
              >
                {item}
              </button>
            ))}
          </div>
          {/* Mobile Menu Toggle */}
          <div className="lg:hidden">
            <button onClick={toggleMenu} className="text-orange-400 px-3 py-2">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu - Slide in from Right */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4 }}
            className="fixed top-0 right-0 h-full w-3/4 max-w-sm shadow-md  px-6 py-6 lg:hidden space-y-4 z-[110] bg-white text-gray-800"
          >
            <button
              onClick={toggleMenu}
              className="absolute top-2 right-2 text-gray-800 z-[120]"
            >
              <X size={28} />
            </button>
            {[
              "HOME",
              "ABOUT US",
              "SERVICES",
              "PROJECTS",
              "BLOG",
              "CONTACT US",
            ].map((item, index) => (
              <motion.button
                key={index}
                onClick={() => {
                  navigate(`/${item.toLowerCase().replace(" ", "")}`);
                  toggleMenu();
                }}
                className="block  w-full text-left text-gray-800 font-semibold p-2 hover:bg-gray-400 rounded transition duration-300 z-[110]"
                whileHover={{ scale: 1.05 }}
              >
                {item}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
