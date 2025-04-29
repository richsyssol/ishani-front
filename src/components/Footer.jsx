import React, { useEffect, useState } from "react";
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { IoLocationOutline, IoCallOutline } from "react-icons/io5";
import { motion } from "framer-motion";
import { navlogo } from "../../public/assets";
import axiosInstance from "../services/api";

const Footer = () => {
  const socialIcons = [
    { icon: FaFacebookF, label: "Facebook" },
    { icon: FaTwitter, label: "Twitter" },
    { icon: FaYoutube, label: "YouTube" },
    { icon: FaInstagram, label: "Instagram" },
  ];

  const [contactData, setContactData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get("/contact");
        // console.log(response);
        setContactData(response.data);
      } catch (error) {
        console.error("Error fetching contact information:", error);
        setContactData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="h-[600px] md:h-[700px] flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <motion.div
            className="flex justify-center mb-6"
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 2,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            <div className="w-16 h-16 border-4 border-yellow-500 border-t-transparent rounded-full"></div>
          </motion.div>
          <motion.h2
            className="text-2xl font-semibold text-gray-700"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Loading...
          </motion.h2>
          <motion.p
            className="text-gray-500 mt-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Preparing your experience
          </motion.p>
        </div>
      </div>
    );
  }
  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-gray-100 text-gray-800 pt-16 pb-8 px-6 md:px-16 rounded-t-3xl shadow-inner"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left Section - Contact */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <img
            src={navlogo}
            alt="Ishani Enterprises Logo"
            className="mb-6 w-40"
          />
          <h3 className="text-xl font-semibold mb-3 text-yellow-500 flex items-center gap-2">
            <IoCallOutline size={20} className="text-yellow-500" />
            Contact Us
          </h3>
          <p className="text-sm text-gray-700 mb-4">
            Got something to say? Please drop us a line.
          </p>
          <ul className="text-sm text-gray-700 space-y-3">
            <li className="flex items-start gap-2">
              <IoLocationOutline size={20} className="text-yellow-500 mt-1" />
              <address className="text-gray-600 not-italic ">
                {contactData?.corporate_address_line1 || ""}
                <br />
                {contactData?.corporate_address_line2 || ""}
                <br />
                {contactData?.corporate_address_line3 || ""}
                <br />
                {contactData?.corporate_address_line4 || ""}
                <br />
                {contactData?.corporate_address_line5 || ""}
              </address>
            </li>
            <li className="flex items-center gap-2">
              <MdOutlineEmail size={20} className="text-yellow-500" />
              {contactData?.email || ""}
            </li>
            <li className="flex items-center gap-2">
              <IoCallOutline size={20} className="text-yellow-500" />
              {contactData?.tel_number || ""} |{" "}
              {contactData?.mobile_number || ""}
            </li>
          </ul>
        </motion.div>

        {/* Right Section - Social */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h3 className="text-xl font-semibold mb-4 text-yellow-500">
            Stay Connected
          </h3>
          <ul className="text-sm text-gray-700 space-y-2 mb-6">
            <li>Google: Keep up to date with news & announcements</li>
            <li>Facebook: See our latest portfolio & gallery</li>
            <li>Twitter: Follow us, ask questions & geek out</li>
            <li>YouTube: Watch our videos & success stories</li>
          </ul>
          <div className="flex gap-6 mt-4">
            {socialIcons.map(({ icon: Icon, label }, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 300 }}
                title={label}
                className="cursor-pointer bg-white border border-gray-300 p-3 rounded-full shadow-sm hover:bg-yellow-100 text-gray-600 hover:text-yellow-600"
              >
                <Icon size={20} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-12 text-center text-sm text-gray-600 border-t border-gray-300 pt-4">
        <p>
          © 2016{" "}
          <span className="font-semibold text-gray-800">
            Ishani Enterprises
          </span>
          . All Rights Reserved by{" "}
          <span className="font-bold text-yellow-500">
            Rich System Solution
          </span>
          .{" "}
          <a href="#" className="text-yellow-600 hover:underline">
            Privacy Policy
          </a>{" "}
          |{" "}
          <a href="#" className="text-yellow-600 hover:underline">
            Security Policy
          </a>
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;
