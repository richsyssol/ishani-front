import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer, zoomIn } from "../../utils/motion";
import { useLocation } from "react-router-dom";

const AboutUsPage = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        // Small timeout to ensure component has rendered
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
      }
    }
  }, [location]);
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
          About Ishani Enterprises
        </h1>
        <div className="w-24 h-1 bg-yellow-500 mx-auto"></div>
      </motion.div>

      {/* Quick Navigation */}
      <motion.div
        variants={staggerContainer(0.1, 0.2)}
        className="flex flex-wrap justify-center gap-4 mb-16"
      >
        {[
          { label: "Company Overview", path: "#overview" },
          { label: "Vision & Mission", path: "#vision" },
          { label: "Manufacturing Facility", path: "#facility" },
          { label: "Team / Leadership", path: "#team" },
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

      {/* Company Overview Section */}
      <motion.section
        id="overview"
        className="mb-20 scroll-mt-20"
        variants={staggerContainer(0.1, 0.3)}
      >
        <motion.div
          className="flex flex-col md:flex-row gap-8 items-center"
          variants={fadeIn("up", "spring", 0.2, 1)}
        >
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Company Overview
            </h2>
            <div className="space-y-4 text-gray-600">
              <p>
                Founded in 2014, Ishani Enterprises has grown to become a
                trusted name in premium architectural solutions. Specializing in
                French doors and windows, what began as a modest operation has
                blossomed into a thriving business with a reputation for
                craftsmanship and reliability.
              </p>
              <p>
                With our headquarters in Delhi NCR, we've expanded our reach
                across Northern India, serving hundreds of satisfied clients
                including architects, builders, and homeowners. Our journey has
                been marked by steady growth, innovation, and an unwavering
                commitment to excellence.
              </p>
              <p>
                Today, we stand as a leading manufacturer with 50+ employees,
                state-of-the-art manufacturing facilities, and a distribution
                network that ensures timely delivery of our premium products.
              </p>
            </div>
          </div>
          <motion.div className="md:w-1/2" variants={zoomIn(0.4, 1)}>
            <img
              src="https://images.unsplash.com/photo-1600585152220-90363fe7e115?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
              alt="Ishani Enterprises Manufacturing Facility"
              className="rounded-lg shadow-xl w-full h-auto"
            />
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Vision & Mission Section */}
      <motion.section
        id="vision"
        className="mb-20 py-10 bg-gray-50 rounded-xl px-8 scroll-mt-20"
        variants={fadeIn("up", "spring", 0.3, 1)}
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Our Vision & Mission
          </h2>

          <motion.div
            className="grid md:grid-cols-2 gap-8"
            variants={staggerContainer(0.1, 0.2)}
          >
            <motion.div
              className="bg-white p-6 rounded-lg shadow-md"
              variants={fadeIn("right", "spring", 0.2, 1)}
            >
              <div className="text-yellow-500 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Our Vision</h3>
              <p className="text-gray-600">
                To be the most trusted manufacturer of premium French doors and
                windows in India, recognized for our elegant designs, superior
                craftsmanship, and commitment to sustainable manufacturing
                practices.
              </p>
            </motion.div>

            <motion.div
              className="bg-white p-6 rounded-lg shadow-md"
              variants={fadeIn("left", "spring", 0.4, 1)}
            >
              <div className="text-yellow-500 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Our Mission</h3>
              <p className="text-gray-600">
                To redefine architectural elegance through innovative French
                door and window solutions that combine timeless design with
                modern functionality. We commit to using premium materials,
                precision engineering, and sustainable practices to deliver
                exceptional value to our customers.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Manufacturing Facility Section */}
      <motion.section
        id="facility"
        className="mb-20 scroll-mt-20"
        variants={staggerContainer(0.1, 0.3)}
      >
        <motion.h2
          className="text-3xl font-bold text-center text-gray-800 mb-12"
          variants={fadeIn("up", "spring", 0.1, 1)}
        >
          Our Manufacturing Facility
        </motion.h2>

        <motion.div
          className="grid md:grid-cols-2 gap-8 mb-8"
          variants={fadeIn("up", "spring", 0.2, 1)}
        >
          <div>
            <h3 className="text-2xl font-semibold mb-4">
              Precision Craftsmanship
            </h3>
            <p className="text-gray-600 mb-4">
              Spread over 15,000 square feet in our Delhi NCR facility, we
              combine traditional craftsmanship with CNC precision machinery to
              create French doors and windows of exceptional quality.
            </p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start">
                <svg
                  className="h-5 w-5 text-yellow-500 mr-2 mt-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                5 dedicated production lines with capacity of 200+ units/month
              </li>
              <li className="flex items-start">
                <svg
                  className="h-5 w-5 text-yellow-500 mr-2 mt-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                ISO 9001 certified quality management systems
              </li>
              <li className="flex items-start">
                <svg
                  className="h-5 w-5 text-yellow-500 mr-2 mt-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Advanced glass tempering and wood finishing stations
              </li>
              <li className="flex items-start">
                <svg
                  className="h-5 w-5 text-yellow-500 mr-2 mt-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Sustainable manufacturing with 85% material utilization
                efficiency
              </li>
            </ul>
          </div>
          <motion.div
            className="grid grid-cols-2 gap-4"
            variants={staggerContainer(0.1, 0.2)}
          >
            <motion.img
              variants={zoomIn(0.1, 1)}
              src="https://images.unsplash.com/photo-1600566752355-35792bedcfea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
              alt="Woodworking at Ishani Enterprises"
              className="rounded-lg shadow-md h-full object-cover"
            />
            <motion.img
              variants={zoomIn(0.2, 1)}
              src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1558&q=80"
              alt="French door production"
              className="rounded-lg shadow-md h-full object-cover"
            />
            <motion.img
              variants={zoomIn(0.3, 1)}
              src="https://images.unsplash.com/photo-1605152276897-4f618f831968?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
              alt="Quality inspection"
              className="rounded-lg shadow-md h-full object-cover"
            />
            <motion.img
              variants={zoomIn(0.4, 1)}
              src="https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80"
              alt="Finished French doors"
              className="rounded-lg shadow-md h-full object-cover"
            />
          </motion.div>
        </motion.div>

        <motion.div
          className="bg-yellow-50 p-6 rounded-lg border border-yellow-100"
          variants={fadeIn("up", "spring", 0.5, 1)}
        >
          <h3 className="text-xl font-semibold mb-3 text-yellow-800">
            Quality Assurance
          </h3>
          <p className="text-yellow-700">
            Every French door and window undergoes 27 quality checkpoints from
            raw material inspection to final packaging. Our quality assurance
            process includes stress testing, weatherproofing verification, and
            finish durability assessments to ensure products that stand the test
            of time.
          </p>
        </motion.div>
      </motion.section>

      {/* Team/Leadership Section */}
      <motion.section
        id="team"
        className="scroll-mt-20"
        variants={staggerContainer(0.1, 0.3)}
      >
        <motion.h2
          className="text-3xl font-bold text-center text-gray-800 mb-12"
          variants={fadeIn("up", "spring", 0.1, 1)}
        >
          Our Leadership Team
        </motion.h2>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={staggerContainer(0.1, 0.2)}
        >
          {[
            {
              name: "Rajiv Sharma",
              position: "Founder & CEO",
              bio: "With 25+ years in architectural solutions, Rajiv founded Ishani Enterprises to bring European elegance to Indian homes through premium French doors and windows.",
              image:
                "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
            },
            {
              name: "Priya Malhotra",
              position: "Operations Director",
              bio: "Priya oversees our manufacturing excellence, ensuring each French door meets our exacting standards for quality and precision.",
              image:
                "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80",
            },
            {
              name: "Vikram Singh",
              position: "Technical Head",
              bio: "Vikram leads our R&D in innovative French door mechanisms and energy-efficient glazing solutions.",
              image:
                "https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
            },
            {
              name: "Neha Kapoor",
              position: "Design Director",
              bio: "Neha's expertise in French architectural aesthetics ensures our products blend timeless elegance with contemporary functionality.",
              image:
                "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=761&q=80",
            },
          ].map((member, index) => (
            <motion.div
              key={index}
              variants={fadeIn("up", "spring", index * 0.2, 0.75)}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-yellow-600 font-medium mb-3">
                  {member.position}
                </p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-16 bg-gray-50 p-8 rounded-xl"
          variants={fadeIn("up", "spring", 0.5, 1)}
        >
          <h3 className="text-2xl font-semibold text-center mb-6">
            Our Values
          </h3>
          <motion.div
            className="grid md:grid-cols-3 gap-6"
            variants={staggerContainer(0.1, 0.2)}
          >
            {[
              {
                title: "Craftsmanship",
                description:
                  "We honor traditional woodworking techniques while embracing modern precision engineering.",
              },
              {
                title: "Elegance",
                description:
                  "Every French door we create embodies timeless architectural beauty.",
              },
              {
                title: "Precision",
                description:
                  "Millimeter-perfect joinery ensures flawless operation and durability.",
              },
              {
                title: "Sustainability",
                description:
                  "We source FSC-certified woods and use low-VOC finishes for eco-conscious manufacturing.",
              },
              {
                title: "Innovation",
                description:
                  "Continual improvement in hardware and insulation technologies.",
              },
              {
                title: "Client Partnership",
                description:
                  "From architects to homeowners, we collaborate to realize your vision.",
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                variants={fadeIn("up", "spring", index * 0.1, 1)}
                className="bg-white p-5 rounded-lg shadow-sm border border-gray-100"
              >
                <h4 className="font-semibold text-lg mb-2">{value.title}</h4>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.section>
    </motion.div>
  );
};

export default AboutUsPage;
