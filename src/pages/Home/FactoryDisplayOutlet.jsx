import React from "react";
import { MapPin, Calendar, Phone } from "lucide-react";
import { motion } from "framer-motion";

const FactoryDisplayOutlet = () => {
  return (
    <section className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="bg-white rounded-xl shadow-lg overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="grid md:grid-cols-2 gap-8">
            {/* Map Section */}
            <div className="relative h-full min-h-[300px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m12!1m8!1m3!1d7500.623762404022!2d73.837825!3d19.953382!3m2!1i1024!2i768!4f13.1!2m1!1sPrestige%20Bytco%20Bussiness%20Center%20Mahatma%20Gandhi%20Rd%20Rajwada%20Nagar%2C%20Nashik%20Road%20Nashik%2C%20Maharashtra%20422214!5e0!3m2!1sen!2sus!4v1744176631879!5m2!1sen!2sus"
                className="absolute top-0 left-0 w-full h-full"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                aria-hidden="false"
                tabIndex="0"
              />
              <div className="absolute bottom-4 left-4 bg-white px-3 py-2 rounded-lg shadow-md flex items-center gap-2">
                <MapPin className="text-yellow-600 w-5 h-5" />
                <span className="font-medium text-gray-800">
                  Nashik Factory Outlet
                </span>
              </div>
            </div>

            {/* Info Section */}
            <div className="p-8 flex flex-col justify-between">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
                  Visit Our Nashik Display Outlet
                </h2>
                <p className="text-gray-600 mb-6">
                  Experience our premium French doors and windows firsthand at
                  our factory outlet. Our experts will guide you through our
                  complete product range.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="text-yellow-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-800">Location</h4>
                      <p className="text-gray-600">
                        Ishani Enterprises
                        <br />
                        G-8, Prestige Bytco Business Center,
                        <br />
                        Bytco Point, Nasik Road,
                        <br />
                        Nasik - 422101
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-yellow-600 mt-1 flex-shrink-0"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-gray-800">
                        Opening Hours
                      </h4>
                      <p className="text-gray-600">
                        Monday-Saturday: 9:30 AM - 7:30 PM
                        <br />
                        Sunday: 10:00 AM - 4:00 PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 space-y-4">
                <motion.a
                  href="/book-appointment"
                  className="inline-flex items-center justify-center gap-2 bg-yellow-600 hover:bg-yellow-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors w-full sm:w-auto"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Calendar className="w-5 h-5" />
                  Book Appointment
                </motion.a>

                <div className="flex items-center justify-center gap-4">
                  <div className="h-px bg-gray-200 flex-1"></div>
                  <span className="text-gray-400 text-sm">OR</span>
                  <div className="h-px bg-gray-200 flex-1"></div>
                </div>

                <a
                  href="tel:+919422255572"
                  className="flex items-center justify-center gap-2 text-gray-700 hover:text-yellow-600 font-medium transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  Call: +91 9422255572
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FactoryDisplayOutlet;
