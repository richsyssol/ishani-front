import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer, zoomIn } from "../../utils/motion";

const FactoryOutletPage = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="max-w-7xl mt-24 mx-auto px-4 sm:px-6 lg:px-8 py-12"
    >
      {/* Page Header */}
      <motion.div
        variants={fadeIn("up", "spring", 0.1, 1)}
        className="text-center mb-16"
      >
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Visit Our Nashik Display Outlet
        </h1>
        <div className="w-24 h-1 bg-yellow-500 mx-auto"></div>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          Experience the Ishani difference firsthand at our Nashik corporate
          office and showroom
        </p>
      </motion.div>

      {/* Quick Navigation */}
      <motion.div
        variants={staggerContainer(0.1, 0.2)}
        className="flex flex-wrap justify-center gap-4 mb-16"
      >
        {[
          { label: "Showroom", path: "#showroom" },
          { label: "Location", path: "#location" },
          { label: "Book a Visit", path: "#booking" },
        ].map((item, index) => (
          <motion.div
            key={index}
            variants={fadeIn("right", "spring", index * 0.2, 0.75)}
          >
            <Link
              to={item.path}
              className="px-4 py-2 bg-gray-100 hover:bg-yellow-500 hover:text-white rounded-md transition-colors"
            >
              {item.label}
            </Link>
          </motion.div>
        ))}
      </motion.div>

      {/* Showroom Section */}
      <motion.section
        id="showroom"
        className="mb-20 scroll-mt-20"
        variants={staggerContainer(0.1, 0.3)}
      >
        <motion.div variants={fadeIn("up", "spring", 0.2, 1)}>
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Our Nashik Showroom Gallery
          </h2>
          <p className="text-gray-600 mb-8 text-center max-w-3xl mx-auto">
            Explore our extensive collection of premium French doors and windows
            displayed in our beautifully designed Nashik showroom
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={staggerContainer(0.1, 0.2)}
        >
          {[
            {
              src: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1400&q=80",
              alt: "Nashik showroom entrance",
              title: "Nashik Showroom Entrance",
            },
            {
              src: "https://images.unsplash.com/photo-1600210492493-0946911123ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
              alt: "French doors display in Nashik",
              title: "French Doors Collection in Nashik",
            },
            {
              src: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
              alt: "Window displays in Nashik",
              title: "Premium Windows Gallery in Nashik",
            },
            {
              src: "https://images.unsplash.com/photo-1600121848594-d8644e57abab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
              alt: "Material samples in Nashik",
              title: "Material Selection Area in Nashik",
            },
            {
              src: "https://images.unsplash.com/photo-1556909114-44e1d6a03c26?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
              alt: "Design consultation in Nashik",
              title: "Nashik Design Consultation Desk",
            },
            {
              src: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
              alt: "Outdoor displays in Nashik",
              title: "Nashik Outdoor Installation Showcase",
            },
          ].map((image, index) => (
            <motion.div
              key={index}
              variants={fadeIn("up", "spring", index * 0.1, 1)}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lg text-gray-800">
                  {image.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Location Section */}
      <motion.section
        id="location"
        className="mb-20 py-10 bg-gray-50 rounded-xl px-8 scroll-mt-20"
        variants={fadeIn("up", "spring", 0.3, 1)}
      >
        <div className="max-w-6xl mx-auto">
          <motion.div variants={fadeIn("up", "spring", 0.2, 1)}>
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
              Nashik Location & Directions
            </h2>
            <p className="text-gray-600 mb-8 text-center max-w-3xl mx-auto">
              Visit us at our conveniently located corporate office and showroom
              in Nashik
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 gap-8 items-center"
            variants={staggerContainer(0.1, 0.2)}
          >
            <motion.div variants={fadeIn("right", "spring", 0.3, 1)}>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">
                  Nashik Corporate Office Address
                </h3>
                <address className="text-gray-600 not-italic space-y-2">
                  <p className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-yellow-500 mr-2 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    Ishani Enterprises
                    <br />
                    G-8, Prestige Bytco
                    <br />
                    Business Center, Bytco Point
                    <br />
                    Nasik Road, Nasik - 422101
                  </p>
                  <p className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-yellow-500 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    Open: Monday to Saturday, 9:00 AM - 6:00 PM
                  </p>
                  <p className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-yellow-500 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    Phone: +91 253 2465140
                    <br />
                    Mobile: +91 94222 55572
                    <br />
                    Email: ishanient@gmail.com
                  </p>
                </address>

                <div className="mt-6">
                  <h4 className="font-semibold mb-2 text-gray-800">
                    How to Reach Us in Nashik
                  </h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <span className="text-yellow-500 mr-2">•</span>
                      <strong>By Road:</strong> Located on Nasik Road near Bytco
                      Point, easily accessible from Mumbai-Agra Highway
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-500 mr-2">•</span>
                      <strong>Parking:</strong> Ample parking space available in
                      Prestige Bytco complex
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-500 mr-2">•</span>
                      <strong>Public Transport:</strong> Well connected by city
                      buses and auto-rickshaws
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>

            <motion.div variants={zoomIn(0.4, 1)} className="h-full">
              <div className="bg-gray-200 rounded-lg overflow-hidden h-full min-h-[400px] relative">
                {/* Embedded Google Map */}
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m12!1m8!1m3!1d7500.623762404022!2d73.837825!3d19.953382!3m2!1i1024!2i768!4f13.1!2m1!1sPrestige%20Bytco%20Bussiness%20Center%20Mahatma%20Gandhi%20Rd%20Rajwada%20Nagar%2C%20Nashik%20Road%20Nashik%2C%20Maharashtra%20422214!5e0!3m2!1sen!2sus!4v1744176631879!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  title="Ishani Enterprises Nashik Location"
                ></iframe>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Booking Section */}
      <motion.section
        id="booking"
        className="scroll-mt-20"
        variants={staggerContainer(0.1, 0.3)}
      >
        <motion.div variants={fadeIn("up", "spring", 0.2, 1)}>
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
            Book Your Nashik Showroom Visit
          </h2>
          <p className="text-gray-600 mb-8 text-center max-w-3xl mx-auto">
            Schedule your personalized showroom tour with our Nashik design
            experts
          </p>
        </motion.div>

        <motion.div
          className="bg-white rounded-xl shadow-md overflow-hidden max-w-4xl mx-auto"
          variants={fadeIn("up", "spring", 0.3, 1)}
        >
          <div className="grid md:grid-cols-2">
            <div className="bg-yellow-50 p-8 md:p-12">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Nashik Visit Information
              </h3>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-yellow-500 mr-2 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <div>
                    <strong className="text-gray-800">Duration:</strong>{" "}
                    Approximately 60-90 minutes
                  </div>
                </li>
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-yellow-500 mr-2 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                  <div>
                    <strong className="text-gray-800">What to Expect:</strong>{" "}
                    Product demonstrations, material samples, and one-on-one
                    consultation about our French doors and windows
                  </div>
                </li>
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-yellow-500 mr-2 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                  <div>
                    <strong className="text-gray-800">COVID-19 Safety:</strong>{" "}
                    Masks required, sanitization stations available, limited
                    capacity
                  </div>
                </li>
              </ul>
            </div>

            <div className="p-8 md:p-12">
              <form className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-yellow-500 focus:border-yellow-500"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-yellow-500 focus:border-yellow-500"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-yellow-500 focus:border-yellow-500"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="date"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Preferred Visit Date *
                  </label>
                  <input
                    type="date"
                    id="date"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-yellow-500 focus:border-yellow-500"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="time"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Preferred Time *
                  </label>
                  <select
                    id="time"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-yellow-500 focus:border-yellow-500"
                    required
                  >
                    <option value="">Select a time slot</option>
                    <option value="09:00-11:00">
                      Morning (9:00 AM - 11:00 AM)
                    </option>
                    <option value="11:00-13:00">
                      Late Morning (11:00 AM - 1:00 PM)
                    </option>
                    <option value="13:00-15:00">
                      Afternoon (1:00 PM - 3:00 PM)
                    </option>
                    <option value="15:00-17:00">
                      Late Afternoon (3:00 PM - 5:00 PM)
                    </option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="notes"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Special Requests
                  </label>
                  <textarea
                    id="notes"
                    rows={3}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-yellow-500 focus:border-yellow-500"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-medium py-2 px-4 rounded-md transition-colors"
                >
                  Book Your Nashik Visit
                </button>
              </form>
            </div>
          </div>
        </motion.div>
      </motion.section>
    </motion.div>
  );
};

export default FactoryOutletPage;
